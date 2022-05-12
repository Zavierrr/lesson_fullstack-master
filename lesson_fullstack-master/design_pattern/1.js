// 创建单例 Singleton
// 立即执行函数是创建闭包的手段之一
let CreateSington = (function () {
    // console.log('创建单例');
    let instance; // 实例
    return function (name) { // constructor 
        if (instance) { // 如果之前实例化，直接返回该实例
            return instance;
        }
        this.name = name;
        return instance = this; // this 指向instance
    }
})();

CreateSington.prototype.getName = function () {
    console.log(this.name);
}
let singleton = new CreateSington('Zavier'); // 对象
let dalao = new CreateSington('大佬');
console.log(singleton);
console.log(singleton.name); // Zavier
console.log(dalao.name); // Zavier
console.log(singleton === dalao); // true   单例，只实例化一次，所有声明的变量都指向该实例
