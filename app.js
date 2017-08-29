require([
  "app/box",
  "dojo/dom",
  "dojo",
  "dojo/request",
  "dojo/on",
  "dojo/parser",
  "dojo/ready",
  "dojox/grid/EnhancedGrid",
  "dojo/data/ItemFileWriteStore",
  "app/mygrid",
  "dojox/mvc/StatefulModel",
  "dojox/mvc/at",
  "dijit/form/TextBox",
  "dojox/grid/enhanced/plugins/IndirectSelection"
], function(
  box,
  dom,
  dojo,
  request,
  on,
  parser,
  ready,
  EnhancedGrid,
  ItemFileWriteStore,
  mygrid,
  StatefulModel,
  at,
  TextBox
) {
  parser.parse();

  ready(function() {
    console.log("loaded");
  });

  request("http://jsonplaceholder.typicode.com/posts", {
    query: {
      _page: 2,
      _limit: 5
    },
    handleAs: "json"
  }).then(function(res) {
    console.log(res[0].title);

    var data = {
      identifier: "id",
      items: res
    };

    var layout = [
      [
        { name: "id", field: "id", width: "5%" },
        { name: "title", field: "title", width: "20%" },
        { name: "body", field: "body", width: "70%" }
      ]
    ];

    var store = new ItemFileWriteStore({ data: data });

    var grid = new EnhancedGrid(
      {
        structure: layout,
        store: store
      },
      dom.byId("grid")
    );

    grid.startup();
  });

  //   for (var i = 0, l = data_list.length; i < rows; i++) {
  //     data.items.push(dojo.mixin({ id: i + 1 }, data_list[i % l]));
  //   }
  //   var store = new dojo.data.ItemFileWriteStore({ data: data });

  //   var bar = new mygrid(
  //     {
  //       store: store
  //       //rowSelector:'20px'
  //     },
  //     dom.byId("grid2")
  //   );

  //   bar.startup();
});
