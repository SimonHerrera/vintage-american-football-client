'use strict';

angular.module('vafApp')
  .controller('TeamsCtrl', function(apiUrl, $http, $routeParams, $anchorScroll) {

    const teams = this
    teams.welcome = 'Welcome Vintage Teams'
    teams.intialView = true;
    teams.individualTeamView = false

    $http.get (apiUrl+'/teams/').then(res => {
      console.log("res", res);
      teams.vafTeams = res.data
    })

    teams.selectTeam = team => {
      teams.intialView = false;
      teams.individualTeamView = true;
      teams.team = team
    }
  });