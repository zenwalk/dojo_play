define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
], function (declare, _WidgetBase, _TemplatedMixin) {
    return declare([_WidgetBase, _TemplatedMixin], {
        templateString: "<h2>${text}</h2>",

        constructor: function (text) {
            // this.templateString = "<h2>" + text + "</h2>"
            this.set('text', text)
        }
    })
})
