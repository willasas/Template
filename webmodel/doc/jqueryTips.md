## 常用JQuery

#### Tab/按钮点击切换功能

```html
<div class="box">
  <div class="Parent-element-class-name">
    <a class="" href="javascript:;"  onclick="DSSendClick('btn','submenu1','submenu1');">被点击的按钮</a>
  </div>
  <div class="Child-element-class-nam">
    <ul>
      <li class="">
        <p>要显示的内容</p>
      </li>
    </ul>
  </div>
</div>

<script>
// 人物切换 role_wrap
$('.Parent-element-class-name a').on('click', function() {
 var idx = $(this).index(); //获取点击下标
 $(this).addClass('on').siblings().removeClass('on'); //添加on事件
 $('.Child-element-class-name li').eq(idx).show().siblings('.Child-element-class-nam li').hide(); //显示隐藏对应内容
})
</script>
```

#### hover时切换对应的内容

```js
$('#Parent-element-class-name a.class').hover(function() {
 var idx = $(this).index();
 $('.Child-element-class-name').eq(idx).show().siblings('.Child-element-class-name').hide();
})
```
