/**
 * title: vertical
 * desc: Divider with inner title, set `position="left/right/center(default)"` to align it.
 *
 * title.zh-CN: 带文字的分割线
 * desc.zh-CN: 分割线中带有文字，可以用 position 指定文字位置。
 */

import React from 'react';
import { Divider } from 'whale-design';

export default () => {
  return (
    <div id="components-divider-demo-vertical">
      <p>
        Life is always let us was black and blue all over, but afterwards, the
        injured local will become our most strong place. I may not be the best,
        but I'm definitely not like the rest.
      </p>
      <Divider>Text</Divider>
      <p>
        Life is always let us was black and blue all over, but afterwards, the
        injured local will become our most strong place. I may not be the best,
        but I'm definitely not like the rest.
      </p>
      <Divider position="left">Left Text</Divider>
      <p>
        Life is always let us was black and blue all over, but afterwards, the
        injured local will become our most strong place. I may not be the best,
        but I'm definitely not like the rest.
      </p>
      <Divider position="right">Right Text</Divider>
      <p>
        Life is always let us was black and blue all over, but afterwards, the
        injured local will become our most strong place. I may not be the best,
        but I'm definitely not like the rest.
      </p>
    </div>
  );
};
