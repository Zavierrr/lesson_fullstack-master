* 1. [对象](#对象)
    * 1.1. [JS 数据类型](#js-数据类型)
    * 1.2. [JS 关键字](#js-关键字)
    * 1.3. [JS 字面量](#js-字面量)
    * 1.4. [JS 检索](#js-检索)
    * 1.5. [JS 更新](#js-更新)
    * 1.6. [JS 引用](#js-引用)
    * 1.7. [JS 原型](#js-原型)
    * 1.8. [JS 反射](#js-反射)
    * 1.9. [JS 枚举](#js-枚举)
    * 1.10. [JS 删除](#js-删除)
    
# The Good Parts

##  1. <a name='对象'></a>对象

###  1.1. <a name='js-数据类型'></a>JS 数据类型
    - 简单数据类型
        1. 数字 number JS只有数值类型 JS 不太适合复杂数据类型
            JS处理小数时不够精确 例：0.1 + 0.2 != 0.3
            == 值相等
            === 恒等式 值相等且数据类型相等
        2. 字符串 string  '' ""两者都行
        3. undefined 
            - JS是弱类型语言，声明变量可以不指定类型即undefined
            - JS变量的类型由值决定，即变量的类型可变
            - 变量声明之后，赋值之前类型为undefined
        4. 布尔 
            boolean （true | false）
        5. null


    - 复杂数据类型
        复杂的就是对象 Object

###  1.2. <a name='js-关键字'></a>JS 关键字
    let     变量
    const   常量
    typeof  获取变量或常量的数据类型

###  1.3. <a name='js-字面量'></a>JS 字面量
    包含在一个花括号中的零个或多个“名/值”对
    let people = {
        // 冒号作用是给对象的属性赋值
        age : 18;
        // 对象是可嵌套的
        name : {
            // first-name中的 - 非法，所以必须用""
            "first-name" : "Zavier",

            // last_name合法，不强制使用""
            last_name : "H"
        }
    }

###  1.4. <a name='js-检索'></a>JS 检索
    对象["属性"]["属性"]...
        例：people["name"]["first-name"] 
        // ''和""都可以
    .表示法 
        例：people.name.last_name

###  1.5. <a name='js-更新'></a>JS 更新
    people["age"] = '19'
    people.age = '19'

    没有的属性会扩充到对象里
        people.country = 'China'
        people.family = {
            father : 'Z',
            mother : 'X'
        }

###  1.6. <a name='js-引用'></a>JS 引用
    let boy = people;
    boy.country = 'Russia';
    let a = people.country
    // 此时a为'Russia'，由此可知boy和people指向同一个地址

###  1.7. <a name='js-原型'></a>JS 原型
    每个对象都连接到一个原型对象，并且可以从中继承属性
    JS 中标准的对象 Object.prototype 
        所有通过对象字面量创建的对象都可以连接到它

    创建一个新对象时，可以选择某个对象作为它的原型
        例：another_people的原型为people
        if (typeof Object.beget !== 'function') {
            Object.beget = function (o) {
                let F = function () {};
                F.prototype = o;
                return new F();
            }
        }
        let another_people = Object.beget(people);

    某对象发生改变时，不会影响该对象的原型
        another_people.age = '20'
        // 此时people.age还是18

###  1.8. <a name='js-反射'></a>JS 反射
    - typeof确定属性类型
        typeof people.constructor   // 'function'
        // 虽然people对象没有constructor，但原型有
    - hasOwnProperty方法，检查独有属性，有就是true，没有就是     false；不检查原型链，即使原型有该属性，也为false
        people.hasOwnProperty('age')            // true
        people.hasOwnProperty('constructor')    // false 

###  1.9. <a name='js-枚举'></a>JS 枚举
    for in 语句 例：
        let a;
        for (a in another_people) {
            if (typeof another_people[a] !== 'function') {
                console.log(a + ':' + another_people[a]);
            }
        }


###  1.10. <a name='js-删除'></a>JS 删除
    - delete 运算符
        delete people.sex