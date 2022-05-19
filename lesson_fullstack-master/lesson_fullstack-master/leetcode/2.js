// 写一个render 函数，完成字符串模板的嵌入值

let template = '我是{{name}}，年龄{{age}}，性别{{sex}}';
let person = {
    name: 'Zavier',
    age: 18,
    sex: '男'
}
/**
 * @func 字符串模板所有{{}} 占位符替换对象里的值
 * @param {string} template
 * @param {object} data
 * @return {string}
 */

function render(template, data) {
    const reg = /\{\{(\w+)\}\}/;
    // console.log(reg.test(template));
    // console.log(Object.prototype.toString.call(reg)); // [Object RegExp]
    if (reg.test(template)) { // 还有占位符没有被替换
        const temp = reg.exec(template)[1];
        console.log(temp);
        // js replace 可以接受一个正则
        template = template.replace(reg, data[temp]);
        return render(template, data)
    }
    return template
}



console.log(render(template, person));
