'use strict';

angular.module('casamentoApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('people', {
        url: '/',
        template: '<people></people>'
      });
  });
