# 一、标题
   # 一级标题h1 （一个#号）

   ## 二级标题h2 （两个#号）
          ...其他标题以此类推(h1~h6)

# 二、粗斜体
   *斜体*    
   _斜体_   
   **粗体**  
   __粗体__  
   ***粗斜体***  
   ___粗斜体___ 

# 三、列表
      "*", "+" ,"-" 表示无序列表 符号与文字之间要用空格隔开作为列表标记
      "1." ,"2."使用数字加"."表示有序列表 符号与文字之间要用空格隔开作为列表标记
      如果要表示列表层级 则在符号"-"前使用tab
   * 列表一
   + 列表二
   - 列表三
     - 列表四
   1. 列表一
   2. 列表二
   3. 列表三

# 四、分隔线
      使用三个以上的星号、减号、底线来建立分隔线，也可以其中插入空格来实现

   ***
   ---
   ___
   * * *
   - - -
   _ _ _

# 五、删除线
      前后使用两个"~"来实现删除线
   abcdefg  
   ~~abcdefg~~

# 六、下划线
      下划线可以通过html 的<u>标签来实现
   <u>下划线</u>  

      脚注  

   [文字](脚注解释 "脚注名字")  


# 七、链接
      [链接名称]（链接地址）
      或者
      <链接地址>[链接名称]
      或者
      <链接地址>
   [Markdown菜鸟](https://www.runoob.com/markdown/md-paragraph.html)  
   <链接地址>[Markdown菜鸟](https://www.runoob.com/markdown/md-paragraph.html)  
   <https://www.runoob.com/markdown/md-paragraph.html>  

# 八、区块
      区块的引用是在段落的开头使用符号">",然后用空格隔开
      区块的嵌套：一个">"表示最外层，两个">"表示第一层嵌套，以此类推
   > abc  
   > abcd  
   > abcde（最外层）  
   >> ab（第一层嵌套）  
   >>> ac（第二层嵌套）  
       
      区块在列表中使用
   > abc    
   > 1. ab  
   > 2. ac  
   > * a  
   > + b  
   > + c   

      列表中放进区块 需要在">"前加四个空格的缩进
   * abc  
       > ac  
       > ad
   * adc

# 九、图片
      ![alt 属性文本](图片地址)
      ![alt 属性文本](图片地址 "可选标题")
      方括号里放图片的替代文字
      普通括号里放图片地址或者加上引号包住的选择性的"title"属性文字
      或者
      通过使用网址变量来实现
      [alt 属性文本][变量] 在文档末尾对变量赋值(网址)
      可以通过<img>标签设置图片宽高
   ![123 图片](https://baike.baidu.com/pic/%E4%BA%8C%E5%8D%81%E4%B8%80%E5%90%8D%E9%A3%9E%E8%A1%8C%E5%91%98/19384812/2875647409/0d338744ebf81a4c510f0b78b6617759252dd42a0864?fr=lemma&ct=cover#aid=2875647409&pic=0d338744ebf81a4c510f0b78b6617759252dd42a0864)

   ![123 图片](https://baike.baidu.com/pic/%E4%BA%8C%E5%8D%81%E4%B8%80%E5%90%8D%E9%A3%9E%E8%A1%8C%E5%91%98/19384812/2875647409/0d338744ebf81a4c510f0b78b6617759252dd42a0864?fr=lemma&ct=cover#aid=2875647409&pic=0d338744ebf81a4c510f0b78b6617759252dd42a0864 "123")  
   [123][1]  

   [1]: https://baike.baidu.com/pic/%E4%BA%8C%E5%8D%81%E4%B8%80%E5%90%8D%E9%A3%9E%E8%A1%8C%E5%91%98/19384812/2875647409/0d338744ebf81a4c510f0b78b6617759252dd42a0864?fr=lemma&ct=cover#aid=2875647409&pic=0d338744ebf81a4c510f0b78b6617759252dd42a0864  

   <img src="https://baike.baidu.com/pic/%E4%BA%8C%E5%8D%81%E4%B8%80%E5%90%8D%E9%A3%9E%E8%A1%8C%E5%91%98/19384812/2875647409/0d338744ebf81a4c510f0b78b6617759252dd42a0864?fr=lemma&ct=cover#aid=2875647409&pic=0d338744ebf81a4c510f0b78b6617759252dd42a0864" width="50%">

# 十、表格
      用"|"来分隔不同的单元格，用"-"分隔表头和其他行
      "-:"设置内容和标题居右对齐
      ":-"设置内容和标题居左对齐
      ":-:"设置内容和标题居中对齐
   |左对齐|居中对齐|右对齐|
   |:---|:---:|---:|
   |abc|ab|acd|
   |ac|ad|aca|

# 十一、代码
   段落上的一个函数或片段的代码可以用"`"把他包起来  

   `printf()`函数  

   代码区块使用4个空格或者一个制表符(Tab键)  

      <? php  
      echo 'abcd'  
      function test(){  
      echo 'test';  
      }
      
   也可以用"```"包裹一段代码，并指定一种语言(也可以不指定)
   ```javascript  
   $(document).ready(function(){  
      alert('1');  
   });  
   ```