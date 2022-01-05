/**
 * title: Split text using text style
 * desc: You can use non-heading style of divider text by setting plain.
 *
 * title.zh-CN: 分割文字使用正文样式
 * desc.zh-CN: 使用 plain 可以设置为更轻量的分割文字样式。
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
      <Divider plain>Text</Divider>
      <p>
        Life is always let us was black and blue all over, but afterwards, the
        injured local will become our most strong place. I may not be the best,
        but I'm definitely not like the rest.
      </p>
      <Divider position="left" plain>
        Left Text
      </Divider>
      <p>
        Life is always let us was black and blue all over, but afterwards, the
        injured local will become our most strong place. I may not be the best,
        but I'm definitely not like the rest.
      </p>
      <Divider position="right" plain>
        Right Text
      </Divider>
      <p>
        Life is always let us was black and blue all over, but afterwards, the
        injured local will become our most strong place. I may not be the best,
        but I'm definitely not like the rest.
      </p>
    </div>
  );
};
