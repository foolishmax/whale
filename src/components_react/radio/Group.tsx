import { RadioChangeEvent } from './type';
import React from 'react';
import { AbstractCheckboxGroupProps } from '../checkbox/Group';
import SizeContext, { SizeType } from '../config-provider/SizeContext';
import { RadioGroupContextProvider } from './context';
import { ConfigContext } from '../config-provider/context';
import useMergedState from 'rc-util/lib/hooks/useMergedState';
import Radio from './Radio';
import classNames from 'classnames';
import getDataOrAriaProps from '../_util/getDataOrAriaProps';

export interface RadioGroupContextProps {
  onChange: (e: RadioChangeEvent) => void;
  value: any;
  disabled?: boolean;
  name?: string;
}

export type RadioGroupButtonStyle = 'outline' | 'solid';
export type RadioGroupOptionType = 'default' | 'button';

export interface RadioGroupProps extends AbstractCheckboxGroupProps {
  defaultValue?: any;
  value?: any;
  onChange?: (e: RadioChangeEvent) => void;
  size?: SizeType;
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
  name?: string;
  children?: React.ReactNode;
  id?: string;
  optionType?: RadioGroupOptionType;
  buttonStyle?: RadioGroupButtonStyle;
}

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  (props, ref) => {
    const { getPrefixCls } = React.useContext(ConfigContext);
    const size = React.useContext(SizeContext);

    const [value, setValue] = useMergedState(props.defaultValue, {
      value: props.value,
    });

    const onRadioChange = (event: RadioChangeEvent) => {
      const lastValue = value;
      const val = event.target.value;
      if (!('value' in props)) {
        setValue(val);
      }
      const { onChange } = props;
      if (onChange && val !== lastValue) {
        onChange(event);
      }
    };

    const renderGroup = () => {
      const {
        prefixCls: customizePrefixCls,
        className = '',
        options,
        optionType,
        buttonStyle = 'outline' as RadioGroupButtonStyle,
        disabled,
        children,
        size: customizeSize,
        style,
        id,
        onMouseEnter,
        onMouseLeave,
      } = props;
      const prefixCls = getPrefixCls('radio', customizePrefixCls);
      const groupPrefixCls = `${prefixCls}-group`;
      let childrenToRender = children;
      // 如果存在 options, 优先使用
      if (options && options.length > 0) {
        const optionsPrefixCls =
          optionType === 'button' ? `${prefixCls}-button` : prefixCls;
        childrenToRender = options.map((option) => {
          if (typeof option === 'string') {
            // 此处类型自动推导为 string
            return (
              <Radio
                key={option}
                prefixCls={optionsPrefixCls}
                disabled={disabled}
                value={option}
                checked={value === option}
              >
                {option}
              </Radio>
            );
          }
          // 此处类型自动推导为 { label: string value: string }
          return (
            <Radio
              key={`radio-group-value-options-${option.value}`}
              prefixCls={optionsPrefixCls}
              disabled={option.disabled || disabled}
              value={option.value}
              checked={value === option.value}
              style={option.style}
            >
              {option.label}
            </Radio>
          );
        });
      }
      const mergedSize = customizeSize || size;
      const classString = classNames(
        groupPrefixCls,
        `${groupPrefixCls}-${buttonStyle}`,
        {
          [`${groupPrefixCls}-${mergedSize}`]: mergedSize,
        },
        className,
      );
      return (
        <div
          {...getDataOrAriaProps(props)}
          className={classString}
          style={style}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          id={id}
          ref={ref}
        >
          {childrenToRender}
        </div>
      );
    };

    return (
      <RadioGroupContextProvider
        value={{
          onChange: onRadioChange,
          value,
          disabled: props.disabled,
          name: props.name,
        }}
      >
        {renderGroup()}
      </RadioGroupContextProvider>
    );
  },
);

export default React.memo(RadioGroup);
