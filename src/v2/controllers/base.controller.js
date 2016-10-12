(function() {
    'use strict';
    angular
        .module('app.controller.base', [])
        .controller('BaseCtrl', Controller);

    Controller.$inject = ['$scope', '$window'];

    function Controller($scope, $window) {
    	var vm = this;

    	init();

    	function init () {
            vm.data = {};
    	}
    }
})();
