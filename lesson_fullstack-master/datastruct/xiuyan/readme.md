#   前端面试三板斧   修言
##  为什么js 数组是对象？为什么数组没有作为特定类型提供？
        1. 弱类型
            [1, 2, 3]
                - int{} star（数组的起始位置） + index（下标）*int（整数unit）
                - length 没有上限 不需要限定长度
                [1, 'aaa', {"a":"b"}]
                js 底层数组是由对象（HashMap）实现的
                    {"0":1, "1":"aaa", "2":{"a": "b"}}
##  数组--开箱即用的数据类型
        - 长度上限 + item数据类型 是连续存储 （操作系统分配连续的存储空间）
        - new Array 
            1. new Array(7)
                实现指定长度, <7 empty items>
            2. new Array(7).fill(1)
                指定item类型
        - 用下标o(1) 访问 特别快

##  二维数组  矩阵 mxn
    - fill 的工作机制
        如果参数是引用，那么fill 在填充数组时，意识入参引用
    - fill 方法故意被设计成通用方法, 该方法不要求 this 是数组对象。
    - fill 方法是个可变方法, 它会改变调用它的 this 对象本身, 然后返回它, 而并不是返回一个副本。
    - 当一个对象被传递给 fill方法的时候, 填充数组的是这个对象的引用。
    - 需要注意如果fill的参数为引用类型，会导致都执行同一个引用类型

##  链表与数组优缺点比较
- 链表的插入/删除效率较高，而访问效率较低
- 数组的访问效率较高，而插入的效率较低