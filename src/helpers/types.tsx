
// 配置简历强类型语法
export type ResumeConfig = {


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
  }
}