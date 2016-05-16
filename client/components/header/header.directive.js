'use strict';


angular.module('casamentoApp')
  .directive('header', function () {
    function daydiff() {
      let weedingDate = new Date(2016, 7, 13);
      var timeDiff = Math.abs(Date.now() - weedingDate.getTime());
      return Math.ceil(timeDiff/(1000*60*60*24));
    }

    return {
      templateUrl: 'components/header/header.html',
      restrict: 'EA',
      link: function (scope) {
        scope.numberOfRemainingDays = daydiff();
      }
    };
  });
