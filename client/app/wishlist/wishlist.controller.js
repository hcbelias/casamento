'use strict';

(function() {

class WishlistController {

  constructor() {
    this.rsvp = true;
  }


}

angular.module('casamentoApp')
  .component('wishlist', {
    templateUrl: 'app/wishlist/wishlist.html',
    controller: WishlistController
  });

})();
