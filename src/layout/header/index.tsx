import React from 'react';

import { Button } from 'antd';

import './index.less';

const Header = () => {


  // 登录
  const handleToLogin = () => {
    console.log('登录');
  }

  // 注册
  const handleToResister = () => {
    console.log('注册');
  }

  return (
    <header className="header">
      <div className="header-left">
        <span className="header-title">我的简历</span>
      </div>

      <div className="header-right">
          {/* 未登录时的状态 */}
          <div className="no-login">
            <Button className="btn-login" onClick={handleToLogin}>登录</Button>
            <Button className="registered" onClick={handleToResister}>注册</Button>
          </div>
      </div>
    </header>
  )
}

export default Header;