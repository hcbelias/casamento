'use strict';

(function() {

class RSVPController {

  constructor() {
    this.rsvp = true;
  }


}

angular.module('casamentoApp')
  .component('rsvp', {
    templateUrl: 'app/rsvp/rsvp.html',
    controller: RSVPController
  });

})();
