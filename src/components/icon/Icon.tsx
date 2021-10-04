import * as React from 'react';
import classNames from 'classnames';
import Context from './Context';

import { svgBaseProps, useInsertStyles } from './_utils';

export interface IconBaseProps extends React.HTMLProps<HTMLSpanElement> {
  spin?: boolean;
  rotate?: number;
}

export interface CustomIconComponentProps {
  width: string | number;
  height: string | number;
  fill: string;
  viewBox?: string;
  className?: string;
  style?: React.CSSProperties;
}
export interface IconComponentProps extends IconBaseProps {
  viewBox?: string;
  component?:
    | React.ComponentType<
        CustomIconComponentProps | React.SVGProps<SVGSVGElement>
      >
    | React.ForwardRefExoticComponent<CustomIconComponentProps>;
  ariaLabel?: React.AriaAttributes['aria-label'];
}

const Icon = React.forwardRef<HTMLSpanElement, IconComponentProps>(
  (props, ref) => {
    const {
      // affect outter <i>...</i>
      className,

      // affect inner <svg>...</svg>
      component: Component,
      viewBox,
      spin,
      rotate,

      tabIndex,
      onClick,

      // children
      children,
      ...restProps
    } = props;

    useInsertStyles();

    const { prefixCls = 'whaleicon' } = React.useContext(Context);

    const classString = classNames(prefixCls, className);

    const svgClassString = classNames({
      [`${prefixCls}-spin`]: !!spin,
    });

    const svgStyle = rotate
      ? {
          msTransform: `rotate(${rotate}deg)`,
          transform: `rotate(${rotate}deg)`,
        }
      : undefined;

    const innerSvgProps: CustomIconComponentProps = {
      ...svgBaseProps,
      className: svgClassString,
      style: svgStyle,
      viewBox,
    };

    if (!viewBox) {
      delete innerSvgProps.viewBox;
    }

    // component > children
    const renderInnerNode = () => {
      if (Component) {
        return <Component {...innerSvgProps}>{children}</Component>;
      }

      if (children) {
        return (
          <svg {...innerSvgProps} viewBox={viewBox}>
            {children}
          </svg>
        );
      }

      return null;
    };

    let iconTabIndex = tabIndex;
    if (iconTabIndex === undefined && onClick) {
      iconTabIndex = -1;
    }

    return (
      <span
        role="img"
        {...restProps}
        ref={ref}
        tabIndex={iconTabIndex}
        onClick={onClick}
        className={classString}
      >
        {renderInnerNode()}
      </span>
    );
  },
);

Icon.displayName = 'WhaleIcon';

export default Icon;
