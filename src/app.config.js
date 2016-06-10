(function() {
    'use strict';
    angular
        .module('app.config', [])
        .config(Config);

    Config.$inject = ["$stateProvider", "$urlRouterProvider", "ApiConfigProvider"];

    function Config($stateProvider, $urlRouterProvider, ApiProvider) {
        ApiProvider.setBaseUrl("https://stage.retsrabbit.com/");
        ApiProvider.setClientId("KVucYNZm9pMWRgsPhD1u5pXV0N6CgLpRHeHPBpZq");
        ApiProvider.setClientSecret("22TiP0Ffs7UAQHfZrvynlgRLRhSFeazDmHvFruoW");

        $stateProvider
            .state('app', {
                url: '',
                controller: 'BaseCtrl as Base',
                template: '<div ui-view></div>',
                abstract: true
            })
            .state('app.home', {
            	url: '/home',
            	controller: 'HomeCtrl as Home',
            	templateUrl: 'templates/home.html'
            });

        $urlRouterProvider.otherwise('/home');
    }
})();
