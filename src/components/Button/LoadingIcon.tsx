import React from 'react';
import CSSMotion from 'rc-motion';
import { default as createFromIconfontCN } from '../icon/IconFont';

const IconFont = createFromIconfontCN({
  scriptUrl: ['//at.alicdn.com/t/font_2841973_y2pjf0rngd.js'],
});

export interface LoadingIconProps {
  prefixCls: string;
  existIcon: boolean;
  loading?: boolean | object;
}
const getCollapsedWidth = () => ({
  width: 0,
  opacity: 0,
  transform: 'scale(0)',
});
const getRealWidth = (node: HTMLElement) => ({
  width: node.scrollWidth,
  opacity: 1,
  transform: 'scale(1)',
});

const LoadingIcon: React.FC<LoadingIconProps> = ({
  prefixCls,
  loading,
  existIcon,
}) => {
  const visible = !!loading;

  if (existIcon) {
    return (
      <span className={`${prefixCls}-loading-icon`}>
        <IconFont type="icon-loading" />
      </span>
    );
  }

  return (
    <CSSMotion
      visible={visible}
      // We do not really use this motionName
      motionName={`${prefixCls}-loading-icon-motion`}
      removeOnLeave
      onAppearStart={getCollapsedWidth}
      onAppearActive={getRealWidth}
      onEnterStart={getCollapsedWidth}
      onEnterActive={getRealWidth}
      onLeaveStart={getRealWidth}
      onLeaveActive={getCollapsedWidth}
    >
      {(
        {
          className,
          style,
        }: { className?: string; style?: React.CSSProperties },
        ref: any,
      ) => (
        <span className={`${prefixCls}-loading-icon`} style={style} ref={ref}>
          <IconFont type="icon-loading" />
        </span>
      )}
    </CSSMotion>
  );
};

export default LoadingIcon;
