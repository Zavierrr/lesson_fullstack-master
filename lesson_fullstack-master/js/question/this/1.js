function func(num) {
    console.log(this.count); // 2
    count++;
    console.log(count)
}
var count = 2;
console.log(this.count); // 2
console.log(this); // window

func.count = 0;
func(100);
console.log(func.count); // 0