/**
 * 代理模式 Proxy
 */
// 数字 转手机号问题
// [1,2,3,4,5,6,7,8,9,0]  =>  (123) 456-7890
// 代理 
const phoneHandler = {
    set(target, name, value) {
        console.log(target, name, value);
        // console.log(value.match(/[0-9]/g)); 转为数组
        target[name] = value.match(/[0-9]/g).join('');
    },
    get(target, name) {
        // console.log('-------');
        // () 一个分组  $1
        return target[name].replace(/([0-9]{3})(\d{3})(\d{4})/,
            `($1) $2-$3`);
    }
};
const phoneNumber = new Proxy({}, phoneHandler);
// 写操作
phoneNumber.phone = '1234567890';
//读操作
console.log(phoneNumber.phone);