import React, { useState } from 'react';

import { FormItemProps } from 'antd/lib/form'

import { Button, Form, Input, Checkbox } from 'antd';


const { TextArea } = Input;

// 定义外值接口类
// TODO：ts报错，可选属性未定义
// type Props = {
//   // 表单配置内容
//   value: string,
//   onChange: (v?: any) => void;
// }

// 动态配置 form 表单内容
const FormItemComponentMap = (type: string) => (
  props: { value: any; }
) => {
  // console.log(props, 2)
  switch (type) {
    case 'checkbox':
      return <Checkbox {...props}/>;
    case 'input':
      return <Input {...props} />;
    case 'textarea':
      return <TextArea {...props} />     
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
      labelCol={{ span: 6 }}
      onFieldsChange={(_: any, newfilds: any) => {
        setFilds(newfilds);
      }}
      onFinish={onFinish}
    >
      {
        props.config?.length > 0 ? props.config.map((v, i) => {
          console.log(v)
          return (
            <Form.Item
              key={v?.attributeId}
              name={v?.attributeId}
              label={v?.displayName}
              wrapperCol={{ span: 18 }}
              {...v.formItemProps || {}}
            >
              {FormItemComponentMap(v.type)({
                ...v,
                // TODO：可从外部值传入 静态值
                value: undefined
              })}
            </Form.Item>
          )
        }) : null
      }
      <Form.Item wrapperCol={{ offset: 12 }}>
        <Button type="primary" htmlType="submit">提交</Button>
      </Form.Item>
    </Form>
  )
}

