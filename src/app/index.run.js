(function() {
  'use strict';

  angular
    .module('shopnow')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
