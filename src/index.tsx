import React from 'react';
import ReactDOM from 'react-dom';

// 全局样式
import './index.less';
import './assets/iconfont/iconfont.less';
import 'antd/dist/antd.less';
import App from './page';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
