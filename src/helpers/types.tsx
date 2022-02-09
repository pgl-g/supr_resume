
// 配置简历强类型语法
export type ResumeConfig = {

  avatar?: {
    src?: string,
    hidden?: boolean
  };
  profile?: {
    text?: string
  };
  educationList?: {
    text?: string
  };
  aboutme?: {
    text?: string
  };
  awardList?: {
    text?: string
  };
  workList?: {
    text?: string
  };
  skillList?: {
    text?: string
  };
  workExpList?: {
    text?: string
  };
  projectList?: {
    text?: string
  };
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