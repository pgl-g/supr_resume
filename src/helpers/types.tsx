
// 配置简历强类型语法
export type ResumeConfig = {

  avatar?: {
    src?: string,
    hidden?: boolean
  };
  // 个人信息
  profile?: {
    name?: string,
    email?: string,
    mobile?: string,
    gitee?: string,
    workExpYear?: string,
    workPlace?: string,
    positionTitle?: string
  };
  // 教育
  educationList?: {
    edu_time?: string,
    school?: string,
    major?: string,
    academic_degree?: string
  };
  // 自我介绍
  aboutme?: {
    aboutme_desc?: string
  };
  // 更多信息 奖项
  awardList?: Array<{
    award_info?: string;
    award_time?: string;
  }>;
  // 作品
  workList?: Array<{
    work_name?: string;
    work_desc?: string;
    visit_link?: string;
  }>;
  // 个人技能
  skillList?: Array<{
    skill_name?: string;
    skill_desc?: string;
  }>
  // 工作经历
  workExpList?: Array<{
    company_name?: string;
    department_name?: string;
    // work_time?: [string | undefined, string | number];
    work_time?: string,
    work_desc?: string;
  }>;
  projectList?: Array<{
    project_name?: string,
    project_role?: string,
    project_time?: string,
    project_desc?: string,
    project_content?: string
  }>;
  // 标签名称映射
  titleNameMap?: {
    // 教育背景
    educationList?: string;
    /** 工作经历 */
    workExpList?: string;
    /** 项目经历 */
    projectList?: string;
    /** 个人技能 */
    skillList?: string;
    /** 更多信息 */
    awardList?: string;
    /** 作品 */
    workList?: string;
    /** 自我介绍 */
    aboutme?: string;
    // 头像
    avatar?: string;
  };
}
