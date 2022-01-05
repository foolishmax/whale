/**
 * title: Basic
 * desc: The most basic usage.
 *
 * title.zh-CN: 基本
 * desc.zh-CN: 最简单的用法。
 */

import React from 'react';
import { Switch } from 'whale-design';

export default () => {
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  return (
    <div id="components-switch-demo-base">
      <Switch defaultChecked onChange={onChange} />
    </div>
  );
};
