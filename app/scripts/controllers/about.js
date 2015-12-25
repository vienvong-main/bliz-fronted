(function () {
    'use strict';
    angular
        .module('blizFrontendApp')
        .controller('aboutCtrl', aboutCtrl);

    aboutCtrl.$inject = ['$scope'];


    function aboutCtrl($scope){
        $scope.init = init;

        function init(){

        }
    }
})();
