import { useState } from 'react'
import logo from './logo.svg'
import Dog from './Dog'
import Computer from './Computer'
import Notification from './Notification'
import './App.css'

function App() {
  const [num, setNum] = useState(0);

  setTimeout(() => {
    setNum(2)
  }, 1000)


  return (
    <div className="App">
      {/* 自定义组件 */}
      {/* <Dog></Dog> */}
      {/* 自闭盒 */}
      <Dog />
      <Computer />
      <Computer />
      <Notification n={num} />
    </div>
  )
}

export default App

