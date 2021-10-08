import React from 'react';
import classNames from 'classnames';
import { getPrefixCls } from '../_utils';
import RowContext from './RowContext';

type TextType = number | string;

type ColSpanType = TextType;

type FlexType = number | 'none' | 'auto' | string;

export type ColType = {
  flex?: FlexType;
  span?: ColSpanType;
  order?: TextType;
  offset?: TextType;
  push?: TextType;
  pull?: TextType;
};

export interface ColProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ColType {
  prefixCls?: string;
  xs?: TextType | ColType;
  sm?: TextType | ColType;
  md?: TextType | ColType;
  lg?: TextType | ColType;
  xl?: TextType | ColType;
  xxl?: TextType | ColType;
}

function parseFlex(flex: FlexType): string {
  if (typeof flex === 'number') {
    return `${flex} ${flex} auto`;
  }

  if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
    return `0 0 ${flex}`;
  }

  return flex;
}

const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'] as const;

const Col = React.forwardRef<HTMLDivElement, ColProps>((props, ref) => {
  const {
    children,
    style,
    prefixCls: customizePrefixCls,
    span,
    order,
    offset,
    push,
    pull,
    className,
    flex,
    ...restProps
  } = props;

  const { gutter, wrap, supportFlexGap } = React.useContext(RowContext);
  const prefixCls = getPrefixCls('col', customizePrefixCls);

  let sizeClassObj = {};

  sizes.forEach((size) => {
    let sizeProps: ColType = {};
    const propsSize = props[size];

    if (typeof propsSize === 'number') {
      sizeProps.span = propsSize;
    } else if (typeof propsSize === 'object') {
      sizeProps = propsSize || {};
    }

    delete restProps[size];

    sizeClassObj = {
      ...sizeClassObj,
      [`${prefixCls}-${size}-${sizeProps.span}`]: sizeProps.span !== undefined,
      [`${prefixCls}-${size}-order-${sizeProps.order}`]:
        sizeProps.order || sizeProps.order === 0,
      [`${prefixCls}-${size}-offset-${sizeProps.offset}`]:
        sizeProps.offset || sizeProps.offset === 0,
      [`${prefixCls}-${size}-push-${sizeProps.push}`]:
        sizeProps.push || sizeProps.push === 0,
      [`${prefixCls}-${size}-pull-${sizeProps.pull}`]:
        sizeProps.pull || sizeProps.pull === 0,
    };
  });

  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}-${span}`]: span !== undefined,
      [`${prefixCls}-order-${order}`]: order,
      [`${prefixCls}-offset-${offset}`]: offset,
      [`${prefixCls}-push-${push}`]: push,
      [`${prefixCls}-pull-${pull}`]: pull,
    },
    className,
    sizeClassObj,
  );

  const mergedStyle: React.CSSProperties = {};
  // horizontal gutter use padding
  if (gutter && gutter[0] > 0) {
    const horizontalGutter = gutter[0] / 2;
    mergedStyle.paddingLeft = horizontalGutter;
    mergedStyle.paddingRight = horizontalGutter;
  }

  // vertical gutter use padding when gap not support
  if (gutter && gutter[1] > 0 && !supportFlexGap) {
    const verticalGutter = gutter[1] / 2;
    mergedStyle.paddingTop = verticalGutter;
    mergedStyle.paddingBottom = verticalGutter;
  }

  if (flex) {
    mergedStyle.flex = parseFlex(flex);

    if (wrap === false && !mergedStyle.minWidth) {
      mergedStyle.minWidth = 0;
    }
  }

  return (
    <div
      ref={ref}
      className={classes}
      style={{ ...mergedStyle, ...style }}
      {...restProps}
    >
      {children}
    </div>
  );
});

Col.displayName = 'Col';

export default Col;
