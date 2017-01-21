'use strict';

angular.module('vafApp')
  .controller('SchedulesCtrl', function(apiUrl, $http, $routeParams, $anchorScroll) {

    const schedules = this
    schedules.welcome = 'Welcome Vintage Schedules'
    schedules.intialView = true;
    schedules.individualScheduleView = false

    $http.get (apiUrl+'/schedules/').then(res => {
      console.log("res", res);
      schedules.vafSchedules = res.data
    })

    schedules.selectSchedule = player => {
      schedules.intialView = false;
      schedules.individualScheduleView = true;
      schedules.schedule = schedule
    }
  });