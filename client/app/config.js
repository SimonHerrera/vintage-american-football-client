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
      .otherwise('/')
  }]);