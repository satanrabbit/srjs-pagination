define("srjs/pagination/1.0.0/pagination-debug", [ "arale/widget/1.1.1/widget-debug", "arale/base/1.1.1/base-debug", "arale/class/1.1.0/class-debug", "arale/events/1.1.0/events-debug", "$-debug" ], function(require, exports, module) {
    Widget = require("arale/widget/1.1.1/widget-debug");
    var pagination = Widget.extend({
        attrs: {
            currentPage: 1,
            totalPage: 1,
            url: window.location.href
        },
        setup: function() {
            var currentPage = this.get("currentPage");
            var totalPage = this.get("totalPage");
            var url = this.get("url");
            this.element.append('<div class="m-page m-page-sr m-page-sm">' + '<a href="' + url + (currentPage - 1) + '" class="first pageprv"><span class="pagearr">&lt;</span>上一页</a>' + '<a href="' + url + (currentPage + 1) + '" class="last pagenxt">下一页<span class="pagearr">&gt;</span></a></div>');
            if (currentPage == 1) {
                this.$(".pageprv").addClass("z-dis");
            }
            if (currentPage >= totalPage) {
                this.$("pagenxt").addClass("z-dis");
            }
            if (totalPage < 9) {
                for (var i = 1; i <= totalPage; i++) {
                    if (i == currentPage) {
                        this.$(".pagenxt").before('<a href="' + url + i + '" class="z-crt">' + i + "</a>");
                    } else {
                        this.$(".pagenxt").before('<a href="' + url + i + '">' + i + "</a>");
                    }
                }
            } else {}
        }
    });
    module.exports = pagination;
});
