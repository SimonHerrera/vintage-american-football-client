'use strict';

angular.module('vafApp')
  .controller('SchedulesCtrl', function(apiUrl, $http, $routeParams, $anchorScroll) {

    const schedules = this
    schedules.welcome = 'Vintage Football Schedule'
    schedules.intialView = true;
    schedules.individualScheduleView = false

    $http.get (apiUrl+'/games/').then(res => {
      console.log("res", res);
      schedules.vafSchedules = res.data
    })

    schedules.selectSchedule = schedule => {
      schedules.intialView = false;
      schedules.individualScheduleView = true;
      schedules.schedule = schedule
    }
  });