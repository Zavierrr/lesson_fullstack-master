require('./main.css')
const { toLowerCase, toUpperCase } = require('./b.js')
const a = 'Hello, Zavier!'
console.log(a);
console.log(toLowerCase('A'));
console.log(toUpperCase('a'));
let oDiv = document.createElement('div')
oDiv.textContent = '谢夸'
document.body.appendChild(
    oDiv
)
module.export = a; // commonJS