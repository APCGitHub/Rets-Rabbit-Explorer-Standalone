/**
 * Created by aclinton on 10/11/16.
 */
(function () {
    'use strict';

    angular
        .module('app.controller.explore.v1', [])
        .controller('ExploreV1Ctrl', Controller);

    Controller.$inject = ['$scope', '$timeout', '$document'];

    function Controller($scope, $timeout, $document) {
        var vm = this;

        init();

        $(document).ready(function () {
            $('.loader-inner').loaders();
        });

        function init () {
            vm.RR = new RetsRabbit({
                host: 'http',
                client_id: 'E1bi6hyy7nLxjlicqE2cDhyUykmA11KPoK9cSbr',
                client_secret: 'x8EZaK74sYmkQLOk4CJBhwLJP0McajzKro6RY6j',
                url: 'retsrabbit.app/api',
                storageKey: 'access_token_v1'
            });

            vm.data = {
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
                    string: '',
                    fetching: false,
                    params: [],
                    modifiers: [
                        {
                            name: 'Starts With',
                            value: ':startswith',
                            for: 'string'
                        }, {
                            name: 'Ends With',
                            value: ':endswith',
                            for: 'string'
                        }, {
                            name: 'Contains',
                            value: ':indexof',
                            for: 'string'
                        }, {
                            name: 'No Case',
                            value: ':nocase',
                            for: 'string'

                        }, {
                            name: 'Greater',
                            value: '+',
                            for: 'number'
                        }, {
                            name: 'Less',
                            value: '-',
                            for: 'number'
                        }, {
                            name: 'Between',
                            value: '<->',
                            for: 'number'
                        }, {
                            name: 'Equals',
                            value: '=',
                            for: 'number'
                        }
                    ],
                    results: null,
                    total_records: null
                },
                queryUrl: ''
            };

            $scope.params = vm.data.query.params;

            $timeout(function () {
                vm.data.metadata.search = '';
            }, 100);

            $scope.$watch('params', function (oldv, newv){
                if(oldv != newv){
                    var s = _queryString();
                    _queryUrl(s);
                }
            }, true);

            _checkAuth();
            _queryUrl();
        }

        /* === METHOD BINDING === */
        vm.query = _query;
        vm.toggleQueryInfo = _toggleQueryInfo;
        vm.search = _search;
        vm.ready = _ready;
        vm.addField = _addField;
        vm.toggleM = _toggleM;
        vm.removeParam = _removeParam;

        /* === METHODS === */
        function _query() {

        }

        function _checkAuth() {
            var token = window.localStorage.getItem('access_token_v1');

            if(!token || token == 'null' || token == null){
                _authenticate();
            } else {
                vm.data.auth.token = token;
                _servers();
            }
        }

        function _authenticate () {
            vm.data.auth.authenticating = true;

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

        function _metaData() {
            if(!vm.data.server.hash)
                return;

            vm.RR.get('/v1/' + vm.data.server.hash + '/metadata/explorer', null, null, function(err, res) {
                if(err){
                    console.log(err);
                } else {
                    vm.data.metadata.fields = res.data;
                    _queryUrl();
                }
            });
        }

        function _servers() {
            console.log('getting servers');
            vm.data.server.fetching = true;

            vm.RR.get('/v1/server', null, null, function (err, res) {
                vm.data.server.fetching = false;
                if(err){
                    console.log(err);
                } else {
                    if(res.length) {
                        for(var i = 0; i < res.length; i ++){
                            if(res[i].name === 'Rets Rabbit Test V1'){
                                vm.data.server.hash = res[i].server_hash;
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

            for(var i = 0, len = vm.data.query.params.length; i < len; i++){
                var p = vm.data.query.params[i];

                var metadata = null;
                for(var j = 0, len2 = vm.data.metadata.fields.length; j < len2; j++){
                    if(vm.data.metadata.fields[j].Name == p.field){
                        metadata = vm.data.metadata.fields[j];
                        break;
                    }
                }

                if(!metadata) //go to next field since it's not in metadata
                    continue;

                if(p.value.left || p.value.right){
                    url += p.field;
                    var modifier = null;

                    //find the modifier
                    for(var z = 0; z < vm.data.query.modifiers.length; z++){
                        if(vm.data.query.modifiers[z].value == p.modifier){
                            modifier = vm.data.query.modifiers[z];
                            break;
                        }
                    }

                    //see what kind of modifier we have
                    if(modifier){
                        if(modifier.for == 'string'){
                            url += p.modifier;
                            url += '=' + p.value.left;
                        }

                        if(modifier.for == 'number'){
                            if(modifier.value == '<->'){
                                url += '=' + p.value.left;
                                url += '-';
                                url += p.value.right;
                            } else {
                                url += '=' + p.value.left;
                                if(p.modifier === '+'){
                                    url += "%2b";
                                } else if (p.modifier === '=') {
                                    //do nothing
                                } else {
                                    url += p.modifier;
                                }
                            }
                        }
                    }
                }

                if((i+1) < len)
                    url += '&';
            }

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
            var s = _queryString();
            var url = '/v1/' + vm.data.server.hash + '/listing/search?' + s;

            vm.data.query.results = null;
            vm.data.query.fetching = true;
            $document.find('#query-results').empty();

            vm.RR.get(url, null, null, function(err, res) {
                vm.data.query.fetching = false;

                if(err){
                    console.log(err);
                } else {
                    $timeout(function () {
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

        function _addField() {
            var param = {
                field: null,
                value: {
                    left: '',
                    right: ''
                },
                modifier: null
            };

            vm.data.query.params.push(param);
        }

        function _removeParam(index) {
            vm.data.query.params.splice(index, 1);
        }
    }
})();
