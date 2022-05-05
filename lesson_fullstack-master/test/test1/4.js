const forest = {
    location: 'Sweden',
    animals: 3,
    animalsTypes: ['Lions', 'Tigers', 'Bears']
};
// es6 解构
const { location: lo, animals, animalsTypes, nickname = '未命名' } = forest;
console.log(lo, nickname);

const [L, T, B] = animalsTypes;
const [...all] = animalsTypes;
const [d, ...two] = animalsTypes;
console.log(L, T, B);
console.log(all);
console.log(d, two);