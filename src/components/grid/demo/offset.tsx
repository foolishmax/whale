/**
 * title: Column offset
 * desc: `offset` can set the column to the right side. For example, using `offset = {4}` can set the element shifted to the right four columns width.
 *
 * title.zh-CN: 左右偏移
 * desc.zh-CN: 使用 `offset` 可以将列向右侧偏。例如，`offset={4}` 将元素向右侧偏移了 4 个列（column）的宽度。
 */

import React from 'react';
import { Row, Col } from 'whale-design';

export default () => {
  return (
    <div id="components-grid-demo-base">
      <Row>
        <Col span={8}>col-8</Col>
        <Col span={8} offset={8}>
          col-8 col-offset-8
        </Col>
      </Row>
      <Row>
        <Col span={12} offset={6}>
          col-12 col-offset-6
        </Col>
      </Row>
    </div>
  );
};
