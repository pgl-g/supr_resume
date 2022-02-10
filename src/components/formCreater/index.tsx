import React, { useState } from 'react';

import { FormItemProps } from 'antd/lib/form'

import { Button, Form, Input, Checkbox } from 'antd';

// 定义外值接口类
// TODO：ts报错，可选属性未定义
// type Props = {
//   // 表单配置内容
//   value: string,
//   onChange: (v?: any) => void;
// }

// 动态配置 form组件
const FormItemComponentMap = (type: string) => (
  props: { value: any; onChange?: (v: any) => void } = { value: null }
) => {
  switch (type) {
    case 'checkbox':
      return <Checkbox {...props}/>;     
    default:
    return <Input {...props}/>;
  }
};
export const FormCreater = (
  props: 
  { 
    onChange: (v: any) => void; 
    value: {
      [k: string]: any
    }; 
    config: Array<{
      key: string;
      type: string;
      attributeId: string;
      displayName: string;
      formItemProps?: FormItemProps;
      cfg?: {
        [k: string]: any // 其他配置
      }
    }>
  }) => {

  const [fields, setFilds] = useState([]);

  const onFinish = (values: any) => {
    props.onChange(values);
  }

  return (
    <Form
      initialValues={[]}
      fields={fields}
      onFieldsChange={(_: any, newfilds: any) => {
        setFilds(newfilds);
      }}
      onFinish={onFinish}
    >
      {
        // 越界判断
        props.config && props.config.length > 0 ? props.config.map(v => {
          return (
            <Form.Item
              key={v.attributeId}
              name={v.attributeId}
              label={v.displayName}
            >
              {FormItemComponentMap(v.type)({
                ...v.cfg,
                value: undefined
              })}
            </Form.Item>
          )
        }) : null
      }
      <Form.Item>
        <Button type="primary" htmlType="submit">提交</Button>
      </Form.Item>
    </Form>
  )
}

