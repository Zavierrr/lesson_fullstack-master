# 手写new
- new 是什么？  
    运算符  
- 作用是什么？  
    - 用来构建具有构造函数的对象实例  function Person() {}  new Person  
    - 用来创建用户自定义的对象类型的实例  class Person

- new需要做什么？
    1. 创建一个新的对象
    2. this指向这个新的对象
    3. 执行构造函数的代码，给这个新对象添加属性和方法，需要指定原型
    4. 返回这个对象