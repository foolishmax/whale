import omit from 'rc-util/lib/omit';
import React from 'react';
import {
  ConfigConsumerProps,
  ConfigConsumer,
} from '../config-provider/context';
import SizeContext, { SizeType } from '../config-provider/SizeContext';
import { LiteralUnion } from '../_util';
import classNames from 'classnames';
import {
  getInputClassName,
  fixControlledValue,
  resolveOnChange,
  triggerFocus,
} from './_utils';
import ClearableLabeledInput from './ClearableLabeledInput';
import './style/index.ts';
import type TextArea from './TextArea';
import type Password from './Password';

export interface InputFocusOptions extends FocusOptions {
  cursor?: 'start' | 'end' | 'all';
}

export interface InputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'size' | 'prefix' | 'type'
  > {
  prefixCls?: string;
  size?: SizeType;
  type?: LiteralUnion<
    | 'button'
    | 'checkbox'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week',
    string
  >;
  onPressEnter?: React.KeyboardEventHandler<HTMLInputElement>;
  addonBefore?: React.ReactNode;
  addonAfter?: React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  allowClear?: boolean;
  bordered?: boolean;
  htmlSize?: number;
}

export interface InputState {
  value: any;
  focused: boolean;
  prevValue: any;
}

class Input extends React.Component<InputProps, InputState> {
  static defaultProps = {
    type: 'text',
  };

  static TextArea: typeof TextArea;

  static Password: typeof Password;

  input!: HTMLInputElement;

  clearableInput!: ClearableLabeledInput;

  removePasswordTimeout: any;

  constructor(props: InputProps) {
    super(props);
    const value =
      typeof props.value === 'undefined' ? props.defaultValue : props.value;

    this.state = {
      value,
      focused: false,
      prevValue: props.value,
    };
  }

  componentWillUnmount() {
    if (this.removePasswordTimeout) {
      clearTimeout(this.removePasswordTimeout);
    }
  }

  saveInput = (input: HTMLInputElement) => {
    this.input = input;
  };

  saveClearableInput = (input: ClearableLabeledInput) => {
    this.clearableInput = input;
  };

  setValue(value: string, callback?: () => void) {
    if (this.props.value === undefined) {
      this.setState({ value }, callback);
    } else {
      callback?.();
    }
  }

  clearPasswordValueAttribute = () => {
    this.removePasswordTimeout = setTimeout(() => {
      if (
        this.input &&
        this.input.getAttribute('type') === 'password' &&
        this.input.hasAttribute('value')
      ) {
        this.input.removeAttribute('value');
      }
    });
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setValue(e.target.value, this.clearPasswordValueAttribute);
    resolveOnChange(this.input, e, this.props.onChange);
  };

  onFocus: React.FocusEventHandler<HTMLInputElement> = (e) => {
    const { onFocus } = this.props;
    this.setState(
      {
        focused: true,
      },
      this.clearPasswordValueAttribute,
    );
    onFocus?.(e);
  };

  onBlur: React.FocusEventHandler<HTMLInputElement> = (e) => {
    const { onBlur } = this.props;
    this.setState(
      {
        focused: false,
      },
      this.clearPasswordValueAttribute,
    );
    onBlur?.(e);
  };

  handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { onPressEnter, onKeyDown } = this.props;

    if (onPressEnter && (e.key === 'Enter' || e.keyCode === 13)) {
      onPressEnter(e);
    }

    onKeyDown?.(e);
  };

  focus = (option?: InputFocusOptions) => {
    triggerFocus(this.input, option);
  };

  handleReset = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    this.setValue('', () => {
      this.focus();
    });
    resolveOnChange(this.input, e, this.props.onChange);
  };

  renderInput = (
    prefixCls: string,
    size: SizeType | undefined,
    bordered: boolean,
    input: ConfigConsumerProps['input'] = {},
  ) => {
    const {
      className,
      addonBefore,
      addonAfter,
      size: customizeSize,
      disabled,
      htmlSize,
    } = this.props;
    const otherProps = omit(this.props as InputProps & { inputType: any }, [
      'prefixCls',
      'onPressEnter',
      'addonBefore',
      'addonAfter',
      'prefix',
      'suffix',
      'allowClear',
      // Input elements must be either controlled or uncontrolled,
      // specify either the value prop, or the defaultValue prop, but not both.
      'defaultValue',
      'size',
      'inputType',
      'bordered',
      'htmlSize',
    ]);

    return (
      <input
        autoComplete={input.autoComplete}
        {...otherProps}
        onChange={this.handleChange}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        onKeyDown={this.handleKeyDown}
        className={classNames(
          getInputClassName(
            prefixCls,
            bordered,
            customizeSize || size,
            disabled,
          ),
          {
            [className!]: className && !addonBefore && !addonAfter,
          },
        )}
        ref={this.saveInput}
        size={htmlSize}
      />
    );
  };

  renderComponent = ({ getPrefixCls, input }: ConfigConsumerProps) => {
    const { value, focused } = this.state;
    const { prefixCls: customizePrefixCls, bordered = true } = this.props;
    const prefixCls = getPrefixCls('input', customizePrefixCls);

    return (
      <SizeContext.Consumer>
        {(size) => (
          <ClearableLabeledInput
            size={size}
            {...this.props}
            prefixCls={prefixCls}
            inputType="input"
            value={fixControlledValue(value)}
            element={this.renderInput(prefixCls, size, bordered, input)}
            handleReset={this.handleReset}
            ref={this.saveClearableInput}
            focused={focused}
            triggerFocus={this.focus}
            bordered={bordered}
          />
        )}
      </SizeContext.Consumer>
    );
  };

  render() {
    return <ConfigConsumer>{this.renderComponent}</ConfigConsumer>;
  }
}

export default Input;
