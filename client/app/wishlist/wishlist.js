'use strict';

angular.module('casamentoApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('wishlist', {
        url: '/',
        template: '<wishlist></wishlist>'
      });
  });
