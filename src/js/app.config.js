(function() {
    'use strict';
    angular
        .module('app.config', [])
        .config(Config);

    Config.$inject = ["$stateProvider", "$urlRouterProvider", "ApiConfigProvider", "uiGmapGoogleMapApiProvider"];

    function Config($stateProvider, $urlRouterProvider, ApiProvider, uiGmapGoogleMapApiProvider) {
        // ApiProvider.setBaseUrl("https://stage.retsrabbit.com/");
        // ApiProvider.setClientId("retsrabbit");
        // ApiProvider.setClientSecret("retsrabbit");

        ApiProvider.setBaseUrl('http://retsrabbit.app/');
        ApiProvider.setClientId('E1bi6hyy7nLxjlicqE2cDhyUykmA11KPoK9cSbr');
        ApiProvider.setClientSecret('x8EZaK74sYmkQLOk4CJBhwLJP0McajzKro6RY6j');

        uiGmapGoogleMapApiProvider.configure({
            key: 'AIzaSyBzsdkBN_oP1rS262mZzEJiJRPrmfQ52LE',
            v: '3.23', //defaults to latest 3.X anyhow
            libraries: 'weather,geometry,visualization,drawing'
        });

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
