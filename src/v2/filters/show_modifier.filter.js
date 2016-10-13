/**
 * Created by aclinton on 10/12/16.
 */
(function () {
    'use strict';

    angular
        .module('app.filter.show_modifier', [])
        .filter('showModifier', Filter);

    Filter.$inject = ['FieldService', 'MetadataService'];

    function Filter(FieldService, MetadataService) {
        return function (mods, field, metadata) {
            if(!field || field === '' || !metadata || !metadata.length)
                return mods;

            //build list of allowed modifiers
            var new_mods = [];

            //field may be comma separated list
            var field_data = FieldService.parse(field);

            //store each field's meta in an array
            var metas = [];

            //check through each field to find it's meta
            for(var j = 0; j < field_data.parts.length; j++) {
                for(var jj = 0, len2 = metadata.length; jj < len2; jj++){
                    if(metadata[jj].Name === field_data.parts[j]){
                        metas.push(metadata[jj]);
                        break;
                    }
                }
            }

            //at least one didn't match so we just return current_mods
            if(metas.length != field_data.parts.length){
                return new_mods;
            }

            //all field metas should have the same type
            if(metas.length > 1){
                var first_type = MetadataService.findKey(metas[0].Type);

                for(var i = 1; i < metas.length; i++){
                    if(first_type !== MetadataService.findKey(metas[i].Type))
                        return new_mods;
                }
            }

            for(var i = 0; i < mods.length; i ++) {
                var _mod = mods[i];
                var passed = false;

                var _field = metas[0];
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

                if (passed)
                    new_mods.push(_mod);
            }

            return new_mods;
        }
    }
})();
