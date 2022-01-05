import { composeRef } from 'rc-util/lib/ref';
import React from 'react';
import RcCheckbox from 'rc-checkbox';

import { ConfigContext } from '../config-provider/context';
import RadioGroupContext from './context';
import devWarining from '../_util/devWarining';
import classNames from 'classnames';
import './style/index.ts';
import Group from './Group';
import Button from './RadioButton';
import { RadioChangeEvent, RadioProps } from './type';

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<
    RadioProps & React.RefAttributes<HTMLElement>
  > {
  Group: typeof Group;
  Button: typeof Button;
}

const InternalRadio: React.ForwardRefRenderFunction<HTMLElement, RadioProps> = (
  props,
  ref,
) => {
  const context = React.useContext(RadioGroupContext);
  const { getPrefixCls } = React.useContext(ConfigContext);
  const innerRef = React.useRef<HTMLElement>();
  const mergedRef = composeRef(ref, innerRef);

  React.useEffect(() => {
    devWarining(
      !('optionType' in props),
      'Radio',
      '`optionType` is only support in Radio.Group.',
    );
  }, []);

  const onChange = (e: RadioChangeEvent) => {
    props.onChange?.(e);
    context?.onChange?.(e);
  };

  const {
    prefixCls: customizePrefixCls,
    className,
    children,
    style,
    ...restProps
  } = props;
  const prefixCls = getPrefixCls('radio', customizePrefixCls);
  const radioProps: RadioProps = { ...restProps };

  if (context) {
    radioProps.name = context.name;
    radioProps.onChange = onChange;
    radioProps.checked = props.value === context.value;
    radioProps.disabled = props.disabled || context.disabled;
  }

  const wrapperClassString = classNames(
    `${prefixCls}-wrapper`,
    {
      [`${prefixCls}-wrapper-checked`]: radioProps.checked,
      [`${prefixCls}-wrapper-disabled`]: radioProps.disabled,
    },
    className,
  );

  return (
    <label
      className={wrapperClassString}
      style={style}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      <RcCheckbox
        {...radioProps}
        type="radio"
        prefixCls={prefixCls}
        // @ts-ignore
        ref={mergedRef}
      />
      {children !== undefined ? <span>{children}</span> : null}
    </label>
  );
};

const Radio = React.forwardRef<unknown, RadioProps>(
  InternalRadio as any,
) as CompoundedComponent;

Radio.Button = Button;
Radio.Group = Group;

Radio.displayName = 'Radio';

export default Radio;
