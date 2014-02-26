define(function(require, exports, module) {

  Widget  = require('widget') ;

  var pagination =Widget.extend({
    attrs:{
      currentPage:1,
      totalPage:1,
      url:window.location.href
    },
    setup: function() {
      var currentPage=this.get("currentPage");
      var totalPage=this.get("totalPage");
      var url=this.get("url");
      this.element.append('<div class="m-page m-page-sr m-page-sm">'+
        '<a href="'+url+(currentPage-1)+'" class="first pageprv"><span class="pagearr">&lt;</span>上一页</a>'+
        '<a href="'+url+(currentPage+1)+'" class="last pagenxt">下一页<span class="pagearr">&gt;</span></a></div>');
      if (currentPage==1) {
        this.$('.pageprv').addClass('z-dis');
      };
      if (currentPage>=totalPage) {
        this.$('pagenxt').addClass('z-dis');
      };
      if (totalPage<9) {
        for (var i = 1; i <=totalPage; i++) {
          if (i==currentPage) {
            this.$(".pagenxt").before('<a href="'+url+i+'" class="z-crt">'+i+'</a>')
          }else{
            this.$(".pagenxt").before('<a href="'+url+i+'">'+i+'</a>') 
          }
        };
      }else{
        //Todo:完成当页数大于8时道样式设置，显示第一和最后一页，中间显示相邻的6页其他用...显示。
      }
    }
  });

  module.exports = pagination;

});
