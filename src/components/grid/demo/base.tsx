/**
 * title: base gird
 * desc: Create a set of columns in the horizontal direction through the row. The content should be placed in the clumn, and only the column can be used as the direct element of the row.
 *
 * title.zh-CN: 基础栅格
 * desc.zh-CN: 通过 row 在水平方向建立一组 column，内容应当放置于 col 内，并且，只有 col 可以作为 row 的直接元素。
 */

import React from 'react';
import { Row, Col } from 'whale-design';

export default () => {
  return (
    <div id="components-grid-demo-base">
      <Row>
        <Col span={24}>col</Col>
      </Row>
      <Row>
        <Col span={12}>col-12</Col>
        <Col span={12}>col-12</Col>
      </Row>
      <Row>
        <Col span={8}>col-8</Col>
        <Col span={8}>col-8</Col>
        <Col span={8}>col-8</Col>
      </Row>
      <Row>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
      </Row>
    </div>
  );
};
