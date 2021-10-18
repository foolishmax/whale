/**
 * title: Disabled
 * desc: Disabled state of `Switch`.
 *
 * title.zh-CN: 不可用
 * desc.zh-CN: Switch 失效状态。
 */

import React from 'react';
import { Switch, Button } from 'whale-design';

export default () => {
  const [disabled, setDisabled] = React.useState(true);

  return (
    <div id="components-switch-demo-disabled">
      <Button
        type="primary"
        onClick={() => setDisabled(!disabled)}
        style={{ marginRight: 30 }}
      >
        Toggle disabled
      </Button>
      <Switch disabled={disabled} defaultChecked />
    </div>
  );
};
