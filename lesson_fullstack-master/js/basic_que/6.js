// typeof  除了null，其他都靠谱
console.log(typeof 111n); // bigint
console.log(typeof BigInt(222n)); // bigint

console.log(typeof console.log); // function
