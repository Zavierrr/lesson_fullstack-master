var f = function() {
    // var x = 3;
    console.log(this.x);
}
var x = 2;
var obj = {
    f: f,
    x: 3
}
f();
obj.f();