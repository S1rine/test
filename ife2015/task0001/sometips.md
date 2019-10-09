# 论task0001中收获了什么
1. form表单中`type="text"`的`input`和`type="submit"`的`input`在同一行作为搜索框使用时，最好采用浮动布局。不然的话似乎很难布局。原因待整理。

2. `p`标签可以设置样式
`p {	text-align: justify;	}`达到两端对齐的效果，看上去会比较舒适。

3. 不定宽块状元素居中方法
	* 加入 `table` 标签
	* 设置 `display: inline` 方法：与第一种类似，显示类型设为 行内元素，进行不定宽元素的属性设置
	* 设置 `position:relative` 和 `left:50%`：利用 相对定位 的方式，将元素向左偏移 50% ，即达到居中的目的