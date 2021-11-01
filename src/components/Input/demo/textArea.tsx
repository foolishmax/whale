/**
 * title: TextArea
 * desc: For multi-line input.
 *
 * title.zh-CN: 文本域
 * desc.zh-CN: 用于多行输入。
 */

import React from 'react';
import { Input } from 'whale-design';

const { TextArea } = Input;

export default () => {
  return (
    <div id="components-input-demo-text-area">
      <TextArea rows={4} showCount maxLength={100} />
    </div>
  );
};
