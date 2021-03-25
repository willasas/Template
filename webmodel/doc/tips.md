## 前端技巧总结

#### 页面结构

```html
<!DOCTYPE html>
<html>
 <head>
  <meta charset="utf-8/gbk" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <meta name="robots" content="all" />
  <meta name="author" content="author-name" />
  <meta name="Copyright" content="Company name" />
  <meta name="Description" content="About Website description" />
  <meta name="Keywords" content="Website Keywords" />

  <title>Activity name-Subtitle name-Website name</title>
        <!-- website stylesheet -->
  <link rel="stylesheet" type="text/css" href="css/index.css" />
 </head>
 <body>
        <!-- If the top menu and sidebar are beyond the safe distance of the page -->
        <div class="nav">
            <!-- website-logo -->
            <a href="javascript:;" onclick="DSSendClick('btn','logo','website-logo');" class="logo" target="_blank" title="website-logo"></a>
            <!-- website-menu -->
            <ul class="main-nav">
                <li><a href="javascript:;" onclick="DSSendClick('btn','menu1','menu1');" title="menu1-name">menu1-name</a></li>
                <li><a href="javascript:;" onclick="DSSendClick('btn','menu2','menu2');" title="menu2-name">menu2-name</a></li>
                <li><a href="javascript:;" onclick="DSSendClick('btn','menu3','menu3');" title="menu3-name">menu3-name</a></li>
                <li><a href="javascript:;" onclick="DSSendClick('btn','menu4','menu4');" title="menu4-name">menu4-name</a></li>
            </ul>
            <div class="sub-nav">
                <ul>
                    <li><a href="javascript:;" onclick="DSSendClick('btn','submenu1','submenu1');" title="submenu1-name">submenu1-name</a></li>
                    <li><a href="javascript:;" onclick="DSSendClick('btn','submenu2','submenu2');" title="submenu2-name">submenu2-name</a></li>
                    <li><a href="javascript:;" onclick="DSSendClick('btn','submenu3','submenu3');" title="submenu3-name">submenu3-name</a></li>
                    <li><a href="javascript:;" onclick="DSSendClick('btn','submenu4','submenu4');" title="submenu4-name">submenu4-name</a></li>
                </ul>
            </div>
        </div>
        <div class="sidebar">
            <ul>
    <li class="sidemenu m1 on">
     <a href="#content1" title="sidebar-name1">sidebar-name1</a>
    </li>
    <li class="sidemenu m2">
     <a href="#content2" title="sidebar-name2">sidebar-name2</a>
    </li>
    <li class="sidemenu m3">
     <a href="#content3" title="sidebar-name3">sidebar-name3</a>
    </li>
    <li class="sidemenu m4">
     <a href="#content4" title="sidebar-name4">sidebar-name4</a>
    </li>
    <li class="sidemenu m5">
     <a href="#content5" title="sidebar-name5">sidebar-name5</a>
    </li>
   </ul>
   <a class="close" href="javascript:;" title="关闭"></a>
        </div>
        <!-- Page container -->
  <div class="wrap">
   <div class="wrapper1">
                <div class="main">
                    <!-- Page content area -->
                </div>
   </div>
            <div class="wrapper2">
                <div class="main">
                    <!-- Page content area -->
                </div>
   </div>
            <div class="wrapper3">
                <div class="main">
                    <!-- Page content area -->
                </div>
   </div>
        </div>
        <!-- footer -->
        <div class="footer">

        </div>
        <!-- Popup -->
        <div class="popup" id="popup1" style="display: none">
            <div class="popup-box pop-cont">
                <!-- popup content -->
            </div>
            <!-- popup close button -->
            <a class="popup-close" href="javascript:showDialog.hide()" title="关闭">x</a>
        </div>

        <!--script link-->
        <script type="text/javascript" src="./js/index.js"></script>
    </body>
</html>
```

#### 处理背景图片与背景图片之间的白线，可在背景图片样式中加入如下代码

```css
margin-top: -1px;
```

#### 容器和背景常用样式

```css
/*container style*/
.wrap{
 position: relative;
 overflow: hidden;
 margin: 0 auto;
 max-width: 1920px;
 width: 100%;
 height: 100%;
 font-size: 0;
}
/*Content area background*/
.wrapper1 {
 overflow: hidden;
 min-width: 1400px;
 height: 1135px;
 background: url(../img/bg_01.jpg) no-repeat center;
}

.wrapper2 {
 overflow: hidden;
    min-width: 1400px;
 margin-top: -1px; /*清楚白线*/
 height: 1253px;
 background: url(../img/bg_02.jpg) no-repeat center;
}

.wrapper3 {
 overflow: hidden;
 min-width: 1400px;
 height: 1013px;
 background: url(../img/bg_03.jpg) no-repeat center;
}
/*Safe area*/
.main {
 position: relative;
 margin: 0 auto;
 width: 1400px;
 height: 100%;
}
```

#### 清楚a标签下划线

```css
a:hover {
    text-decoration: none;
    filter: brightness(1.2);
}
/*样式默认链接*/
a[href]:not([class]){
    color: #999;
    text-decoration: none;
    transition: all ease-in-out .3s;
}
```

#### a标签设置可选区域（大小）

