(function() {
    'use strict';
    angular
        .module('app.controller.explore.v2', [])
        .controller('ExploreV2Ctrl', Controller);

    Controller.$inject = ['$scope', 'MetadataFactory', 'QueryFactory', 'RRAuthFactory', 'KeyStorageService'];

    function Controller($scope, MetadataFactory, QueryFactory, AuthFactory, KeyStorageService) {
    	var vm = this;

    	init();

    	function init () {
    		vm.data = {
                tutoral: {
                    hidden: true
                },
                metadata: {
                    search: '',
                    hidden: true,
                    fields: MetadataFactory.fields()
                },
                query_info: {
                    hidden: true
                },
                queriesCollapsed: false,
                queries: QueryFactory.queries(),
                fillQuery: null
            };

            var token = KeyStorageService.v2.getToken();

            if(token === 'undefined' || token == null || token === ''){
                AuthFactory.getTokenV2().then(function (res){
                    console.log(res);
                }, function (err){
                    console.log(err);
                });
            }


            vm.toggleMeta = _toggleMeta;
            vm.filterMeta = _filterMeta;
            vm.fillQuery = _fillQuery;
            vm.toggleQueryInfo = _toggleQueryInfo;
    	}

        /* --- FUNCTIONS --- */
        function _filterMeta() {
            if(vm.data.metadata.search === '') {
                vm.data.metadata.fields = MetadataFactory.fields();
                return;
            }

            vm.data.metadata.fields = MetadataFactory.fields().filter(function (field){
                if(field.name.toLowerCase().indexOf(vm.data.metadata.search.toLowerCase()) != -1)
                    return field;

                if(field.type.toLowerCase().indexOf(vm.data.metadata.search.toLowerCase()) != -1)
                    return field;
            });
        }

        function _toggleMeta() {
            if(vm.data.query_info.hidden == true && vm.data.metadata.hidden == true){
                vm.data.query_info.hidden = false;
            }

            vm.data.metadata.hidden = !vm.data.metadata.hidden;
            //do other stuff if necessary
        }

        function _fillQuery(query){
            vm.data.fillQuery = query;
        }

        function _toggleQueryInfo() {
            vm.data.query_info.hidden = !vm.data.query_info.hidden;
            //do other stuff if necessary
        }
    }
})();
