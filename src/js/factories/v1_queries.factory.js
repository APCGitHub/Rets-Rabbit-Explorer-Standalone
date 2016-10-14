/**
 * Created by aclinton on 10/12/16.
 */
(function () {
    'use strict';

    angular
        .module('app.factory.v1_queries', [])
        .factory('V1QueryFactory', Factory);

    Factory.$inject = [];

    function Factory() {
        var factory = {
            all: _all
        };

        return factory;

        function _all(){
            var q = [{
                title: 'Price: Greater Than',
                description: 'This is a simple price check for any listings having ListPrice greater than $95,000',
                query: {
                    fields: [{
                        field: 'ListPrice',
                        value: {
                            left: '95000',
                            right: ''
                        },
                        modifier: '+',
                    }],
                    sorting: null,
                    pagination: null
                }
            }, {
                title: 'Price: Less Than',
                description: 'This is a simple price check for any listing having ListPrice less than $55,000',
                query: {
                    fields: [
                        {
                            field: 'ListPrice',
                            value: {
                                left: '55000',
                                right: ''
                            },
                            modifier: '-',
                        }
                    ],
                    sorting: null,
                    pagination: null
                }
            }, {
                title: 'Price: Between',
                description: 'This is a simple price check for any listings having a ListPrice between $78,000 and $85,000',
                query: {
                    fields: [{
                        field: 'ListPrice',
                        value: {
                            left: '78000',
                            right: '85000'
                        },
                        modifier: '<->',
                    }],
                    sorting: null,
                    pagination: null
                }
            }, {
                title: 'Date: Between',
                description: 'This is a simple date search for listings having ListingContractDate between 2016/04/01 and 2016/05/26',
                query: {
                    fields: [{
                        field: 'ListingContractDate',
                        value: {
                            left: '2016/04/01',
                            right: '2016/05/26'
                        },
                        modifier: '<->',
                    }],
                    sorting: null,
                    pagination: null
                }
            }, {
                title: 'Multiple Values',
                description: 'This is a more complex query searching for listings which have the city names Dublin or Worthington',
                query: {
                    fields: [{
                        field: 'City',
                        value: {
                            left: 'Dublin, Worthington',
                            right: ''
                        },
                        modifier: '=',
                    }],
                    sorting: null,
                    pagination: null
                }
            }, {
                title: 'Combination of Fields',
                description: 'This is a more complex query which searches multiple fields (City, StreetName) for a single value, \'dub\'',
                query: {
                    fields: [
                        {
                            field: 'City, StreetName',
                            value: {
                                left: 'dub',
                                right: ''
                            },
                            modifier: ':startswith'
                        }
                    ],
                    sorting: null,
                    pagination: null
                }
            }, {
                title: 'Sort By ListPrice',
                description: 'This query runs a search for listings having city values of either Dublin or Worthington sort descending by ListPrice',
                query: {
                    fields: [{
                        field: 'City',
                        value: {
                            left: 'Dublin, Worthington',
                            right: ''
                        },
                        modifier: '=',
                    }],
                    sorting: {
                        orderby: 'ListPrice',
                        sort_order: 'desc',
                        sort_option: 'numeric'
                    },
                    pagination: null
                }
            }, {
                title: 'Pagination',
                description: 'This query shows how you can use offset and limit to paginate through a large query result',
                query: {
                    fields: [
                        {
                            field: 'ListPrice',
                            value: {
                                left: '122000',
                                right: '129000'
                            },
                            modifier: '<->'
                        }, {
                            field: 'City',
                            value: {
                                left: 'Dublin, Worthington',
                                right: ''
                            },
                            modifier: '='
                        }
                    ],
                    sorting: {
                        orderby: 'ListPrice',
                        sort_order: 'asc',
                        sort_option: 'numeric'
                    },
                    pagination: {
                        limit: 3,
                        offset: 1
                    }
                }
            }];

            return q;
        }
    }
})();
