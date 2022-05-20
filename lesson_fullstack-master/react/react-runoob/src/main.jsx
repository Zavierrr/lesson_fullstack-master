// 使用了react，因此命名为jsx
// 引入react框架，起名为React
// import from es6支持的模块化方案
import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css'; // css 也可以用import
import App from './App'; // 引入跟组件模块


ReactDom.createRoot(
    document.getElementById('root')).render(
        <App></App>
    )
