/**
 * Created by aclinton on 10/11/16.
 */
(function () {
    'use strict';

    angular
        .module('app.controller.explore.v1', [])
        .controller('ExploreV1Ctrl', Controller);

    Controller.$inject = ['$scope', '$timeout', '$document', 'V1QueryFactory', 'ngToast', 'V1ModifiersFactory', 'FieldService', 'MetadataService', 'PropertyFactoryV1', 'KeyStorageService', 'RRAuthFactory'];

    function Controller($scope, $timeout, $document, V1QueryFactory, ngToast, V1ModifiersFactory, FieldService, MetadataService, PropertyFactoryV1, KeyStorageService, RRAuthFactory) {
        var vm = this;

        init();

        $(document).ready(function () {
            //boot up the spinner
            $('.loader-inner').loaders();
        });

        function init () {
            //set render level to 3
            renderjson.set_show_to_level(3);

            vm.data = {
                queriesCollapsed: false,
                api: {
                    url: 'http://retsrabbit.app/api/'
                },
                metadata: {
                    search: null,
                    fields: [],
                    hidden: true
                },
                info: {
                    hidden: true
                },
                server: {
                    hash: '',
                    fetching: false
                },
                auth: {
                    token: null,
                    authenticating: false
                },
                query: {
                    time_elapsed: null,
                    string: '',
                    fetching: false,
                    params: [],
                    modifiers: V1ModifiersFactory.all(),
                    results: null,
                    total_records: null,
                    sort_orders: [
                        {
                            name: 'Asc',
                            value: 'asc'
                        },
                        {
                            name: 'Desc',
                            value: 'desc'
                        }
                    ],
                    sort_options: [
                        {
                            name: 'Alpha',
                            key: 'string',
                            value: 'alpha'
                        },
                        {
                            name: 'Numeric',
                            key: 'number',
                            value: 'numeric'
                        },
                        {
                            name: 'Date',
                            key: 'date',
                            value: 'date'
                        }
                    ]
                },
                queries: V1QueryFactory.all(),
                queryUrl: ''
            };

            vm.limit = '';
            vm.offset = '';
            vm.orderby = '';
            vm.sort_order = '';
            vm.sort_option = '';
            vm.num_photos = '';

            vm.sort_option = vm.data.query.sort_options[0].value;
            vm.sort_order = vm.data.query.sort_orders[0].value;

            $scope.params = vm.data.query.params;

            //have to do this for some reason to get them to show initially
            $timeout(function () {
                vm.data.metadata.search = '';
            }, 100);

            //this is how we can emulate vue computed props...super ugly -.-
            $scope.$watch('params', function (oldv, newv){
                if(oldv != newv){
                    var s = _queryString();
                    _queryUrl(s);
                }
            }, true);

            $scope.$watch(function () {
                return vm.limit;
            }, function (cur, orig) {
                if(cur != orig){
                    var s = _queryString();
                    _queryUrl(s);
                }
            });

            $scope.$watch(function () {
                return vm.num_photos;
            }, function (cur, orig) {
                if(cur != orig){
                    var s = _queryString();
                    _queryUrl(s);
                }
            });

            $scope.$watch(function () {
                return vm.offset;
            }, function (cur, orig) {
                if(cur != orig){
                    var s = _queryString();
                    _queryUrl(s);
                }
            });

            $scope.$watch(function () {
                return vm.orderby;
            }, function (cur, orig) {
                if(cur != orig){
                    var s = _queryString();
                    _queryUrl(s);
                }
            });

            $scope.$watch(function () {
                return vm.sort_order;
            }, function (cur, orig) {
                if(cur != orig){
                    var s = _queryString();
                    _queryUrl(s);
                }
            });

            $scope.$watch(function () {
                return vm.sort_option;
            }, function (cur, orig) {
                if(cur != orig){
                    var s = _queryString();
                    _queryUrl(s);
                }
            });

            //check the auth
            _checkAuth();

            //do initial query build for the UI
            _queryUrl();
        }

        /* === METHOD BINDING === */
        vm.toggleQueryInfo = _toggleQueryInfo;
        vm.search = _search;
        vm.ready = _ready;
        vm.addField = _addField;
        vm.toggleM = _toggleM;
        vm.removeParam = _removeParam;
        vm.fillQuery = _fillQuery;

        /* === METHODS === */
        function _checkAuth() {
            var token = KeyStorageService.v1.getToken();

            if(!token || token == 'null' || token == null){
                _authenticate();
            } else {
                vm.data.auth.token = token;
                _servers();
            }
        }

        /**
         * This method handles authenticating the v1 explorer
         * @private
         */
        function _authenticate () {
            vm.data.auth.authenticating = true;

            var toast = ngToast.info({
                content: 'Fetching <b>access token</b>',
                dismissButton: true,
                // dismissOnTimeout: false
            });

            //Stores auth tokens for us
            RRAuthFactory.getTokenV1().then(function (res){
                vm.data.auth.authenticating = false;
                vm.data.auth.token = res.access_token;
                _servers();
            }, function (res){
                vm.data.auth.authenticating = false;
                console.log(res);
            });
        }

        /**
         * This method fetches the server meta data
         * @private
         */
        function _metaData() {
            if(!vm.data.server.hash)
                return;

            var toast = ngToast.info({
                content: 'Fetching Server Metadata: <b>' + vm.data.server.hash + '</b>',
                dismissButton: true,
                // dismissOnTimeout: false
            });

            PropertyFactoryV1.metadata().then(function (res){
                vm.data.metadata.fields = res.data;
                _queryUrl();
            }, function (res){
                console.log(res);
            });
        }

        /**
         * This method fetches all the servers for the client
         * @private
         */
        function _servers() {
            vm.data.server.fetching = true;

            var toast = ngToast.info({
                content: 'Fetching Servers',
                dismissButton: true,
                // dismissOnTimeout: false
            });

            PropertyFactoryV1.servers().then(function (res) {
                vm.data.server.fetching = false;
                if (res.length) {
                    for (var i = 0; i < res.length; i++) {
                        if (res[i].name === 'Rets Rabbit Test V1') {

                            vm.data.server.hash = res[i].server_hash;

                            //outside of angular digest so kick off manually
                            _queryUrl();
                            break;
                        }
                    }
                }

                _metaData();
            }, function (res){
                vm.data.server.fetching = false;
                console.log(res);
            });
        }

        function _toggleQueryInfo() {
            vm.data.info.hidden = !vm.data.info.hidden;
        }

        function _toggleM() {
            vm.data.metadata.hidden = !vm.data.metadata.hidden;

            if(!vm.data.metadata.hidden){
                vm.data.info.hidden = false;
            }
        }

        function _queryString() {
            var url = '';

            if(!vm.data.metadata.fields || !vm.data.metadata.fields.length)
                return url;

            //loop through each user added query param
            for(var i = 0, len = vm.data.query.params.length; i < len; i++){
                var p = vm.data.query.params[i];
                var metadatas = [];
                var matched_all_field_names = true;
                var fields = FieldService.parse(p.field);

                //iterate through the possible comma separate field list
                for(var ii = 0; ii < fields.parts.length; ii++){
                    var field_name = fields.parts[ii];
                    var _found = false;

                    //see if the param is in the metadata or not
                    for(var j = 0, len2 = vm.data.metadata.fields.length; j < len2; j++){
                        if(vm.data.metadata.fields[j].Name == field_name){
                            metadatas.push(vm.data.metadata.fields[j]);
                            _found = true;
                            break;
                        }
                    }

                    //the field wasn't in the meta so we stop
                    if(!_found){
                        matched_all_field_names = false;
                        break;
                    }
                }

                if(!matched_all_field_names) //didn't match all field names so move on
                    continue;

                //check to make sure all fields have the same meta
                if(metadatas.length > 1){
                    var all_match = true;
                    for(var ii = 1; ii < metadatas.length; ii++){
                        if(metadatas[0].Type !== metadatas[ii].Type){
                            all_match = false;
                            break;
                        }
                    }

                    if(!all_match)
                        continue;
                }

                if(p.value.left || p.value.right){ //if they entered a value
                    var modifier = null, metadata = metadatas[0];

                    //append the field name
                    url += fields.value;

                    //find the modifier
                    var m;
                    var modMap = MetadataService.map;

                    for(var z = 0; z < vm.data.query.modifiers.length; z++){
                        m = vm.data.query.modifiers[z];

                        //need to match 2 things
                        //1: cur mod value (+, - etc) with the selected mod
                        //2: cur mod for with found meta type
                        if(m.value === p.modifier && modMap[m.for].indexOf(metadata.Type) > -1){
                            modifier = vm.data.query.modifiers[z];
                            break;
                        }
                    }

                    //see what kind of modifier we have: string, number, date
                    if(modifier){
                        var left = p.value.left,
                            right = p.value.right;

                        if(modifier.for === 'string'){
                            //sometimes strings do multi value searches
                            left = FieldService.parseValue(left);

                            if(p.modifier === '='){
                                url += p.modifier + left;
                            } else {
                                url += p.modifier;
                                url += '=' + left;
                            }
                        }

                        if(modifier.for === 'number' || modifier.for === 'date'){
                            if(p.value.left)
                                left = encodeURIComponent(left);

                            if(p.value.right)
                                right = encodeURIComponent(right);

                            //dates have to be suffixed by this modifier
                            if(modifier.for === 'date')
                                url += ':date';

                            if(modifier.value == '<->'){ //between
                                url += '=' + left;
                                url += '-';
                                url += right;
                            } else {
                                url += '=' + left;

                                if(p.modifier === '+'){ //greater
                                    url += "%2b";
                                } else if (p.modifier === '=') { //equals
                                    //do nothing
                                } else { //less than
                                    url += p.modifier;
                                }
                            }
                        }
                    }
                }

                //if not last, add ampersand
                if((i+1) < len)
                    url += '&';
            }

            //remove last if ampersand
            if(url.substr(url.length - 1) == '&')
                url = url.slice(0, -1);

            //orderby and sort_order
            if(vm.orderby && vm.sort_order){
                var meta = null;
                for(var i = 0, len = vm.data.metadata.fields.length; i < len; i++){
                    if(vm.data.metadata.fields[i].Name === vm.orderby){
                        meta = vm.data.metadata.fields[i];
                        break;
                    }
                }

                if(meta){
                    url += '&orderby=' + vm.orderby;
                    url += '&sort_order=' + vm.sort_order;

                    if(vm.sort_option){
                        var type = MetadataService.findKey(meta.Type);

                        if(type !== 'string'){
                            url += '&sort_option=';

                            if (type === 'number'){
                                url += 'numeric';
                            }

                            if(type === 'date'){
                                url += 'date';
                            }
                        }
                    }
                }
            }

            //num photos
            if(vm.num_photos){
                url += '&num_photos=' + vm.num_photos;
            }

            //limit and offset
            if(vm.limit){
                url += '&limit=' + vm.limit;

                if(vm.offset){
                    url += '&offset=' + vm.offset;
                } else {
                    url += '&offset=0';
                }
            }

            return url;
        }

        function _queryUrl(queryString) {
            vm.data.queryUrl = '';

            var url = vm.data.api.url + 'v1/';

            vm.data.queryUrl += url;

            if(vm.data.server.hash){
                url = vm.data.server.hash + '/listing/search?';

                vm.data.queryUrl += url;

                if(queryString){
                    vm.data.queryUrl += queryString;
                }
            }
        }

        function _search() {
            var s = _queryString(true);
            var url = '/v1/' + vm.data.server.hash + '/listing/search?' + s;

            vm.data.query.results = null;
            vm.data.query.time_elapsed = null;
            vm.data.query.fetching = true;
            $document.find('#query-results').empty();

            var start = performance.now();

            PropertyFactoryV1.search(vm.data.server.hash, s).then(function (res){
                var end = performance.now();

                vm.data.query.fetching = false;
                vm.data.query.time_elapsed = (end-start).toFixed(0);
                vm.data.query.results = res;//JSON.stringify(res, null, 4);
                vm.data.query.total_records = res.results.length;
                $document.find('#query-results').append(renderjson(res));
            }, function (res){
                console.log(res);
                vm.data.query.fetching = false;
            });
        }

        function _ready() {
            return vm.data.server.hash != null && vm.data.auth.token != null;
        }

        /**
         * Add an empty field query builder line item
         * @private
         */
        function _addField() {
            var param = {
                field: '',
                value: {
                    left: '',
                    right: ''
                },
                modifier: ''
            };

            //$('.datepicker').datepicker();

            vm.data.query.params.push(param);
        }

        /**
         * Removes a search line item from the query builder
         *
         * @param index     int     The position of the line item we are removing
         * @private
         */
        function _removeParam(index) {
            vm.data.query.params.splice(index, 1);
            $scope.params = vm.data.query.params;

            var s = _queryString(false);
            _queryUrl(s);
        }

        /**
         * Fill in a query from the examples
         * @param q     Object     The query object
         * @private
         */
        function _fillQuery(q){
            vm.data.query.params = [];

            for(var i = 0; i < q.fields.length; i++){
                vm.data.query.params.push(q.fields[i]);
            }

            //do this so we can use a $scope.$watch to catch changes in deep comparison
            $scope.params = vm.data.query.params;

            if(q.sorting){
                if(q.sorting.orderby){
                    vm.orderby = q.sorting.orderby;
                } else {
                    vm.orderby = '';
                }

                if(q.sorting.sort_order){
                    vm.sort_order = q.sorting.sort_order;
                } else {
                    vm.sort_order = '';
                }

                if(q.sorting.sort_option){
                    vm.sort_option = q.sorting.sort_option;
                } else {
                    vm.sort_option = '';
                }
            } else {
                vm.orderby = '';
                vm.sort_order = '';
                vm.sort_option = '';
            }

            if(q.pagination){
                if(q.pagination.limit){
                    vm.limit = q.pagination.limit;
                } else {
                    vm.limit = '';
                }

                if(q.pagination.offset){
                    vm.offset = q.pagination.offset;
                } else {
                    vm.offset = '';
                }
            } else {
                vm.limit = '';
                vm.offset = '';
            }

            if(vm.data.query.params.length){
                var s = _queryString(true);
                _queryUrl(s);
            }
        }
    }
})();
