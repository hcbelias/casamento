'use strict';

(function() {

class WishlistController {

  openLink(link){
    window.open(link, '_blank');
  }


}

angular.module('casamentoApp')
  .component('wishlist', {
    templateUrl: 'app/wishlist/wishlist.html',
    controller: WishlistController
  });

})();
