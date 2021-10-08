import React from 'react';
import { tuple, getPrefixCls } from '../_utils';
import './style/index.ts';
import classNames from 'classnames';
import { spaceChildren } from './_utils';
import { useState } from 'react';
import LoadingIcon from './LoadingIcon';

const ButtonTypes = tuple('default', 'primary', 'dashed', 'link', 'text');
const ButtonHTMLTypes = tuple('submit', 'button', 'reset');
const SizeTypes = tuple('small', 'middle', 'large');
const ButtonShapes = tuple('default', 'circle', 'round');

export type ButtonType = typeof ButtonTypes[number];
export type ButtonHTMLType = typeof ButtonHTMLTypes[number];
export type SizeType = typeof SizeTypes[number];
export type ButtonShape = typeof ButtonShapes[number];

export interface BaseButtonProps {
  prefixCls?: string;
  type?: ButtonType;
  icon?: React.ReactNode;
  danger?: boolean;
  size?: SizeType;
  shape?: ButtonShape;
  block?: boolean;
  loading?: boolean;
  children?: React.ReactNode;
}

export type AnchorButtonProps = {
  href: string;
  target?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps &
  Omit<React.AnchorHTMLAttributes<any>, 'type' | 'onClick'>;

export type NativeButtonProps = {
  htmlType?: ButtonHTMLType;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<any>, 'type' | 'onClick'>;

export type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>;

export function isUnborderedButtonType(type: ButtonType | undefined) {
  return type === 'text' || type === 'link';
}

const InternalButton: React.ForwardRefRenderFunction<unknown, ButtonProps> = (
  props,
  ref,
) => {
  const {
    prefixCls: customizePrefixCls,
    type,
    icon,
    danger,
    size,
    shape = 'default',
    block = false,
    loading,
    htmlType = 'button' as ButtonProps['htmlType'],
    children,
    ...rest
  } = props;
  const buttonRef =
    (ref as any) || React.createRef<HTMLAnchorElement & HTMLButtonElement>();
  const [innerLoading, setLoading] = useState(!!loading);

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>,
  ) => {
    const { onClick, disabled } = props;
    // https://github.com/ant-design/ant-design/issues/30207
    if (innerLoading || disabled) {
      e.preventDefault();
      return;
    }
    (
      onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
    )?.(e);
  };

  let sizecls = '';
  switch (size) {
    case 'large':
      sizecls = 'lg';
      break;
    case 'small':
      sizecls = 'sm';
    default:
      break;
  }

  const isNeedInserted = () =>
    React.Children.count(children) === 1 &&
    !icon &&
    !isUnborderedButtonType(type);

  const kids =
    children || children === 0
      ? spaceChildren(children, isNeedInserted())
      : null;

  const iconType = innerLoading ? 'loading' : icon;

  const prefixCls = getPrefixCls('btn', customizePrefixCls);

  const classes = classNames(prefixCls, {
    [`${prefixCls}-${type}`]: type,
    [`${prefixCls}-dangerous`]: !!danger,
    [`${prefixCls}-${sizecls}`]: sizecls,
    [`${prefixCls}-${shape}`]: shape && shape !== 'default',
    [`${prefixCls}-block`]: block,
    [`${prefixCls}-loading`]: innerLoading,
    [`${prefixCls}-icon-only`]: !children && children !== 0 && !!iconType,
  });

  const iconNode =
    icon && !innerLoading ? (
      icon
    ) : (
      <LoadingIcon
        existIcon={!!icon}
        prefixCls={prefixCls}
        loading={!!innerLoading}
      />
    );

  if (rest.href !== undefined) {
    return (
      <a {...rest} className={classes} onClick={handleClick} ref={buttonRef}>
        {iconNode}
        {kids}
      </a>
    );
  }

  const buttonNode = (
    <button
      type={htmlType}
      className={classes}
      onClick={handleClick}
      ref={buttonRef}
      {...rest}
    >
      {iconNode}
      {kids}
    </button>
  );

  return buttonNode;
};

const Button = React.forwardRef<unknown, ButtonProps>(InternalButton) as any;

Button.displayName = 'Button';

export default Button;
