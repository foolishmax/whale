/**
 * title: Complex combination
 * desc: Complex combination with avatar and multiple paragraphs.
 *
 * title.zh-CN: 复杂组合
 * desc.zh-CN: 更复杂的组合。
 */

import React from 'react';
import { Skeleton } from 'whale-design';

export default () => {
  return (
    <div id="components-skeleton-demo-complex">
      <Skeleton avatar paragraph={{ rows: 4 }} />
    </div>
  );
};
