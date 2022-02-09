import React, { useState } from 'react';

import { Button, Form, Input } from 'antd';

// 定义外值接口类
type Props = {
  // 表单配置内容
  value: string,
  onChange: (v: any) => void;
}

export const FormCreater: React.FC<Props> = props => {

  const [fields, setFilds] = useState([]);

  const onFinish = (values: any) => {
    props.onChange(values);
  }

  return (
    <Form
      initialValues={[]}
      fields={fields}
      onChange={(newfilds: any) => setFilds(newfilds)}
      onFinish={onFinish}
    >
      <Form.Item>
        <Input placeholder={props.value} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">提交</Button>
      </Form.Item>
    </Form>
  )
}

