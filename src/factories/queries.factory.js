(function() {
    'use strict';

    angular
        .module('app.factory.queries', [])
        .factory('QueryFactory', Factory);

    function Factory() {
        var factory = {
            queries: _queries
        };

        return factory;

        function _queries() {
            return [{
                title: 'Simple Price',
                description: 'This demo shows how to perform a simple price query where the ListPrice field is compared against another price.',
                query: {
                    select: 'ListPrice, ListingId',
                    filter: [{ value: 'ListPrice gt 50000', operator: '', join: 'and' }],
                    orderby: [{ value: 'ListPrice', direction: 'asc' }],
                    top: '5',
                    skip: ''
                }
            }, {
                title: 'Status Lookup',
                description: 'In this demo we showcase a query selecting only listings having a certain value for the StandardStatus field.',
                query: {
                    select: '',
                    filter: [],
                    orderby: [],
                    top: '',
                    skip: ''
                }
            }]
        }
    }
})();
