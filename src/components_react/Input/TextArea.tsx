import React from 'react';
import RcTextArea, { TextAreaProps as RcTextAreaProps } from 'rc-textarea';
import SizeContext, { SizeType } from '../config-provider/SizeContext';
import { InputFocusOptions } from './Input';
import ResizableTextArea from 'rc-textarea/lib/ResizableTextArea';
import { ConfigContext } from '../config-provider/context';
import ClearableLabeledInput from './ClearableLabeledInput';
import useMergedState from 'rc-util/lib/hooks/useMergedState';
import classNames from 'classnames';
import omit from 'rc-util/lib/omit';
import { fixControlledValue, resolveOnChange, triggerFocus } from './_utils';

interface ShowCountProps {
  formatter: (args: { count: number; maxLength?: number }) => string;
}

export interface TextAreaProps extends RcTextAreaProps {
  allowClear?: boolean;
  bordered?: boolean;
  showCount?: boolean | ShowCountProps;
  size?: SizeType;
}

export interface TextAreaRef {
  focus: (options?: InputFocusOptions) => void;
  blur: () => void;
  resizableTextArea?: ResizableTextArea;
}

function fixEmojiLength(value: string, maxLength: number) {
  return [...(value || '')].slice(0, maxLength).join('');
}

const TextArea = React.forwardRef<TextAreaRef, TextAreaProps>((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    bordered = true,
    showCount = false,
    maxLength,
    className,
    style,
    size: customizeSize,
    onCompositionEnd,
    onCompositionStart,
    onChange,
    ...otherProps
  } = props;
  const { getPrefixCls } = React.useContext(ConfigContext);
  const size = React.useContext(SizeContext);

  const innerRef = React.useRef<RcTextArea>(null);
  const clearableInputRef = React.useRef<ClearableLabeledInput>(null);

  const [compositing, setCompositing] = React.useState(false);

  const hasMaxLength = Number(maxLength) > 0;

  const [value, setValue] = useMergedState(props.defaultValue, {
    value: props.value,
  });

  const prefixCls = getPrefixCls('input', customizePrefixCls);

  React.useImperativeHandle(ref, () => ({
    resizableTextArea: innerRef.current?.resizableTextArea,
    focus: (option?: InputFocusOptions) => {
      triggerFocus(innerRef.current?.resizableTextArea?.textArea, option);
    },
    blur: () => innerRef.current?.blur(),
  }));

  const handleSetValue = (val: string, callback?: () => void) => {
    if (props.value === undefined) {
      setValue(val);
      callback?.();
    }
  };

  const handleReset = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    handleSetValue('', () => {
      innerRef.current?.focus();
    });
    resolveOnChange(
      innerRef.current?.resizableTextArea?.textArea!,
      e,
      onChange,
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let triggerValue = e.target.value;
    if (!compositing && hasMaxLength) {
      triggerValue = fixEmojiLength(triggerValue, maxLength!);
    }

    handleSetValue(triggerValue);
    resolveOnChange(e.currentTarget, e, onChange, triggerValue);
  };

  const onInternalCompositionStart: React.CompositionEventHandler<HTMLTextAreaElement> =
    (e) => {
      setCompositing(true);
      onCompositionStart?.(e);
    };

  const onInternalCompositionEnd: React.CompositionEventHandler<HTMLTextAreaElement> =
    (e) => {
      setCompositing(false);

      let triggerValue = e.currentTarget.value;
      if (hasMaxLength) {
        triggerValue = fixEmojiLength(triggerValue, maxLength!);
      }

      // Patch composition onChange when value changed
      if (triggerValue !== value) {
        handleSetValue(triggerValue);
        resolveOnChange(e.currentTarget, e, onChange, triggerValue);
      }

      onCompositionEnd?.(e);
    };

  const textArea = (
    <RcTextArea
      {...omit(otherProps, ['allowClear'])}
      className={classNames({
        [`${prefixCls}-borderless`]: !bordered,
        [className!]: className && !showCount,
        [`${prefixCls}-sm`]: size === 'small' || customizeSize === 'small',
        [`${prefixCls}-lg`]: size === 'large' || customizeSize === 'large',
      })}
      style={showCount ? undefined : style}
      prefixCls={prefixCls}
      onCompositionStart={onInternalCompositionStart}
      onChange={handleChange}
      onCompositionEnd={onInternalCompositionEnd}
      ref={innerRef}
      maxLength={maxLength}
    />
  );

  let val = fixControlledValue(value) as string;

  const textareaNode = (
    <ClearableLabeledInput
      {...otherProps}
      prefixCls={prefixCls}
      inputType="text"
      value={val}
      element={textArea}
      handleReset={handleReset}
      ref={clearableInputRef}
      bordered={bordered}
      style={showCount ? undefined : style}
    />
  );

  if (showCount) {
    const valueLength = [...val].length;

    let dataCount = '';
    if (typeof showCount === 'object') {
      dataCount = showCount.formatter({ count: valueLength, maxLength });
    } else {
      dataCount = `${valueLength}${hasMaxLength ? ` / ${maxLength}` : ''}`;
    }

    return (
      <div
        className={classNames(
          `${prefixCls}-textarea`,
          `${prefixCls}-textarea-show-count`,
          className,
        )}
        style={style}
        data-count={dataCount}
      >
        {textareaNode}
      </div>
    );
  }

  return textareaNode;
});

export default TextArea;
