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

        ApiProvider.v1.setBaseUrl('https://stage.retsrabbit.com/');
        ApiProvider.v1.setClientId('retsrabbit');
        ApiProvider.v1.setClientSecret('retsrabbit');
        ApiProvider.v1.setStorageKey('access_token_v1');

        ApiProvider.v1.setBaseUrl('https://stage.retsrabbit.com/');
        ApiProvider.v1.setClientId('retsrabbit');
        ApiProvider.v1.setClientSecret('retsrabbit');
        ApiProvider.v1.setStorageKey('access_token_v2');

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
                templateUrl: 'templates/landing.html',
                data: {
                    title: 'Welcome'
                }
            })
            .state('app.explorer-v1', {
                url: '/explore/v1',
                controller: 'ExploreV1Ctrl as ExplorerV1',
                templateUrl: 'templates/v1.html',
                data: {
                    title: 'V1 | Explorer'
                }
            })
            .state('app.explorer-v2', {
            	url: '/explore/v2',
            	controller: 'ExploreV2Ctrl as Explorer',
            	templateUrl: 'templates/v2.html',
                data: {
                    title: 'V2 | Explorer'
                }
            });

        $urlRouterProvider.otherwise('/explore');
    }
})();
