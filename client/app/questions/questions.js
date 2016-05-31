'use strict';

angular.module('casamentoApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('questions', {
        url: '/',
        template: '<questions></questions>'
      });
  });
