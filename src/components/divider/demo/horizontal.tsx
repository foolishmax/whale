/**
 * title: horizontal
 * desc: Divider is `horizontal` by default. You can add the dashed attribute to change the line style to dashed lines.
 *
 * title.zh-CN: 水平分割线
 * desc.zh-CN: 默认为水平分割线，可在中间加入文字,可以添加 dashed 属性改变线条样式为虚线。
 */

import React from 'react';
import { Divider } from 'whale-design';

export default () => {
  return (
    <div id="components-divider-demo-horizontal">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
        merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
        quo modo.
      </p>
      <Divider />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
        merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
        quo modo.
      </p>
      <Divider dashed />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
        merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
        quo modo.
      </p>
    </div>
  );
};
