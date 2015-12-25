(function () {
    'use strict';
    angular
        .module('blizFrontendApp')
        .controller('mainCtrl', mainCtrl);

    mainCtrl.$inject = ['$scope'];


    function mainCtrl($scope){
        $scope.init = init;

        function init(){

        }
    }
})();
