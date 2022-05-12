#   手写代码
##  instanceof
        - instanceof 运算符用于判断构造函数的prototype 属性是否出现在对象的原型链中的任何位置
            如果构造函数的prototype 方法为空，则表示为{}

##  Object.getPrototypeOf(a)
        - 用于获取a 的原型对象

##  网页请求优化
- web 编程的基础是HTTP 基于请求响应式的简单协议
    1. lazyload.html  http请求  
        响应 html文件
    2. html 渲染的过程 html DOM + css OM 静态页面
    3. img 引入图片资源  再次启动http请求  
        图片响应后，显示在页面上  
        当页面网络请求比较多且大的时候 页面加载会比较忙

- 如何优化多图片造成的网络请求堵塞
    - 分析
        1. 请求数是页面打开速度性能的重要指标  
            link href  
            script src  
            img src  
            audio / video  
            并发  
        2. 启动 network 下载进程 +1
        3. http 协议 请求-响应 是有并发限制的
    - 延迟加载  
        1. img src 不改变  
            显示一个占位图片  
            原来src -> data-src 不需要并发n张图片  
            只需要下载一张占位符，浏览器对已经下载的资源会缓存Cache  
        2. 监听onscroll事件  
            当图片位于 可视区

- getBoundingClientRect()分析
    1. getBoundingClientRect()用于获得页面中某个元素的左，上，右和下分别相对浏览器视窗的位置。   
    2. 该函数返回一个Object对象，该对象有6个属性：top,lef,right,bottom,width,height； 
        rectObject.top：元素上边到视窗上边的距离;  
        rectObject.right：元素右边到视窗左边的距离;  
        rectObject.bottom：元素下边到视窗上边的距离;  
        rectObject.left：元素左边到视窗左边的距离;  
        rectObject.width：是元素自身的宽  
        rectObject.height是元素自身的高  
    3. rectObject.top属性一般与 window.innerHeight 配合使用