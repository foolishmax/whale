/**
 * title: Arrow pointing at the center
 * desc: By specifying `arrowPointAtCenter` prop, the arrow will point to the center of the target element.
 *
 * title.zh-CN: 箭头指向
 * desc.zh-CN: 设置`arrowPointAtCenter`后，箭头将指向目标元素中心。
 */

import React from 'react';
import { Tooltip, Button } from 'whale-design';

export default () => {
  return (
    <div id="components-tooltip-demo-point">
      <Tooltip placement="topLeft" title="Prompt Text">
        <Button>Align edge / 边缘对齐</Button>
      </Tooltip>
      <Tooltip placement="topLeft" title="Prompt Text" arrowPointAtCenter>
        <Button>Arrow points to center / 箭头指向中心</Button>
      </Tooltip>
    </div>
  );
};
