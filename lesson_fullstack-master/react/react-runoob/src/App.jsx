// 解构 React Hooks
import React, { useState } from "react";

//一个函数封装返回一段jsx
const App = () => {
  // let name='Zavier';
  // state 状态
  // 当前组件添加一个状态 默认值
  // 解构
  let [isSingle, setIsSingle] = useState(true);
  let [name, setName] = useState('Zavier'); //给JSX 带来状态

  // React.useState()接收一个参数作为变量的初始值，返回一个数组，数组的第一项用于变量的读，数组的第二项用于变量的写
  let [date, setDate] = useState(new Date().toLocaleTimeString());
  // JSX{} 占位符 简单用法 输出值
  // {} 内就是js 运行区域 ，结果默认
  setInterval(() => {
    setDate(new Date().toLocaleTimeString());
  }, 1000);
  const changeName = () => {
    // console.log('lalalala');
    setName('Zavier1');
  }

  const friends = [{
    name: '大佬',
    age: 18
  }, {
    name: '大神',
    age: 18
  }];

  return (
    <div>
      {/* JSX 简单 高效的UI 模板，状态+时间+... react  */}
      <p>{isSingle ? <span>单身</span> : <span>有主</span>}</p>
      <h1>hello {name}</h1>
      <h2>现在是{date}</h2>
      <ul>
        {
          friends.map((friend, index) => <li key={index}>{friend.name} - {friend.age}</li>
          )
        }
      </ul>
      <button onClick={changeName}>显示英文名</button>
    </div>
  )
}

export default App