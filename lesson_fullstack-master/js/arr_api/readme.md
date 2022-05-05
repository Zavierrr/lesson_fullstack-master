#   遍历数组与对象

##  相同点
        1. 数组和对象字面量 类型都是Object
        2. 都是数据容器

##  不同的
        1. 数组是用整数做下标（索引），对象字面量是用特殊的 key:value

#   如何区分对象与数组
        1. Object.prototype.toString.call(arr)
        2. Array.isArray(arr)

#   node可以全局访问