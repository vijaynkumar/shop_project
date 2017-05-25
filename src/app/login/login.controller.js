(function() {
  'use strict';

  angular
    .module('shopnow')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($timeout, toastr , $uibModal,$log,NgMap,$state) {
    var vm = this;

    vm.showRegistrationPopup = function() {
    var saveViewModalInstance = $uibModal.open({
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'app/login/registration.popup.html',
        controller: 'RegistrationPopupController',
        controllerAs: 'registration',
        backdrop: 'static',
        size : '40%',
        resolve: {
          items: function () {
            return vm.items;
          }
        }
      });

   saveViewModalInstance.result.then(function (selec4edItem) {
        // $ctrl.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
  }

   vm.cancel = function() {
      $uibModalInstance.dismiss('cancel');
    }
   vm.doLogin = function(){
     $state.go('home')
   }

  }
})();
