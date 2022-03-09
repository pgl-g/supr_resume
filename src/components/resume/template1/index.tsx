import React from 'react';

import { RESUME_INFO } from '../../../datas/resume';
import './index.less';

// 模版1
const Template1 = ({ config }: any) => {
  /** 个人信息 */ 
  const profile = config['profile'];
  /** 教育 */ 
  const educationList = config['educationList'];
  /** 自我介绍 */ 
  const aboutme = config['aboutme'];
  /** 个人技能 */ 
  const skillList =  config['skillList'];
  /** 工作经历 */ 
  const workExpList = config['workExpList'];
  /** 项目经历 */ 
  const projectList = config['projectList'];
  /** 获奖信息 */ 
  const awardList = config['awardList'];
  /** 个人作品 */ 
  const workList = config['workList'];

  console.log(workExpList);

  return (
    <div className='template-resume'>
        {/* 个人信息 */}
        <div className='basic-info'>
          {/* 个人信息 */}
          <div className='profile'>
            <div className='profile-info'>
              <h2 className='info-name'>{profile?.name}</h2>

              <div className='profile-list'>
                <div className='list-item'>
                  <span className='iconfont icon-dianhua1' />
                  <span className='item-info'>{profile?.mobile}</span>
                </div>

                <div className='list-item'>
                  <span className='iconfont icon-youxiang' />
                  <span className='item-info'>{profile?.email}</span>
                </div>

                <div className='list-item'>
                  <span className='iconfont icon-gitee2' />
                  <a className='item-info' href='https://gitee.com/guxiaobiao'>
                  {profile?.gitee}
                  </a>
                </div>

                <div className='list-item'>
                  <span className='iconfont icon-dizhi' />
                  <span className='item-info'>{profile?.workPlace}</span>
                </div>

                <div className='list-item'>
                  <span className='iconfont icon-zhiwei' />
                  <span className='item-info'>{profile?.positionTitle}</span>
                </div>
                <div className='list-item'>
                  <span className='iconfont icon-xinzi' />
                  <span className='item-info'>{profile?.workExpYear}</span>
                </div>
              </div>
            </div>
            {
              !config?.avatar?.hidden && <div className='avatar' />
            }
            
          </div>
          {/* 教育背景 */}
          <div className='section section-education'>
            <div className='section-title'>
              <span className='title'>教育背景</span>
              <span className='addon' />
            </div>

            <div className='section-body'>
              <div className='education-item'>
                {
                  educationList?.length ? educationList.map((item: any, index: number) => (
                    <div className='university' key={index}>
                      <div className='name'>
                        <b>{item.school}</b>
                        <span>{item.major}</span>
                      </div>

                      <span className='graduation-time'>{item.edu_time}</span>
                    </div>
                  )) : (
                    <div className='university'>
                      <div className='name'>
                        <b>{educationList?.school}</b>
                        <span>{educationList?.major}</span>
                      </div>

                      <span className='graduation-time'>{educationList?.edu_time}</span>
                    </div>
                  )
                }
                
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
                {aboutme?.aboutme_desc}
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
                {
                  skillList?.map((item: any, idx: number) => (
                    <li key={idx}>
                      {item.skill_desc}
                    </li>
                  ))
                }
              </ol>
            </div>
          </div>
        </div>

        
        <div className='main-info'>
          {/* 工作内容 */}
          <div className='section worker'>
            <div className='section-title'>
              <span className='title'>工作内容</span>
              <span className='addon' />
            </div>
            <div className='section-body'>
              {
                workExpList?.map((item: any, i: number) => {
                  return (
                    <div className='section-item worker-content' key={i}>
                      <div className='section-info'>
                        <b className='info-name'>
                          {item?.company_name}
                          <span>{item?.department_name}</span>
                        </b>
                        <span className='info-time'>{item?.work_time}</span>
                      </div>

                      <div className='work-description'>
                        {item?.work_desc}
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
          {/* 项目经历 */}
          <div className='section project'>
            <div className='section-title'>
              <span className='title'>项目经历</span>
              <span className='addon' />
            </div>
            <div className='section-body'>
              {
                projectList?.map((item: any, idx: number) => {
                  return (
                    <div className='section-item worker-content' key={idx}>
                      <div className='section-info'>
                        <b className='info-name'>
                          {item?.project_name}
                          <span>{item?.project_time}</span>
                        </b>
                        <span className='info-time'>{item?.project_role}</span>
                      </div>

                      <div className='section-detail'>
                        <span>主要工作：</span>
                        <span className='project-content'>
                          {item?.project_content}
                        </span>
                      </div>
                      <div className='section-detail'>
                        <span>项目描述：</span>
                        <span className='project-content'>
                          {item?.project_desc}
                        </span>
                      </div>
                    </div>
                  )
                })
              }
              
            </div>
          </div>
        </div>
      </div>
  )
}

export default Template1;

