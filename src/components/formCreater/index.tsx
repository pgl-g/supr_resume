import React, { useState } from 'react';

import { FormItemProps } from 'antd/lib/form'

import { Button, Form, Input } from 'antd';

// 定义外值接口类
// TODO：ts报错，可选属性未定义
// type Props = {
//   // 表单配置内容
//   value: string,
//   onChange: (v?: any) => void;
// }

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

  // console.log(props.config);
  return (
    <Form
      initialValues={[]}
      fields={fields}
      onChange={(newfilds: any) => setFilds(newfilds)}
      onFinish={onFinish}
    >
      {
        props.config.map(v => {
          return (
            <Form.Item
              key={v.attributeId}
              name={v.attributeId}
              label={v.displayName}
            >
              xxxx
            </Form.Item>
          )
        })
      }
      <Form.Item>
        <Button type="primary" htmlType="submit">提交</Button>
      </Form.Item>
    </Form>
  )
}

