/**
 * Created by aclinton on 10/13/16.
 */
(function () {
    'use strict';

    angular
        .module('app.factory.modifiers', [])
        .factory('V1ModifiersFactory', Factory);

    Factory.$inject = [];

    function Factory() {
        var factory = {
            all: _all
        };

        return factory;

        function _all() {
            var m = [
                {
                    name: 'Equals',
                    value: '=',
                    for: 'string'
                },
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
                },/* number modifiers */ {
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
                }, /* date modifiers */ {
                    name: 'Greater',
                    value: '+',
                    for: 'date'
                }, {
                    name: 'Less',
                    value: '-',
                    for: 'date'
                }, {
                    name: 'Between',
                    value: '<->',
                    for: 'date'
                }, {
                    name: 'Equals',
                    value: '=',
                    for: 'date'
                }
            ];

            return m;
        }
    }
})();
