'use strict';

angular.module('vafApp')
  .controller('TeamsCtrl', function(apiUrl, $http, $routeParams, $anchorScroll) {

    const teams = this
    teams.welcome = 'Welcome Vintage Teams'
    teams.intialView = true;
    teams.individualTeamView = false
    teams.managerView = false

    $http.get (apiUrl+'/teams/').then(res => {
      console.log("res", res);
      teams.vafTeams = res.data
    })

    //Select Year and get games and specific game - get players for that year
    // $http.get (`${apiUrl}/teams/${$routeParams.selectedTeam}/`)
    // .then(res => {
    //   console.log("res2", res);
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
      teams.team = team
    }
  });