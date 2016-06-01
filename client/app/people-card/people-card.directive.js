'use strict';

angular.module('casamentoApp')
  .directive('peopleCard', function () {
    return {
      templateUrl: 'app/people-card/people-card.html',
      restrict: 'E',
      scope:{
        name: '@',
        link: '@',
      }
    };
  });
