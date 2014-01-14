
/**
 * Module dependencies.
 */

var config = require('yaml-config');
var settings = config.readConfig('./server/config.yaml');
var everyauth = require('everyauth');
var express   = require('express');
var path      = require('path');
var api       = require('./lib/api');
var app       = module.exports = express();

console.log(settings);
// Google Authenication
everyauth.google
  .appId(settings.google.appId)
  .appSecret(settings.google.appSecret)
  .handleAuthCallbackError( function (req, res) {
    // If a user denies your app, Google will redirect the user to
    // /auth/facebook/callback?error=access_denied
    // This configurable route handler defines how you want to respond to
    // that.
    // If you do not configure this, everyauth renders a default fallback
    // view notifying the user that their authentication failed and why.
  })
  .findOrCreateUser( function (session, accessToken, accessTokenExtra, googleUserMetadata) {
    // find or create user logic goes here
    // Return a user or Promise that promises a user
    // Promises are created via
    //     var promise = this.Promise();
    return this.Promise();
  })
  .redirectPath('/');

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser(settings.unique));
app.use(express.cookieSession());
app.use(express.compress());
app.use(everyauth.middleware(app));
app.use(api);
app.use(express.static(path.join(__dirname, '../build')));
app.use(app.router);

if ('development' === app.get('env')) {
  app.use(express.errorHandler());
}
