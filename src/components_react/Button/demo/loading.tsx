/**
 * title: Loading
 * desc: A loading indicator can be added to a button by setting the `loading` property on the `Button`.
 *
 * title.zh-CN: 加载中状态
 * desc.zh-CN: 添加 `loading` 属性即可让按钮处于加载状态。
 */

import React from 'react';
import { Button } from 'whale-design';

export default () => {
  return (
    <div id="components-button-demo-loading">
      <Button type="primary" loading>
        Loading
      </Button>
      <Button type="primary" danger loading>
        Loading
      </Button>
      <br />
      <Button type="primary" loading />
      <Button type="primary" danger loading />
    </div>
  );
};
