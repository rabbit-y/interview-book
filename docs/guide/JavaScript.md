---
lang: zh-CN
title: Js题库
order: 3
---

### 题目1
原生实现一个红绿灯(黄色->红色->绿色)交替的效果，尽可能做到最大抽象和复用   
要求：
1. 实现对应`DOM`结构
2. 每个颜色交替时间间隔为`1s`

::: code-tabs#shell
@tab Html
```html
<style>
 #box {
    width: 100px;
    height: 100px;
    background-color: red;
    border-radius: 50%;
  }
</style>

<div id="box"></div>
```
@tab Js
```javascript
const arr = ['red', 'yellow', 'green']
const id = document.getElementById('box')

const fn = (id, arr, time) => {
  let i = 0
  setInterval(() => {
    i < arr.length - 1 ? i++ : i = 0
    id.style.background = arr[i]
  }, time)
}

fn(id, arr, 1000)
```
:::

### 题目2
实现一个invoke函数，invoke(list, methodName, arguments)   
执行：invoke([ [5, 1, 7], [3, 2, 1] ], 'sort '); // 期望值:[ [1, 5, 7], [1, 2, 3] ]   
要求：
1. 在list的每个元素上执行methodName方法。
2. 任何传递给invoke的额外参数，invoke都会在调methodName方法的时候传递给它。

::: code-tabs#shell
@tab Js
```javascript
const invoke = (arr, fn, ...arg) => {
  const newArr = []
  arr.forEach((item) => {
    newArr.push(item[fn](...arg))
  })
  return newArr
}
const data = invoke([[5, 7, 1], [3, 2, 1]], 'sort', (x, y) => { y - x })
console.log(data)
```
:::

### 题目3
写出下列代码打印的结果
```javascript
async function async1() {
  console.log("async1 start ");
  await async2();
  console.log("async1 end ");
}

async function async2() {
  console.log("async2");
}

async1();

setTimeout(() => {
  console.log("timeout ");
}, 0);

new Promise(function (resolve) {
  console.log("promise1");
  resolve();
}).then(function () {
  console.log("promise2");
});

console.log("script end ");

// 执行结果 async1start async2 promise1 scriptend async1end promise2 timeout
```
### 题目4
已知存在下列html，ul内包含了1000个li，li内的值依次为1, 2, 3 ... 1000。   
要求：实现点击某个li时输出该li内的值
::: code-tabs#shell
@tab Html
```html
<ul id= "test ">
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <!-- ... -->
  <li>999</li>
  <li>1000</li>
</ul>
```
@tab Js
```javascript
const id = document.getElementById('test')
id.addEventListener('click', (e) => {
  console.log(e.target.innerHTML)
})
```
:::

### 题目5
请填写一句代码调用 fn,并使得打印出的值为 { name: ‘obj’ }
::: code-tabs#shell
@tab Js
```javascript
let fn = function () {
  console.log(this);
}
let obj = { name: 'obj' }

fn.apply(obj)
```
:::

### 题目6
有一个大数组，var a = ['1', '2', '3', ...];   
a 的长度是 100，内容填充随机整数的字符串。请先构造此数组a，然后设计一个算法将其内容去重
::: code-tabs#shell
@tab Js
```javascript
// 填充100个
const arr = [];
for (let i = 0; i < 100; i++) {
  arr.push(Math.round(Math.random() * 100))
}
// 去重新
const go = (arr) => {
  const newArr = []
  arr.forEach((item) => {
    !newArr.includes(item) && newArr.push(item)
  })
  return newArr
}
go(arr)
```
:::

### 题目7
请对下列数组进行排序，并写出你所实现排序的时间复杂度 （禁止使用 sort  方法）   
[25, 1000, 40, 1, 10, 5]
::: code-tabs#shell
@tab Js
```javascript
const data = [25, 1000, 40, 1, 10, 5]
const fn = (arr) => {
  const newArr = [arr[0]]
  for (let n = 1; n < arr.length; n++) {
    for (const i in newArr) {
      newArr.splice(arr[n] < newArr[i] ? i : i + 1, 0, arr[n])
      break;
    }
  }
  return newArr
}
console.log(fn(data))
```
:::