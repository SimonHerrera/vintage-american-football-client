'use strict';

angular.module('vafApp')
  .controller('TeamsCtrl', function(apiUrl, $http, $routeParams, $anchorScroll) {

    $anchorScroll.yOffset=200

    const teams = this;
    teams.welcome = 'Welcome Vintage Teams';
    teams.intialView = true;
    teams.individualTeamView = false;
    // part of view but do I need seperate managerView here because it's part of the teamView?
    teams.managerView = false;

    // Get Teams into controller
    $http.get (apiUrl+'/teams/').then(res => {
      console.log("res", res);
      teams.allTeams = res.data
    })

    // Select Team and get manager from that team
    $http.get (`${apiUrl}/teams/${$routeParams.selectedTeam}/`)
    .then(res => {
      console.log("res2", res);
    })
    //   teams.team = res.data;
    // }).then(() =>
    //   $http.get (apiUrl+'/managers/').then(res => {
    //     team.allManagers = res.data
    //   })
    // )

    teams.selectTeam = team => {
      teams.intialView = false;
      teams.individualTeamView = true;
      teams.managerView = true;
      teams.team = team;
    }
  });