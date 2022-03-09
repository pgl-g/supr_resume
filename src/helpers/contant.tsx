// 配置key
const MOUDLE = () => {
  return [
    {
      name: '头像设置',
      key: 'avatar',
      
    },
    {
      name: '个人信息',
      key: 'profile',
    },
    {
      name: '教育背景',
      key: 'educationList'
    },
    {
      name: '自我介绍',
      key: 'aboutme'
    },
    { 
      name: '个人技能', 
      key: 'skillList'
    },
    { 
      name: '工作经历', 
      key: 'workExpList'
    },
    { 
      name: '项目经历', 
      key: 'projectList'
    },
    // {
    //   name: '更多信息',
    //   key: 'awardList'
    // },
    // { 
    //   name: '个人作品', 
    //   key: 'workList'
    // },
  ]
}

// 配置模版内容value
const CONFIG_MOUDLE = () => {
  return {
    /** 头像 */
    avatar: [
      {
        type: 'checkbox',
        attributeId: 'hidden',
        displayName: '隐藏头像',
        formItemProps: {
          valuePropName: 'checked',
        },
        cfg: {
          checked: false,
        },
      }
    ],
    /** 个人信息 */
    profile: [
      {
        type: 'input',
        attributeId: 'name',
        displayName: '姓名',
        formItemProps: { rules: [{ required: true }] },
      },
      {
        type: 'input',
        attributeId: 'mobile',
        displayName: '手机号码',
        formItemProps: { rules: [{ required: true }] },
      },
      {
        type: 'input',
        attributeId: 'email',
        displayName: '邮箱',
        formItemProps: { rules: [{ required: true }] },
      },
      {
        type: 'input',
        attributeId: 'gitee',
        displayName: 'Gitee',
      },
      {
        type: 'input',
        attributeId: 'workPlace',
        displayName: '地址',
      },
      {
        type: 'input',
        attributeId: 'wordExpYear',
        displayName: '工作经验',
      },
      {
        type: 'input',
        attributeId: 'positionTitle',
        displayName: '职位',
      }
    ],
    /** 教育背景 */
    educationList: [
      {
        type: 'input',
        attributeId: 'edu_time',
        displayName: '时间',
        formItemProps: { rules: [{ required: true }] },
      },
      {
        type: 'input',
        attributeId: 'school',
        displayName: '学校',
        formItemProps: { rules: [{ required: true }] },
      },
      {
        type: 'input',
        attributeId: 'major',
        displayName: '专业',
        formItemProps: { rules: [{ required: true }] },
      },
      {
        type: 'input',
        attributeId: 'academic_degree',
        displayName: '学历',
        formItemProps: { rules: [{ required: true }] },
      },
    ],
    /** 自我介绍 */
    aboutme: [
      {
        type: 'textarea',
        attributeId: 'aboutme_desc',
        cfg: { autoSize: { minRows: 4 }, showCount: true },
      }
    ],
    /** 更多信息 */
    awardList: [
      {
        type: 'input',
        attributeId: 'award_info',
        displayName: '获奖信息',
        formItemProps: { rules: [{ required: true }] },
      },
      {
        type: 'input',
        attributeId: 'award_time',
        displayName: '获奖时间',
        formItemProps: { rules: [{ required: true }] },
      }
    ],
    /** 个人作品 */
    workList: [
      {
        type: 'input',
        attributeId: 'woak_name',
        displayName: '作品名称',
      },
      {
        type: 'input',
        attributeId: 'woak_desc',
        displayName: '作品描述',
      },
      {
        type: 'input',
        attributeId: 'woak_link',
        displayName: '作品链接',
      },
    ],
    workExpList: [
      {
        type: 'input',
        attributeId: 'company_name',
        displayName: '公司名称',
      },
      {
        type: 'input',
        attributeId: 'department_name',
        displayName: '担任职务',
      },
      {
        type: 'input',
        attributeId: 'work_time',
        displayName: '时间',
      },
      {
        type: 'input',
        attributeId: 'work_desc',
        displayName: '工作描述',
      },
    ],
    skillList: [
      {
        type: 'input',
        attributeId: 'skill_name',
        displayName: '技能名称',
      },
      {
        type: 'textaea',
        attributeId: 'skill_desc',
        displayName: '技能描述',
      },
    ],
    /** 项目经历 */
    projectList: [
      {
        type: 'input',
        attributeId: 'project_name',
        displayName: '项目名称',
      },
      {
        type: 'input',
        attributeId: 'project_role',
        displayName: '担任角色',
      },
      {
        type: 'input',
        attributeId: 'project_time',
        displayName: '项目时间',
      },
      {
        type: 'input',
        attributeId: 'project_desc',
        displayName: '项目描述',
      },
      {
        type: 'input',
        attributeId: 'project_content',
        displayName: '项目内容',
      },
    ]
  }
}


export {
  MOUDLE,
  CONFIG_MOUDLE
}