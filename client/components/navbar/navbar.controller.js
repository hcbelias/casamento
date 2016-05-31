'use strict';

class NavbarController {
  constructor() {
    jQuery('ul.tabs').tabs();
    jQuery('.button-collapse').sideNav({ closeOnClick: true });
    this.numberOfRemainingDays = this.daydiff();
  }

  daydiff() {
    let weedingDate = new Date(2016, 7, 13);
    var timeDiff = Math.abs(Date.now() - weedingDate.getTime());
    return Math.ceil(timeDiff/(1000*60*60*24));
  }

}


angular.module('casamentoApp')
  .controller('NavbarController', NavbarController);
