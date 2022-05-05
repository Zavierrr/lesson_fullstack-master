#   es6
        1. let const var 区别
        2. 作用域{}
        3. for of
        4. 字符串模板
        5. Object.crate()
            代替 传统的面向对象 Function + prototype （学习成本高）

##  函数背后底层实现由 [call] 和 [constructor] 两部分
        函数都有this
        1. 普通函数
            - this 指向全局（node -> global | 浏览器 -> window）
                this显得没必要，在函数内部可以访问到全局变量
            - 启用严格模式，指向undefined
                `ues strict` js 运行得更专业

        2. 对象的方法来使用
            - this 指针     通过构造函数来完成对象的属性

        3. 箭头函数
            简便 优雅
            - 只有call，没有constructor
            - 没有this指针，只是通过作用域链一层一层向外部查找this，直到查找到全局
            - 没有arguments  // arguments is not defined
            - 没有prototype  // arguments is not defined