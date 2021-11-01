/**
 * title: Callback
 * desc: Callback with affixed state.
 *
 * title.zh-CN: 固定状态改变的回调
 * desc.zh-CN: 可以获得是否固定的状态。
 */

import React from 'react';
import { Button, Affix } from 'whale-design';

export default () => {
  return (
    <div id="components-affix-demo-callback">
      <Affix
        offsetTop={120}
        onChange={(affixed: boolean) => console.log(affixed)}
      >
        <Button>120px to affix top</Button>
      </Affix>
    </div>
  );
};
