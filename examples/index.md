# Demo

---

## Normal usage

````html
<div id="pager1"></div>
<div id="pager2"></div>
<div id="pager4"></div>
<div id="pager5"></div>
<div id="pager6"></div>
<div id="pager7"></div>
<div id="pager8"></div>
<div id="pager9"></div>
<div id="pager10"></div>
<div id="pager11"></div>
<div id="pager12"></div>
<div id="pager13"></div>
<div id="pager14"></div>
<div id="pager15"></div>
<div id="pager16"></div>
<div id="pager17"></div>
<div id="pager18"></div>
<div id="pager19"></div>
<div id="pager20"></div>
<div id="pager3"></div>
<div id="pager21"></div>
````

使用：

````javascript
seajs.use('pagination', function(pagination) {

  var pager1=new pagination({element: '#pager1',currentPage:1,totalPage:20,url:"./",isSmall:true,onClickPager:function(p){console.log(p);}});
  pager1.render();
   var pager2=new pagination({element: '#pager2',currentPage:2,totalPage:20,url:"./"});
  pager2.on("onClickPager",function(p){
  alert(p);
}).render();
   var pager4=new pagination({element: '#pager4',currentPage:3,totalPage:20,url:"./",isSmall:true,isSpace:false});
  pager4.render();
   var pager5=new pagination({element: '#pager5',currentPage:4,totalPage:20,url:"./"});
  pager5.render();
   var pager6=new pagination({element: '#pager6',currentPage:5,totalPage:20,url:"./",isSmall:true,isSpace:false});
  pager6.render();
   var pager7=new pagination({element: '#pager7',currentPage:6,totalPage:20,url:"./",align:'right'});
  pager7.render();
   var pager8=new pagination({element: '#pager8',currentPage:7,totalPage:20,url:"./",isSmall:true,align:'left'});
  pager8.render();
   var pager9=new pagination({element: '#pager9',currentPage:8,totalPage:20,url:"./"});
  pager9.render();
   var pager10=new pagination({element: '#pager10',currentPage:9,totalPage:20,url:"./"});
  pager10.render();
   var pager11=new pagination({element: '#pager11',currentPage:10,totalPage:20,url:"./"});
  pager11.render();
   var pager12=new pagination({element: '#pager12',currentPage:11,totalPage:20,url:"./"});
  pager12.render();
   var pager13=new pagination({element: '#pager13',currentPage:12,totalPage:20,url:"./"});
  pager13.render();
   var pager14=new pagination({element: '#pager14',currentPage:13,totalPage:20,url:"./"});
  pager14.render();
   var pager15=new pagination({element: '#pager15',currentPage:14,totalPage:20,url:"./"});
  pager15.render();
   var pager16=new pagination({element: '#pager16',currentPage:15,totalPage:20,url:"./"});
  pager16.render();
   var pager17=new pagination({element: '#pager17',currentPage:16,totalPage:20,url:"./"});
  pager17.render();
   var pager18=new pagination({element: '#pager18',currentPage:17,totalPage:20,url:"./"});
  pager18.render();
   var pager19=new pagination({element: '#pager19',currentPage:18,totalPage:20,url:"./"});
  pager19.render();
   var pager20=new pagination({element: '#pager20',currentPage:19,totalPage:20,url:"./"});
  pager20.render();
   var pager3=new pagination({element: '#pager3',currentPage:20,totalPage:20,url:"./"});
  pager3.render();
   var pager21=new pagination({element: '#pager21',currentPage:21,totalPage:21,url:"./"});
  pager21.render();

});
````
