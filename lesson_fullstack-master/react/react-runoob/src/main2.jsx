import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


// root 节点 为什么是根节点？ 挂载点
// root 节点范围内，react起作用
// JSX -> JS 的扩展语法  只在react 生效
// React 用来表达UI组件
let name = 'Zavier';
// JSX模板
// const element = <h1 className="bd">Hello,{name}!</h1>;

let [dateStr, setDateStr] = useState(new Date().toLocaleTimeString())
// const dateStr = new Date().toLocaleTimeString();
// 自定义组件
// const Hello = () => {
//   return <div>hello,{name}</div>
// }
ReactDOM.createRoot(document.getElementById('root')).render(
  // element
  // <Hello></Hello>
  // UI大舞台
  // 只能有一个大盒子
  <div>
    <h1>Hello,{name}！</h1>
    <h2>现在是{dateStr}</h2>
  </div>

)
