angular
  .module('app')
  .controller('homeController', [
    '$rootScope',
    '$scope',
    '$timeout',
    'apiService',
    'randomService'
    ($rootScope, $scope, $timeout, api, random) ->
      api.server.then (response) ->
        $rootScope.version = response.data.version

      $scope.client = api.client
      $scope.server = api.server
      #$scope.random = random

      console.log $timeout
      repeat = =>
        console.log "lol"
        $scope.random = random
        $timeout(repeat, 1000)
      repeat()

  ])
