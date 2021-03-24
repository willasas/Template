## css书写顺序
- 1.位置属性(position, top, right, z-index, display, float等)　
- 2.大小(width, height, padding, margin)
- 3.文字系列(font, line-height, letter-spacing, color- text-align等)　
- 4.背景(background, border等)
- 5.其他(animation, transition等)

## css语法
- 命名一般为小写英文字母。
- 为了代码的易读性，在每个声明块的左花括号前添加一个空格。
- 每条声明语句的 : 后应该插入一个空格。
- 所有声明语句都应当以分号结尾。最后一条声明语句后面的分号是可选的，但是，如果省略这个分号，你的代码可能更易出错。
- 对于属性值或颜色参数，省略小于 1 的小数前面的 0 （例如，.5 代替 0.5；-.5px 代替 -0.5px）。
- 十六进制值应该全部小写，例如，#fff。
- 尽量使用简写形式的十六进制值，例如，用 #fff 代替 #ffffff。
- 避免为 0 值指定单位，例如，用 margin: 0; 代替 margin: 0px;。

## css常用命名
1、页面结构
　　wrap：外套、包裹，用于最外层。

　　wrapper：外套，用于页面外围控制整体布局宽度。

　　box：盒子，容器。

　　header：头部，用于页头部分。

　　nav：导航，主导航。

　　main：主要区域，内容主体。

　　content/container：内容，内容容器。

　　sidebar：侧边栏。

　　footer：底部，用于页脚部分。

2、功能区块
　　left center right：左中右。

　　main-left：左侧主要布局。

　　main-right：右侧主要布局。

　　logo：网站 LOGO 标志。

　　search：搜索输入框。

　　loginbar：登录条。

　　regsiter：注册模块。

　　banner：广告，用于横幅广告条。

　　menu：菜单。

　　submenu：子菜单，二级菜单。

　　top：顶部。

　　topnav：顶导航。

　　mainnav：主导航。

　　subnav：子导航，二级导航。

　　leftsideBar：左导航。

　　rightsideBar：右导航。

　　topbar：顶部工具/菜单。

　　bottom：底部。

　　bottombar：底部工具栏。

　　tool：工具条。

　　shop：功能区，如购物车、收银台。

3、其他常用命名
　　title：栏目标题。

　　summary：摘要。

　　hot：热门热点信息，推荐。

　　msg：提示信息。

　　news：新闻。

　　list：列表，文章列表。

　　piclist：图片列表。

　　newslist：新闻列表。

　　search-output：搜索输出。

　　search-results：搜索结果。

　　drop/dropdown：下拉。

　　dropmenu/dorpdown-content：下拉菜单。

　　scroll：滚动。

　　homepage：首页。

　　subpage：子页面，二级页面。

　　tag：标签。

　　tab：标签页。

　　tips：小技巧。

　　ranking：排行。

　　vote：投票。

　　bth：按钮。

　　icon：图标。

　　arr/arrow：箭头。

　　status：状态。

　　note：注释。

　　skin：皮肤。

　　current：当前的。

　　active：活跃的，有效的。

　　download：下载。

　　friendLink：友情链接。

　　copyright：版权信息。

　　partner：合作伙伴。

　　joinus：加入我们。

　　sitemap：网站地图。

　　siteinfo：网站信息。

　　siteinfoLegar：法律声明。

　　announcement：公告。

　　guild：指南。

　　service：服务。

　　promotion：推广。

　　blog：博客。

　　forum：论坛。

4、产品相关命名
　　keyword：关键词。

　　products：产品。

　　products-prices：产品价格。

　　products-description：产品描述。

　　products-review：产品评论。

　　editor-review：编辑评论。

　　news-products：最新产品。

　　publisher：生产商。

　　screenshot：缩略图。

　　faqs：常见问题。

　　barnding：商标。

　　pay：充值。

　　reputation：信誉。

5、常用的文件命名
　　全局样式：global.css

　　布局结构：layout.css

　　基本共用：base.css

　　综合样式：style.css

　　主要的：master.css

　　模块：module.css

　　表单：forms.css

　　主题/网页换肤：themes.css

　　字体：font.css

　　打印：print.css

　　补丁：mend.css

　　私有样式/独立页面，根据实际情况，可以自定义命名 CSS 文件。

　　以上这些常用的文件命名，无需全部使用，根据实际情况，每个页面引用不超过 3 个 CSS 文件。

6、 ID 和 Class 命名规范
　　(1)、主要的、重要的、特殊的、最外层的盒子使用 ID 属性命名，其他的都使用 class 属性命名。

　　(2)、命名规则须以内容优先，表现为辅。首先根据所要呈现的内容、功能来命名，如果内容实在无法找到合适的命名，可以再根据表现命名。

　　(3)、大多数情况下，命名都使用英文单词，可以增加代码的可读性，但特殊情况下，实在找不到合适的单词时，可以使用拼音命名，但必须简明，结构清晰。

　　(4)、ID 和 Class 命名尽量全部都使用小写，多个单词可以使用连字符（-）链接，命名可以使用数字，但不能以数字开头。

　　(5)、命名可以使用单词缩写，但必须确保是有效的缩写，即别人能看懂，不能自定义缩写。

## css的引入
- Css的引入一般有两种，link和@import,一般建议使用link引入。这样可以避免考虑@import的语法规则和注意事项，避免产生资源文件下载顺序混乱和http请求过多的烦恼。

## css的命名规范（BEM,OOCSS）