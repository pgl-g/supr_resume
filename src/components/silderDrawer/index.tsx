import React, { useState } from 'react';


import { Button, Drawer } from 'antd';

import './index.less';



// 抽屉弹窗
const SilderDrawer = () => {
  const [visible, setVisible] = useState(false);

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

        xxssss
      </Drawer>
    </>
  )
}

export default SilderDrawer;