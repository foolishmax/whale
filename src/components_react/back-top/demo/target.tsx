/**
 * title: target
 * desc: Specifies the scrollable area dom node.
 *
 * title.zh-CN: target
 * desc.zh-CN: 指定可滚动区域的dom节点。
 */

import React from 'react';
import { BackTop } from 'whale-design';

export default () => {
  const style = {
    height: 40,
    width: 40,
    lineHeight: '40px',
    borderRadius: 4,
    backgroundColor: '#1088e9',
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
  };
  return (
    <div
      id="components-backtop-demo-target"
      style={{ height: '200px', overflow: 'auto' }}
    >
      <div style={{ height: '300vh' }}>
        <div>Scroll to bottom</div>
        <div>Scroll to bottom</div>
        <div>Scroll to bottom</div>
        <div>Scroll to bottom</div>
        <div>Scroll to bottom</div>
        <div>Scroll to bottom</div>
        <div>Scroll to bottom</div>
        <BackTop
          target={() =>
            document.getElementById('components-backtop-demo-target')
          }
        >
          <div style={style}>UP</div>
        </BackTop>
      </div>
    </div>
  );
};
