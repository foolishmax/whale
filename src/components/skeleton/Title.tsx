import React from 'react';
import classNames from 'classnames';

export interface SkeletonTitleProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  width?: number | string;
}

const Title = (props: SkeletonTitleProps) => {
  const { prefixCls, className, width, style } = props;

  return (
    <h3
      className={classNames(prefixCls, className)}
      style={{ width, ...style }}
    ></h3>
  );
};

export default Title;
