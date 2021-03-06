var app = require('./app');
var db  = require('./models');

db
  .sequelize
  .sync({ force: true })
  .complete(function(err) {
    if (err) {
      throw err;
    } else {
      app.listen(app.get('port'), function() {
        console.log("Express server listening on port " + app.get('port'));
      });
    }
  });
