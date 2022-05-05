#   字符串模板
##  作用域 js 基础重要知识点
        1. 块级作用域
            {
                let a = 1;
            }
            console.log(a);
        
        2. let const
        3. map
            - forEach 传统
            - map 返回新的数组   es6
        4. 字符串模板
            - ${}占位符 
                用``包住
                例如：`${name}` 找到字符串name，插入相应的值    模板的编译（解析）

##  1px有点粗怎么办？
        - 没有0.5px像素
            屏幕由发光元器件构成，独立显示颜色
        transform: sacleX(0.5) | scaleY(0.5); 横向或纵向缩小0.5倍