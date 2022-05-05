#   JS 送花
##  talk in js

##  1. js 运行在浏览器代理中（url），宿主环境（window 全局对象）
        - typeof window     对象 生而知之
        - a b name          全局作用域
        - c 声明在函数中    局部作用域

##  es6 let const 与 var 对比
        - 相同点 
            属于声明所在的作用域
            直接用变量名直接来访问
            a， b， name
            
        - 不同点 
            var自动挂载在window对象上（这是副作用）
            window.a        The Bad Parts 不好的部分
            let const 不会挂载在window对象上
        
        - const 常量 不可修改
            1. 如果是简单数据类型，值不可改变
            2. 如果是复杂数据类型，值可以变，但类型不能变