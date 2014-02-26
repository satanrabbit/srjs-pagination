define(function(require, exports, module) {

  Widget  = require('widget') ;
  require('./pagination.css');
  var pagination =Widget.extend({
    attrs:{
      currentPage:1,
      totalPage:1,
      url:"./",
      isSmall:false,
      isSpace:true,
      align:"center"
    },
    setup: function() {
      var currentPage=this.get("currentPage");
      var totalPage=this.get("totalPage");
      var url=this.get("url");
      this.element.append('<a href="javascript:void(0);" data-page="'+(currentPage-1)+'" class="first pageprv"><span class="pagearr">&lt;</span>上一页</a>'+
        '<a href="javascript:void(0);"  data-page="'+(currentPage+1)+'" class="last pagenxt">下一页<span class="pagearr">&gt;</span></a>');
      this.element.addClass('m-page');
      if (this.get('isSmall')) {
        this.element.addClass('m-page-sm');
      };
      if (this.get('isSpace')) {
        this.element.addClass('m-page-sr');
      };
      if (currentPage==1) {
        this.$('.pageprv').addClass('z-dis').data('page', '1');
      };
      switch(this.get("align")) {
        case "left":
          this.element.addClass('m-page-lt');
          break;
        case "right":
          this.element.addClass('m-page-rt');
          break;
        default:
          break;
      };

      if (currentPage>=totalPage) {
        //alert(currentPage);
        this.$('.pagenxt').addClass('z-dis').data('page', currentPage);
      };
      if (totalPage<9) {
        for (var i = 1; i <= totalPage; i++) {        
          if (i==currentPage) {
            this.$(".pagenxt").before('<a href="javascript:void(0);" data-page="'+i+'" class="z-crt">'+i+'</a>');
          }else{
            this.$(".pagenxt").before('<a href="javascript:void(0);" data-page="'+i+'" >'+i+'</a>') ;
          }
        };
      }else{
        
        //第一页
        if (currentPage==1) {
          this.$(".pagenxt").before('<a href="javascript:void(0);"  data-page="1" class="z-crt">1</a>');
        }else{
          this.$(".pagenxt").before('<a href="javascript:void(0);"  data-page="1" >1</a>');
        }
        /*中间页部分*/
        if (currentPage-3<=2) {
          for (var i = 2; i < 7; i++) {
            if (currentPage==i) {
              this.$(".pagenxt").before('<a href="javascript:void(0);"  data-page="'+i+'" class="z-crt">'+i+'</a>');
            }else{
              this.$(".pagenxt").before('<a href="javascript:void(0);"  data-page="'+i+'">'+i+'</a>');
            }
          };
          this.$(".pagenxt").before(' <i>...</i>');
        }else {
          this.$(".pagenxt").before(' <i>...</i>');
          if (currentPage+3>=totalPage-1) {
            for (var i = totalPage-6; i < totalPage; i++) {
              if (currentPage==i) {
                this.$(".pagenxt").before('<a  href="javascript:void(0);" data-page="'+i+'" class="z-crt">'+i+'</a>');
              }else{
                this.$(".pagenxt").before('<a  href="javascript:void(0);"  data-page="'+i+'">'+i+'</a>');
              }
            };
          }else{
            for (var i = currentPage-3; i < currentPage+3; i++) {
              if (currentPage==i) {
                this.$(".pagenxt").before('<a  href="javascript:void(0);"  data-page="'+i+'" class="z-crt">'+i+'</a>');
              }else{
                this.$(".pagenxt").before('<a  href="javascript:void(0);"  data-page="'+i+'">'+i+'</a>');
              }
            };
            this.$(".pagenxt").before(' <i>...</i>');
          }
        };
        //最后一页
        if (currentPage>=totalPage) {
          this.$(".pagenxt").before('<a  href="javascript:void(0);"  data-page="'+totalPage+'" class="z-crt">'+totalPage+'</a>');
        }else{
            this.$(".pagenxt").before('<a  href="javascript:void(0);"  data-page="'+totalPage+'" >'+totalPage+'</a>') ;
        }
      }
      this.on('onClickPager', function(p) {
        window.location.href=url+p;
      });
      //设置分页点击事件
      var pagerSelf=this;
      this.$("a").on('click',function(event) {
        var clickedPage=pagerSelf.$(this).data("page");
        //pagerSelf.trigger("onClickPager",clickedPage);
      });      
    }
  });

  module.exports = pagination;

});
