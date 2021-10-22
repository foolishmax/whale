/**
 * title: Basic
 * desc: the simplest usage.
 *
 * title.zh-CN: 基本
 * desc.zh-CN: 最简单用法。
 */

import React, { useState } from 'react';
import { Button, Affix } from 'whale-design';

export default () => {
  const [top, setTop] = useState(10);
  const [bottom, setBottom] = useState(10);

  return (
    <div id="components-button-demo-block">
      <Affix offsetTop={top}>
        <Button type="primary" onClick={() => setTop(top + 10)}>
          Affix top
        </Button>
      </Affix>
      <br />
      <Affix offsetBottom={bottom}>
        <Button type="primary" onClick={() => setBottom(bottom + 10)}>
          Affix bottom
        </Button>
      </Affix>
    </div>
  );
};
