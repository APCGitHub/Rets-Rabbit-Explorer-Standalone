/**
 * Created by aclinton on 10/11/16.
 */
(function () {
    'use strict';

    angular
        .module('app.controller.explore.v1', [])
        .controller('ExploreV1Ctrl', Controller);

    Controller.$inject = ['$scope', '$timeout', '$document', 'V1QueryFactory', 'ngToast', 'V1ModifiersFactory', 'FieldService', 'MetadataService'];

    function Controller($scope, $timeout, $document, V1QueryFactory, ngToast, V1ModifiersFactory, FieldService, MetadataService) {
        var vm = this;

        init();

        $(document).ready(function () {
            //boot up the spinner
            $('.loader-inner').loaders();
        });

        function init () {
            //init a RR client
            vm.RR = new RetsRabbit({
                host: 'http',
                client_id: 'E1bi6hyy7nLxjlicqE2cDhyUykmA11KPoK9cSbr',
                client_secret: 'x8EZaK74sYmkQLOk4CJBhwLJP0McajzKro6RY6j',
                url: 'retsrabbit.app/api',
                storageKey: 'access_token_v1'
            });

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
                    total_records: null
                },
                queries: V1QueryFactory.all(),
                queryUrl: ''
            };

            $scope.params = vm.data.query.params;

            //have to do this for some reason to get them to show initially
            $timeout(function () {
                vm.data.metadata.search = '';
            }, 100);

            //this is how we can emulate vue computed props...super ugly -.-
            $scope.$watch('params', function (oldv, newv){
                if(oldv != newv){
                    var s = _queryString(true);
                    _queryUrl(s);
                }
            }, true);

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
            var token = window.localStorage.getItem('access_token_v1');

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
            vm.RR.auth(function(err, res) {
                vm.data.auth.authenticating = false;

                if(err){
                    console.log(err);
                } else {
                    vm.data.auth.token = res.access_token;
                    _servers();
                }
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

            vm.RR.get('/v1/' + vm.data.server.hash + '/metadata/explorer', null, null, function(err, res) {
                if(err){
                    console.log(err);
                } else {
                    vm.data.metadata.fields = res.data;
                    _queryUrl();
                }
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

            vm.RR.get('/v1/server', null, null, function (err, res) {
                vm.data.server.fetching = false;

                if(err){
                    console.log(err);
                } else {
                    if(res.length) {
                        for(var i = 0; i < res.length; i ++){
                            if(res[i].name === 'Rets Rabbit Test V1'){

                                vm.data.server.hash = res[i].server_hash;

                                //outside of angular digest so kick off manually
                                $timeout(function () {
                                    _queryUrl();
                                }, 100);

                                break;
                            }
                        }
                    }

                    _metaData();
                }
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
                            left = _parseValue(left);

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
            vm.RR.get(url, null, null, function(err, res) {
                var end = performance.now();

                vm.data.query.fetching = false;

                if(err){
                    console.log(err);
                } else {
                    //had to do this in a timeout...maybe because it is out of
                    //angular's digest loop?
                    $timeout(function () {
                        vm.data.query.time_elapsed = (end-start).toFixed(0);
                        vm.data.query.results = res;//JSON.stringify(res, null, 4);
                        vm.data.query.total_records = res.total_records;
                        $document.find('#query-results').append(renderjson(res));
                    }, 100);
                }
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
                field: null,
                value: {
                    left: '',
                    right: ''
                },
                modifier: null
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

            for(var i = 0; i < q.length; i++){
                vm.data.query.params.push(q[i]);
            }

            $scope.params = vm.data.query.params;

            if(vm.data.query.params.length){
                var s = _queryString(true);
                _queryUrl(s);
            }
        }

        /**
         * This method parses a value which may be a comma separated list
         *
         * @param value_string
         * @returns string
         * @private
         */
        function _parseValue(value_string){
            if(!value_string || !value_string.length){
                return '';
            }

            var parts = value_string.split(',');

            //trim any whitespace
            parts = parts.map(function (term){
                return term.trim();
            });

            return parts.join('|');
        }
    }
})();
