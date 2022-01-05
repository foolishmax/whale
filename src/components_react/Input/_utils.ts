import classNames from 'classnames';
import { SizeType } from '../config-provider/SizeContext';
import { InputFocusOptions } from './Input';

export function getInputClassName(
  prefixCls: string,
  bordered: boolean,
  size?: SizeType,
  disabled?: boolean,
) {
  return classNames(prefixCls, {
    [`${prefixCls}-sm`]: size === 'small',
    [`${prefixCls}-lg`]: size === 'large',
    [`${prefixCls}-disabled`]: disabled,
    [`${prefixCls}-borderless`]: !bordered,
  });
}

export function fixControlledValue<T>(value: T) {
  if (typeof value === 'undefined' || value === null) {
    return '';
  }
  return value;
}

export function resolveOnChange<
  E extends HTMLInputElement | HTMLTextAreaElement,
>(
  target: E,
  e:
    | React.ChangeEvent<E>
    | React.MouseEvent<HTMLElement, MouseEvent>
    | React.CompositionEvent<HTMLElement>,
  onChange: undefined | ((event: React.ChangeEvent<E>) => void),
  targetValue?: string,
) {
  if (!onChange) return;

  let event = e;

  if (e.type === 'click') {
    event = Object.create(e);
    const currentTarget = target.cloneNode(true) as E;

    event.target = currentTarget;
    event.currentTarget = currentTarget;

    currentTarget.value = '';
    onChange(event as React.ChangeEvent<E>);
    return;
  }

  if (targetValue !== undefined) {
    event = Object.create(e);
    event.target = target;
    event.currentTarget = target;

    target.value = targetValue;
    onChange(event as React.ChangeEvent<E>);
    return;
  }

  onChange(event as React.ChangeEvent<E>);
}

export function triggerFocus(
  element?: HTMLInputElement | HTMLTextAreaElement,
  option?: InputFocusOptions,
) {
  if (!element) return;

  element.focus(option);

  const { cursor } = option || {};

  if (cursor) {
    const len = element.value.length;

    switch (cursor) {
      case 'start':
        element.setSelectionRange(0, 0);
        break;
      case 'end':
        element.setSelectionRange(len, len);
        break;
      default:
        element.setSelectionRange(0, len);
    }
  }
}
