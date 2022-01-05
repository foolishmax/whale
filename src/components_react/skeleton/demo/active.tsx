/**
 * title: Active Animation
 * desc: Display active animation.
 *
 * title.zh-CN: 动画效果
 * desc.zh-CN: 显示动画效果。
 */

import React from 'react';
import { Skeleton } from 'whale-design';

export default () => {
  return (
    <div id="components-skeleton-demo-active">
      <Skeleton active />
    </div>
  );
};
