import * as React from 'react';
import classNames from 'classnames';
import { getPrefixCls } from '../_util';
import './style/index.ts';

export interface DividerProps {
  prefixCls?: string;
  type?: 'horizontal' | 'vertical';
  position?: 'left' | 'right' | 'center';
  className?: string;
  children?: React.ReactNode;
  dashed?: boolean;
  style?: React.CSSProperties;
  plain?: boolean;
}

const Divider: React.FC<DividerProps> = (props) => {
  const {
    prefixCls: customizePrefixCls,
    type = 'horizontal',
    position = 'center',
    className,
    children,
    dashed,
    plain,
    ...restProps
  } = props;

  const prefixCls = getPrefixCls('divider', customizePrefixCls);

  const classes = classNames(
    prefixCls,
    `${prefixCls}-${type}`,
    {
      [`${prefixCls}-with-text`]: !!children,
      [`${prefixCls}-with-text-${position}`]: !!children,
      [`${prefixCls}-dashed`]: !!dashed,
      [`${prefixCls}-plain`]: !!plain,
    },
    className,
  );

  return (
    <div className={classes} {...restProps}>
      {children && (
        <span className={`${prefixCls}-inner-text`}>{children}</span>
      )}
    </div>
  );
};

export default Divider;
