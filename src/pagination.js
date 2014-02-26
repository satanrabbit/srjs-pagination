define(function(require, exports, module) {

  var $ = require('$');
  require("./pagination.css");
    // 插件的定义    
  $.fn.pagination = function() {
    var method = arguments[0]; 
    if(methods[method]) {
        method = methods[method];
        // 我们的方法是作为参数传入的，把它从参数列表中删除，因为调用方法时并不需要它
        arguments = Array.prototype.slice.call(arguments, 1);
    } else if( typeof(method) == 'object' || !method ) {
        method = methods.init;
    } else {
        $.error( 'Method ' +  method + ' does not exist on jQuery.pluginName' );
        return this;
    }
    // 用apply方法来调用我们的方法并传入参数
    return method.apply(this, arguments);
  };
  var methods = {
    init :  function (options){
      // 在每个元素上执行方法
      return this.each(function() {
        var context = $(this);
        // 使用extend方法从options和defaults对象中构造出一个settings对象
        var opts = $.extend({}, $.fn.pagination.defaults, options);
        // 执行代码
        context.removeClass('m-page-sm').removeClass('m-page-sr').removeClass('m-page-lt').removeClass('m-page-rt').empty().append('<a href="javascript:void(0);" data-page="'+(opts.currentPage-1)+'" class="first pageprv"><span class="pagearr">&lt;</span>上一页</a>'+
            '<a href="javascript:void(0);"  data-page="'+(opts.currentPage+1)+'" class="last pagenxt">下一页<span class="pagearr">&gt;</span></a>');
        context.addClass('m-page');
        if (opts.isSmall){
          context.addClass('m-page-sm');
        };
        if (opts.isSpace) {
          context.addClass('m-page-sr');
        };
        if (opts.currentPage==1) {
          context.find('.pageprv').addClass('z-dis').data('page', '1');
        };
        switch(opts.align){
          case "left":
            context.addClass('m-page-lt');
            break;
          case "right":
            context.addClass('m-page-rt');
            break;
          default:
            break;
        };

        if (opts.currentPage>=opts.totalPage) {
          //alert(opts.currentPage);
          context.find('.pagenxt').addClass('z-dis').data('page', opts.currentPage);
        };
        if (opts.totalPage<9) {
          for (var i = 1; i <= opts.totalPage; i++) {        
            if (i==opts.currentPage) {
              context.find(".pagenxt").before('<a href="javascript:void(0);" data-page="'+i+'" class="z-crt">'+i+'</a>');
            }else{
              context.find(".pagenxt").before('<a href="javascript:void(0);" data-page="'+i+'" >'+i+'</a>') ;
            }
          };
        }else{
          
          //第一页
          if (opts.currentPage==1) {
            context.find(".pagenxt").before('<a href="javascript:void(0);"  data-page="1" class="z-crt">1</a>');
          }else{
            context.find(".pagenxt").before('<a href="javascript:void(0);"  data-page="1" >1</a>');
          }
          /*中间页部分*/
          if (opts.currentPage-3<=2) {
            for (var i = 2; i < 7; i++) {
              if (opts.currentPage==i) {
                context.find(".pagenxt").before('<a href="javascript:void(0);"  data-page="'+i+'" class="z-crt">'+i+'</a>');
              }else{
                context.find(".pagenxt").before('<a href="javascript:void(0);"  data-page="'+i+'">'+i+'</a>');
              }
            };
            context.find(".pagenxt").before(' <i>...</i>');
          }else {
            context.find(".pagenxt").before(' <i>...</i>');
            if (opts.currentPage+3>=opts.totalPage-1) {
              for (var i = opts.totalPage-6; i < opts.totalPage; i++) {
                if (opts.currentPage==i) {
                  context.find(".pagenxt").before('<a  href="javascript:void(0);" data-page="'+i+'" class="z-crt">'+i+'</a>');
                }else{
                  context.find(".pagenxt").before('<a  href="javascript:void(0);"  data-page="'+i+'">'+i+'</a>');
                }
              };
            }else{
              for (var i = opts.currentPage-3; i < opts.currentPage+3; i++) {
                if (opts.currentPage==i) {
                  context.find(".pagenxt").before('<a  href="javascript:void(0);"  data-page="'+i+'" class="z-crt">'+i+'</a>');
                }else{
                  context.find(".pagenxt").before('<a  href="javascript:void(0);"  data-page="'+i+'">'+i+'</a>');
                }
              };
              context.find(".pagenxt").before(' <i>...</i>');
            }
          };
          //最后一页
          if (opts.currentPage>=opts.totalPage) {
            context.find(".pagenxt").before('<a  href="javascript:void(0);"  data-page="'+opts.totalPage+'" class="z-crt">'+opts.totalPage+'</a>');
          }else{
              context.find(".pagenxt").before('<a  href="javascript:void(0);"  data-page="'+opts.totalPage+'" >'+opts.totalPage+'</a>') ;
          }
        }

        context.find('a').click(function(event) {
          var p=$(this).data("page");
          if (opts.onClickPager ){
            opts.onClickPager(p);
          }else{
            window.location.href=opts.url+p;
          }
        });
      });      
    }/*,
    show :  function(options) {
      // 对选择器每个元素都执行方法
      return this.each(function() {
          // 执行代码
      });
    },
    destroy: function() {
      // 对选择器每个元素都执行方法
      return this.each(function() {
          // 执行代码
      });
    }*/
  };
 
  // 插件的defaults    
  $.fn.pagination.defaults = {    
    currentPage:7,
    totalPage:18,
    url:"./",
    isSmall:false,
    isSpace:true,
    align:"center" 
  };    

});
