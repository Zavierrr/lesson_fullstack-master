#   JS深入浅出

#   第一节（数据类型）

##  JS 隐式转换

### + -
        + 字符串拼接   - 数字运算
        巧用+/-规则转换类型
        num + '' 将num转换为字符串类型
        num - 0 将num转换为数字类型

### == 与 ===
        '123' == 123;
        0 == false;
        null == undefined
        new Object() == new Object()
        [1, 2] == [1, 2]
        比较的是引用，而不是值，地址不同
        new Object() !== new Object() 
        [1, 2] !== [1, 2]

##  包装对象
        var str = 'string';
        str.a = 1;
        console.log(str.a); // undefined  为什么？被包装成临时对象，创建a属性，赋值为一，然后销毁

##  类型检测
        - typeof
        - instanceof
        - Object.ptototype.toString
        - constructor
        - duck type

#   第二节（表达式与运算符）

##  表达式

##  运算符
        - +
            例：+a  即将a转化为数字类型
        - , 
            var val = (1, 2, 3); // val = 3  每个都执行一遍，取最后的结果
        - delete
            删除对象上的属性
                例：delete obj.x; 删除obj上的x属性 
                当属性有configurable: false 这一标签时，无法删除
        - in （会去原型链上查找）
            window.x = 1;
            'x' in window; // true
        - instanceof、typeof
        - new
        - this
        - void
            void 0; // undefined

#   第三节（语句）

##  try catch finally
        try {
            throw "test";
        }catch(ex) {
            console.log(ex);
        }finally {
            console.log('finally!')
        }
        try 后面必须接catch 或 finally，有异常则捕获catch 并finally，没有异常直接finally

##  函数、switch、循环
        函数声明:
        fd(); // true
        function fd() {
            return true;
        }
        函数表达式:
        fe(); // 报错
        var fe = function() {
            return true;
        }
##  with
        不建议使用
        作用域变得复杂，可读性差
        严格模式已经禁用
##  严格模式
        'use strict'
            修复部分语言上的不足，提供更安全的错误检查，并增强安全性
        - with禁用
        - arguments变为参数的静态副本
            参数传不传都不影响arguments，但如果传入的是对象，修改对象的属性，还是会影响的
        - delete参数或函数名时，报错
        - delete不可配置属性，报错
            configurable: false;
        - 对象字面量属性重复定义，报错
        - 禁止八进制字面量
        - eval、arguments变为关键字，不能作为函数名
        - 一般函数调用时，this指向undefined，而不是全局对象
        - arguments.caller,arguments.callee 被禁用

#   对象
##  创建对象
        1. 对象字面量
        2. new/原型链
            in 运算符会去原型链上查找是否有该属性
            hasOwnProperty则不会
            例：obj.z = 5;
                如果对象有z属性，则修改值为5，如果没有，则添加属性z赋值为5，而不会去原型链查找并修改
                如何访问原型上的z属性呢？
                    先删除，再访问
                    delete obj.z;
                    console.log(obj.z);
        3. Object.create
            并不是所有创建出来的对象原型链都有Object.prototype
            例：var obj = Object.create(null);
                它的原型为null
##  属性删除
        delete
##  属性检测
        1. in（会查找原型链，不靠谱）
        2. hasOwnProperty
        2. propertyIsEnumerable（属性可枚举）
            defineProperty
            例：Object.defineProperty(cat, 'name', {enumerable: false, value: 'Tom'}); 其中enumerable: false 是默认属性，可不写
            如果通过对象字面量对象时，其属性的标签默认为enumerable: true，即可以枚举出原型链上的属性
##  get/set
        - getter/setter方法
        - get/set与原型链
            例：当前对象obj没有z属性，而原型对象Object.prototype通过defineProperty定义了z属性的get方法，且返回值为1
                那么当obj.z = 10; 结果还是1，而不是自己定义一个z属性赋值为10    因为用了原型对象的get方法
##  属性标签
        - 获取属性标签：
            getOwnPropertyDescriptor 
                两个参数，第一个是对象,另一个为字符串类型的属性名
                返回对象该属性的属性标签：
                    - configurable
                    - writable
                    - enumerable
                    - value
        - 修改属性标签
            1. defineProperty（三个参数） 
            2. defineProperties（2个参数，对象 + {key1:{value},key2:{value}}）
##  注意
        - 在使用Object.defineProperty、Object.defineProperties 或 Object.create 函数的情况下添加数据属性，
            writable、enumerable和configurable默认值为false。
        - 使用对象字面量创建的属性，writable、enumerable和configurable特性默认为true
        - configurable 为false，仍然可以修改writable 的值

##  对象标签
        - proto
        - class 类型
        - extensible 可扩展
            isExtensible 为true，即可以添加新属性，否则不可以
                1. 可用preventExtensions阻止扩展，但不能阻止其他属性的修改和删除 （configurable: true, writable: true）
                2. seal方法 （configurable: false, writable: true）
                3. freeze （configurable: false, writable: false）
