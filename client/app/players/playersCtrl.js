'use strict';

angular.module('vafApp')
  .controller('PlayersCtrl', function(apiUrl, $http, $routeParams, $anchorScroll) {

    const players = this
    players.welcome = 'Welcome Vintage Players'
    players.intialView = true;
    players.individualPlayerView = false

    $http.get (apiUrl+'/players/').then(res => {
      console.log("res", res);
      players.vafPlayers = res.data
    })

    //when run do this
    players.selectPlayer = player => {
      players.intialView = false;
      players.individualPlayerView = true;
      players.player = player
    }
  });