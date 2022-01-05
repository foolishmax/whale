/**
 * title: Basic
 * desc: The simplest usage.
 *
 * title.zh-CN: 基本
 * desc.zh-CN: 最简单的用法。
 */

import React from 'react';
import { Tooltip } from 'whale-design';

export default () => {
  return (
    <div id="components-tooltip-demo-base">
      <Tooltip title="prompt text" placement="top">
        <span>Tooltip will show on mouse enter.</span>
      </Tooltip>
    </div>
  );
};
