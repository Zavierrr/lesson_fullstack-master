#   bytedance css 考题
        - BOM + DOM = Window
          Browser Of Model
          Document Of Model
##  选择器
        - 选择器
            1. 伪类 （增加一种状态）
                - 
            2. 伪元素
                - :before :after
                    - content: ''; 必须要有

            - htmml 元素都是有标签的 例：div p ul 等
              :before 可以像元素一样插入页面，没有标签，css声明来完成一些任务 
            - 有些任务用标签也能做，但有副作用，如：笨重
                中途添加 border-bottom: 1px solid #fff;
                    - 副作用是改变原有的盒模型，影响整个页面布局
                
                文档流 排版流程 从body开始绘制 从上到下 从左到右 从外到内
                盒模型 盒子大小在页面占位的精确计算
                    盒模型 = content + padding + border + margin