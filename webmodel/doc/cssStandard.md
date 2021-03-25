## CSS书写规范

#### Css书写顺序

1. 位置属性(position, top, right, z-index, display, float等)
2. 大小(width, height, padding, margin)
3. 文字系列(font, line-height, letter-spacing, color- text-align等)
4. 背景(background, border等)
5. 其他(animation, transition等)

#### Css语法

1. 命名一般为小写英文字母。
2. 为了代码的易读性，在每个声明块的左花括号前添加一个空格。
3. 每条声明语句的 : 后应该插入一个空格。
4. 所有声明语句都应当以分号结尾。最后一条声明语句后面的分号是可选的，但是，如果省略这个分号，你的代码可能更易出错。
5. 对于属性值或颜色参数，省略小于 1 的小数前面的 0 （例如，.5 代替 0.5；-.5px 代替 -0.5px）。
6. 十六进制值应该全部小写，例如，#fff。
7. 尽量使用简写形式的十六进制值，例如，用 #fff 代替 #ffffff。
8. 避免为 0 值指定单位，例如，用 margin: 0; 代替 margin: 0px;。

#### Css的引入

- Css的引入一般有两种，link和@import,一般建议使用link引入。这样可以避免考虑@import的语法规则和注意事项，避免产生资源文件下载顺序混乱和http请求过多的烦恼。

#### Css的命名规范(BEM,OOCSS)

- BEM：BEM的意思就是块（block）、元素（element）、修饰符（modifier）。

  - 命名约定如下：

    - .block{} // 块即是通常所说的 Web 应用开发中的组件或模块。每个块在逻辑上和功能上都是相互独立的。
    - .block__element{} // 元素是块中的组成部分。元素不能离开块来使用。BEM 不推荐在元素中嵌套其他元素。
    - .block--modifier{} // 修饰符用来定义块或元素的外观和行为。同样的块在应用不同的修饰符之后，会有不同的外观。

- OOCSS（面向对象CSS）：OOCSS 表示的是面向对象 CSS（Object Oriented CSS），是一种把面向对象方法学应用到 CSS 代码组织和管理中的实践。 OOCSS最关键的一点就是：提高他的灵活性和可重用性。这个也是OOCSS最重要的一点。OOCSS主张是通过在基础组件中添加更多的类，从而扩展基础组件的CSS规则，从而使CSS有更好的扩展性。
  
  - OOCSS适合真正的大型网站开发
