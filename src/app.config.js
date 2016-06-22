(function() {
    'use strict';
    angular
        .module('app.config', [])
        .config(Config);

    Config.$inject = ["$stateProvider", "$urlRouterProvider", "ApiConfigProvider"];

    function Config($stateProvider, $urlRouterProvider, ApiProvider) {
        ApiProvider.setBaseUrl("https://stage.retsrabbit.com/");
        ApiProvider.setClientId("retsrabbit");
        ApiProvider.setClientSecret("retsrabbit");

        $stateProvider
            .state('app', {
                url: '',
                controller: 'BaseCtrl as Base',
                templateUrl: 'templates/base.html',
                abstract: true
            })
            .state('app.explorer', {
            	url: '/explorer',
            	controller: 'ExplorerCtrl as Explorer',
            	templateUrl: 'templates/home.html'
            });

        $urlRouterProvider.otherwise('/explorer');
    }
})();
