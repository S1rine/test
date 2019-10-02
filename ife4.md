# IFE day4

今日所写html展示:
![image](https://github.com/Severu5/Hello-World/blob/master/images/img3.png)

html代码:
```html
<h1>简历</h1>
<p>姓名：张三</p>
<p>联系方式：
  <ul>
    <li>手机:1xxxxxxxxx</li> 
    <li>邮箱:1xxxxxxxxxx</li>
  </ul>
</p>
<p>本科:12345</p>
<p>项目经验：无</p>
<p>链接:<a href="#">abcdef</a></p>
```

css:
```css
h1{
  font-size:50px;
  background:red;
}
p{
  color:orange;
  font-weight:900;
  background-color:green;
  border:5px solid red;
  border-bottom:none;
}
li{
  list-style:square inside url('/i/arrow.gif');
  list-style-image:url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570171937&di=97917d1846ae1038b849d5828c08c9c3&imgtype=jpg&er=1&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F034f8c1a7e018034c8858ac9fecfb41a8dea6b4d1e27-dGr6Yf_fw78);
  list-style-type:circle;
}
body{
  background-image:url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569576886394&di=99bd1b56ae5f30bac7645c654292f8aa&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Fback_pic%2F03%2F57%2F88%2F8257a1b6cb2e4be.jpg);
  background-repeat:no-repeat;
  background-position:center;
}
a:link{
  color:red;
}
a:hover{
  color:blue;
  font-size:200%;
}
a:visited{
  color:black;
}
a:active{
  color:white;
}
```

## 验证
* 背景，边框，列表，链接相关属性
> ### 背景
>|属性	|描述	|
>|--	|--	|
>|background				|简写属性，作用是将背景属性设置在一个声明中。	|
>|background-attachment	|背景图像是否固定或者随着页面的其余部分滚动。	|
>|background-color		|设置元素的背景颜色。							|
>|background-image		|把图像设置为背景。								|
>|background-position	|设置背景图像的起始位置。						|
>|background-repeat		|设置背景图像是否及如何重复。					|
>
> ### 边框
>|属性	|描述	|
>|--	|--	|
>|border				|简写属性，用于把针对四个边的属性设置在一个声明。						|
>|border-style		|用于设置元素所有边框的样式，或者单独地为各边设置边框样式。				|
>|border-width		|简写属性，用于为元素的所有边框设置宽度，或者单独地为各边边框设置宽度。	|
>|border-color		|简写属性，设置元素的所有边框中可见部分的颜色，或为 4 个边分别设置颜色。|
>|border-bottom		|简写属性，用于把下边框的所有属性设置到一个声明中。						|
>|border-bottom-color|设置元素的下边框的颜色。												|
>|border-bottom-style|设置元素的下边框的样式。												|
>|border-bottom-width|设置元素的下边框的宽度。												|
>|border-left		|简写属性，用于把左边框的所有属性设置到一个声明中。						|
>|border-left-color	|设置元素的左边框的颜色。												|
>|border-left-style	|设置元素的左边框的样式。												|
>|border-left-width	|设置元素的左边框的宽度。												|
>|border-right		|简写属性，用于把右边框的所有属性设置到一个声明中。						|
>|border-right-color	|设置元素的右边框的颜色。												|
>|border-right-style	|设置元素的右边框的样式。												|
>|border-right-width	|设置元素的右边框的宽度。												|
>|border-top			|简写属性，用于把上边框的所有属性设置到一个声明中。						|
>|border-top-color	|设置元素的上边框的颜色。												|
>|border-top-style	|设置元素的上边框的样式。												|
>|border-top-width	|设置元素的上边框的宽度。												|
>
> ### 列表
> |属性	|描述|
> |--	|--	|
>|list-style			|简写属性。用于把所有用于列表的属性设置于一个声明中。	|
>|list-style-image	|将图象设置为列表项标志。								|
>|list-style-position|设置列表中列表项标志的位置。							|
>|list-style-type	|设置列表项标志的类型。									|
>|marker-offset		|														|
>
> ### 链接
> ```css
> a:link {color:#FF0000;}		/* 未被访问的链接 */
> a:visited {color:#00FF00;}	/* 已被访问的链接 */
> a:hover {color:#FF00FF;}	/* 鼠标指针移动到链接上 */
> a:active {color:#0000FF;}	/* 正在被点击的链接 */
> ```
* CSS 各种选择器的概念，使用方法及使用场景
> ### 选择器的分组
> 你可以对选择器进行分组，这样，被分组的选择器就可以分享相同的声明。用逗号将需要分组的选择器分开。在下面的例子中，我们对所有的标题元素进行了分组。所有的标题元素都是绿色的。
> ```css
> h1,h2,h3,h4,h5,h6 {
>   color: green;
>   }
> ```
> ### 继承及其问题
> 根据 CSS，子元素从父元素继承属性。但是它并不总是按此方式工作。看看下面这条规则：
> ```css
> body {
>      font-family: Verdana, sans-serif;
>      }
> ```
> 根据上面这条规则，站点的 body 元素将使用 Verdana 字体（假如访问者的系统中存在该字体的话）。
>通过 CSS 继承，子元素将继承最高级元素（在本例中是 body）所拥有的属性（这些子元素诸如 p, td, ul, ol, ul, li, dl, dt,和 dd）。不需要另外的规则，所有 body 的子元素都应该显示 Verdana 字体，子元素的子元素也一样。并且在大部分的现代浏览器中，也确实是这样的。
> ### 派生选择器
> 通过依据元素在其位置的上下文关系来定义样式，你可以使标记更加简洁。
>```css
> li strong {
>    font-style: italic;
>    font-weight: normal;
>  }
>```
>```html
> <p><strong>我是粗体字，不是斜体字，因为我不在列表当中，所以这个规则对我不起作用</strong></p>
> <ol>
>     <li><strong>我是斜体字。这是因为 strong 元素位于 li 元素内。</strong></li>
>     <li>我是正常的字体。</li>
> </ol>
> ```
> ### 伪类选择器
>|属性			|描述										|CSS|
>|--	|--	|--	|
>|:active		|向被激活的元素添加样式。					|1	|
>|:focus			|向拥有键盘输入焦点的元素添加样式。			|2	|
>|:hover			|当鼠标悬浮在元素上方时，向元素添加样式。	|1	|
>|:link			|向未被访问的链接添加样式。					|1	|
>|:visited		|向已被访问的链接添加样式。					|1	|
>|:first-child	|向元素的第一个子元素添加样式。				|2	|
>|:lang			|向带有指定 lang 属性的元素添加样式。		|2	|
* CSS 选择器的优先级
> ### 优先级
>|选择器									|千位	|百位	|十位	|个位	|优先级	|
>|--	|--	|--	|--	|--	|--	|
>|h1										|0		|0		|0		|1		|0001	|
>|h1 + p::first-letter					|0		|0		|0		|3		|0003	|
>|li > a[href*="en-US"] > .inline-warning|0		|0		|2		|2		|0022	|
>|#identifier							|0		|1		|0		|0		|0100	|
>|内联样式								|1		|0		|0		|0		|1000	|
>
> ### !important
>有一个特殊的 CSS 可以用来覆盖所有上面所有优先级计算，不过需要很小心的使用 — `!important`。用于修改特定属性的值， 能够覆盖普通规则的层叠。
