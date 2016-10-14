/**
 * Created by aclinton on 10/11/16.
 */
(function () {
    'use strict';

    angular
        .module('app.controller.home', [])
        .controller('HomeCtrl', Controller);

    Controller.$inject = ['$scope'];

    function Controller($scope) {
        var vm = this;

        init();

        function init() {
            vm.data = {

            }
        }
    }
})();
