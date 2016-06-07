'use strict';

(function() {

  class RSVPController {

    $onInit() {

    }

    constructor($scope, $http){
      this.scope = $scope;
      this.http = $http;
    }

    submitEmail(contact){
      var ctrlScope = this.scope;
      this.http.post('/api/sendmails', contact).
        then(function() {
          debugger;
          ctrlScope.successMessage = contact.attend ? 'Sua presença foi confirmada!' :  'Você não confirmou sua presença.' ;
        }, function() {
          ctrlScope.errorMessage = 'Ocorreu um erro ao confirmar sua presença. Favor entrar em contato pelo telefone: (31) 99204 2341';
      });
    }

  }

  angular.module('casamentoApp')
    .component('rsvp', {
      templateUrl: 'app/rsvp/rsvp.html',
      controller: RSVPController
    });

})();
