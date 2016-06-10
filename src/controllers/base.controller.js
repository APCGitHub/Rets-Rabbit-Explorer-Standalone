(function() {
    'use strict';
    angular
        .module('app.controller.base', [])
        .controller('BaseCtrl', Controller);

    Controller.$inject = ['$scope', '$window', 'Config', 'RRAuthFactory'];

    function Controller($scope, $window, Config, AuthFactory) {
    	var vm = this;

        $scope.siteName = Config.siteName;

    	init();

    	function init () {
            var token = $window.localStorage.getItem('token');
            console.log('Init the base controller.');
    		vm.data = {};

            if(token === 'undefined' || token == null || token === ''){
                AuthFactory.getToken().then(function (res){
                    console.log(res);
                }, function (err){
                    console.log(err);
                });
            }
    	}
    }
})();