```css
a {
    display: block;
    width: 100%;
    height: 100%;
    cursor: pointer; /*设置为鼠标手*/
}
```

#### 侧边栏基本属性设置

```css
.sidebar{
 position: fixed;
    background: url("../img/side-bg.png") no-repeat;
    width: 237px;
    height: 404px;
    top: 50%!important;
    margin-top: -202px;
    right: 0;
    overflow: hidden;
    z-index: 100;
}
```

#### 顶部导航菜单属性设置

```css
.nav {
    width: 1400px;
 margin: 0 auto;
 height: 74px;
 overflow: hidden;
}
/*logo style*/
.nav a.logo {
    float: left;
 margin: 9px 0 0 49px;
 width: 174px;
 height: 56px;
 background: url(../-img/logo.png) no-repeat;
}
/*menu container style*/
.nav .main-nav{
    float: left;
 margin-left: 54px;
 width: 1120px;
 height: 74px;
}
```

#### 弹窗属性设置

```css
/*popup style*/
.popup{
    position: relative;
}

.popup .pop-cont{
    display: block;
    visibility: visible;
    position: fixed;
    z-index: 9999;
    left: 50%;
    top: 50%;
    margin-top: -271px;
    margin-left: -393.5px;
}
/*popup container style*/
.popup .popup-box{
    background: url(../img/lq-bg.png) no-repeat;
 width: 787px;
    height: 542px;
    padding-top: 105px;
    z-index: 10;
}
/*popup close button style*/
.popup .popup-close{
    position: absolute;
 top: -30px;
 right: -30px;
 background: url(../img/close.png) no-repeat;
 width: 42px;
 height: 42px;
}
```

#### 当css样式添加了padding属性时，添加如下代码

```css
ul {
    padding-top: 6px;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
}
```

#### 居中显示

```css
.img {
    display: block;
    margin: 0 auto;
}
p{
    text-align: center;
    line-height: 10px; /*与父容器高度一致*/
}
```

#### 图片在父容器中左右居中显示

```css
/*father container style*/
.wrapper3 ul li{
 width: 260px;
 height: 366px;
 float: left;
 position: relative;
 margin-right: 8px;
}
/*children container style*/
.wrapper3 ul li .img{
 position: absolute;
 top: 47px;
 left: 50%;
 transform: translateX(-50%);
}
```

#### 设置em,i，p标签字体风格样式

```css
em {
    font-style: normal; /*italic：斜体*/
}
```

#### 当图片和文字在同一行时，可以设置如下属性，使图片与文本垂直居中显示(一般活动规则较为常用)

```css
.img{
    vertical-align: middle;
}
```

#### 垂直居中任何元素

```css
html, body{
    height: 100%;
    margin: 0;
}
body{
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-flex;
    display: flex;
}
```

#### 清除最后一个元素右边距

```css
.box1 ul li:last-child{
    margin-right: 0;
}
```

#### 逐帧动画

```css
@keyframes animate-name{
    from{
    <!--原位-->
        background-position: 0 0; 
    }
    to{
    <!--最后一帧-->
        background-position: -1540px 0 ;
    }
}
```

#### 页面全屏

```css
.full-width {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}
```

#### 多行文字居中

```css
.mulit_line{ 
    border:1px dashed #cccccc; 
    padding-left:5px;
}
.mulit_line span{ 
    display:inline-block; 
    line-height:14px; 
    vertical-align:middle;
}
```

#### 页面加载优化

1. 优化图片
2. 图像格式的选择（GIF：提供的颜色较少，可用在一些对颜色要求不高的地方） 
3. 优化CSS（压缩合并css，如margin-top,margin-left...) 
4. 网址后加斜杠（如www.campr.com/目录，会判断这个“目录是什么文件类型，或者是目录。） 
5. 标明高度和宽度（如果浏览器没有找到这两个参数，它需要一边下载图片一边计算大小，如果图片很多，浏览器需要不断地调整页面。这不但影响速度，也影响浏览体验。 
当浏览器知道了高度和宽度参数后，即使图片暂时无法显示，页面上也会腾出图片的空位，然后继续加载后面的内容。从而加载时间快了，浏览体验也更好了。） 
6. 减少http请求（合并文件，合并图片）。

#### 性能优化

1. 减少http请求次数：CSS Sprites, JS、CSS源码压缩、图片大小控制合适；网页Gzip，CDN托管，data缓存 ，图片服务器。
2. 前端模板 JS+数据，减少由于HTML标签导致的带宽浪费，前端用变量保存AJAX请求结果，每次操作本地变量，不用请求，减少请求次数
3. 用innerHTML代替DOM操作，减少DOM操作次数，优化javascript性能。
4. 当需要设置的样式很多时设置className而不是直接操作style。
5. 少用全局变量、缓存DOM节点查找的结果。减少IO读取操作。
6. 避免使用CSS Expression（css表达式)又称Dynamic properties(动态属性)。
7. 图片预加载，将样式表放在顶部，将脚本放在底部  加上时间戳。
8. 嵌入js放在底部，虽然放在底部照样会阻塞所有呈现，但不会阻塞资源下载。
9. 如果嵌入JS放在head中，请把嵌入JS放在CSS头部。

#### 等宽表格单元格

```css
.calendar {
    table-layout: fixed;
}
```

#### 