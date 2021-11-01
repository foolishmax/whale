import omit from 'rc-util/lib/omit';
import React from 'react';
import {
  ConfigConsumer,
  ConfigConsumerProps,
} from '../config-provider/context';
import Element, { SkeletonElementProps } from './Element';
import classNames from 'classnames';

export interface SkeletonButtonProps
  extends Omit<SkeletonElementProps, 'size'> {
  size?: 'large' | 'small' | 'default';
  block?: boolean;
}

const SkeletonButton = (props: SkeletonButtonProps) => {
  const renderSkeletonButton = ({ getPrefixCls }: ConfigConsumerProps) => {
    const {
      prefixCls: customizePrefixCls,
      className,
      active,
      block = false,
    } = props;
    const prefixCls = getPrefixCls('skeleton', customizePrefixCls);
    const otherProps = omit(props, ['prefixCls']);

    const classes = classNames(prefixCls, className, `${prefixCls}-element`, {
      [`${prefixCls}-active`]: active,
      [`${prefixCls}-block`]: block,
    });

    return (
      <div className={classes}>
        <Element prefixCls={`${prefixCls}-button`} {...otherProps} />
      </div>
    );
  };

  return <ConfigConsumer>{renderSkeletonButton}</ConfigConsumer>;
};

SkeletonButton.defaultProps = {
  size: 'default',
};

export default SkeletonButton;
