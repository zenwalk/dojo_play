define([
    "dojo/_base/declare",
    "dojox/grid/EnhancedGrid",
    "dojo/data/ItemFileWriteStore",
    "dojox/grid/enhanced/plugins/IndirectSelection"
], function (declare, EnhancedGrid, ItemFileWriteStore) {
    'use strict';

    var layout = [[
        { 'name': 'Column 1', 'field': 'id' },
        { 'name': 'Column 2', 'field': 'col2' },
        { 'name': 'Column 3', 'field': 'col3', 'width': '230px' },
        { 'name': 'Column 4', 'field': 'col4', 'width': '230px' }
    ]];

    return declare([EnhancedGrid], {
        structure: layout
    })

});