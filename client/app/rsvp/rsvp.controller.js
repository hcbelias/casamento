'use strict';

(function() {

  class RSVPController {

    $onInit() {

    }

    constructor($scope, $http){
      this.scope = $scope;
      this.http = $http
    }

    submitEmail(contact){
      var ctrlScope = this.scope;
      this.http.post('/api/sendmails', contact).
        then(function(response) {
          ctrlScope.successMessage = 'Sua presença foi confirmada!';
        }, function(response) {
          ctrlScope.errorMessage = 'Sua presença foi confirmada!'
      });

    }

  }

  angular.module('casamentoApp')
    .component('rsvp', {
      templateUrl: 'app/rsvp/rsvp.html',
      controller: RSVPController
    });

})();
