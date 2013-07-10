// Generated by CoffeeScript 1.6.2
(function() {
  var addKlynge, search;

  addKlynge = function(klynge) {
    return console.log(klynge);
  };

  search = function() {
    var query;

    query = ($("#query")).css({
      display: "none"
    }).val();
    qp.log("search", query);
    return $.get("search/" + query, function(result) {
      ($("#query")).css({
        display: "inline"
      }).val("");
      return result.map(function(faust) {
        return $.get("faust/" + faust, function(faust) {
          if (faust != null ? faust.klynge : void 0) {
            return $.get("klynge/" + (faust != null ? faust.klynge : void 0), function(klynge) {
              klynge.title = faust.title;
              return addKlynge(klynge);
            });
          }
        });
      });
    });
  };

  $(function() {
    return ($("#search")).on("submit", function() {
      search();
      return false;
    });
  });

}).call(this);
