// import必须写在最前面
import React from 'react'
import ReactDOM from 'react-dom/client'
import Dog from './dog';

// React团队在3月29日新推出了React v18.0版本，现在npm 默认的就是18版本，由于React 18 不再支持 ReactDOM.render，控制台会抛出：
// Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead. 
// Until you switch to the new API, your app will behave as if it's running React 17. 
// ReactDOM.render(
//   <div>Hello world</div>,
//   document.getElementById('root')
// )
// import App from './App'
// import './index.css'

document.getElementById('root').innerHTML = 'Hello world1';
// 覆盖上面
ReactDOM.createRoot(document.getElementById('root')).render(
  <div>Hello world2</div>
)
const dog = new Dog();
console.log(dog);
