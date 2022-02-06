import React from 'react';

import { Button } from 'antd';
import './index.less';

const Content = () => {
  return (
    <div className='page-container'>
      <div className='template-resume'>
        {/* 个人信息 */}
        <div className='basic-info'>
          {/* 个人信息 */}
          <div className='profile'>
            <div className='profile-info'>
              <h2 className='info-name'>彭格列</h2>

              <div className='profile-list'>
                <div className='list-item'>
                  <span className='iconfont icon-dianhua1' />
                  <span className='item-info'>158********</span>
                </div>

                <div className='list-item'>
                  <span className='iconfont icon-youxiang' />
                  <span className='item-info'>1801688***@qq.com</span>
                </div>

                <div className='list-item'>
                  <span className='iconfont icon-gitee2' />
                  <a className='item-info' href='https://gitee.com/guxiaobiao'>
                    https://gitee.com/guxiaobiao
                  </a>
                </div>

                <div className='list-item'>
                  <span className='iconfont icon-dizhi' />
                  <span className='item-info'>杭州</span>
                </div>

                <div className='list-item'>
                  <span className='iconfont icon-zhiwei' />
                  <span className='item-info'>前端开发工程师</span>
                </div>
                <div className='list-item'>
                  <span className='iconfont icon-dianhua1' />
                  <span className='item-info'>25k</span>
                </div>
              </div>
            </div>
            <div className='avatar' />
          </div>
          {/* 教育背景 */}
          <div className='section section-education'>
            <div className='section-title'>
              <span className='title'>教育背景</span>
              <span className='addon' />
            </div>

            <div className='section-body'>
              <div className='education-item'>
                <div className='university'>
                  <div className='name'>
                    <b>南昌航天航空大学</b>
                    <span>软件工程</span>
                  </div>

                  <span className='graduation-time'>2017.9.1-2021.6.30</span>
                </div>
              </div>
            </div>
          </div>

          {/* 自我介绍 */}
          <div className='section introduce'>
            <div className='section-title'>
              <span className='title'>自我介绍</span>
              <span className='addon' />
            </div>
            <div className='section-body'>
              <p className='introduce-myself'>
                🌱 努力努力努力努力努力努力 😈 能力项：沟通协调能力、执行力
                前端工程师，2年多中型复杂产品开发经验，哈哈哈哈哈哈哈哈哈哈哈哈哈
                哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈
              </p>
            </div>
          </div>

          {/* 个人技能 */}
          <div className='section skills'>
            <div className='section-title'>
              <span className='title'>个人技能</span>
              <span className='addon' />
            </div>
            <div className='section-body'>
              <ol>
                <li>
                  在工作中可以熟练使用运用html+css来制作符合W3C规范标准的页面，利用自己的工作经验可以有效的解决浏览、兼容问题。
                </li>
                <li>
                  在工作中可以使用原生js开发，有良好的代码注释习惯以及变量命名习惯。
                </li>
                <li>
                  在工作中熟练使用css预处理器(less、sass)进行项目样式单元的开发
                </li>
                <li>
                  在工作中熟练各种流程工具和构建打包工具:git,操作码云、github,webpack包管理工具npm
                </li>
                <li>
                  在工作中经常和后台配合联调接口，在配合过程中也了解了后端的基本知识，了解数据库来源以及连接mysql的增删改查等部分操作
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* 工作内容 */}
        <div className='main-info'>
          <div className='section worker'>
            <div className='section-title'>
              <span className='title'>工作内容</span>
              <span className='addon' />
            </div>
            <div className='section-body'>
              <div className='section-item worker-content'>
                <div className='section-info'>
                  <b className='info-name'>
                    杭州众选科技有限公司
                    <span>技术部</span>
                  </b>
                  <span className='info-time'>2020.3-2021.4</span>
                </div>

                <div className='work-description'>
                  1. 担任蚂蚁高管决策和管理协同产品 “数据作战室” 的前端负责人
                  <br />
                  2. 负责蚂蚁敏捷 BI 产品 “DeepInsight”
                  的可视分析模块产品能力建设
                  <br />
                  3. 数据可视化 AntV 团队核心成员，负责 G2、G2Plot
                  开源技术的建设
                </div>
              </div>

              <div className='section-item worker-content'>
                <div className='section-info'>
                  <b className='info-name'>
                    江西科技技术有限公司
                    <span>技术部</span>
                  </b>
                  <span className='info-time'>2017.3-2018.3</span>
                </div>

                <div className='work-description'>
                  前端实习生。使用 Vue 来实现平台功能和逻辑，再用 ECharts
                  来对数据挖掘分析后的可视化结果进行展示
                </div>
              </div>
            </div>
          </div>

          <div className='section project'>
            <div className='section-title'>
              <span className='title'>项目经历</span>
              <span className='addon' />
            </div>
            <div className='section-body'>
              <div className='section-item worker-content'>
                <div className='section-info'>
                  <b className='info-name'>
                    数据作战室
                    <span>2019.04 - 2020.06</span>
                  </b>
                  <span className='info-time'>前端负责人</span>
                </div>

                <div className='section-detail'>
                  <span>主要工作：</span>
                  <span className='project-content'>
                    面向总裁和高管以及决策 BI 的数字化经营决策和管理协同产品。提供一站式的数据化经营决策和管理协同功能，让高管高效获取决策信息，并提升管理效率。
                  </span>
                </div>
                <div className='section-detail'>
                  <span>项目描述：</span>
                  <span className='project-content'>
                    面向总裁和高管以及决策 BI 的数字化经营决策和管理协同产品。提供一站式的数据化经营决策和管理协同功能，让高管高效获取决策信息，并提升管理效率。
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 配置 */}
      <div className="edit">
        <Button type="primary">点击</Button>
      </div>
    </div>
  );
};

export default Content;
