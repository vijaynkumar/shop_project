(function() {
  'use strict';

  angular
    .module('shopnow')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController($timeout, toastr , $uibModal,$log,NgMap,$state,$scope,Upload) {
    var vm = this;
    vm.isExpand = false;
    vm.isNotificationOpen = false;
 vm.openNotification = function() {
  vm.isNotificationOpen = true;
}

vm.closeNotification = function() {
  vm.isNotificationOpen = false;
}
vm.expandNav = function() {
    vm.isExpand = true;
}

vm.collapseNav = function() {
    vm.isExpand = false;
}
$scope.setFile = function(element) {
  vm.currentFile = element.files[0];
   var reader = new FileReader();

  reader.onload = function(event) {
    vm.image_source = event.target.result;
    $scope.$apply();
  }
  // when the file is read it triggers the onload event above.
  reader.readAsDataURL(element.files[0]);
}
  NgMap.getMap().then(function(map) {
    console.log(map.getCenter());
    console.log('markers', map.markers);
    console.log('shapes', map.shapes);
  });
   vm.mapUrl = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCMXoYTdqBBi1yKhqLmJYftzYYahM7iY1s";
  }
})();
