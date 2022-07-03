---
lang: zh-CN
title: HTML
order: 1
---

### 1.如何理解 HTML 语义化

增加代码可读性，让搜索引擎更容易读懂，有助于爬虫抓取更多有效信息以便于优化 SEO  
没有 css 样式下也能呈现内容、代码结构   

### 2.script 标签中 defer 和 async 的区别

script：会阻碍 html 解析，下载脚本并执行完成后才会继续解析 html  
async script：解析 html 过程中异步下载脚本，下载完成后立即执行，有可能会阻断 html 解析   
defer script：解析 html 过程中异步下载脚本，html 解析完成后再执行脚本，完全不会阻断 html 解析   

### 3.http 和 https

https 使用 SSL 加密，http 是明文的  
https 端口号是 443，http 是 80  
https 需要证书   

### 4.在浏览器地址栏输入 url 到请求返回发生了什么

输入 utl 后浏览器解析出协议、主机、端口等信息，并构造请求  
DNS 域名解析  
TCP 链接  
http 请求  
服务器处理请求并返回 http 报文  
浏览器渲染页面  
断开 TCP 链接   

### 5.浏览器缓存都有哪些？有什么区别
localStorage：永久储存，手动清除   
sessionStorage：关闭浏览器标签清除   
cookie：可储存数据量小，根据设定时间到期后清除   

### 6.es module和commonjs的区别
commonjs：通过module.exports、exports导出，require导入，运行时加载整个模块，顶层this指向本身，导出的是一个拷贝值对加载结果缓存   
es module：通过export导出、import导入，编译时加载，顶层this指向undefined，导出引用值内部修改可同步到外部   

### 7.常见的web安以及防护原理有哪些
sql注入   
xss跨站脚本   
CSRF请求伪造   

