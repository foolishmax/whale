/**
 * title: disabled
 * desc: To mark a button as disabled, add the disabled property to the Button.
 *
 * title.zh-CN: 禁用状态
 * desc.zh-CN: 添加 disabled 属性即可让按钮处于不可用状态，同时按钮样式也会改变。。
 */

import React from 'react';
import { Button } from 'whale-design';

export default () => {
  return (
    <div id="components-button-demo-disabled">
      <Button type="primary">Primary</Button>
      <Button type="primary" disabled>
        Primary(disabled)
      </Button>
      <Button>Default</Button>
      <Button disabled>Default(disabled)</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="dashed" disabled>
        Dashed(disabled)
      </Button>
      <br />
      <Button type="text">Text</Button>
      <Button type="text" disabled>
        Text(disabled)
      </Button>
      <Button type="link">Link</Button>
      <Button type="link" disabled>
        Link(disabled)
      </Button>
      <br />
      <Button danger>Danger Default</Button>
      <Button danger disabled>
        Danger Default(disabled)
      </Button>
      <Button danger type="text">
        Danger Text
      </Button>
      <Button danger type="text" disabled>
        Danger Text(disabled)
      </Button>
      <br />
      <Button type="link" danger>
        Danger Link
      </Button>
      <Button type="link" danger disabled>
        Danger Link(disabled)
      </Button>
    </div>
  );
};
