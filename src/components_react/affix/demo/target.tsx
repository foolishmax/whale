/**
 * title: Container to scroll
 * desc: Set a `target` for 'Affix', which is listen to scroll event of target element (default is `window`).
 *
 * title.zh-CN: 滚动容器
 * desc.zh-CN: 用`target`设置`Affix`需要监听其滚动事件的元素，默认为`window`。
 */

import React, { useState } from 'react';
import { Button, Affix } from 'whale-design';

export default () => {
  const [container, setContainer] = useState<HTMLDivElement | null>(null);
  return (
    <div id="components-affix-demo-target">
      <div className="scrollable-container" ref={setContainer}>
        <div className="background">
          <Affix target={() => container}>
            <Button type="primary">Fixed at the top of container</Button>
          </Affix>
        </div>
      </div>
    </div>
  );
};
