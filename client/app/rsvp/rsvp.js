'use strict';

angular.module('casamentoApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('rsvp', {
        url: '/',
        template: '<rsvp></rsvp>'
      });
  });
