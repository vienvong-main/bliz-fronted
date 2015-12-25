(function () {
  'use strict';
  angular
      .module('blizFrontendApp')
      .controller('contactCtrl', contactCtrl);

  contactCtrl.$inject = ['$scope'];


  function contactCtrl($scope){
    $scope.init = init;

    function init(){

    }
  }
})();
