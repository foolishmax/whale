/**
 * title: password
 * desc: Input type of password.
 *
 * title.zh-CN: 密码框
 * desc.zh-CN: 密码框。
 */

import React from 'react';
import { Input, createFromIconfontCN } from 'whale-design';

const IconFont = createFromIconfontCN({
  scriptUrl: ['//at.alicdn.com/t/font_2841973_v5d3b3ghgw.js'],
});

const { Password } = Input;

export default () => {
  return (
    <div id="components-input-demo-basic">
      <Password placeholder="password input" />
      <Password
        placeholder="password input"
        iconRender={(visible: boolean) =>
          visible ? (
            <IconFont type="icon-cry" />
          ) : (
            <IconFont type="icon-smile" />
          )
        }
      />
    </div>
  );
};
