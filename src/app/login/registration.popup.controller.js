(function() {
  'use strict';

  angular
    .module('shopnow')
    .controller('RegistrationPopupController', RegistrationPopupController);

  /** @ngInject */
  function RegistrationPopupController($timeout, toastr,$uibModalInstance) {
    var vm = this;
    vm.isUser = false;
    vm.isShop = false;
    vm.cancel = function() {
    	$uibModalInstance.dismiss('cancel');
    }
    vm.showUserRegistrationForm = function()
    {
      vm.isShop = false;	
      vm.isUser = true;

    }
    vm.showShopRegistrationForm = function()
    {
      vm.isUser = false;
      vm.isShop = true;
    }
  }
})();
