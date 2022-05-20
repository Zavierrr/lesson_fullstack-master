import { useState } from 'react'
// {}内不是default（默认输出）,而是普通输出
// 不加{}则为 默认输出
// import obj, { GlobalStyle, Zavier } from './style'
import { GlobalStyle, Tab, TabItem } from './style'
// styled-components：定义一段样式（styled），并以组件（components）形式返回
// 组件化思想 不以html的思维去看待，页面的功能块作为一个组件来看待
// 这个页面分成几个部分  类似 html 的 section

function App() {

  console.log({ GlobalStyle });

  return (
    <div className="App">
      {/* 以html标签的方式来插入样式 */}
      <GlobalStyle></GlobalStyle>
      <Tab>
        <a className="selected">
          <TabItem>
            <span>推荐</span>
          </TabItem>
        </a>
        <a>
          <TabItem>
            <span>歌手</span>
          </TabItem>
        </a>
        <a>
          <TabItem>
            <span>排行榜</span>
          </TabItem>
        </a>
      </Tab>
    </div>
  )
}

export default App
