'use strict';

(function() {

class MainController {

  constructor($window) {
    this.window = $window;
    this.contact = {};
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
