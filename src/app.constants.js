(function() {
    'use strict';
    angular
        .module('app.constants', [])
        .constant('Config', (function Const() {
            var constant = {
                siteName: 'Rets Rabbit'
            };
            return constant;
        })());
})();
