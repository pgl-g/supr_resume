import React, { useState, useCallback, useMemo, useEffect } from 'react';

import { Affix, Upload, Button } from 'antd';
import { RcFile } from 'antd/lib/upload'
import SilderDrawer from '../../components/silderDrawer';
import Resume from '../../components/resume';
import { CopyConfig } from '../../helpers/copy';
import { RESUME_INFO } from '../../datas/resume';
import { ResumeConfig } from '../../helpers/types';
import { CONFIG_MOUDLE } from '../../helpers/contant';
import './index.less';

const Content = () => {
  const [resumeConfig, updateResumeConfig] = useState<ResumeConfig>(RESUME_INFO);

  const onChangeConfig = (v: Partial<ResumeConfig>) => {
    updateResumeConfig(Object.assign({}, {}, v))
  }

  // 处理提交配置
  const handleSubmitEmit = useCallback((v: Partial<ResumeConfig>) => {
    onChangeConfig(Object.assign({}, resumeConfig, v))
  }, [resumeConfig]);

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
}

export default Content;
