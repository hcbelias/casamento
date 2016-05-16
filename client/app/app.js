'use strict';

angular.module('casamentoApp', ['casamentoApp.constants', 'ngCookies', 'ngResource', 'ngSanitize',
    'ui.router', 'ui.materialize'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
