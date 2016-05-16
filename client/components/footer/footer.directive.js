'use strict';

angular.module('casamentoApp')
  .directive('footer', function() {
    function daydiff() {
      let weedingDate = new Date(2016, 7, 13);
      var timeDiff = Math.abs(Date.now() - weedingDate.getTime());
      return Math.ceil(timeDiff/(1000*60*60*24));
    }

    return {
      templateUrl: 'components/footer/footer.html',
      restrict: 'E',
      link: function(scope, element) {
        element.addClass('footer');
        scope.numberOfRemainingDays = daydiff();
      }
    };
  });
