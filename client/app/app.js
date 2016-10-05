'use strict';

angular.module('vafApp', ['ngRoute'])
  .constant('apiUrl', "http://localhost:8000")
  // .constant('apiUrl', "http://104.236.6.142:8000") // something similar for server

  .config($httpProvider => {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken'; // adds header
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
  });


var htmlLinks = document.getElementById('nav-links');
htmlLinks.innerHTML =
  "<nav class='menu'><ul><li><a href='/#/'>Home</a></li>" +
  "<li><a href='/#/teams'>Teams</a></li>" +
  "<li><a href='/#/players'>Players</a></li>" +
  "<li><a href='/#/schedule'>Schedule</a></li>" +
  "<li><a href='/#/organization'>Organization</a></li>" +
  "<li><a href='/#/merchandise'>Merchandise</a></li>" +
  "<li><a href='/#/play-vintage'>Play Vintage</a></li>" +
  "<li><a href='/#/about'>About</a></li></ul></nav>";