'use strict';

angular.module('vafApp', ['ngRoute'])
  .constant('apiUrl', "http://localhost:8000")
  // .constant('apiUrl', "http://104.236.6.142:8000") // something similar for server

  .config($httpProvider => {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken'; // adds header
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
  });


var htmlLinks = document.getElementById('main-header');
htmlLinks.innerHTML =
  "<nav><ul><li><a href='/#/'>Home</a></li>" +
  "<li><a href='vintage-games.html'>Vintage Games</a></li>" +
  "<li><a href='organization.html'>Orgainization</a></li>" +
  "<li><a href='/#/players'>players</a></li>" +
  "<li><a href='vintage-mechandise.html'>Merchandise</a></li>" +
  "<li><a href='about.html'>Mission</a></li></ul></nav>";