#   前端珠峰--阮一峰

##  面向对象
##  JS编程最难的的事情
        对象
##  JS的面向对象
        1. js是一种基于对象的语言
        2. js又不是真正的面向对象（OOP）语言
            关键字 早期，js 不提供class，implement（接口），extend（继承）（public、private、static）
            基于原型式的面向对象    function + this + prototype
### 生成实例对象的原始模式
        js 内置的对象字面量
            1. 繁琐
            2. 没有约束
### 构造函数
        1. 封装实例化 赋值属性的过程    首字母大写 + this + new 
            为了简化实例化过程，使用函数封装，this指向实例

##  弹性布局布局王者
        - flex做两列、三列，自适应，简单
            缺点：浏览器兼容性 ie9前不支持
        - float 浮动
            1. 浮动，离开文档流，margin-left | margin-right 不重叠
            2. BFC 当我们给main加一个overflow: hidden，启用了格式化上下文之 BFC原则
            main元素进入全新的上下文context环境

