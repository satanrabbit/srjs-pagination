define("srjs/pagination/1.0.0/pagination-debug", [ "arale/widget/1.1.1/widget-debug", "arale/base/1.1.1/base-debug", "arale/class/1.1.0/class-debug", "arale/events/1.1.0/events-debug", "$-debug", "./pagination-debug.css" ], function(require, exports, module) {
    Widget = require("arale/widget/1.1.1/widget-debug");
    require("./pagination-debug.css");
    var pagination = Widget.extend({
        attrs: {
            currentPage: 1,
            totalPage: 1,
            url: "./",
            isSmall: false,
            isSpace: true,
            align: "center",
            onClickPager: undefined
        },
        setup: function() {
            var currentPage = this.get("currentPage");
            var totalPage = this.get("totalPage");
            var url = this.get("url");
            var onClickPager = this.get("onClickPager");
            this.element.append('<a href="' + url + (currentPage - 1) + '" class="first pageprv"><span class="pagearr">&lt;</span>上一页</a>' + '<a href="' + url + (currentPage + 1) + '" class="last pagenxt">下一页<span class="pagearr">&gt;</span></a>');
            this.element.addClass("m-page");
            if (this.get("isSmall")) {
                this.element.addClass("m-page-sm");
            }
            if (this.get("isSpace")) {
                this.element.addClass("m-page-sr");
            }
            if (currentPage == 1) {
                this.$(".pageprv").addClass("z-dis").attr("href", "#");
            }
            switch (this.get("align")) {
              case "left":
                this.element.addClass("m-page-lt");
                break;

              case "right":
                this.element.addClass("m-page-rt");
                break;

              default:
                break;
            }
            if (currentPage >= totalPage) {
                //alert(currentPage);
                this.$(".pagenxt").addClass("z-dis").attr("href", "#");
            }
            if (totalPage < 9) {
                for (var i = 1; i <= totalPage; i++) {
                    if (i == currentPage) {
                        this.$(".pagenxt").before('<a href="#" class="z-crt">' + i + "</a>");
                    } else {
                        this.$(".pagenxt").before('<a href="' + url + i + '">' + i + "</a>");
                    }
                }
            } else {
                //Todo:完成当页数大于8时道样式设置，显示第一和最后一页，中间显示相邻的6页其他用...显示。
                //第一页
                if (currentPage == 1) {
                    this.$(".pagenxt").before('<a href="#" class="z-crt">1</a>');
                } else {
                    this.$(".pagenxt").before('<a href="' + url + 1 + '">1</a>');
                }
                /*中间页部分*/
                if (currentPage - 3 <= 2) {
                    for (var i = 2; i < 7; i++) {
                        if (currentPage == i) {
                            this.$(".pagenxt").before('<a href="#" class="z-crt">' + i + "</a>");
                        } else {
                            this.$(".pagenxt").before('<a href="' + url + i + '">' + i + "</a>");
                        }
                    }
                    this.$(".pagenxt").before(" <i>...</i>");
                } else {
                    this.$(".pagenxt").before(" <i>...</i>");
                    if (currentPage + 3 >= totalPage - 1) {
                        for (var i = totalPage - 6; i < totalPage; i++) {
                            if (currentPage == i) {
                                this.$(".pagenxt").before('<a href="#" class="z-crt">' + i + "</a>");
                            } else {
                                this.$(".pagenxt").before('<a href="' + url + i + '">' + i + "</a>");
                            }
                        }
                    } else {
                        for (var i = currentPage - 3; i < currentPage + 3; i++) {
                            if (currentPage == i) {
                                this.$(".pagenxt").before('<a href="#" class="z-crt">' + i + "</a>");
                            } else {
                                this.$(".pagenxt").before('<a href="' + url + i + '">' + i + "</a>");
                            }
                        }
                        this.$(".pagenxt").before(" <i>...</i>");
                    }
                }
                //最后一页
                if (currentPage >= totalPage) {
                    this.$(".pagenxt").before('<a href="#" class="z-crt">' + totalPage + "</a>");
                } else {
                    this.$(".pagenxt").before('<a href="' + url + totalPage + '">' + totalPage + "</a>");
                }
            }
            //设置分页点击事件
            if (typeof onClickPager == "function") {
                alert("OK");
                this.$("a").attr("href", "javascript:void(0);").click(function(event) {
                    onClickPager(p);
                });
            }
        }
    });
    module.exports = pagination;
});

define("srjs/pagination/1.0.0/pagination-debug.css", [], function() {
    seajs.importStyle(".m-page{margin:10px 0 0;text-align:center;line-height:32px;font-size:0;letter-spacing:-.307em;*letter-spacing:normal;*word-spacing:-1px;word-wrap:normal;white-space:nowrap;color:#999}.m-page a,.m-page i{display:inline-block;*display:inline;*zoom:1;vertical-align:top;padding:0 12px;margin-left:-1px;border:1px solid #ddd;font-size:12px;letter-spacing:normal;word-spacing:normal;background:#fff}.m-page a,.m-page a:hover{text-decoration:none;color:#39c}.m-page a.first{margin-left:0}.m-page a.last{margin-right:0}.m-page a .pagearr{font-weight:700;font-family:\\5b8b\\4f53;vertical-align:top;*vertical-align:middle}.m-page a.pageprv .pagearr{margin-right:3px}.m-page a.pagenxt .pagearr{margin-left:3px}.m-page a:hover{background:#f5f5f5}.m-page a:active{background:#f0f0f0}.m-page a.z-crt,.m-page a.z-crt:hover,.m-page a.z-crt:active{cursor:default;color:#999;background:#f5f5f5}.m-page a.z-dis,.m-page a.z-dis:hover,.m-page a.z-dis:active{cursor:default;color:#ccc;background:#fff}.m-page-lt{text-align:left}.m-page-rt{text-align:right}.m-page-sm{line-height:22px}.m-page-sm a,.m-page-sm i{padding:0 8px}.m-page-sr a,.m-page-sr i{margin:0 3px}.m-page-sr i{border:0}");
});
