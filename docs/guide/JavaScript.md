---
lang: zh-CN
title: JavaScript
order: 3
---

### 1.基本数据类型、引用数据类型
基本数据类型：String,Numbet,Boolean,Object,Null,Undefined,Symbol,Bigint   
引用数据类型：Object,Array,Date,正则,Map,基本包装类型（String、Number、Boolean）

### 2.new操作符具体做了什么
* 创建一个空对象
* 把空对象的原型指向构造函数的原型对象
* 把构造函数的this指向空对象，并执行构造函数返回执行结果
* 判断返回的执行结果，如果是引用类型返回执行结果，new操作失败，否则返回新对象   

### 3.js中this的指向
全局环境下this指向window   
函数内，严格模式this指向undefined，非严格模式this指向window   
对象中的this谁调用就指向谁   
箭头函数中，它会捕获自己定义所处的外层执行环境，并且继承这个this值   
构造函数中的this指向构造函数创建的实例   
原型链中的this指向它原本属于的对象

### 4.浅拷贝和深拷贝的实现方式

### 5.什么是跨域、如何解决跨域

### 6.防抖和节流

### 7.箭头函数、普通函数、构造函数的区别

### 8.js的继承有哪些方式

### 9.请描述event loop事件循环机制

### 10.什么是作用域和作用域链
作用域：块级作用域`{ }`如let const、全局作用域`window`和函数作用域`function(){}`   
作用域链：函数执行过程中会先从内部找变量，找不到再从创建当前函数所在的作用域去找，这种链式查询关系叫作用域链

### 11.什么是闭包
函数内部能读取函数外部的变量，可以理解为函数内部的函数（函数套函数），不会被垃圾回收机制回收
### 12.对原型和原型链的理解

### 13.用过哪些设计模式？

### 14.call()和apply()的区别和作用
作用：改变this的指向   
区别：接收参数的方式不同。call第一个参数是函数运行的作用域，传递给函数的参数必须列举出来。apply第一个参数是函数运行时的作用域，第二个参数是要传递的参数数组

### Js 题目

#### 题目 1

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
const arr = ["red", "yellow", "green"];
const id = document.getElementById("box");

const fn = (id, arr, time) => {
  let i = 0;
  setInterval(() => {
    i < arr.length - 1 ? i++ : (i = 0);
    id.style.background = arr[i];
  }, time);
};

fn(id, arr, 1000);
```

:::

#### 题目 2

实现一个 invoke 函数，invoke(list, methodName, arguments)  
执行：invoke([ [5, 1, 7], [3, 2, 1] ], 'sort '); // 期望值:[ [1, 5, 7], [1, 2, 3] ]  
要求：

1. 在 list 的每个元素上执行 methodName 方法。
2. 任何传递给 invoke 的额外参数，invoke 都会在调 methodName 方法的时候传递给它。

::: code-tabs#shell
@tab Js

```javascript
const invoke = (arr, fn, ...arg) => {
  const newArr = [];
  arr.forEach((item) => {
    newArr.push(item[fn](...arg));
  });
  return newArr;
};
const data = invoke(
  [
    [5, 7, 1],
    [3, 2, 1],
  ],
  "sort",
  (x, y) => {
    y - x;
  }
);
console.log(data);
```

:::

#### 题目 3

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

#### 题目 4

已知存在下列 html，ul 内包含了 1000 个 li，li 内的值依次为 1, 2, 3 ... 1000。  
要求：实现点击某个 li 时输出该 li 内的值
::: code-tabs#shell
@tab Html

```html
<ul id="test ">
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
const id = document.getElementById("test");
id.addEventListener("click", (e) => {
  console.log(e.target.innerHTML);
});
```

:::

#### 题目 5

请填写一句代码调用 fn,并使得打印出的值为 { name: ‘obj’ }
::: code-tabs#shell
@tab Js

```javascript
let fn = function () {
  console.log(this);
};
let obj = { name: "obj" };

fn.apply(obj);
```

:::

#### 题目 6

有一个大数组，var a = ['1', '2', '3', ...];  
a 的长度是 100，内容填充随机整数的字符串。请先构造此数组 a，然后设计一个算法将其内容去重
::: code-tabs#shell
@tab Js

```javascript
// 填充100个
const arr = [];
for (let i = 0; i < 100; i++) {
  arr.push(Math.round(Math.random() * 100));
}
// 去重新
const go = (arr) => {
  const newArr = [];
  arr.forEach((item) => {
    !newArr.includes(item) && newArr.push(item);
  });
  return newArr;
};
go(arr);
```

:::

#### 题目 7

请对下列数组进行排序，并写出你所实现排序的时间复杂度 （禁止使用 sort 方法）  
[25, 1000, 40, 1, 10, 5]
::: code-tabs#shell
@tab Js

```javascript
const data = [25, 1000, 40, 1, 10, 5];
const fn = (arr) => {
  const newArr = [arr[0]];
  for (let n = 1; n < arr.length; n++) {
    for (const i in newArr) {
      newArr.splice(arr[n] < newArr[i] ? i : i + 1, 0, arr[n]);
      break;
    }
  }
  return newArr;
};
console.log(fn(data));
```

:::
