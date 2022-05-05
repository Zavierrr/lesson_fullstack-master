#   电商界面开发

##  html  css  js 位置  意义
        1. html + css 完成静态页面的显示，越快越好
            css 放到head  html + css 允许并行
            - 下载 html，标签放在DOM树上
            - 下载 css
            css 不会阻塞html 继续下载，即并行下载，所以尽可能放在前面
            t（下载时间）、t1（css）、t2（html）
            t = math.max(t1, t2)

        2. js 放在尾部
            如果放在头部，下载的过程中，会阻塞html 的下载，需要等js下载并运行完，才会往下继续下载html
            t3（js）
            t = math.max(t1, t2) + t3

        3. defer属性
            js 异步下载，允许js 文件放在head
            多个js 文件同时下载，所有js 文件下载完后，按顺序执行js 文件
            defer脚本会在文档渲染（静态页面）后，DOMContentLoaded事件调用前

        4. async属性
            js 异步下载，允许js 文件放在head
            多个js 文件同时下载，谁先下载完，谁先执行js
            在DOMContentLoaded事件后执行
        
        5. window.onload = function() {}
            等页面所有资源都下载并执行完
            window > document

        6. DOMContentLoaded（html + css）早于 onload（资源加载都ready）

        7. 用注释来增加文件大小，不影响功能

##  JS 事件 分不同的时期等级
        1. DOM0 级事件 onload onclick 事件包含on
        2. DOM2 级事件 addEventListener （'click'，callbacl）

##  电商应用（页面开发）
        1. 界面能力良好，原子级别（html标签 + css排版）
        2. 组件（页面开发的思维能力，工具）
            - css 命名技巧
            - 用一堆的html + css 组成了一个组件，形成一个展示功能和能力的集合，用于复用
            - 借用已有的组件，节省时间
        3. 做项目
            - 调研weui 移动端最好的ui框架
            - 界面能力丰富 业务

##  weui
        - 引入weui框架，加速且方便开发，组件开箱即用
        - 打造项目可复用组件  weui-mark
        - 通用业务样式
            特定项目，可能跨组件
            例：.bg_green    
                .f-sm {font-size: 12px} 小号字体    
                .fr {float: right}

##  图标字体库
        1. 每个项目都有的, 引入图标
        2. 图标也是一种字体, 微软雅黑 
            font-family: 
        3. 在默认字体之外, 引入一个图标字体
            iconfont 
            - @font-face 引入 字体资源  
        4. .icon  元素的地方, 使用这种字体
        5. 使用编码去查找特定文字符号
            .icon-109:before{
                content: '\e667';
            }

##  路径
        1. 绝对路径（物理路径）本地
        2. 相对路径 -> web app 根路径，启动http服务
        ip 可以是本地，也可以是远程
        web默认端口号 80
