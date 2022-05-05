function func(num) {
    console.log(this.count);
    count++;
    console.log(count)
}
var count = 2;
console.log(this.count);
console.log(this);

func.count = 1;
func(1);
console.log(func.count); // 0