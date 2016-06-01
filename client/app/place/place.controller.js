'use strict';

(function() {

class PlaceController {

  openLink(link){
    window.open(link, '_blank');
  }



}

angular.module('casamentoApp')
  .component('place', {
    templateUrl: 'app/place/place.html',
    controller: PlaceController
  });

})();
