/**
 * title: Two sizes
 * desc: `size="small"` represents a small sized switch.
 *
 * title.zh-CN: 两种大小
 * desc.zh-CN: `size="small"` 表示小号开关。
 */

import React from 'react';
import { Switch } from 'whale-design';

export default () => {
  return (
    <div id="components-switch-demo-size">
      <Switch defaultChecked />
      <Switch defaultChecked size="small" />
    </div>
  );
};
