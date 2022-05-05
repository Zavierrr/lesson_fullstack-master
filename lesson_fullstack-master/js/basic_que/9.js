const a = {
    value: 1,
    valueOf() { // 转换为简单类型
        return this.value++
    }
}

// a == 1 隐式调用 a的valueOf方法 转换为简单数据类型，然后++
if (a == 1 && a == 2 && a == 3) {
    console.log('Win!');
}