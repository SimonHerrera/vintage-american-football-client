'use strict';

angular.module('vafApp')
  .controller('TeamsCtrl', function(apiUrl, $http, $routeParams, $anchorScroll) {

    $anchorScroll.yOffset=500

    const teams = this;
    teams.welcome = 'Vintage Football Teams';
    teams.initialView = true;
    teams.individualTeamView = false;

    $http.get (apiUrl+'/teams/').then(res => {
      console.log("res", res);
      teams.allTeams = res.data
    })

    teams.selectTeam = team => {
      teams.initialView = false;
      teams.individualTeamView = true;
      teams.team = team;
      $anchorScroll('scroll-bottom')
    }
  });
