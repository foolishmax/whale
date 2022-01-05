/**
 * title: Shape
 * desc: There are three types of buttons:default、circle and round.
 *
 * title.zh-CN: 按钮形状
 * desc.zh-CN: 按钮有 default、circle和round三种形状
 */

import React from 'react';
import { Button } from 'whale-design';

export default () => {
  return (
    <div id="components-button-demo-shape">
      <Button shape="default">Default</Button>
      <Button shape="circle">Circle</Button>
      <Button shape="round">Round</Button>
      <Button type="primary" shape="default">
        Default
      </Button>
      <Button type="primary" shape="circle">
        Circle
      </Button>
      <Button type="primary" shape="round">
        Round
      </Button>
      <Button type="dashed" shape="default">
        Default
      </Button>
      <Button type="dashed" shape="circle">
        Circle
      </Button>
      <Button type="dashed" shape="round">
        Round
      </Button>
    </div>
  );
};
