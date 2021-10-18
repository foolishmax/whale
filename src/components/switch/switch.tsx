import React from 'react';
import RcSwitch from 'rc-switch';
import classNames from 'classnames';
import devWarining from '../_utils/devWarining';
import './style/index.ts';

import { default as createFromIconfontCN } from '../icon/IconFont';
import { getPrefixCls } from '../_utils';

const IconFont = createFromIconfontCN({
  scriptUrl: ['//at.alicdn.com/t/font_2841973_nr325vc0hy.js'],
});

export type SwitchSize = 'small' | 'default';

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<
    SwitchProps & React.RefAttributes<HTMLElement>
  > {}
export interface SwitchProps {
  prefixCls?: string;
  size?: SwitchSize;
  className?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean, event: MouseEvent) => void;
  onClick?: (checked: boolean, event: MouseEvent) => void;
  checkedChildren?: React.ReactNode;
  unCheckedChildren?: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  autoFocus?: boolean;
  style?: React.CSSProperties;
  title?: string;
  tabIndex?: number;
  id?: string;
}

const Switch = React.forwardRef<unknown, SwitchProps>((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    size,
    loading,
    className,
    disabled,
    ...restProps
  } = props;

  devWarining(
    'checked' in props || !('value' in props),
    'Switch',
    '`value` is not a valid prop, do you mean `checked`?',
  );

  const prefixCls = getPrefixCls('switch', customizePrefixCls);

  const loadingIcon = (
    <div className={`${prefixCls}-handle`}>
      {loading && (
        <IconFont type="icon-spin" className={`${prefixCls}-loading-icon`} />
      )}
    </div>
  );

  const classes = classNames({
    [`${prefixCls}-small`]: size === 'small',
    [`${prefixCls}-loading`]: loading,
  });

  return (
    <RcSwitch
      prefixCls={prefixCls}
      className={classes}
      disabled={disabled || loading}
      // @ts-ignore
      ref={ref}
      loadingIcon={loadingIcon}
      {...restProps}
    />
  );
}) as CompoundedComponent;

Switch.displayName = 'Switch';

export default Switch;
