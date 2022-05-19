const obj = { // 被代理的对象
    name: 'Zavier',
    age: 60
}

// const objProxy = new Proxy(obj, {});
// console.log(objProxy);

const objProxy = new Proxy(obj, {
    // handler 处理捕捉器
    // 代理对象的读操作：
    get: (function (target, key) {
        console.log(`捕获到对象获取${key}属性的操作`);
        return target[key];
    }),
    // 对象的访问拦截，捕捉器set：
    // 代理对象的写操作：
    set: function (target, key, val) {
        console.log(`捕获到对象修改${key}属性的操作`);
        if (key == 'age') {
            if (typeof val == 'number') {
                target[key] = val;
            } else {
                // console.warn('该属性必须为Number类型');
                throw new TypeError('该属性必须为Number类型')
            }
        } else {
            target[key] = val;

        }
    }
})

try {
    objProxy.age = '2';
} catch (e) {
    console.log(e);
}

console.log(objProxy.age);