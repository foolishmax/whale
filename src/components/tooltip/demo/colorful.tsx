/**
 * title: Colorful Tooltip
 * desc: We preset a series of colorful Tooltip styles for use in different situations.
 *
 * title.zh-CN: 多彩文字提示
 * desc.zh-CN: 添加了多重预设色彩的文字提示样式，用作不同场景。
 */

import React from 'react';
import { Tooltip, Button, Divider } from 'whale-design';

const colors = [
  'pink',
  'red',
  'yellow',
  'orange',
  'cyan',
  'green',
  'blue',
  'purple',
  'geekblue',
  'magenta',
  'volcano',
  'gold',
  'lime',
];
const customColors = ['#f50', '#2db7f5', '#87d068', '#108ee9'];

export default () => {
  return (
    <div id="components-tooltip-demo-colorful">
      <Divider orientation="left">Presets</Divider>
      <div>
        {colors.map((color) => (
          <Tooltip title="prompt text" color={color} key={color}>
            <Button>{color}</Button>
          </Tooltip>
        ))}
      </div>
      <Divider orientation="left">Custom</Divider>
      <div>
        {customColors.map((color) => (
          <Tooltip title="prompt text" color={color} key={color}>
            <Button>{color}</Button>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};
