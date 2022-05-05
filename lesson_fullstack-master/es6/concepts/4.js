// const func = function(a, b) {
//     // arguments
//     console.log(arguments[2]);
//     console.log(a, b);
// }
const func = (a, b) => {
    // arguments
    console.log(arguments[2]);
    console.log(a, b);
}
func(1, 2, 3);
console.log(func.prototype); // undefined