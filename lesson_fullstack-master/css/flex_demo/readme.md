#   display: block; 从上到下的页面排版

#   格式上下文 CSS Format Context
        1. 新的盒子可以构建全新的显示上下文
        2. display: flex;
            - 声明显示上下文（环境）弹性布局
        3. 弹性布局 是由父元素和多个子元素组成的全新渲染环境
        4. 子元素不受换行的约束，原因flex全新的格式上下文
        5. 按比例弹性分配空间
            - flex: 1: 1: 1 
            1: 2: 3

#   css 样式三种写法
        1. 行内样式 
            - 优先级更高 不建议用 解决个别样式
        2. 嵌入样式 
            - 使用style标签 在头部引入
        3. 外联样式
            - link 引入css文件
        - 建议使用外联样式,模块化更好

#   页面加载流程
        1. 通过http协议请求并加载html
        2. link css文件加载样式对页面进行渲染
        3. 加载js

#   网络状态码 Status Code
        - 404 Not Found
            未响应
        - 304 Not Modified
            未修改
        - 200 OK
            成功响应
        - 403 Forbidden
            没有权限 禁用了
            用于保护资源,减少无效请求
        - 301
            请求的资源已更换新位置,自动跳转到新位置