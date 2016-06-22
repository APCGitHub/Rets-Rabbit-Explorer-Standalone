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
            var did_tutorial = $window.localStorage.getItem('finished_tutorial');

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

            if(did_tutorial === 'undefined' || did_tutorial == null || did_tutorial === ''){
                $document.scrollTopAnimated(0, 200).then(function() {
                    $scope.data.tutorial.active = true;
                    $scope.data.tutorial.example_queries = true;
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
            $window.localStorage.setItem('finished_tutorial', true);
        }
    }
})();
