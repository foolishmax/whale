/**
 * title: prefix & suffix
 * desc: You can set prefix and suffix icons.
 *
 * title.zh-CN: prefix & suffix
 * desc.zh-CN: `<Input />`可以设置前缀和后缀图标。
 */

import React from 'react';
import { Input } from 'whale-design';
import { createFromIconfontCN } from 'whale-design';

const IconFont = createFromIconfontCN({
  scriptUrl: ['//at.alicdn.com/t/font_2841973_v5d3b3ghgw.js'],
});

export default () => {
  return (
    <div id="components-input-demo-prefix-suffix">
      <Input placeholder="prefix" prefix={<IconFont type="icon-smile" />} />
      <Input placeholder="suffix" suffix={<IconFont type="icon-smile" />} />
    </div>
  );
};
