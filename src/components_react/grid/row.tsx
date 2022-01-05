import React from 'react';
import classNames from 'classnames';
import { getPrefixCls, tuple } from '../_util';
import ResponsiveObserve, {
  Breakpoint,
  responsiveArray,
  ScreenMap,
} from '../_util/responsiveObserve';
import useFlexGapSupport from '../_hooks/useFlexGapSupport';
import './style/index.ts';
import RowContext from './RowContext';

const RowAligns = tuple('top', 'middle', 'bottom', 'stretch');
const RowJustify = tuple(
  'start',
  'end',
  'center',
  'space-around',
  'space-between',
);
export type Gutter = number | Partial<Record<Breakpoint, number>>;
export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  prefixCls?: string;
  gutter?: Gutter | [Gutter, Gutter];
  align?: typeof RowAligns[number];
  justify?: typeof RowJustify[number];
  wrap?: boolean;
}

const Row = React.forwardRef<HTMLDivElement, RowProps>((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    wrap,
    align,
    justify,
    gutter = 0,
    style,
    className,
    children,
    ...restProps
  } = props;

  const [screens, setScreens] = React.useState<ScreenMap>({
    xs: true,
    sm: true,
    md: true,
    lg: true,
    xl: true,
    xxl: true,
  });

  const supportFlexGap = useFlexGapSupport();
  const gutterRef = React.useRef<Gutter | [Gutter, Gutter]>(gutter);

  React.useEffect(() => {
    const token = ResponsiveObserve.subscribe((screen) => {
      const currentGutter = gutterRef.current || 0;
      const hasResponseObject =
        (!Array.isArray(currentGutter) && typeof currentGutter === 'object') ||
        (Array.isArray(currentGutter) &&
          (typeof currentGutter[0] === 'object' ||
            typeof currentGutter[1] === 'object'));

      if (hasResponseObject) {
        setScreens(screen);
      }
    });

    return () => ResponsiveObserve.unsubscribe(token);
  }, []);

  const getGutter = () => {
    const results: [number, number] = [0, 0];
    const normalizedGutter = Array.isArray(gutter) ? gutter : [gutter, 0];
    normalizedGutter.forEach((item, index) => {
      if (typeof item === 'object') {
        for (let i = 0; i < responsiveArray.length; i++) {
          const breakpoint: Breakpoint = responsiveArray[i];

          if (screens[breakpoint] && item[breakpoint] !== undefined) {
            results[index] = item[breakpoint] as number;
          }
        }
      } else {
        results[index] = item || 0;
      }
    });

    return results;
  };

  const prefixCls = getPrefixCls('row', customizePrefixCls);
  const gutters = getGutter();
  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}-no-wrap`]: wrap === false,
      [`${prefixCls}-${justify}`]: justify,
      [`${prefixCls}-${align}`]: align,
    },
    className,
  );

  // gutter related style
  const rowStyle: React.CSSProperties = {};
  const horizontalGutter = gutters[0] > 0 ? gutters[0] / -2 : undefined;
  const verticalGutter = gutters[1] > 0 ? gutters[1] / -2 : undefined;

  if (horizontalGutter) {
    rowStyle.marginLeft = horizontalGutter;
    rowStyle.marginRight = horizontalGutter;
  }

  if (supportFlexGap) {
    rowStyle.rowGap = verticalGutter;
  } else if (verticalGutter) {
    rowStyle.marginTop = verticalGutter;
    rowStyle.marginBottom = verticalGutter;
  }

  const rowContext = React.useMemo(() => {
    return { gutter: gutters, wrap, supportFlexGap };
  }, [gutters, wrap, supportFlexGap]);

  return (
    <RowContext.Provider value={rowContext}>
      <div
        ref={ref}
        className={classes}
        style={{ ...rowStyle, ...style }}
        {...restProps}
      >
        {children}
      </div>
    </RowContext.Provider>
  );
});

Row.displayName = 'Row';

export default Row;
