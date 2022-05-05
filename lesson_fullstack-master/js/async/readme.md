#   json 主流数据交换格式

#   json 格式文件
        {} 对象字面量  JavaScript object notation

##  案例
        - 博客
            - 文章
            - 评论
            - 用户

##  数据存放
        - 存放在数据库中，导出来的，也是文件 .csv
        - 也可以存在json文件里   .json 后缀  存放的是数据
        前端视角  ->  数据的存储和使用
              Mysql                     Json
            一个数据表       ->      一个 表名+[]
            每一行记录       ->      []中的一个对象字面量{ key: value } 
            多行记录         ->      []中多个对象字面量{ key: value }
            表与表之间有关联  ->      id相同

#   如何把当前前端项目改为一个全栈项目?
        mysql 数据库服务 后端
        db.json  数据库  如何作为后端资源来访问
        1. 把当前前端项目改为一个全栈项目  
            - npm init -y  后端项目的初始化
                根目录下会多一个 package.json   项目描述文件
            - npm i json-server  安装一些工具包
                json-server 基于json格式的数据文件  提供数据访问服务  http

 
##  live-server 启动前端页面访问
        前端  live-server   http://127.0.0.1:5500/lesson_fullstack-master/js/async/index.html
        数据库  数据库服务   127.0.0.1:3306
        后端  json-server   http://localhost:3000/posts

##  前端 后端 数据通信     
        - json 通信的基本格式
        1. xhr
        2. 前端主动主动拉取后端的数据服务