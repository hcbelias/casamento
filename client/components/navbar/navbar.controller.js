'use strict';

class NavbarController {
  constructor() {
    jQuery('ul.tabs').tabs();
  }
}


angular.module('casamentoApp')
  .controller('NavbarController', NavbarController);
