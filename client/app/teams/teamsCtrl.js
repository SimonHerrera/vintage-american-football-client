'use strict';

angular.module('vafApp')
  .controller('TeamsCtrl', function(apiUrl, $http, $routeParams, $anchorScroll) {

    $anchorScroll.yOffset=200

    const teams = this;
    teams.welcome = 'Welcome Vintage Teams';
    teams.intialView = true;
    teams.individualTeamView = false;
    // part of view but do I need seperate managerView here because it's part of the teamView?

    // Get Teams into controller
    $http.get (apiUrl+'/teams/').then(res => {
      console.log("res", res);
      teams.allTeams = res.data
    })


    // Select Team and get manager from that team
    // $http.get (`${apiUrl}/teams/${$routeParams.selectedTeam}/`)
    // .then(res => {
    //   teams.team = res.data;
    //   console.log("res2", res);
    // })


    //when selected run and do this
    teams.selectTeam = team => {
      teams.intialView = false;
      teams.individualTeamView = true;
      teams.team = team;
      // teams.team.player = player;
    }
  });