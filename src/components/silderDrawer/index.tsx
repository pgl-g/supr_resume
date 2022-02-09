import React, { useState, useMemo } from 'react';


import { Button, Drawer, Collapse, Checkbox } from 'antd';

import { MOUDLE, CONFIG_MOUDLE } from '../../helpers/contant';
import { RESUME_INFO } from '../../datas/resume';
import {FormCreater} from '../formCreater';
import './index.less';

// 折叠面板
const { Panel } = Collapse;

// 抽屉弹窗
const SilderDrawer: React.FC = props => {
  const [visible, setVisible] = useState<boolean>(false);
  

  // 配置内容
  const [formListValue, setFormListValue] = useState([]);
  const [formValue, updateFormValue] = useState({});

  // 模版数据源
  const moudles = useMemo(() => {
    return MOUDLE();
  }, []);

  // 下拉模版配置
  const configMouldes = useMemo(() => {
    return CONFIG_MOUDLE();
  }, []);


  // 处理提交问题
  const handleSubmit = (val: any) => {
    console.log(val);
  } 

  // 处理下拉列表事件数据源 TODO: 这里有问题
  const handleCollapse = (values: any) => {
    let result: any = [];
    let resultValue: any;
    let copyConfigMouldes = configMouldes.slice();
    copyConfigMouldes.forEach(item => {
      if (item.key === values[0]) {
        result.push(item);
        resultValue = item;
      }
    })
    updateFormValue({
      ...resultValue,
      dataIndex: 0
    });
    setFormListValue(result);
  }

  // console.log(formValue);
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
        {
          moudles.map((item, index) => {
            return (
              <div className="moudle-item" key={index}>
                <Collapse ghost defaultActiveKey={[]} onChange={handleCollapse}>
                  <Panel 
                    header={
                      <span>{item.name}</span>
                    }
                    key={item.key}
                  >
                    <div className='list-item-value'>
                      {
                        configMouldes.map((config, idx) => (
                          config.key === item.key ? (
                            <React.Fragment key={idx}>
                              <FormCreater
                                config={formListValue}
                                value={formValue}
                                onChange={v => {
                                  console.log(v)
                                }}
                              />
                            </React.Fragment>
                          ) : null
                        ))
                      }
                    </div>
                  </Panel>
              </Collapse>
              </div>
              )
          })
        }
        
      </Drawer>
    </>
  )
}

export default SilderDrawer;