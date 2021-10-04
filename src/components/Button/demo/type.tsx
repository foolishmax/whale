/**
 * title: Type
 * desc: There are five types of buttons:default、primary、dashed、link and text.
 *
 * title.zh-CN: 按钮类型
 * desc.zh-CN: 按钮有default、primary、dashed、link和text五种类型。
 */

import React from 'react';
import { Button } from 'whale-design';

export default () => {
  return (
    <div id="components-button-demo-type">
      <Button>Default</Button>
      <Button type="primary">Primary</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="link">Link</Button>
      <Button type="text">Text</Button>
    </div>
  );
};
