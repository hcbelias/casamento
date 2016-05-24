'use strict';

angular.module('casamentoApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('place', {
        url: '/',
        template: '<place></place>'
      });
  });
