/**
 * title: input
 * desc: skeleton input.
 *
 * title.zh-CN: 输入框
 * desc.zh-CN: 占位输入框
 */

import React, { useState } from 'react';
import { Skeleton } from 'whale-design';

export default () => {
  return (
    <div id="components-skeleton-demo-input">
      <Skeleton.Input style={{ width: 200 }} active />
    </div>
  );
};
