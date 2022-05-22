// https: // 协议  security  更加安全的http
// www.wc.com  域名（方便记）   解析-->  ip地址
// login  path路径

/**
 * @func 解析http协议请求内容
 * @param {String} url 
 * @returns {Object} parseObj
 * @author Zavier
 * @date 2022-5-21
 */
// 解析URL 参数到一个参数中
function parseParam(url) {
    // exec 数组的第二项是()里面匹配到的资源
    const paramsStr = /\?.+$/g.exec(url)[1];
    console.log(paramsStr, '---------');
    const paramsArr = paramsStr.split('&');
    console.log(paramsArr, '=========');

    let paramsObj = {};
    paramsArr.forEach(param => {
        if (/=/.test(param)) {
            // console.log(param);
            // console.log(param.split('='));

            let [key, val] = param.split('=');
            if (paramsObj.hasOwnProperty(key)) {
                val = decodeURIComponent(val);
                // console.log(val);
                if (/^\d+$/.test(val)) {
                    val = parseInt(val);
                }
                paramsObj[key] = [].concat(paramsObj[key], val);
            } else {
                val = decodeURIComponent(val);
                if (/^\d+$/.test(val)) {
                    val = parseInt(val);
                }
                // hhtp 编码解码
                paramsObj[key] = val;
            }
        } else {
            paramsObj[param] = true;
        }
    })
    return paramsObj;
}
// console.log(encodeURI('黄浩')); // %E9%BB%84%E6%B5%A9
// url 安全性  将中文字符 特色字符 转为HTTP 编码
let url = 'https://www.wc.com?a=1&b=23&c=3&d&b=4&name=%E9%BB%84%E6%B5%A9';

// console.log(parseParam(url));