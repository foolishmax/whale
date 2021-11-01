import omit from 'rc-util/lib/omit';
import React from 'react';
import { ConfigContext } from '../config-provider/context';
import classNames from 'classnames';
import { default as createFromIconfontCN } from '../icon/IconFont';
import CSSMotion from 'rc-motion';
import { cloneElement } from '../_util/reactNode';
import useMergedState from 'rc-util/lib/hooks/useMergedState';
import scrollTo from '../_util/scrollTo';
import './style/index.ts';
import { throttleByAnimationFrame } from '../_util/throttleByAnimationFrame';
import getScroll from '../_util/getScroll';
import addEventListener from 'rc-util/lib/Dom/addEventListener';

const IconFont = createFromIconfontCN({
  scriptUrl: ['//at.alicdn.com/t/font_2841973_v5d3b3ghgw.js'],
});

export interface BackTopProps {
  visibilityHeight?: number;
  onClick?: React.MouseEventHandler<HTMLElement>;
  target?: () => HTMLElement | Window | Document;
  prefixCls?: string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  duration?: number;
  visible?: boolean;
}

const BackTop: React.FC<BackTopProps> = (props) => {
  const { prefixCls: customizePrefixCls, className = '' } = props;
  const [visible, setVisible] = useMergedState(false, {
    value: props.visible,
  });

  const ref = React.createRef<HTMLDivElement>();
  const scrollEvent = React.useRef<any>();

  const { getPrefixCls } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls('back-top', customizePrefixCls);
  const rootPrefixCls = getPrefixCls();

  const classes = classNames(prefixCls, className);

  const handleScroll = throttleByAnimationFrame(
    (e: React.UIEvent<HTMLElement> | { target: any }) => {
      const { visibilityHeight } = props;
      const scrollTop = getScroll(e.target, true);

      setVisible(scrollTop > visibilityHeight!);
    },
  );

  const bindScrollEvent = () => {
    const { target } = props;
    const getTarget = target || getDefaultTarget;
    const container = getTarget();

    scrollEvent.current = addEventListener(
      container,
      'scroll',
      (e: React.UIEvent<HTMLElement>) => {
        handleScroll(e);
      },
    );

    handleScroll({
      target: container,
    });
  };

  React.useEffect(() => {
    bindScrollEvent();
    return () => {
      if (scrollEvent.current) {
        scrollEvent.current.remove();
      }
      (handleScroll as any).cancel();
    };
  }, [props.target]);

  const renderChildren = ({
    prefixCls,
    rootPrefixCls,
  }: {
    prefixCls: string;
    rootPrefixCls: string;
  }) => {
    const { children } = props;
    const defaultElement = (
      <div className={`${prefixCls}-content`}>
        <div className={`${prefixCls}-icon`}>
          <IconFont type="icon-back-top1" />
        </div>
      </div>
    );

    return (
      <>
        {visible && (
          <CSSMotion visible={visible} motionName={`${rootPrefixCls}-fade`}>
            {({ className: motionClassName }) =>
              cloneElement(children || defaultElement, ({ className }) => ({
                className: classNames(motionClassName, className),
              }))
            }
          </CSSMotion>
        )}
      </>
    );
  };

  const getDefaultTarget = () =>
    ref.current && ref.current.ownerDocument
      ? ref.current.ownerDocument
      : window;

  const scrollToTop = (e: React.MouseEvent<HTMLDivElement>) => {
    const { onClick, target, duration } = props;

    scrollTo(0, {
      getContainer: target || getDefaultTarget,
      duration,
    });

    if (typeof onClick === 'function') {
      onClick(e);
    }
  };

  const omitProps = omit(props, [
    'prefixCls',
    'className',
    'children',
    'visibilityHeight',
    'target',
    'visible',
  ]);

  return (
    <div {...omitProps} className={classes} onClick={scrollToTop} ref={ref}>
      {renderChildren({ prefixCls, rootPrefixCls })}
    </div>
  );
};

BackTop.defaultProps = {
  visibilityHeight: 400,
};

export default React.memo(BackTop);
