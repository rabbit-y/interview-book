---
lang: zh-CN
title: CSS
order: 2
---

### 1.盒模型

包括：content + padding + border + margin  
标准盒模型宽高：width(height)+padding+border  
ie 怪异盒模型宽高: width(height)  
修改 box-sizing：border-box 怪异盒模型 content-box 标准盒模型

### 2.css 选择器

类型选择器 h1{}、通配选择器\*{}、类选择器.box{}、id 选择器#box{}、标签属性选择器 a[title]{}、伪类选择器 p:first-child{}、伪元素选择器 p::first-line{}、后代选择器 div span、子代选择器 div > span、相邻兄弟选择器 h1 + p、通用兄弟选择器 h1 ~ p

### 3.重绘和重排

重绘不一定导致重排，重排一定导致重绘  
元素尺寸的改变、添加删除 dom、元素位置改变、重新渲染、浏览器窗口尺寸改变都会导致重排  
改变元素背景色、字体色等样式会导致重绘

### 4.line-height 如何继承

父元素写了具体的值（px），子元素继承该值  
父元素写了比例（1.5），子元素继承该比例  
父元素写了百分比（200%），子元素继承父元素 font-size \* 200% 计算后的值

### BFC 和 IFC 机制

##### BFC 块级格式化上下文

1. 盒子内的元素块在垂直方向一个个放置
2. 盒子垂直方向间距由 margin 决定，同一个 BFC 下相邻元素块的 margin 会重叠
3. 每个元素块的左边与盒子左边接触，即使存在浮动也是
4. BFC 的区域不会与 float 重叠
5. BFC 是一个独立的容器，内部元素与外部元素互不影响
6. 计算 BFC 的高度时，浮动元素也参与计算

##### IFC 行级格式化上下

1. 盒子内的元素块在水平方向一个个放置
2. 高度由里面最高元素块的高度决定
3. 一行不够放置时会自动切换到下一行

##### 会产生 BFC 的几种情况

1. 根元素
2. float（属性不为 none）
3. position（属性为 absolute 或 fixed）
4. display（属性为 inline-block，table-cell，table-caption，flex，inline-flex）
5. overflow 不为 visible
