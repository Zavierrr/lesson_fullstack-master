#   npm （node package management）
        node 将js 带到后端
        js功能：
        1. 网页开发 frontend
        2. 后端数据库 backend
        3. 嵌入式开发
        4. app开发  取代 Android / IOS

##  把前端项目初始化为后端项目
        - npm init -y
            项目初始化  -y表示yes 即不询问，生成默认的package.json 包

        - npm i(install) json-server && npm i(install) live-server
            从远程下载到本地，得到 node_modules 
            里面有json-server、live-server 以及它们依赖的其他包
            package.json 项目描述文件新增 dependencies "json-server": "^0.17.0" "live-server": "^1.2.1"


        - "dev": "json-server --watch db.json " 
          "start": "live-server"

        - npm run  会找到package.json 中的 scripts命令对象 中的命令
            1. 数据服务  npm run dev    3000
            2. web服务   npm run start  8080
        -


