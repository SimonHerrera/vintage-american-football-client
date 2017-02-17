'use strict';

angular.module('vafApp')
  .controller('PlayersCtrl', function($scope, apiUrl, $http, $routeParams, $anchorScroll) {

    $anchorScroll.yOffset=500

    $scope.clearFilter = function() {
      $scope.userSearch = ""
    }

    const players = this
    players.welcome = 'Vintage Football Players'
    players.initialView = true;
    players.individualPlayerView = false

    // Get Players into controller
    $http.get (apiUrl+'/players/').then(res => {
      console.log("res", res);
      players.vafPlayers = res.data
    })

    //When event happens - run these
    players.selectPlayer = player => {
      players.initialView = false;
      players.individualPlayerView = true;
      players.player = player
      $anchorScroll('scroll-bottom')
    }
  });
