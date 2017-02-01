'use strict';

angular.module('vafApp')
  .controller('PlayersCtrl', function(apiUrl, $http, $routeParams, $anchorScroll) {

    $anchorScroll.yOffset=500

    const players = this
    players.welcome = 'Vintage Football Players'
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
      $anchorScroll('scroll-bottom')
    }
  });
