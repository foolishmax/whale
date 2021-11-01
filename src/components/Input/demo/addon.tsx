/**
 * title: Pre / Post tab
 * desc: Using pre & post tabs example.
 *
 * title.zh-CN: 前置/后置标签
 * desc.zh-CN: 用于配置一些固定组合。
 */

import React from 'react';
import { Input } from 'whale-design';

export default () => {
  return (
    <div id="components-input-demo-addon">
      <Input addonBefore="http://" addonAfter=".com" defaultValue="xxx" />
      <Input addonBefore="http://" suffix=".com" defaultValue="xxx" />
    </div>
  );
};
