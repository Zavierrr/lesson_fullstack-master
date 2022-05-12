# CSS 底层
    CSS StyleSheet  rules  key:value;

- 继承 inhert 解决一些问题引入的机制
    font-size color 减少很多操作  
    - css 所有属性都有继承的能力？  
        属性单纯的减少工作量，直接继承，不会有副作用  
        - 可继承
            1. 字体相关  
                font-size font-family font-weight font-style -webkit-font-smoothing 
                font-size-adjust
            2. 文本相关  
                color text-align text-decoration text-indent text-shadow(文字立体3D效果) 
                word-spacing white-space
            3. 列表相关
                list-style list-style-image list-style-type list-style-pisition
            4. 其他属性
                visibility opacity cursor

        - 不可继承  布局相关的  
            定位、display:flex  BFC相关

- font: 12px/1.5... 复合属性，行高12x1.5=18px

- 标题只显示2行，超出显示... 
    overflow: hidden;  // 超出的文本隐藏
    text-overflow: ellipsis; // 溢出用省略号显示
    white-space: nowrap; // 溢出不换行
    display: -webkit-box; // 将对象作为弹性伸缩盒子模型显示。
    -webkit-line-clamp: 2; // 这个属性不是css的规范属性，需要组合上面两个属性，表示显示的行数。
    -webkit-box-orient: vertical;  // 从上到下垂直排列子元素（设置伸缩盒子的子元素排列方式）

- 文档流的概念
    文档(html 文档document)+流（水）
        块级 行排列  
            默认占满整行、多个块级盒子 从上到下排列  
        行内 列排列  
            当一行放不下的时候，会自动切换到下一行  
            white-space:nowrap 不换行  
            行内元素有点弱，新的规则  
        文档流 + 盒模型 + 布局 + ... 页面渲染原则

    脱离文档流
        position(absolute relative fixed ) + float(左 右)   display:none;  
        
        脱离文档流指节点脱离正常文档流后，被在文档流中的其他节点忽略该节点并填补原先空间。

- margin 重叠问题
    两个块级相邻元素。margin 重叠  原则来自哪里？  
    BFC  
    1. 两个块级元素，处于同一个BFC上下文环境中  
    2. 块级盒子在垂直方向上，一个个的放置  BFC
    3. 如果属于同一个BFC的两个相邻盒子的margin会发生重叠

    - 根元素 html body 最大的创建BFC环境的元素 Block Fomat Context块级格式上下文


    如何创建BFC  
    1. 根元素  html/body 最大的BFC
    2. 非溢出的可见元素 overflow 值不为visible
    3. 设置float  浮动布局
    4. 设置定位  position absolute relative
    5. display:inline-block/table-cell/table-captiob/flex/inline-flex/grid/inlie-grid

页面显示计算规则 = 文档流 + 盒子模型 + BFC + 布局