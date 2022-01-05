/**
 * title: button
 * desc: skeleton button.
 *
 * title.zh-CN: 按钮
 * desc.zh-CN: 占位按钮
 */

import React, { useState } from 'react';
import { Skeleton, Switch } from 'whale-design';

const { Button } = Skeleton;

export default () => {
  const [active, setActive] = useState(false);
  const [block, setBlock] = useState(false);
  return (
    <div id="components-skeleton-demo-button">
      <Button active={active} block={block} />
      <br />
      <br />
      Active: <Switch checked={active} onChange={() => setActive(!active)} />
      Block: <Switch checked={block} onChange={() => setBlock(!block)} />
    </div>
  );
};
