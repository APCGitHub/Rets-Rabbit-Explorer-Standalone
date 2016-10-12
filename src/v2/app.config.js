(function() {
    'use strict';
    angular
        .module('app.config', [])
        .config(Config);

    Config.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider", "ApiConfigProvider"];

    function Config($stateProvider, $urlRouterProvider, $locationProvider, ApiProvider) {
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
            .state('app.home', {
                url: '/explore',
                controller: 'HomeCtrl as Home',
                templateUrl: 'templates/landing.html'
            })
            .state('app.explorer-v1', {
                url: '/explore/v1',
                controller: 'ExploreV1Ctrl as ExplorerV1',
                templateUrl: 'templates/v1.html'
            })
            .state('app.explorer-v2', {
            	url: '/explore/v2',
            	controller: 'ExploreV2Ctrl as Explorer',
            	templateUrl: 'templates/v2.html'
            });

        $urlRouterProvider.otherwise('/explore');
    }
})();
