# IFE day3

今天所写html展示:
![image](https://github.com/Severu5/Hello-World/blob/master/images/QQ%E6%88%AA%E5%9B%BE20190927141547.png)

html代码:
```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Getting started with CSS</title>
</head>

<body>
    
    <h1>I am a level one heading</h1>

    <p>This is a paragraph of text. In the text is a <span>span element</span> 
and also a <a href="http://example.com">link</a>.</p>

    <p>This is the second paragraph. It contains an <em>emphasized</em> element.</p>

    <ul>
        <li>Item one</li>
        <li>Item two</li>
        <li>Item <em>three</em></li>
    </ul>

</body>

</html>
```

css:
```css
body{
  font-family: x-locale-heading-primary,zillaslab,Palatino,"Palatino Linotype",x-locale-heading-secondary,serif;
}
h1 {
  color:red;
  font-size: 30px;
}
p,li{
  /* 设置了字的颜色，你可以尝试改成yellow */
  color: green;
  font-style:italic;
  font-weight:bold;
}
li{
  list-style-type:none;
  text-align:center;
  text-decoration:underline;
}
h1+p{
  text-indent:100px;
  font-size:200%;
  line-height:200px;
  text-shadow:5px 5px 5px #FF0000;
}
```

## 验证

* 什么是CSS，CSS是如何工作的

> 1. CSS 指层叠样式表 (Cascading Style Sheets)
> 2. 样式定义如何显示 HTML 元素
> 3. 样式通常存储在样式表中
> 4. 把样式添加到 HTML 4.0 中，是为了解决内容与表现分离的问题
> 5. 外部样式表可以极大提高工作效率
> 6. 外部样式表通常存储在 CSS 文件中
> 7. 多个样式定义可层叠为一

* CSS的基本语法是怎样的

> 1. CSS 规则由两个主要的部分构成：选择器，以及一条或多条声明。
> 2. selector {declaration1; declaration2; ... declarationN }
> 3. 选择器通常是您需要改变样式的 HTML 元素。
> 4. 每条声明由一个属性和一个值组成。
> 5. 属性（property）是您希望设置的样式属性（style attribute）。每个属性有一个值。属性和值被冒号分开。

* CSS选择器是什么概念，简单选择器和属性选择器是什么

> 1. 在 CSS 中，选择器是一种模式，用于选择需要添加样式的元素。
> 2. "CSS" 列指示该属性是在哪个 CSS 版本中定义的。（CSS1、CSS2 还是 CSS3。）

* 文本样式都有哪些相关属性，对应哪些值

> font-family、font-style、font-weight等等。