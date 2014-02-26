# Demo

---

## Normal usage

````html
<div id="pager"></div>
````

使用：

````javascript
seajs.use('pagination', function(pagination) {

  var pager=new pagination({element: '#pager',currentPage:1,pageTotal:7,url:"./"});
  pager.render();

});
````
