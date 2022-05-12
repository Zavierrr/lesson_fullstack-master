# Symbol

- JS 简单数据类型
    Number  Boolean  String  Null  Undefined  Bigint  Symbol

    Bigint和Symbol都是通过函数来创建的，是es6引入的独有的为了解决相应问题的数据类型。  
    Bigint是为了解决大数相加问题，Symbol是为了标志某些独一无二的东西。 
    它们的定义都不需要new   
    let b = Bigint('11');  
    let s = Symbol('foo');  

- 复杂数据类型 Object   
    1. 作为函数传参的时候，引用式赋值  
        不纯粹


## Symbol
- Symbol 能被用作对象的 key
- 新创建的 Symvol 都有一个完全唯一的值
- Symbols key 无法通过 for in、for of 或者 Object.getOwnPropertyNames 获得 —— 获得它们的唯一方式是 Object.getOwnPropertySymbols()

    var fooSym = Symbol('foo'); 

    var myObj = {};

    myObj['foo'] = 'bar';

    myObj[fooSym] = 'baz';

    Object.keys(myObj); // -> [ 'foo' ]

    Object.getOwnPropertyNames(myObj); // -> [ 'foo' ]

    Object.getOwnPropertySymbols(myObj); // -> [ Symbol(foo) ]

    assert(Object.getOwnPropertySymbols(myObj)[0] === fooSym);

    **能被保证不会和对象任何已有属性冲突。**