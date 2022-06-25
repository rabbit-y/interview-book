---
lang: zh-CN
title: Css
order: 2
---

### 盒模型
包括：content + padding + border + margin   
标准盒模型宽高：width(height)+padding+border   
ie怪异盒模型宽高: width(height)   
修改box-sizing：border-box 怪异盒模型 content-box 标准盒模型   

### BFC 和 IFC 机制
##### BFC 块级格式化上下文
1. 盒子内的元素块在垂直方向一个个放置
2. 盒子垂直方向间距由margin决定，同一个BFC下相邻元素块的margin会重叠
3. 每个元素块的左边与盒子左边接触，即使存在浮动也是
4. BFC的区域不会与float重叠
5. BFC是一个独立的容器，内部元素与外部元素互不影响
6. 计算BFC的高度时，浮动元素也参与计算
##### IFC行级格式化上下
1. 盒子内的元素块在水平方向一个个放置
2. 高度由里面最高元素块的高度决定
3. 一行不够放置时会自动切换到下一行
##### 会产生BFC的几种情况
1. 根元素
2. float（属性不为none）
3. position（属性为absolute或fixed）
4. display（属性为inline-block，table-cell，table-caption，flex，inline-flex）
5. overflow不为visible
