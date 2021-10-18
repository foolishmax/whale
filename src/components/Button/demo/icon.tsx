/**
 * title: Icon
 * desc: Button components can set the icon property or placing an Icon component within the Button.
 *
 * title.zh-CN: 图标按钮
 * desc.zh-CN: 当需要在 Button 内嵌入 Icon 时，可以设置 icon 属性，或者直接在 Button 内使用 Icon 组件。
 */

import React from 'react';
import { Button } from 'whale-design';
import { createFromIconfontCN } from 'whale-design';

const IconFont = createFromIconfontCN({
  scriptUrl: ['//at.alicdn.com/t/font_2841973_nr325vc0hy.js'],
});

export default () => {
  return (
    <div id="components-button-demo-icon">
      <Button type="primary" icon={<IconFont type="icon-electronics" />}>
        loading
      </Button>
      <Button type="primary" danger>
        <IconFont type="icon-electronics" />
        PC
      </Button>
    </div>
  );
};
