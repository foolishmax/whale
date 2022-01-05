/**
 * title: Block
 * desc: `block` property will make the button fit to its parent width.
 *
 * title.zh-CN: block按钮
 * desc.zh-CN: block 属性将使按钮适合其父宽度。
 */

import React from 'react';
import { Button } from 'whale-design';

export default () => {
  return (
    <div id="components-button-demo-block">
      <Button block>Default</Button>
      <Button type="primary" block>
        Primary
      </Button>
      <Button type="dashed" block>
        Dashed
      </Button>
    </div>
  );
};
