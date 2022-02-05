import React from 'react';

import './index.less';


const Content = () => {

  return (
    <div className="page-container">
      <div className="template-resume">
        {/* 个人信息 */}
          <div className="basic-info">
            {/* 姓名 */}
            <div className="profile">
              <div className="profile-info">
                <h2 className="info-name">姓名</h2>

                <div className="profile-list">
                  <div className="mobile">
                    <span className="iconfont icon-youxiang"></span>
                  </div>
                </div>
              </div>
              <div className="avatar" />
            </div>
            {/* 教育背景 */}
            <div className="section section-education">
              <div className="section-title">
                <span className="title">教育背景</span>
                <span className="addon" />
              </div>

              <div className="section-body">
                <div className="education-item">
                  <span>南昌航天航空大学</span>
                  <span className="sub-info">
                    xxxxx
                  </span>
                </div>
              </div>
            </div>

            {/* 自我介绍 */}
            <div className="section introduce">
              <div className="section-title">
                <span className="title">自我介绍</span>
                <span className="addon" />
              </div>
              <div className="section-body">
                xxxxx
              </div>
            </div>


            {/* 个人技能 */}
            
          </div>

          {/* 工作内容 */}
          <div className="main-info"></div>
      </div>
    </div>
  )
}


export default Content;
