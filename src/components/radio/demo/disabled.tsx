/**
 * title: disabled
 * desc: Radio unavailable.
 *
 * title.zh-CN: 禁用状态
 * desc.zh-CN: Radio 不可用。
 */

import React, { useState } from 'react';
import { Radio, Button } from 'whale-design';

export default () => {
  const [disabled, setDisabled] = useState(false);

  const toggleDisabled = () => {
    setDisabled(!disabled);
  };

  return (
    <div id="components-radio-demo-disabled">
      <Radio defaultChecked={false} disabled={disabled}>
        Disabled
      </Radio>
      <Radio defaultChecked disabled={disabled}>
        Disabled
      </Radio>
      <Button type="primary" onClick={toggleDisabled} style={{ marginTop: 16 }}>
        Toggle disabled
      </Button>
    </div>
  );
};
