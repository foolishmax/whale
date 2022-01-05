/**
 * title: radio group
 * desc: a group of radio components.
 *
 * title.zh-CN: 单选组合
 * desc.zh-CN: 一组互斥的raio配合使用。
 */

import React, { useState } from 'react';
import { Radio } from 'whale-design';

export default () => {
  const [value1, setValue1] = useState(1);
  const [value2, setValue2] = useState('Apple');
  const [value3, setValue3] = useState(1);

  const plainOptions = ['Apple', 'Pear', 'Orange'];

  const optionsWithDisabled = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange', disabled: true },
  ];

  const onChange1 = (e) => {
    setValue1(e.target.value);
  };

  const onChange2 = (e) => {
    setValue2(e.target.value);
  };

  const onChange3 = (e) => {
    setValue3(e.target.value);
  };

  return (
    <div id="components-radio-demo-group">
      <Radio.Group onChange={onChange1} value={value1}>
        <Radio value={1}>A</Radio>
        <Radio value={2}>B</Radio>
        <Radio value={3}>C</Radio>
        <Radio value={4}>D</Radio>
      </Radio.Group>
      <br />

      <Radio.Group
        options={plainOptions}
        onChange={onChange2}
        value={value2}
        style={{ marginTop: 8, marginBottom: 8 }}
      />
      <br />

      <Radio.Group
        options={optionsWithDisabled}
        onChange={onChange3}
        value={value3}
        optionType="button"
        buttonStyle="solid"
      />
    </div>
  );
};
