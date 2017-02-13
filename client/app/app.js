'use strict';

angular.module('vafApp', ['ngRoute'])
  .constant('apiUrl', "http://localhost:8000")
  // .constant('apiUrl', "http://104.236.6.142:8001") // something similar for server

  .config($httpProvider => {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken'; // adds header
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
  });


var htmlLinks = document.getElementById('nav-links');
htmlLinks.innerHTML =
  '<nav class="navbar navbar-inverse navbar-fixed-top">' +
    '<div class="container">' +
      '<div class="navbar-header">' +
        '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">' +
          '<span class="sr-only">Toggle navigation</span>' +
          '<span class="icon-bar"></span>' +
          '<span class="icon-bar"></span>' +
          '<span class="icon-bar"></span>' +
        '</button>'+
        '<a class="navbar-brand" href="../index.html">V A F</a>' +
      '</div>' +
      '<div id="navbar" class="collapse navbar-collapse">' +
        '<ul class="nav navbar-nav">' +
    // "<li><a href='/#/'>Home</a></li>" +
"<li><a href='/#/teams'>Teams</a></li>" +
  "<li><a href='/#/players'>Players</a></li>" +
  "<li><a href='/#/schedules'>Schedules</a></li>" +
  "<li><a href='/#/organization'>Organization</a></li>" +
  "<li><a href='/#/merchandise'>Merchandise</a></li>" +
  "<li><a href='/#/about'>About</a></li></ul>" +
  "</div>" +
  "</div>" +
  "</nav>";

// Code found that will ensure that the nav menu collapses
$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});
// var htmlLinks = document.getElementById('nav-links');
// htmlLinks.innerHTML =
//   '<nav class="navbar navbar-inverse navbar-fixed-top">' +
//     '<div class="container">' +
//       '<div class="navbar-header">' +
//         '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">' +
//           '<span class="sr-only">Toggle navigation</span>' +
//           '<span class="icon-bar"></span>' +
//           '<span class="icon-bar"></span>' +
//           '<span class="icon-bar"></span>' +
//         '</button>' +
//         '<a class="navbar-brand" href="../index.html">Vintage American Football</a>' +
//       '</div>' +
//       '<div id="navbar" class="collapse navbar-collapse">' +
//         '<ul class="nav navbar-nav">' +
//           '<li><a href="/#/">Home</a></li>' +
//           '<li><a href="/#/teams">Teams</a></li>' +
//           '<li><a href="/#/players">Players</a></li>' +
//           '<li><a href="/#/schedules">Scheduels</a></li>' +
//           '<li><a href="/#/organization">Organization</a></li>' +
//           '<li><a href="/#/merchandise">Merchandise</a></li>' +
//           '<li><a href="/#/about">About</a></li>' +
//         '</ul>' +
//       '</div>' +
//     '</div>' +
//   '</nav>';
