## JS Tips

#### 随机获取一个布尔值(true/false)

- 使用Math.random()方法返回一个布尔值，Math.random将在0和1之间创建一个随机数，并检查它是否高于或低于0.5，得到真和假的概率都是50%

```js
const randomBoolean = () => Math.random() >= 0.5;
console.log(randomBoolean());
```

#### 检查日期是否为工作日

```js
const isWeekday = (date) => date.getDay() % 6 !== 0;
console.log(isWeekday(new Date(2021, 03, 17)));
// Result: false (Wednesday)
```

#### 反转字符串

```js
const reverse = str => str.split('').reverse().join('');
reverse('hello world');
// Result: "dlrow olleh"
```

#### 检查当前Tab页是否在前台

```js
const isBrowserTabInView = () => document.hidden;
isBrowserTabInView();
// Result: return true or false depending on if Tab is in view/focus
```

#### 检查数字是否为奇数

```js
const isEven = num => num % 2 === 0
console.log(isEven(2));
// Result: true
```

#### 从日期中获取时间

```js
const timeFromDate = date => date.toTimeString().slice(0, 8);
console.log(timeFromDate(new Date(2021, 0, 10, 17, 30, 0)));
// Result: "17:30:00"
console.log(timeFromDate(new Date()));
// Result: will log the current time
```

#### 保留小数点(非四舍五入)

```js
const toFixed = (n, fixed) => ~~(Math.pow(10, fixed) * n) / Math.pow(10, fixed);
// Examples
toFixed(25.198726354, 1);  //25.1
toFixed(25.198726354, 2);  //25.19
toFixed(25.198726354, 5);  //25.19872
toFixed(25.198726354, 6);  //25.198726
```

#### 检查元素当前是否为聚焦状态

```js
const elementIsInFocus = (el) => (el === document.activeElement);
elementIsInFocus(anyElement)
// Result: will return true if in focus, false if not in focus
```

#### 检查浏览器是否支持触摸事件

```js
const touchSupported = () => {
    ('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch);
}
console.log(touchSupported());
// Result: will return true if touch events are supported, false if not.
```

#### 检查当前用户是否为苹果设备

```js
const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
console.log(isAppleDevice);
// Result: will return true if user is on an Apple device
```

#### 滚动到页面顶部

- IE不支持scrollTo()方法

```js
const goToTop = () => window.scrollTo(0, 0);
goToTop();
// Result: will scroll the browser to the top of the page.
```

#### 获取所有参数平均值

```js
const average = (...args) => args.reduce((a, b) => a + b) / args.length;
average(1, 2, 3, 4);
// Result: 2.5
```

#### 转换华氏度/摄氏度

```js
const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit -32) * 5/9;
//Examples
celsiusToFahrenheit(15);  //59
fahrenheitToCelsius(59);  //15
```

#### 非阻塞脚本

- Javascript无阻塞加载具体方式:

```js
<script>
var script=document.createElement("script");
script.type="text/javascript";
script.src="file.js";
document.getElementsByTagName("head")[0].appendChild(script);
</script>
```

#### js对象的深度克隆

```js
function clone(Obj) {   
    var buf;   
    if (Obj instanceof Array) {   
        buf = [];  //创建一个空的数组 
        var i = Obj.length;   
        while (i--) {   
            buf[i] = clone(Obj[i]);   
        }   
        return buf;   
    }else if (Obj instanceof Object){   
        buf = {};  //创建一个空对象 
        for (var k in Obj) {  //为这个对象添加新的属性 
            buf[k] = clone(Obj[k]);   
        }   
        return buf;   
    }else{   
         return Obj;   
    }   
} 
```

#### 获取浏览器UA(User Agent，用户代理)

```js
<script>
function whatBrowser() {
    //获取完整的浏览器名称
    document.Browser.Name.value=navigator.appName; 
    //获取浏览器的版本，一般不与实际的浏览器版本对应
    document.Browser.Version.value=navigator.appVersion; 
    //获取浏览器的名称。通常都是Mozilla，即使在非Mozilla的浏览器中也是如此
    document.Browser.Code.value=navigator.appCodeName; 
    //获取浏览器的用户代理字符串
    document.Browser.Agent.value=navigator.userAgent;
</script>
```

#### 数组去重

```js
// 方法一
Array.prototype.unique1 = function () {
  var n = []; //一个新的临时数组
  for (var i = 0; i < this.length; i++) //遍历当前数组
  {
    //如果当前数组的第i已经保存进了临时数组，那么跳过，
    //否则把当前项push到临时数组里面
    if (n.indexOf(this[i]) == -1) n.push(this[i]);
  }
  return n;
}

// 方法二
Array.prototype.unique2 = function()
{
    var n = {},r=[]; //n为hash表，r为临时数组
    for(var i = 0; i < this.length; i++) //遍历当前数组
    {
        if (!n[this[i]]) //如果hash表中没有当前项
        {
            n[this[i]] = true; //存入hash表
            r.push(this[i]); //把当前数组的当前项push到临时数组里面
        }
    }
    return r;
}

// 方法三
Array.prototype.unique3 = function()
{
    var n = [this[0]]; //结果数组
    for(var i = 1; i < this.length; i++) //从第二项开始遍历
    {
        //如果当前数组的第i项在当前数组中第一次出现的位置不是i，
        //那么表示第i项是重复的，忽略掉。否则存入结果数组
        if (this.indexOf(this[i]) == i) n.push(this[i]);
    }
    return n;
}
```

#### js操作获取和设置cookie

```js
//创建cookie
function setCookie(name, value, expires, path, domain, secure) {
    var cookieText = encodeURIComponent(name) + '=' + encodeURIComponent(value);
    if (expires instanceof Date) {
        cookieText += '; expires=' + expires;
    }
    if (path) {
        cookieText += '; expires=' + expires;
    }
    if (domain) {
        cookieText += '; domain=' + domain;
    }
    if (secure) {
        cookieText += '; secure';
    }
    document.cookie = cookieText;
}

//获取cookie
function getCookie(name) {
    var cookieName = encodeURIComponent(name) + '=';
    var cookieStart = document.cookie.indexOf(cookieName);
    var cookieValue = null;
    if (cookieStart > -1) {
        var cookieEnd = document.cookie.indexOf(';', cookieStart);
        if (cookieEnd == -1) {
            cookieEnd = document.cookie.length;
        }
        cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
    }
    return cookieValue;
}

//删除cookie
function unsetCookie(name) {
    document.cookie = name + "= ; expires=" + new Date(0);
}
```
