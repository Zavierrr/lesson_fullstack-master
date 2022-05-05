// 实现日期格式化函数
// '2022-12-01' -> 2022/12/01
// '2022-12-01' -> 2022年12月1日

const dateFormat = (date, format) => {
    // console.log(typeof date, Object.prototype.toString.call(date));
    // console.log(date.getDate() < 10 ? '0' + date.getDate() : date.getDate()); // 01
    var day = date.getDate();
    // day = day < 10 ? '0' + day : day;
    if (day < 10) {
        day = '0' + day;
    }
    var month = date.getMonth() + 1;
    if (month < 10) {
        month = '0' + month;
    }
    var year = date.getFullYear();
    // console.log(day, month, year);
    format = format.replace('yyyy', year);
    format = format.replace('mm', month);
    format = format.replace('dd', day);
    return format;
}

console.log(dateFormat(new Date('2022-04-01'), 'yyyy/mm/dd'));
console.log(dateFormat(new Date('2022-04-01'), 'yyyy年mm月dd日'));