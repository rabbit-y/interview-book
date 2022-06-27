<template>
  <div class="home">
    <div class="flip flip-vertical">
      <div
        class="front"
        style="
          background-image: url(https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80);
        "
      >
        <h1 class="text-shadow">HTML</h1>
      </div>
      <div class="back">
        <h2>HTML</h2>
        <p>
          HTML的全称为超文本标记语言，超文本标记语言是标准通用标记语言下的一个应用，也是一种规范，一种标准，它通过标记符号来标记要显示的网页中的各个部分
        </p>
      </div>
    </div>
    <div class="flip flip-vertical">
      <div
        class="front"
        style="
          background-image: url(https://images.unsplash.com/photo-1516201407043-a9bc36cab889?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80);
        "
      >
        <h1 class="text-shadow">CSS</h1>
      </div>
      <div class="back">
        <h2>CSS</h2>
        <p>
          层叠样式表是一种用来表现HTML或XML等文件样式的计算机语言。CSS不仅可以静态地修饰网页，还可以配合各种脚本语言动态地对网页各元素进行格式化
        </p>
      </div>
    </div>
    <div class="flip flip-vertical">
      <div
        class="front"
        style="
          background-image: url(https://images.unsplash.com/photo-1551084731-183f99b97004?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80);
        "
      >
        <h1 class="text-shadow">JavaScript</h1>
      </div>
      <div class="back">
        <h2>JavaScript</h2>
        <p>
          JavaScript 是一种具有函数优先的轻量级，JavaScript 基于原型编程、多范式的动态脚本语言，并且支持面向对象、命令式、声明式、函数式编程范式
        </p>
      </div>
    </div>
    <div class="flip flip-vertical">
      <div
        class="front"
        style="
          background-image: url(https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)
        "
      >
        <h1 class="text-shadow">React</h1>
      </div>
      <div class="back">
        <h2>React</h2>
        <p>
          React是用于构建用户界面的JavaScript库， [1]  起源于Facebook的内部项目，该公司对市场上所有 JavaScript MVC框架都不满意，决定自行开发一套，用于架设Instagram的网站。于2013年5月开源。
        </p>
      </div>
    </div>
    <div class="flip flip-vertical">
      <div
        class="front"
        style="
          background-image: url(https://images.unsplash.com/photo-1620927894581-488ff4737a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80)
        "
      >
        <h1 class="text-shadow">Vue</h1>
      </div>
      <div class="back">
        <h2>Vue</h2>
        <p>
          Vue是一套用于构建用户界面的渐进式JavaScript框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped>
* {
  box-sizing:border-box;
}
.home{
  padding-top: 120px;
  text-align:center;
  width: 1300px;
  margin: 0 auto;
}
.flip {
  position: relative;
  display: inline-block;
  margin-right: 10px;
  margin-left: 10px;
  margin-bottom: 3em;
  width: 400px;
  text-align: left;
}
.flip > .front,
.flip > .back {
  display: block;
  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition-duration: 0.5s;
  transition-property: transform, opacity;
}
.flip > .front {
  transform: rotateY(0deg);
}
.flip > .back {
  position: absolute;
  opacity: 0;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  transform: rotateY(-180deg);
}
.flip:hover > .front {
  transform: rotateY(180deg);
}
.flip:hover > .back {
  opacity: 1;
  transform: rotateY(0deg);
}
.flip.flip-vertical > .back {
  transform: rotateX(-180deg);
}
.flip.flip-vertical:hover > .front {
  transform: rotateX(180deg);
}
.flip.flip-vertical:hover > .back {
  transform: rotateX(0deg);
}


.flip > .front,
.flip > .back {
  display: block;
  color: white;
  width: inherit;
  background-size: cover !important;
  background-position: center !important;
  height: 220px;
  padding: 1em 2em;
  background: #313131;
  border-radius: 10px;
}
.flip > .front p,
.flip > .back p {
  font-size: 0.9125rem;
  line-height: 160%;
  color: #999;
}

.text-shadow {
  text-shadow: 1px 1px rgba(0, 0, 0, 0.04), 2px 2px rgba(0, 0, 0, 0.04),
    3px 3px rgba(0, 0, 0, 0.04), 4px 4px rgba(0, 0, 0, 0.04),
    0.125rem 0.125rem rgba(0, 0, 0, 0.04), 6px 6px rgba(0, 0, 0, 0.04),
    7px 7px rgba(0, 0, 0, 0.04), 8px 8px rgba(0, 0, 0, 0.04),
    9px 9px rgba(0, 0, 0, 0.04), 0.3125rem 0.3125rem rgba(0, 0, 0, 0.04),
    11px 11px rgba(0, 0, 0, 0.04), 12px 12px rgba(0, 0, 0, 0.04),
    13px 13px rgba(0, 0, 0, 0.04), 14px 14px rgba(0, 0, 0, 0.04),
    0.625rem 0.625rem rgba(0, 0, 0, 0.04), 16px 16px rgba(0, 0, 0, 0.04),
    17px 17px rgba(0, 0, 0, 0.04), 18px 18px rgba(0, 0, 0, 0.04),
    19px 19px rgba(0, 0, 0, 0.04), 1.25rem 1.25rem rgba(0, 0, 0, 0.04);
}
</style>
