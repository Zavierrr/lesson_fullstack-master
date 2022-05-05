#   es6 新的数据类型

##  js 简单数据类型
    String boolean number  undefined null bigint

### BigInt
- 大数据时代，es6 推出了新 简单数据类型 Bigint
- 适合大数据相加，准确，不适合除/，舍去小数
- 两种新建方式 1n  Bigint("1")
- typeof  bigint
- 不支持 隐式类型转换（例：+ 1n，报错）  可以使用强制类型转换（例：Number(1n)）
- number 和 Bigint 相加，报错，不能混用，可以进行强制类型转换再计算


## 元素设置float属性后，会脱离文档流
- 并没有完全离开文档流  
    浮动元素不只会影响自己（脱离文档流），它会影响周围的元素（左|右）对其进行环绕
- block (p 兄弟 不受影响) img 离开了文档流，所以 block 无视img
- 让 inline 元素，（文本 TextNode）围绕 float 元素来实现浮动布局
    doucument.createElement('p')
    doucument.createTextNode('我是内容')
- 文字环绕效果是 float 典型的应用

## float 元素特性
1.  块级框  inline-block
    - 不管是行内还是块级元素，如果被设置了浮动，浮动元素会生成一个块级框
        块级框：拥有盒子能力，不是block，独占一行 类似于inline-block
    - 一旦浮动，立刻会像inline元素一样产生包裹  宽度根据内容适应(inline能力)  
        适合多列布局（菜单）

2.  高度塌陷  
    当父元素未设置高度时，所有子元素浮动后，造成子元素脱离文档流进而无法把父元素撑开，父元素高度为0产生高度塌陷，称为高度塌陷问题
    - 解决办法：
        1. 最直接的办法就是给父元素添加高度
            - 优点：简单
            - 缺点：只适合固定页面的布局，无法进行自适应，不推荐使用 
        2. 给塌陷的元素添加Overflow：hidden，触发BFC
            BFC即 Block Formatting Contexts (块级格式化上下文)， 是 W3C CSS2.1 规范中的一个概念
            它是页面中的一块渲染区域，并且有一套渲染规则，它决定了其子元素将如何定位，以及和其他元素的关系和相互作用
            - 弊端：会隐藏定位在元素外面的元素
        3. 给浮动元素的下方添加一个空的Div
            - 弊端：会形成代码的冗余，造成不必要的浪费，延缓加载
        4. 万能清除法：给高度塌陷的元素添加如下after伪类
            .box::after{
                content: '';
                clear: both;/*清除两侧浮动*/
                display: block;/*转成成一个块元素*/
                both; overflow: hidden;
                visibility: hidden;
            }
            - 弊端：对IE8以下有兼容问题，可以通过增加zoom: 1;声明来解决
         