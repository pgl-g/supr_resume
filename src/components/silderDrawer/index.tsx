import React, { useState, useMemo } from 'react';


import { Button, Drawer, Collapse, Input } from 'antd';

import { MOUDLE } from '../../helpers/contant';
import './index.less';

// 折叠面板
const { Panel } = Collapse;

// 抽屉弹窗
const SilderDrawer = () => {
  const [visible, setVisible] = useState(false);


  // 事件处理
  const handleChange = (e: any) => {
    console.log(e);
  }

  const moudles = useMemo(() => {
    return MOUDLE();
  }, []);

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
          moudles.map((moudle, index) => {
            return (
              <div className="moudle-item" key={index}>
                <Collapse>
                  <Panel 
                    header={
                    <Input
                      placeholder={moudle.name}
                      bordered={false}
                      defaultValue={moudle.name}
                      onChange={() => handleChange}
                      style={{ padding: 0 }} />
                    }
                    key="1"
                  >
                    <div className='list-item-value'>
                      xxxx
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