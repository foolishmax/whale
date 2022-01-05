/**
 * title: Size
 * desc: Set 'size' to 'large' and 'small' to set the buttons to large and small sizes respectively. If 'size' is not set, the size is medium.
 *
 * title.zh-CN: 按钮大小
 * desc.zh-CN: 按钮有大（large）、中(middle)(默认)、小(small)三种尺寸。
 */

import React from 'react';
import { Button } from 'whale-design';

export default () => {
  return (
    <div id="components-button-demo-size">
      <Button type="primary" size="large">
        Large
      </Button>
      <Button type="primary" size="middle">
        Middle
      </Button>
      <Button type="primary" size="small">
        Small
      </Button>

      <Button type="dashed" size="large">
        Large
      </Button>
      <Button type="dashed" size="middle">
        Middle
      </Button>
      <Button type="dashed" size="small">
        Small
      </Button>
    </div>
  );
};
