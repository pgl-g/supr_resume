export declare const MOUDLE: () => {
    name: string;
    key: string;
}[];
export declare const CONFIG_MOUDLE: () => {
    /** 头像 */
    avatar: {
        type: string;
        attributeId: string;
        displayName: string;
        formItemProps: {
            valuePropName: string;
        };
        cfg: {
            checked: boolean;
        };
    }[];
    /** 个人信息 */
    profile: ({
        type: string;
        attributeId: string;
        displayName: string;
        formItemProps: {
            rules: {
                required: boolean;
            }[];
        };
    } | {
        type: string;
        attributeId: string;
        displayName: string;
        formItemProps?: undefined;
    })[];
    /** 教育背景 */
    educationList: {
        type: string;
        attributeId: string;
        displayName: string;
        formItemProps: {
            rules: {
                required: boolean;
            }[];
        };
    }[];
    /** 自我介绍 */
    aboutme: {
        type: string;
        attributeId: string;
        cfg: {
            autoSize: {
                minRows: number;
            };
            showCount: boolean;
        };
    }[];
    /** 更多信息 */
    awardList: {
        type: string;
        attributeId: string;
        displayName: string;
        formItemProps: {
            rules: {
                required: boolean;
            }[];
        };
    }[];
    /** 个人作品 */
    workList: {
        type: string;
        attributeId: string;
        displayName: string;
    }[];
    workExpList: {
        type: string;
        attributeId: string;
        displayName: string;
    }[];
    skillList: {
        type: string;
        attributeId: string;
        displayName: string;
    }[];
    /** 项目经历 */
    projectList: {
        type: string;
        attributeId: string;
        displayName: string;
    }[];
};
