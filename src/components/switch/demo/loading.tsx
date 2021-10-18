/**
 * title: Loading
 * desc: Mark a pending state of switch.
 *
 * title.zh-CN: 加载中
 * desc.zh-CN: 开关操作执行中状态。
 */

import React from 'react';
import { Switch } from 'whale-design';

export default () => {
  return (
    <div id="components-switch-demo-loading">
      <Switch defaultChecked loading />
      <Switch size="small" loading />
    </div>
  );
};
