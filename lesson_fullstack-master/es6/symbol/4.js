/**
 * @func 数组过滤
 * @author Zavier
 * @date 2022-5-7
 */
const spread = [12, 5, 8, 130, 44];
const gt10 = spread.filter((item) => item > 10);
console.log(gt10);

const users = [
    {
        'user': 'tyler',
        'age': 31,
        'active': true
    },
    {
        'user': 'joseph',
        'age': 32,
        'active': true
    },
    {
        'user': 'josh',
        'age': 30,
        'active': false
    },
    {
        'user': 'dun',
        'age': 31,
        'active': false
    },
    {
        'user': 'zavier',
        'age': 25,
        'active': false
    }
]
const filteredUsers = users.filter(user =>
    user.age == 30 || user.age == 31
)

console.log(filteredUsers);