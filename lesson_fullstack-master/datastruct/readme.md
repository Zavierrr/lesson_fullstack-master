#   当你使用浏览器的时候
    1. 写 js的宿主环境 Browser （复杂应用程序）
        - 面向对象思想组织代码
        - 数据结构和算法，解决特定问题
    
    2. chrome 浏览器
        - 依次访问 
            www.baudu.com
            www.tmall.com
            www.tencent.com
                用window.history.go(-1) 来返回上一页
                window.location.href = 'https://www.qq.com' 跳转想去的网站
        - 在www.tmall.com 界面搜索 www.douyin.com，发现tencent网页不见了
            array（最廉价的数据结构，线性表 队列 栈 连续存储）
            - 队列  Queue   先进先出    FIFO
            - 栈    Stack   后进先出    FILO    只允许在顶端插入删除    浏览器历史记录
#    栈 （受限的线性表）
        看上去不如数组队列自由，但特定的数据结构是对特定场景和需求的抽象
        - 基于数组
        - 基于链表

##  栈在函数调用中的应用
        1. JS 运行机制为什么用栈这种数据结构？
            - 适合把代码运行起来
            - 代码究其根本是一段文本
            - 函数的调用作为主线运行
    
#   node 中commonjs 的内置模块化 （module 技术方案）
        一个类封装一个业务  一个文件一个类（模块）
        1. module.exports 向外输出
        2. require 关键字引入其他模块

#   浏览器的前进 后退设计
        1. 不断访问网页，并且入栈留下记录，方便后退，退到栈底（栈空），无法后退
        2. 两个栈（x， y），方便实现前进后退功能
            任何一个栈为空，前进和后退功能都不能用
        3. 后退时，从x 出栈，出栈元素在y 进栈；前进时，从y 出栈，在x 进栈
            即后退页面是x 栈的栈顶；前进页面是y 栈的栈顶
        4. 当y 栈有元素时，在x 栈入栈的话，y栈 会清空

#   34+139+44-12/3
        2个栈，一个存放数字，一个存放运算符
        - 运算符入栈：
            当入栈运算符优先级    高于      栈顶运算符      入栈
            当入栈运算符优先级  低于或等于   栈顶运算符     栈顶运算符出栈并运算

        