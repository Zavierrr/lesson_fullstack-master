const team = ['亚索', '寒冰', '提莫', '盖伦'];
const [...players] = team;
const [mid, ...other] = team;
const [a, b, c, d] = team;

console.log(players);
console.log(mid, other);
console.log(a, b, c, d);