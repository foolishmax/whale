import React from 'react';
import { InputProps } from './Input';
import { default as createFromIconfontCN } from '../icon/IconFont';
import {
  ConfigConsumer,
  ConfigConsumerProps,
} from '../config-provider/context';
import classNames from 'classnames';
import omit from 'rc-util/lib/omit';
import Input from '.';

const IconFont = createFromIconfontCN({
  scriptUrl: ['//at.alicdn.com/t/font_2841973_v5d3b3ghgw.js'],
});

export interface PasswordProps extends InputProps {
  readonly inputPrefixCls?: string;
  readonly action?: string;
  visibilityToggle?: boolean;
  iconRender?: (visible: boolean) => React.ReactNode;
}

const ActionMap: Record<string, string> = {
  click: 'onClick',
  hover: 'onMouseOver',
};

const Password = React.forwardRef<any, PasswordProps>((props, ref) => {
  const [visible, setVisible] = React.useState(false);

  const onVisibleChange = () => {
    if (props.disabled) return;

    setVisible(!visible);
  };

  const getIcon = (prefixCls: string) => {
    const { action, iconRender = () => null } = props;
    const iconTrigger = ActionMap[action!] || '';
    const icon = iconRender(visible);
    const iconProps = {
      [iconTrigger]: onVisibleChange,
      className: `${prefixCls}-icon`,
      key: 'passwordIcon',
      onMouseDown: (e: MouseEvent) => {
        e.preventDefault();
      },
      onMouseUp: (e: MouseEvent) => {
        e.preventDefault();
      },
    };

    return React.cloneElement(
      React.isValidElement(icon) ? icon : <span>{icon}</span>,
      iconProps,
    );
  };

  const renderPassword = ({ getPrefixCls }: ConfigConsumerProps) => {
    const {
      className,
      prefixCls: customizePrefixCls,
      inputPrefixCls: customizeInputPrefixCls,
      size,
      visibilityToggle,
      ...restProps
    } = props;

    const inputPrefixCls = getPrefixCls('input', customizeInputPrefixCls);
    const prefixCls = getPrefixCls('input-password', customizePrefixCls);

    const suffixIcon = visibilityToggle && getIcon(prefixCls);
    const inputClassName = classNames(prefixCls, className, {
      [`${prefixCls}-${size}`]: !!size,
    });

    const omittedProps = {
      ...omit(restProps, ['suffix', 'iconRender']),
      type: visible ? 'text' : 'password',
      className: inputClassName,
      prefixCls: inputPrefixCls,
      suffix: suffixIcon,
    } as InputProps;

    if (size) {
      omittedProps.size = size;
    }

    return <Input ref={ref} {...omittedProps} />;
  };

  return <ConfigConsumer>{renderPassword}</ConfigConsumer>;
});

Password.defaultProps = {
  action: 'click',
  visibilityToggle: true,
  iconRender: (visible: boolean) =>
    visible ? (
      <IconFont type="icon-eye" />
    ) : (
      <IconFont type="icon-eye-close1" />
    ),
};

Password.displayName = 'Password';

export default Password;
