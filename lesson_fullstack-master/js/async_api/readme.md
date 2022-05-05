# 异步之数据请求

1. xhr 与 fetch 关系
    功能都是一样的，xhr是旧时代， fetch 是es6最新的api  
    fetch('http://127.0.0.1:3000/posts')
        .then(data => data.json())
        .then(data => data)

    xhr = new XMLHttpRequest();  xhr 实例
    <!-- request 多种请求方式 1.get 明文 url  2.post 加密  -->
    xhr.open("GET","http://127.0.0.1:3000/posts",true);  
    xhr.send();   
    xhr.onreadystatechange = function(event) {  
        event.target.readyState   =4 完成
        JSON.parse(event.target.responseText)  
    }