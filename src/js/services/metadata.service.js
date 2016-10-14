/**
 * Created by aclinton on 10/13/16.
 */
(function () {
    'use strict';

    angular
        .module('app.service.metadata', [])
        .service('MetadataService', Service);

    Service.$inject = [];

    function Service(){
        this.map = {
            'string': ['character varying', 'text'],
            'number': ['numeric', 'integer', 'decimal'],
            'date': ['date']
        };

        this.findKey = function (dataType) {
            for(var key in this.map){
                if(this.map[key].indexOf(dataType) > -1)
                    return key;
            }

            return null;
        };
    }
})();
