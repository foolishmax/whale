import React from 'react';
import { SizeType } from '../config-provider/SizeContext';
import { tuple } from '../_util';
import { cloneElement } from '../_util/reactNode';
import classNames from 'classnames';
import { default as createFromIconfontCN } from '../icon/IconFont';
import { getInputClassName } from './_utils';

const IconFont = createFromIconfontCN({
  scriptUrl: ['//at.alicdn.com/t/font_2841973_v5d3b3ghgw.js'],
});

const ClearableInputType = tuple('text', 'input');

function hasAddon(props: ClearableInputProps) {
  return !!(props.addonBefore || props.addonAfter);
}

interface BasicProps {
  prefixCls: string;
  inputType: typeof ClearableInputType[number];
  value?: any;
  allowClear?: boolean;
  element: React.ReactElement;
  handleReset: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  focused?: boolean;
  readOnly?: boolean;
  bordered: boolean;
}

export interface ClearableInputProps extends BasicProps {
  size?: SizeType;
  suffix?: React.ReactNode;
  prefix?: React.ReactNode;
  addonBefore?: React.ReactNode;
  addonAfter?: React.ReactNode;
  triggerFocus?: () => void;
}

export function hasPrefixSuffix(props: ClearableInputProps) {
  return !!(props.prefix || props.suffix || props.allowClear);
}

class ClearableLabeledInput extends React.Component<ClearableInputProps> {
  private containerRef = React.createRef<HTMLSpanElement>();

  onInputMouseUp: React.MouseEventHandler = (e) => {
    if (this.containerRef.current?.contains(e.target as Element)) {
      const { triggerFocus } = this.props;
      triggerFocus?.();
    }
  };

  renderClearIcon(prefixCls: string) {
    const { allowClear, value, disabled, readOnly, handleReset, suffix } =
      this.props;
    if (!allowClear) return null;

    const needClear = !disabled && !readOnly && value;
    const className = `${prefixCls}-clear-icon`;

    return (
      <IconFont
        type="icon-closefill"
        className={classNames(className, {
          [`${className}-hidden`]: !needClear,
          [`${className}-has-suffix`]: !!suffix,
        })}
        onClick={handleReset}
        onMouseDown={(e) => e.preventDefault()}
      />
    );
  }

  renderTextAreaWithClearIcon(prefixCls: string, element: React.ReactElement) {
    const { value, allowClear, className, style, bordered } = this.props;
    if (!allowClear) {
      return cloneElement(element, {
        value,
      });
    }

    const affixWrapperCls = classNames(
      `${prefixCls}-affix-wrapper`,
      `${prefixCls}-affix-wrapper-textarea-with-clear-btn`,
      {
        [`${prefixCls}-affix-wrapper-borderless`]: !bordered,
        [`${className}`]: !hasAddon(this.props) && className,
      },
    );

    return (
      <span className={affixWrapperCls} style={style}>
        {cloneElement(element, {
          style: null,
          value,
        })}
        {this.renderClearIcon(prefixCls)}
      </span>
    );
  }

  renderInputWithLabel(prefixCls: string, labeledElement: React.ReactElement) {
    const { addonBefore, addonAfter, style, size, className } = this.props;

    if (!hasAddon(this.props)) return labeledElement;

    const wrapperClassName = `${prefixCls}-group`;
    const addonClassName = `${wrapperClassName}-addon`;

    const addonBeforeNode = addonBefore ? (
      <span className={addonClassName}>{addonBefore}</span>
    ) : null;
    const addonAfterNode = addonAfter ? (
      <span className={addonClassName}>{addonAfter}</span>
    ) : null;

    const mergedWrapperClassName = classNames(
      `${prefixCls}-wrapper`,
      wrapperClassName,
    );
    const mergedGroupClassName = classNames(
      `${prefixCls}-group-wrapper`,
      {
        [`${prefixCls}-group-wrapper-sm`]: size === 'small',
        [`${prefixCls}-group-wrapper-lg`]: size === 'large',
      },
      className,
    );

    return (
      <span className={mergedGroupClassName} style={style}>
        <span className={mergedWrapperClassName}>
          {addonBeforeNode}
          {cloneElement(labeledElement, { style: null })}
          {addonAfterNode}
        </span>
      </span>
    );
  }

  renderSuffix(prefixCls: string) {
    const { suffix, allowClear } = this.props;
    if (suffix || allowClear) {
      return (
        <span className={`${prefixCls}-suffix`}>
          {this.renderClearIcon(prefixCls)}
          {suffix}
        </span>
      );
    }
    return null;
  }

  renderLabeledIcon(prefixCls: string, element: React.ReactElement) {
    const {
      focused,
      value,
      prefix,
      className,
      size,
      suffix,
      disabled,
      allowClear,
      style,
      readOnly,
      bordered,
    } = this.props;
    const suffixNode = this.renderSuffix(prefixCls);
    if (!hasPrefixSuffix(this.props)) {
      return cloneElement(element, {
        value,
      });
    }

    const prefixNode = prefix ? (
      <span className={`${prefixCls}-prefix`}>{prefix}</span>
    ) : null;

    const affixWrapperCls = classNames(`${prefixCls}-affix-wrapper`, {
      [`${prefixCls}-affix-wrapper-focused`]: focused,
      [`${prefixCls}-affix-wrapper-disabled`]: disabled,
      [`${prefixCls}-affix-wrapper-sm`]: size === 'small',
      [`${prefixCls}-affix-wrapper-lg`]: size === 'large',
      [`${prefixCls}-affix-wrapper-input-with-clear-btn`]:
        suffix && allowClear && value,
      [`${prefixCls}-affix-wrapper-readonly`]: readOnly,
      [`${prefixCls}-affix-wrapper-borderless`]: !bordered,
      // className will go to addon wrapper
      [`${className}`]: !hasAddon(this.props) && className,
    });
    return (
      <span
        ref={this.containerRef}
        className={affixWrapperCls}
        style={style}
        onMouseUp={this.onInputMouseUp}
      >
        {prefixNode}
        {cloneElement(element, {
          style: null,
          value,
          className: getInputClassName(prefixCls, bordered, size, disabled),
        })}
        {suffixNode}
      </span>
    );
  }

  render() {
    const { prefixCls, inputType, element } = this.props;

    if (inputType === ClearableInputType[0]) {
      return this.renderTextAreaWithClearIcon(prefixCls, element);
    }

    return this.renderInputWithLabel(
      prefixCls,
      this.renderLabeledIcon(prefixCls, element),
    );
  }
}

export default ClearableLabeledInput;
