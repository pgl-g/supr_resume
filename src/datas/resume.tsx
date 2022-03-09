import { ResumeConfig } from '../helpers/types';
// 初始化常量
export const RESUME_INFO: ResumeConfig = {
  avatar: {
    src: undefined,
    hidden: false
  },
  // 个人信息
  profile: {
    name: '张三',
    email: '736****86@qq.com',
    mobile: '156********',
    gitee: 'https://github.com/visiky',
    workExpYear: '20-25k',
    workPlace: '浙江杭州',
    positionTitle: '前端开发工程师',
  },
  // 教育
  educationList: {
    edu_time: '2021-2025',
    school: '南昌航空大学',
    major: '软件工程',
    academic_degree: '本科'
  },
  // 自我介绍
  aboutme: {
    aboutme_desc: '🌱 努力努力努力努力努力努力 😈 能力项：沟通协调能力、执行力 前端工程师，2年多中型复杂产品开发经验，哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈'
  },
  // 获奖信息
  awardList: [
    {
      award_info: '获奖信息',
      award_time: '获奖时间'
    }
  ],
  // 个人作品
  workList: [
    {
      work_name: 'sss',
      work_desc: 'sasa',
      visit_link: 'sdgs',
    }
  ],
  // 个人技能
  skillList: [
    {
      skill_name: 'HTML 和 CSS',
      skill_desc: '熟练掌握 html, css 等前端基础技术，不借助框架编写响应式/移动端网页',
    },
    {
      skill_name: 'TypeScript / JavaScript',
      skill_desc: '熟悉 TypeScript，丰富的 ts 项目经验',
    },
    {
      skill_name: '数据可视化',
      skill_desc: '丰富的可视化工程实践以及开源经验',
    },
    {
      skill_name: 'React / 前端工程化',
      skill_desc: '大型前端项目经验以及组件库开发经验',
    },
  ],
  // 工作经历
  workExpList: [
    {
      company_name: '公司名称',
      department_name: '担任职务',
      work_time: ['2012', 'null'],
      work_desc: '工作描述'
    }
  ],
  // 项目经历
  projectList: [
    {
      project_name: '项目名称',
      project_role: '项目角色',
      project_time: '项目时间',
      project_desc: '项目描述',
      project_content: '项目内容'
    }
  ],
}

