'use strict';

angular.module('vafApp')
  .controller('TeamsCtrl', function(apiUrl, $http, $routeParams, $anchorScroll) {

    $anchorScroll.yOffset=200

    const teams = this;
    teams.welcome = 'Vintage Football Teams';
    teams.intialView = true;
    teams.intialFiller = true;
    teams.individualTeamView = false;
    // part of view but do I need seperate managerView here because it's part of the teamView?

    // Get Teams into controller
    $http.get (apiUrl+'/teams/').then(res => {
      console.log("res", res);
      teams.allTeams = res.data
    })

    //when selected run and do this
    teams.selectTeam = team => {
      teams.intialView = false;
      teams.intialFiller = false;
      teams.individualTeamView = true;
      teams.team = team;
      // teams.team.player = player;
    }
  });