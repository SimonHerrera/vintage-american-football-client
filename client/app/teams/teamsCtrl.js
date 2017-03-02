'use strict';

angular.module('vafApp')
  .controller('TeamsCtrl', function($scope, apiUrl, $http, $routeParams, $anchorScroll) {

    $anchorScroll.yOffset=500

    $scope.clearFilter = function() {
      $scope.teamSearch = ""
    }

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
