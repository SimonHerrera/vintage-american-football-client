'use strict';

angular.module('vafApp')
  .controller('SchedulesCtrl', function(apiUrl, $http, $routeParams, $anchorScroll) {

    $anchorScroll.yOffset=500

    const schedules = this
    schedules.welcome = 'Vintage Football Schedule'
    schedules.initialView = true;
    schedules.individualScheduleView = false

    $http.get (apiUrl+'/games/').then(res => {
      console.log("res", res);
      schedules.vafSchedules = res.data
    })

    schedules.selectSchedule = schedule => {
      schedules.initialView = false;
      schedules.individualScheduleView = true;
      schedules.schedule = schedule;
      $anchorScroll('scroll-bottom')
    }
  });
