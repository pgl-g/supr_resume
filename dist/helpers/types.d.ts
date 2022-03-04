export declare type ResumeConfig = {
    avatar?: {
        src?: string;
        hidden?: boolean;
    };
    profile?: {
        name?: string;
        email?: string;
        mobile?: string;
        gitee?: string;
        workExpYear?: string;
        workPlace?: string;
        positionTitle?: string;
    };
    educationList?: {
        edu_time?: string;
        school?: string;
        major?: string;
        academic_degree?: string;
    };
    aboutme?: {
        aboutme_desc?: string;
    };
    awardList?: Array<{
        award_info?: string;
        award_time?: string;
    }>;
    workList?: Array<{
        work_name?: string;
        work_desc?: string;
        visit_link?: string;
    }>;
    skillList?: Array<{
        skill_name?: string;
        skill_desc?: string;
    }>;
    workExpList?: Array<{
        company_name: string;
        department_name: string;
        work_time?: [string | undefined, string | number];
        work_desc: string;
    }>;
    projectList?: Array<{
        project_name?: string;
        project_role?: string;
        project_time?: string;
        project_desc?: string;
        project_content?: string;
    }>;
    titleNameMap?: {
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
        avatar?: string;
    };
};
