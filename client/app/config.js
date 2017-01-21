'use strict';

angular.module('vafApp')
  .config(['$routeProvider',
  function($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'app/landing/landing.html'
      })
      .when('/players', {
        controller: 'PlayersCtrl',
        controllerAs: 'players',
        templateUrl: 'app/players/players.html'
      })
      .when('/teams', {
        controller: 'TeamsCtrl',
        controllerAs: 'teams',
        templateUrl: 'app/teams/teams.html'
      })
      .when('/merchandise', {
        templateUrl: 'app/merchandise/merchandise.html'
      })
      .when('/organization', {
        templateUrl: 'app/organization/organization.html'
      })
      .when('/schedules', {
        templateUrl: 'app/schedules/schedules.html'
      })
      .when('/about', {
        templateUrl: 'app/about/about.html'
      })
      .otherwise('/')
  }]);
