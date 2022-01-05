/**
 * title: vertical
 * desc: Use `type="vertical"` make it vertical.
 *
 * title.zh-CN: 垂直分割线
 * desc.zh-CN: 使用 type="vertical" 设置为行内的垂直分割线。
 */

import React from 'react';
import { Divider } from 'whale-design';

export default () => {
  return (
    <div id="components-divider-demo-vertical">
      Design
      <Divider type="vertical" />
      Doc
      <Divider type="vertical" />
      Components
    </div>
  );
};
