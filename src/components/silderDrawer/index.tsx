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
  const [visible, setVisible] = useState(false);
  
  // 模版
  const moudles = useMemo(() => {
    return MOUDLE();
  }, []);

  // 下模版配置
  const configMouldes = useMemo(() => {
    return CONFIG_MOUDLE();
  }, []);


  // 处理提交问题
  const handleSubmit = (val: any) => {
    console.log(val);
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
        {
          moudles.map((item, index) => {
            return (
              <div className="moudle-item" key={index}>
                <Collapse defaultActiveKey={[]}>
                  <Panel 
                    header={
                      <span>{item.name}</span>
                    }
                    key={item.key}
                  >
                    <div className='list-item-value'>
                      {
                        configMouldes.map((config, idx) => {
                          if (config.key !== item.key) return;
                          return (
                            <React.Fragment>
                              {/* <div key={idx}>{config.displayName}</div> */}
                              <FormCreater
                                value={config.displayName}
                                onChange={v => {
                                  console.log(v)
                                }}
                              />
                            </React.Fragment>
                          )
                        })
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