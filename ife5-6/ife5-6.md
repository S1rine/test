# IFE day5/6

本次课程内容较多，先提供样例展示：

简历版本1:

![image](https://github.com/Severu5/Hello-World/blob/master/ife5-6/img/jianli1.png)

简历版本2:

![image](https://github.com/Severu5/Hello-World/blob/master/ife5-6/img/jianli2.png)

简历版本3:

![image](https://github.com/Severu5/Hello-World/blob/master/ife5-6/img/jianli3.png)

html代码及css文件均放置于[github](https://github.com/Severu5/Hello-World/tree/master/ife5-6)内。

## 验证

* 盒模型的概念
> 在 CSS 中，所有的元素都被一个个的“盒子（box）”包围着，正确地掌握使用这些“盒子”的方法，是我们能够利用 CSS 实现准确布局、处理元素之间关系的基本前提。
> 
> CSS中组成一个块级盒子需要:
> 
> * Content box: 这个区域是用来显示内容，大小可以通过设置 width 和 height.
> * Padding box: 包围在内容区域外部的空白区域； 大小通过 padding 相关属性设置。
> * Border box: 边框盒是包裹内容和内边距。大小通过 border 相关属性设置。
> * Margin box: 这是最外面的区域，是盒子和其他元素之间的空白区域。大小通过 margin 相关属性设置。
> 
> 如下图：
> 
> ![image](https://github.com/Severu5/Hello-World/blob/master/ife5-6/img/box-model.png)

* inline、block和inline-block的概念
> 块状盒子（Block box） 和 行内盒子（Inline box）节
> 在 CSS 中我们广泛地使用两种“盒子” — 块状盒子 (block box) 和 行内盒子 (inline box)。这两种盒子会在页面流（page flow）和元素之间的关系方面表现出不同的行为:
> 
> 一个被定义成块状的（block）盒子会表现出以下行为:
> 
> * 盒子会在行内方向上扩展并占据父容器在该方向上的所有可用空间，在绝大数情况下意味着盒子会和父容器一样宽
> * 每个盒子都会换行
> * width 和 height 属性可以发挥作用
> * 内补（padding）, 外补（margin） 和 边框（border） 会将其他元素从当前盒子周围“推开”
> * 除非特殊指定，诸如标题(e.g. ```<h1>```)和段落(e.g. ```<p>```)默认情况下都是块状的盒子。
> 
> 如果一个盒子对外显示为 inline, 那么他的行为如下:
> 
> * 盒子不会产生换行。
> * width 和 height 属性将不起作用。
> * 内补、外补以及边框会被应用但是不会把其他处于 inline 状态的盒子推开。
> * 用做链接的 ```<a>``` 元素、 ```<span>```、 ```<em>``` 以及 ```<strong>``` 都是默认处于 inline 状态的。
> 
> 我们通过 display 属性设置 inline 或者 block 盒子对外显示的类型。
>  
> inline-block:
> 
> 简单来说就是在CSS中通过display:inline-block对一个对象指定inline-block属性，可以将对象呈递为内联对象(inline)，但是对象的内容作为块对象(block)呈递。

* 内外边距，宽度，高度，box-sizing等属性
> #### 内边距：
> ```css
> h1 {
>   padding-top: 10px;
>   padding-right: 0.25em;
>   padding-bottom: 2ex;
>   padding-left: 20%;
>   }
> ```
> 
> #### 外边距：
> ```css
> h2 {
>  margin-top: 20px;
>  margin-right: 30px;
>  margin-bottom: 30px;
>  margin-left: 20px;
>  }
>  ```
>  
>  #### 宽高：
>  在标准模型中，如果你给盒设置 width 和 height，实际设置的是 content box。 padding 和 border 再加上设置的宽高得到整个盒子大小。 见下图。
> 
> 假设定义了 width, height, margin, border, and padding:
>
>```css
> .box {
>   width: 350px;
>   height: 150px;
>   margin: 25px;
>   padding: 25px;
>   border: 5px solid black;
> }
> ```
> 如果使用标准模型宽度 = 410px (350 + 25 + 25 + 5 + 5)，高度 = 260px (150 + 25 + 25 + 5 + 5)，padding 加 border 再加 content box。
> 
> ![image](https://github.com/Severu5/Hello-World/blob/master/ife5-6/img/standard-box-model.png)
>
> #### 替代盒模型：
> 你可能会认为盒子的大小还要加上边框和内边距，这样很麻烦，而且你的想法是对的! 因为这个原因，css还有一个替代盒模型。使用这个模型，所有宽度都是可见宽度，所以内容宽度是该宽度减去边框和填充部分。使用上面相同的样式得到 (width = 350px, height = 150px).
> 
> ![image](https://github.com/Severu5/Hello-World/blob/master/ife5-6/img/alternate-box-model.png)

* 浮动，清除浮动
> #### 浮动：
> float 属性定义元素在哪个方向浮动。以往这个属性总应用于图像，使文本围绕在图像周围，不过在 CSS 中，任何元素都可以浮动。浮动元素会生成一个块级框，而不论它本身是何种元素。
> 
> 如果浮动非替换元素，则要指定一个明确的宽度；否则，它们会尽可能地窄。
> 
> 注释：假如在一行之上只有极少的空间可供浮动元素，那么这个元素会跳至下一行，这个过程会持续到某一行拥有足够的空间为止。
> #### 清除浮动：
> * 给父级元素单独定义高度（height）
> > 原理：如果父级元素没有定义高度，父元素的高度完全由子元素撑开时，父级div手动定义height，就解决了父级div无法自动获取到高度的问题。 优点：简单、代码少、容易掌握。缺点：只适合高度固定的布局，要给出精确的高度，如果高度和父级div不一样时，会产生问题。对于响应式布局会有很大影响。
> * 在标签结尾处加空div标签 clear:both
> > 原理：添加一个空div，利用css提高的clear:both清除浮动，让父级div能自动获取到高度。
> > 
> > 优点：简单、代码少、浏览器支持好、不容易出现怪问题
> > 
> > 缺点：不少初学者不理解原理；如果页面浮动布局多，就要增加很多空div，不利于页面的优化。
> * 父级div定义 伪类:after 和 zoom
> > 原理：元素生成伪类的作用和效果相当于方法2中的原理，但是IE8以上和非IE浏览器才支持:after，zoom(IE转有属性)可解决ie6,ie7浮动问题 优点：浏览器支持好、不容易出现怪问题，写法是固定的，不理解也可以直接复制使用；（小编大力推荐使用此种方法，简单便捷，只需添加一个class即可解决问题）缺点：css代码多、不少初学者不理解原理，要两句代码结合使用才能让主流浏览器都支持。
> * 父级div定义 overflow:hidden
> > 优点：简单、代码少、浏览器支持好
> >
> >缺点：不能和position配合使用，因为超出的尺寸的会被隐藏。（不建议使用此种方式，可能会影响页面元素布局）

* 如何使用浮动进行布局
> ### 多列浮动布局
> 浮动通常用于创建多个列布局，并且由于其广泛的浏览器支持已经有相当一段时间。尽管事实上，他们不是真的打算这个工作，并有一些奇怪的副作用必须处理
> #### 两列布局
> ```html
> <h1>2 column layout example</h1>
> <div>
>   <h2>First column</h2>
>   <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.</p>
> </div>
> 
> <div>
>   <h2>Second column</h2>
>   <p>Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
> </div>
> ```
> ```css
> body {
>   width: 90%;
>   max-width: 900px;
>   margin: 0 auto;
> }
> div:nth-of-type(1) {
>   width: 48%;
>   float: left;
> }
> div:nth-of-type(2) {
>   width: 48%;
>   float: right;
> }
> ```
> ![image](https://github.com/Severu5/Hello-World/blob/master/ife5-6/img/float1.png)
> #### 三列布局
> 添加下列代码在html文件中
> ```html
> <div>
> <h2>Third column</h2>
>  <p>Nam consequat scelerisque mattis. Duis pulvinar dapibus magna, eget congue purus mollis sit amet. Sed euismod lacus sit amet ex tempus, a semper felis ultrices. Maecenas a efficitur metus. Nullam tempus pharetra pharetra. Morbi in leo mauris. Nullam gravida ligula eros, lacinia sagittis lorem fermentum ut. Praesent dapibus eros vel mi pretium, nec convallis nibh blandit. Sed scelerisque justo ac ligula mollis laoreet. In mattis, risus et porta scelerisque, augue neque hendrerit orci, sit amet imperdiet risus neque vitae lectus. In tempus lectus a quam posuere vestibulum. Duis quis finibus mi. Nullam commodo mi in enim maximus fermentum. Mauris finibus at lorem vel sollicitudin.</p>
> </div>
> ```
> css文件更新为:
> ```css
> body {
>   width: 90%;
>   max-width: 900px;
>   margin: 0 auto;
> }
> 
> div:nth-of-type(1) {
>   width: 36%;
>   float: left;
> }
> 
> div:nth-of-type(2) {
>   width: 30%;
>   float: left;
>   margin-left: 4%;
> }
> 
> div:nth-of-type(3) {
>   width: 26%;
>   float: right;
> }
> ```
> ![image](https://github.com/Severu5/Hello-World/blob/master/ife5-6/img/float2.png)