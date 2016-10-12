/**
 * Created by aclinton on 9/26/16.
 */
const Vue = require('vue');
let RR = require('rets-rabbit-js');

Vue.config.debug = true

Vue.http.headers.common['X-CSRF-TOKEN'] = document.getElementsByName('token')[0].getAttribute('value');

var v1Explorer = new Vue({
    el: '#vue-explore-v1',
    data: {
        api: {
            client: null,
            url: 'http://retsrabbit.app/api/'//'https://stage.retsrabbit.com/api/'
        },
        auth: {
            authenticating: false,
            token: null,
            error: null,
            client_id: 'E1bi6hyy7nLxjlicqE2cDhyUykmA11KPoK9cSbr',
            client_secret: 'x8EZaK74sYmkQLOk4CJBhwLJP0McajzKro6RY6j',
        },
        server: {
            fetching: false,
            hash: null,
            metadata: []
        },
        query: {
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
        metadata: {
            fields: false,
            info: false,
            search: null
        }
    },
    ready: function () {
        RR.ready(() => {
            this.api.client = new RR({
                host: 'http',
                url: 'retsrabbit.app/api'
            });

            this.api.client.clientId(this.auth.client_id);
            this.api.client.clientSecret(this.auth.client_secret);

            //check if needs authenticating`
            this.checkAuth();
        });
    },
    methods: {
        checkAuth() {
            let token = window.localStorage.getItem('access_token');
            if(!token || token == 'null' || token == null){
                this.authenticate();
            } else {
                this.auth.token = token;
                this.servers();
            }
        },
        authenticate() {
            this.auth.authenticating = true;

            //Stores auth tokens for us
            this.api.client.auth((err, res) => {
                this.auth.authenticating = false;

                if(err){
                    console.log(err);
                } else {
                    this.servers();
                }
            });
        },
        servers() {
            this.server.fetching = true;

            this.api.client.get('/v1/server', null, null, (err, res) => {
                this.server.fetching = false;
                if(err){
                    console.log(err);
                } else {
                    if(res.length) {
                        for(let i = 0; i < res.length; i ++){
                            if(res[i].name === 'Rets Rabbit Test V1'){
                                this.server.hash = res[i].server_hash;
                                break;
                            }
                        }
                    }

                    this.metaData();
                }
            });
        },
        metaData() {
            if(!this.server.hash)
                return;

            this.api.client.get('/v1/' + this.server.hash + '/metadata/explorer', null, null, (err, res) => {
                if(err){
                    console.log(err);
                } else {
                    this.server.metadata = res.data;
                }
            });
        },
        toggleMetadata() {
            this.metadata.fields = !this.metadata.fields;
            if(this.metadata.fields == true){
                this.metadata.info = true;
            }
        },
        toggleQueryInfo() {
            this.metadata.info = !this.metadata.info;
        },
        search() {
            this.query.results = null;
            this.query.fetching = true;

            let url = '/v1/' + this.server.hash + '/listing/search?' + this.queryString;
            this.api.client.get(url, null, null, (err, res) => {
                this.query.fetching = false;

                if(err){
                    console.log(err);
                } else {
                    this.query.results = JSON.stringify(res, null, 4);
                    this.query.total_records = res.total_records;
                }
            });
        },
        removeParam(index) {
            this.query.params.splice(index, 1);
        },
        addField() {
            const param = {
                field: null,
                value: {
                    left: null,
                    right: null
                },
                modifier: null
            };

            this.query.params.push(param);
        }
    },
    computed: {
        queryString(){
            let url = '';

            if(!this.server.metadata || !this.server.metadata.length)
                return url;

            for(let i = 0, len = this.query.params.length; i < len; i++){
                let p = this.query.params[i];

                let metadata = null;
                for(let j = 0, len2 = this.server.metadata.length; j < len2; j++){
                    if(this.server.metadata[j].Name == p.field){
                        metadata = this.server.metadata[j];
                        break;
                    }
                }

                if(!metadata) //go to next field since it's not in metadata
                    continue;

                if(p.value.left || p.value.right){
                    url += p.field;
                    let modifier = null;

                    //find the modifier
                    for(let z = 0; z < this.query.modifiers.length; z++){
                        if(this.query.modifiers[z].value == p.modifier){
                            modifier = this.query.modifiers[z];
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
        },
        queryUrl() {
            let url = this.api.url + 'v1/';
            if(this.server.hash)
                url += this.server.hash + '/listing/search?';

            if(!this.server.metadata || !this.server.metadata.length)
                return url;

            url += this.queryString;

            return url;
        },
        ready() {
            return this.server.hash != null && this.auth.token != null;
        }
    },
    filters: {
        showModifier(mods, field) {
            if(!field || field === '')
                return mods;

            let new_mods = [];

            for(let i = 0; i < mods.length; i ++) {
                let _mod = mods[i];
                let passed = false;

                if(!this.server.metadata || !this.server.metadata.length){
                    new_mods.push(_mod);
                    continue;
                }

                for(let j = 0, len2 = this.server.metadata.length; j < len2; j++){
                    if(this.server.metadata[j].Name == field){
                        let _field = this.server.metadata[j];
                        let _name = _field.Type;

                        if(_mod.for === 'number'){
                            if(_name.toLowerCase() === 'integer')
                                passed = true;

                            if(_name.toLowerCase() === 'numeric')
                                passed = true;

                            if(_name.toLowerCase() === 'decimal')
                                passed = true;

                            if(_name.toLowerCase() === 'date')
                                passed = true;
                        }

                        if(_mod.for === 'string'){
                            if(_name.toLowerCase().includes('character') ||
                            _name.toLowerCase().includes('text'))
                                passed = true;
                        }

                        break;
                    }
                }

                if(passed)
                    new_mods.push(_mod);
            }

            return new_mods;
        }
    }
});