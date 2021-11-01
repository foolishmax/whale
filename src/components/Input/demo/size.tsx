/**
 * title: size
 * desc: There are three sizes of an Input box: `large`(40px),`default`(32px) and `small` (24px).
 *
 * title.zh-CN: 大小
 * desc.zh-CN: `<Input />`输入框定义了三种尺寸（大、默认 、小），高度分别为`40px`、`32px`、`24px` 。
 */

import React from 'react';
import { Input } from 'whale-design';

export default () => {
  return (
    <div id="components-input-demo-size">
      <Input placeholder="large size" size="large" />
      <Input placeholder="default size" />
      <Input placeholder="small size" size="small" />
    </div>
  );
};
