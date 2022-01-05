/**
 * title: danger buttons
 * desc: used for actions of risk, like deletion or authorization.
 *
 * title.zh-CN: 危险属性
 * desc.zh-CN: 一般用于删除/移动/修改权限等危险操作，一般需要二次确认。
 */

import React from 'react';
import { Button } from 'whale-design';

export default () => {
  return (
    <div id="components-button-demo-danger">
      <Button danger>Default</Button>
      <Button type="primary" danger>
        Primary
      </Button>
      <Button type="dashed" danger>
        Dashed
      </Button>
      <Button type="link" danger>
        Link
      </Button>
      <Button type="text" danger>
        Text
      </Button>
    </div>
  );
};
