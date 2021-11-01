/**
 * title: avatar
 * desc: skeleton avatar.
 *
 * title.zh-CN: 头像
 * desc.zh-CN: 占位头像
 */

import React, { useState } from 'react';
import { Skeleton, Switch } from 'whale-design';

const { Avatar } = Skeleton;

export default () => {
  const [active, setActive] = useState(false);
  const [shape, setShape] = useState('circle');
  return (
    <div id="components-skeleton-demo-button">
      <Avatar active={active} shape={shape} />
      <br />
      <br />
      Active: <Switch checked={active} onChange={() => setActive(!active)} />
      Avatar Shape(Square or Circle):{' '}
      <Switch
        checked={shape}
        onChange={() => setShape(shape === 'circle' ? 'square' : 'circle')}
      />
    </div>
  );
};
