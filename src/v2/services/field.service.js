/**
 * Created by aclinton on 10/13/16.
 */
(function () {
    'use strict';

    angular
        .module('app.service.fields', [])
        .service('FieldService', Service);

    Service.$inject = [];

    function Service() {
        this.parse = function (field_string) {
            if(!field_string || !field_string.length)
                return {value: '', parts: []};

            var parts = field_string.split(',');

            parts = parts.map(function (field){
                return field.trim();
            });

            parts = parts.filter(function(field){
                return field.length;
            });

            return {value: parts.join('|'), parts: parts};
        };

        this.parseValue = function (value_string) {
            if(!value_string || !value_string.length){
                return '';
            }

            var parts = value_string.split(',');

            //trim any whitespace
            parts = parts.map(function (term){
                return term.trim();
            });

            return parts.join('|');
        };
    }
})();
