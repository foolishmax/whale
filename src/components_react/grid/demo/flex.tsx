/**
 * title: Flex Stretch
 * desc: Col providers `flex` prop to support fill rest.
 *
 * title.zh-CN: Flex 填充
 * desc.zh-CN: Col 提供 `flex` 属性以支持填充。
 */

import React from 'react';
import { Row, Col, Divider } from 'whale-design';

export default () => {
  return (
    <div id="components-grid-demo-flex">
      <Divider position="left">Percentage columns</Divider>
      <Row>
        <Col flex={2}>2 / 5</Col>
        <Col flex={3}>3 / 5</Col>
      </Row>
      <Divider position="left">Fill rest</Divider>
      <Row>
        <Col flex="100px">100px</Col>
        <Col flex="auto">Fill Rest</Col>
      </Row>
      <Divider position="left">Raw flex style</Divider>
      <Row>
        <Col flex="1 1 200px">1 1 200px</Col>
        <Col flex="0 1 300px">0 1 300px</Col>
      </Row>

      <Row wrap={false}>
        <Col flex="none">
          <div style={{ padding: '0 16px' }}>none</div>
        </Col>
        <Col flex="auto">auto with no-wrap</Col>
      </Row>
    </div>
  );
};
