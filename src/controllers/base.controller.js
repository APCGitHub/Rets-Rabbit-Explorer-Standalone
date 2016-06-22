(function() {
    'use strict';
    angular
        .module('app.controller.base', [])
        .controller('BaseCtrl', Controller);

    Controller.$inject = ['$scope', '$window', '$document', 'Config', 'RRAuthFactory'];

    function Controller($scope, $window, $document, Config, AuthFactory) {
    	var vm = this;

    	init();

    	function init () {
            var token = $window.localStorage.getItem('token');

    		$scope.data = {
                tutorial: {
                    active: false,
                    example_queries: false,
                    fields: false,
                    query_info: false
                }
            };
            vm.data = {};

            if(token === 'undefined' || token == null || token === ''){
                AuthFactory.getToken().then(function (res){
                    console.log(res);
                }, function (err){
                    console.log(err);
                });
            }

            vm.showFieldsTutorial = _showFieldsTutorial;
            vm.showQueryInfoTutorial = _showQueryInfoTutorial;
            vm.finishedTutorial = _finishedTutorial;
    	}

        function _showFieldsTutorial() {
            $scope.data.tutorial.fields = true;
        }

        function _showQueryInfoTutorial() {
            $scope.data.tutorial.query_info = true;
        }

        function _finishedTutorial() {
            $scope.data.tutorial.active = false;
        }
    }
})();
