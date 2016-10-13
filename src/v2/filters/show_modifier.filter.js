/**
 * Created by aclinton on 10/12/16.
 */
(function () {
    'use strict';

    angular
        .module('app.filter.show_modifier', [])
        .filter('showModifier', Filter);

    function Filter() {
        return function (mods, field, metadata) {
            if(!field || field === '')
                return mods;

            var new_mods = [];

            for(var i = 0; i < mods.length; i ++) {
                var _mod = mods[i];
                var passed = false;

                if (!metadata || !metadata.length) {
                    new_mods.push(_mod);
                    continue;
                }

                for (var j = 0, len2 = metadata.length; j < len2; j++) {
                    if (metadata[j].Name == field) {
                        var _field = metadata[j];
                        var _name = _field.Type;

                        //number types
                        if (_mod.for === 'number') {
                            if (_name.toLowerCase() === 'integer')
                                passed = true;

                            if (_name.toLowerCase() === 'numeric')
                                passed = true;

                            if (_name.toLowerCase() === 'decimal')
                                passed = true;
                        }

                        //date types
                        if(_mod.for === 'date'){
                            if (_name.toLowerCase() === 'date')
                                passed = true;
                        }

                        //string types
                        if (_mod.for === 'string') {
                            if (_name.toLowerCase().includes('character') ||
                                _name.toLowerCase().includes('text'))
                                passed = true;
                        }

                        break;
                    }
                }

                if (passed)
                    new_mods.push(_mod);
            }

            return new_mods;
        }
    }
})();
