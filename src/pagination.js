define(function(require, exports, module) {

  Widget  = require('widget ') ;

  var pagination =Widget.extend({
    attrs:{
      currentPage:1,
      totalPage:1
    }
  });

  module.exports = pagination;

});
