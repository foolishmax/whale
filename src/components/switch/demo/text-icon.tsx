/**
 * title: Text & Icon
 * desc: With text and icon.
 *
 * title.zh-CN: 文字和图标
 * desc.zh-CN: 带有文字和图标。
 */

import React from 'react';
import { Switch } from 'whale-design';
import { createFromIconfontCN } from 'whale-design';

const IconFont = createFromIconfontCN({
  scriptUrl: ['//at.alicdn.com/t/font_2841973_v5d3b3ghgw.js'],
});

export default () => {
  return (
    <div id="components-switch-demo-text-icon">
      <Switch defaultChecked checkedChildren="开启" unCheckedChildren="关闭" />
      <Switch
        defaultChecked
        checkedChildren={<IconFont type="icon-cry" />}
        unCheckedChildren={<IconFont type="icon-meh" />}
      />
    </div>
  );
};
