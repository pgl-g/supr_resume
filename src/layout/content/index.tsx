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
                <h2 className="info-name">彭格列</h2>

                <div className="profile-list">
                  <div className="list-item">
                    <span className="iconfont icon-dianhua1" />
                    <span className="item-info">158********</span>
                  </div>

                  <div className="list-item">
                    <span className="iconfont icon-youxiang" />
                    <span className="item-info">1801688***@qq.com</span>
                  </div>

                  <div className="list-item">
                    <span className="iconfont icon-gitee2" />
                    <a className="item-info" href="https://gitee.com/guxiaobiao">
                      https://gitee.com/guxiaobiao
                    </a>
                  </div>

                  <div className="list-item">
                    <span className="iconfont icon-dizhi" />
                    <span className="item-info">杭州</span>
                  </div>

                  <div className="list-item">
                    <span className="iconfont icon-zhiwei" />
                    <span className="item-info">前端开发工程师</span>
                  </div>
                  <div className="list-item">
                    <span className="iconfont icon-dianhua1" />
                    <span className="item-info">25k</span>
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
