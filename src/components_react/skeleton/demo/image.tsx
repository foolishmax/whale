/**
 * title: image
 * desc: skeleton image.
 *
 * title.zh-CN: 图片
 * desc.zh-CN: 占位图片
 */

import React, { useState } from 'react';
import { Skeleton } from 'whale-design';

const { Image } = Skeleton;

export default () => {
  return (
    <div id="components-skeleton-demo-button">
      <Image />
    </div>
  );
};
