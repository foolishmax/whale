/**
 * title: alignment
 * desc: Vertical alignment of child elements.
 *
 * title.zh-CN: 对齐
 * desc.zh-CN: 子元素垂直方向对齐方式。
 */

import React from 'react';
import { Row, Col, Divider } from 'whale-design';

const DemoBox = (props) => (
  <p style={{ height: props.value }}>{props.children}</p>
);

export default () => {
  return (
    <div id="components-grid-demo-base">
      <Divider position="left">Align Top</Divider>
      <Row justify="space-around" align="top">
        <Col span={4}>
          <DemoBox value={100}>col-4</DemoBox>
        </Col>
        <Col span={4}>
          <DemoBox value={50}>col-4</DemoBox>
        </Col>
        <Col span={4}>
          <DemoBox value={120}>col-4</DemoBox>
        </Col>
        <Col span={4}>
          <DemoBox value={80}>col-4</DemoBox>
        </Col>
      </Row>

      <Divider position="left">Align Middle</Divider>
      <Row justify="space-around" align="middle">
        <Col span={4}>
          <DemoBox value={100}>col-4</DemoBox>
        </Col>
        <Col span={4}>
          <DemoBox value={50}>col-4</DemoBox>
        </Col>
        <Col span={4}>
          <DemoBox value={120}>col-4</DemoBox>
        </Col>
        <Col span={4}>
          <DemoBox value={80}>col-4</DemoBox>
        </Col>
      </Row>

      <Divider position="left">Align Bottom</Divider>
      <Row justify="space-around" align="bottom">
        <Col span={4}>
          <DemoBox value={100}>col-4</DemoBox>
        </Col>
        <Col span={4}>
          <DemoBox value={50}>col-4</DemoBox>
        </Col>
        <Col span={4}>
          <DemoBox value={120}>col-4</DemoBox>
        </Col>
        <Col span={4}>
          <DemoBox value={80}>col-4</DemoBox>
        </Col>
      </Row>
    </div>
  );
};
