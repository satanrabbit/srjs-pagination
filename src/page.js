
define(function(require, exports, module) {
  var $ = require('$');
  // 插件的代码
  $.fn.pager= function(page,total,herf) {
    return this.each(function() {
      $this=$(this);
      $(this).append('<div id="page-wp" class="m-page m-page-sr m-page-sm"><a href="/stage/<%=articleTypes[0].articleTypeID%>/'+(page-1)+'" class="first pageprv"><span class="pagearr">&lt;</span>上一页</a><a href="/stage/<%=articleTypes[0].articleTypeID%>/'+(page+1)+'" class="last pagenxt">下一页<span class="pagearr">&gt;</span></a></div>');                 
      if (page==1) {
        $this.find('.pageprv').addClass('z-dis');
      }
      if (page>=total) {
        $this.find('.pagenxt').addClass('z-dis');
      };
      if (total>8) {
        $(".pagenxt").before('<a href="'+herf+"/"+page+'" class="z-crt">'+page+'</a>');
        if (page-3>1) {
          $(".z-crt").before('<a href="'+herf+"/"+1+'" >1</a><i>...</i>');
        };
        if (page-2>1) {
          $(".z-crt").before('<a href="'+herf+"/"+(page-2)+'" >'+(page-2)+'</a>');
        };
        if (page-1>1) {
          $(".z-crt").before('<a href="'+herf+"/"+(page-1)+'" >'+(page-1)+'</a>');
        };
        if (page+3<total) {
          $(".z-crt").after('<i>...</i>');
        };
        if (page+2<total) {
          $(".z-crt").after('<a href="'+herf+"/"+(page+1)+'" >'+(page+1)+'</a>');
        };
        if (page+1<total) {
          $(".z-crt").after('<a href="'+herf+"/"+(page+1)+'" >'+(page+1)+'</a>');
        };
      }else{
        for (var i = total; i >= 1; i--) {
          if (i==page) {
            $(".pageprv").after('<a href="'+herf+"/"+i+'" class="z-crt">'+i+'</a>');
          }else{
            $(".pageprv").after('<a href="'+herf+"/"+i+'">'+i+'</a>');
          }                   
        };
      }
      $(".z-dis").removeAttr("href");
    });
  }
});