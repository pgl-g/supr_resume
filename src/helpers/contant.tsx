import React from 'react';


export const MOUDLE = () => {
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
      name: '更多信息',
      key: 'awardList'
    },
    { 
      name: '个人作品', 
      key: 'workList'
    },
    { 
      name: '专业技能', 
      key: 'skillList'},
    { 
      name: '工作经历', 
      key: 'workExpList'
    },
    { 
      name: '项目经历', 
      key: 'projectList'
    },
  ]
}

// 配置模版内容
export const CONFIG_MOUDLE = () => {
  return [
    {
      key: 'avatar',
      type: 'checkbox',
      attributeId: 'hidden',
      displayName: '隐藏头像',
      formItemProps: {
        valuePropName: 'checked',
      },
      cfg: {
        checked: false,
      },
    },
    {
      key: 'profile',
      type: 'input',
      attributeId: 'name',
      displayName: '姓名',
      formItemProps: { rules: [{ required: true }] },
    },
    {
      key: 'educationList',
      type: 'input',
      attributeId: 'name',
      displayName: '教育背景',
      formItemProps: { rules: [{ required: true }] },
    },
    {
      key: 'awardList',
      type: 'input',
      attributeId: 'name',
      displayName: '更多信息',
      formItemProps: { rules: [{ required: true }] },
    },
    {
      key: 'aboutme',
      type: 'input',
      attributeId: 'name',
      displayName: '自我介绍',
      formItemProps: { rules: [{ required: true }] },
    },
    {
      key: 'workList',
      type: 'input',
      attributeId: 'name',
      displayName: '个人作品',
      formItemProps: { rules: [{ required: true }] },
    },
    {
      key: 'skillList',
      type: 'input',
      attributeId: 'name',
      displayName: '专业技能',
      formItemProps: { rules: [{ required: true }] },
    },
    {
      key: 'workExpList',
      type: 'input',
      attributeId: 'name',
      displayName: '工作经历',
      formItemProps: { rules: [{ required: true }] },
    },
    {
      key: 'projectList',
      type: 'input',
      attributeId: 'name',
      displayName: '项目经历',
      formItemProps: { rules: [{ required: true }] },
    }
  ]
}

