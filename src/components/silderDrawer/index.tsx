import React, { useState, useMemo } from 'react';


import { Button, Drawer, Collapse, Checkbox } from 'antd';

import { MOUDLE, CONFIG_MOUDLE } from '../../helpers/contant';
import { RESUME_INFO } from '../../datas/resume';
import {FormCreater} from '../formCreater';
import './index.less';

// 折叠面板
const { Panel } = Collapse;

// 抽屉弹窗
const SilderDrawer = (props: { handleSubmitEmit: (v: any) => void}) => {
  const [visible, setVisible] = useState<boolean>(false);
  

  // 配置内容
  const [formListValue, setFormListValue] = useState([]);
  const [formValue, updateFormValue] = useState({});
  const [modelKey, setModelKey] = useState('');

  // 模版数据源
  const moudles = useMemo(() => {
    return MOUDLE();
  }, []);

  // 下拉模版配置
  const configMouldes = useMemo(() => {
    return CONFIG_MOUDLE();
  }, []);

  // 处理下拉列表事件数据源 TODO: 后期优化
  const handleCollapse = (values: any) => {
    let result: any = [];
    // @ts-ignore
    result = configMouldes[values]
    updateFormValue({
      ...result,
      dataIndex: 0
    });

    setModelKey(values);
    setFormListValue(result);
  }

  // 处理提交问题
  const handleSubmit = (val: any) => {
    if (modelKey.endsWith('List')) {
      const newVal = [val];
      props.handleSubmitEmit({[modelKey]: newVal});
    } else {
      props.handleSubmitEmit({[modelKey]: val});
    }
  } 

  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>
        进行配置
      </Button>
      <Drawer
        title="配置模版"
        visible={visible}
        closable={false}
        onClose={() => setVisible(false)}
      >
        <div className="moudle-item">
          <Collapse ghost accordion onChange={handleCollapse}>
            {
              moudles.map(item => {
                return (
                  <Panel 
                    header={
                      <span>{item.name}</span>
                    }
                    key={item.key}
                  >
                    <div className='list-item-value'>
                      <FormCreater
                        config={formListValue}
                        value={formValue}
                        onChange={handleSubmit}
                      />
                    </div>
                  </Panel>
                )
              })
            } 
          </Collapse>
        </div>
      </Drawer>
    </>
  )
}

export default SilderDrawer;