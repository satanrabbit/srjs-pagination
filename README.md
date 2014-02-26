# pagination

---

基于arale的分页器，样式采用网易nec的分页样式

---

## 示例


````html
<div id="pager1">
</div>
````

```javascript
seajs.use('pagination', function(pagination) {
  var pager1=new pagination({element: '#pager1',currentPage:1,totalPage:20,url:"./",isSmall:true});
  pager1.render();
});
```

## Api

继承Arale/Widget,具有arale/widget的所有特性。

【使用时只需要设置以下属性即可】

**currentPage**: 

  当前页 默认1

**totalPage**: 

  总页数，默认1

**url**:

  跳转页,默认值"./",分页器将对应的页数值添加到该值的最后即：

  如果该值为"./",则第二页为："./2",如果该值为"../page=",则第二页为："../page=2"。

  **以后考虑根据页面的url进行自动分析**

**isSmall**: 

  样式是否是small，默认false，可选true、false

**isSpace**: 

  样式页数之间是否间隔 默认true，有间隔，可选true、false

**align**: 

  样式是否在父容器中居中，默认居中"center"，值可选left，right

