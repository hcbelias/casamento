'use strict';

(function() {

class MainController {

  constructor($window) {
    this.window = $window;
  }

  $onInit() {
  }


}

angular.module('casamentoApp')
  .component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController
  });

})();
