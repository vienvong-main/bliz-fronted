(function () {
    'use strict';
    angular
        .module('blizFrontendApp')
        .controller('contactCtrl', contactCtrl);

    contactCtrl.$inject = ['$scope', 'constants'];


    function contactCtrl($scope, constants){
        $scope.init = init;

        function init(){
            console.log(constants);
        }
    }
})();
