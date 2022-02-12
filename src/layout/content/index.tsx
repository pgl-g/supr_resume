import React, { useState, useMemo } from 'react';

import { Button, Affix, Upload } from 'antd';
import { RcFile } from 'antd/lib/upload'
import SilderDrawer from '../../components/silderDrawer';
import Resume from '../../components/resume';
import { CopyConfig } from '../../helpers/copy';
import { CONFIG_MOUDLE } from '../../helpers/contant';
import './index.less';

const Content = () => {

  const [resumeConfig, updateResumeConfig] = useState();

  // 静态模版数据
  const config_moudle = useMemo(() => {
    return CONFIG_MOUDLE();
  }, []);

  // 处理提交配置
  const handleSubmitEmit = (val: any) => {
    updateResumeConfig(val);
  }

  // 导入配置 文件处理
  const importConfig = (file: RcFile) => {
    console.log(file);
  }

  // 复制配置
  const handleCopyConfig = () => {
    CopyConfig('1212')
  }

  return (
    <div className='page-container'>
      <Resume 
        config={resumeConfig}
      />
      {/* 配置 */}
      <React.Fragment>
        <Affix offsetTop={0}>
          <Button.Group className="btn-group">
            <SilderDrawer 
              handleSubmitEmit={handleSubmitEmit}
            />
            <Upload
              accept=".josn"
              showUploadList={false}
              beforeUpload={importConfig}
              key={'2'}
            >
              <Button type="primary">导入配置</Button>
            </Upload>
            <Button type="primary" onClick={handleCopyConfig} key={'3'}>复制配置</Button>
            <Button type="primary" key={'4'} onClick={() => window.print()}>下载配置</Button>
          </Button.Group>
        </Affix>
      </React.Fragment>
    </div>
  );
};

export default Content;
