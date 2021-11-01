/**
 * title: button
 * desc: radio button.
 *
 * title.zh-CN: 按钮类型
 * desc.zh-CN: 按钮类型。
 */

import React from 'react';
import { Radio } from 'whale-design';

export default () => {
  return (
    <div id="components-radio-demo-button">
      <Radio.Group defaultValue="a" size="large" style={{ marginRight: 18 }}>
        <Radio.Button value="a">网格</Radio.Button>
        <Radio.Button value="b">列表</Radio.Button>
        <Radio.Button value="c">表格</Radio.Button>
      </Radio.Group>

      <Radio.Group
        defaultValue="a"
        buttonStyle="solid"
        style={{ marginRight: 18 }}
      >
        <Radio.Button value="a">网格</Radio.Button>
        <Radio.Button value="b">列表</Radio.Button>
        <Radio.Button value="c">表格</Radio.Button>
      </Radio.Group>

      <Radio.Group defaultValue="a" buttonStyle="solid" size="small">
        <Radio.Button value="a">网格</Radio.Button>
        <Radio.Button value="b" disabled>
          列表
        </Radio.Button>
        <Radio.Button value="c">表格</Radio.Button>
      </Radio.Group>
    </div>
  );
};
