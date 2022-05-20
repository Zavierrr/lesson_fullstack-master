let foo = 'bar';
setTimeout(() => foo = 'baz', 500);

const c = 4;

const a = `2${c}`;

console.log(a);
setTimeout(() => console.log(foo), 501);
