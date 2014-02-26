# Demo

---

## Normal usage

````html
<div class="pager1"></div>
<div class="pager2"></div>
<div class="pager3"></div>
<div class="pager4"></div>
<div class="pager5"></div>
<div class="pager6"></div>
<div class="pager7"></div>
<div class="pager8"></div>
<div class="pager9"></div>
<div class="pager10"></div>
<div class="pager11"></div>
<div class="pager12"></div>
<div class="pager13"></div>
<div class="pager14"></div>
<div class="pager15"></div>
<div class="pager16"></div>
<div class="pager17"></div>
<div class="pager18"></div>
<div class="pager19"></div>
<div class="pager20"></div>
<div class="pager21"></div>
<div class="pager22"></div>
<div class="pager23"></div>
````

使用：

````javascript
seajs.use(['$','pagination'], function($,pagination) {

  $(".pager1").pagination({currentPage:1,totalPage:20});
  $(".pager2").pagination({currentPage:2,totalPage:20});
  $(".pager3").pagination({currentPage:3,totalPage:20});
  $(".pager4").pagination({currentPage:4,totalPage:20});
  $(".pager5").pagination({currentPage:5,totalPage:20});
  $(".pager6").pagination({currentPage:6,totalPage:20});
  $(".pager7").pagination({currentPage:7,totalPage:20});
  $(".pager8").pagination({currentPage:8,totalPage:20});
  $(".pager9").pagination({currentPage:9,totalPage:20});
  $(".pager10").pagination({currentPage:10,totalPage:20});
  $(".pager11").pagination({currentPage:11,totalPage:20});
  $(".pager12").pagination({currentPage:12,totalPage:20});
  $(".pager13").pagination({currentPage:13,totalPage:20});
  $(".pager14").pagination({currentPage:14,totalPage:20});
  $(".pager15").pagination({currentPage:15,totalPage:20});
  $(".pager16").pagination({currentPage:16,totalPage:20});
  $(".pager17").pagination({currentPage:17,totalPage:20});
  $(".pager18").pagination({currentPage:18,totalPage:20});
  $(".pager19").pagination({currentPage:19,totalPage:20});
  $(".pager20").pagination({currentPage:20,totalPage:20});
  $(".pager21").pagination({currentPage:21,totalPage:23});
  $(".pager22").pagination({currentPage:22,totalPage:23});
  $(".pager23").pagination({currentPage:23,totalPage:23});

});
````
