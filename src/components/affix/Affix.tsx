import React from 'react';
import ResizeObserver from 'rc-resize-observer';
import { throttleByAnimationFrameDecorator } from '../_util/throttleByAnimationFrame';
import omit from 'rc-util/lib/omit';
import classNames from 'classnames';
import './style/index';
import { getPrefixCls } from '../_util';
import {
  addObserveTarget,
  getTargetRect,
  getFixedTop,
  getFixedBottom,
} from './_utils';

export interface AffixProps {
  offsetTop?: number;
  offsetBottom?: number;
  style?: React.CSSProperties;
  onChange?: (affixed?: boolean) => void;
  target?: () => Window | HTMLElement | null;
  prefixCls?: string;
  className?: string;
  children: React.ReactNode;
}

enum AffixStatus {
  None,
  Prepare,
}

export interface AffixState {
  affixStyle?: React.CSSProperties;
  placeholderStyle?: React.CSSProperties;
  status: AffixStatus;
  lastAffix: boolean;

  prevTarget: Window | HTMLElement | null;
}

function getDefaultTarget() {
  return typeof window !== 'undefined' ? window : null;
}

class Affix extends React.Component<AffixProps, AffixState> {
  private timeout: any;

  state: AffixState = {
    status: AffixStatus.None,
    lastAffix: false,
    prevTarget: null,
  };

  private placeholderNode = React.createRef<HTMLDivElement>();
  private saveFixedNode = React.createRef<HTMLDivElement>();

  private getTargetFunc() {
    const { target } = this.props;

    if (target !== undefined) {
      return target;
    }

    return getDefaultTarget;
  }

  componentDidMount() {
    const targetFunc = this.getTargetFunc();

    if (targetFunc) {
      this.timeout = setTimeout(() => {
        addObserveTarget(targetFunc(), this);

        this.updatePosition();
      });
    }
  }

  getOffsetTop = () => {
    const { offsetBottom } = this.props;
    let { offsetTop } = this.props;
    if (offsetBottom === undefined && offsetTop === undefined) {
      offsetTop = 0;
    }
    return offsetTop;
  };

  getOffsetBottom = () => this.props.offsetBottom || 0;

  prepareMeasure = () => {
    this.setState({
      status: AffixStatus.Prepare,
      affixStyle: undefined,
      placeholderStyle: undefined,
    });
  };

  @throttleByAnimationFrameDecorator()
  updatePosition = () => {
    this.prepareMeasure();
  };

  @throttleByAnimationFrameDecorator()
  lazyUpdatePositioin() {
    const targetFunc = this.getTargetFunc();
    const { affixStyle } = this.state;

    if (affixStyle) {
      const offsetTop = this.getOffsetTop();
      const offsetBottom = this.getOffsetBottom();
      const targetNode = targetFunc();

      if (targetNode && this.placeholderNode) {
        const targetRect = getTargetRect(targetNode);
        const placeholderRect = getTargetRect(this.placeholderNode as any);

        const fixedTop = getFixedTop(placeholderRect, targetRect, offsetTop);
        const fixedBottom = getFixedBottom(
          placeholderRect,
          targetRect,
          offsetBottom,
        );

        if (
          (fixedTop !== undefined && affixStyle.top === fixedTop) ||
          (fixedBottom !== undefined && affixStyle.bottom === fixedBottom)
        ) {
          return;
        }
      }
    }

    this.prepareMeasure();
  }

  render() {
    const { prefixCls, children } = this.props;
    const { affixStyle, placeholderStyle } = this.state;
    const props = omit(this.props, [
      'prefixCls',
      'offsetTop',
      'offsetBottom',
      'target',
      'onChange',
    ]);
    const classes = classNames({
      [getPrefixCls('affix', prefixCls)]: !!affixStyle,
    });

    return (
      <ResizeObserver
        onResize={() => {
          this.updatePosition();
        }}
      >
        <div {...props} ref={this.placeholderNode}>
          {affixStyle && <div style={placeholderStyle} aria-hidden="true" />}
          <div className={classes} ref={this.saveFixedNode} style={affixStyle}>
            <ResizeObserver
              onResize={() => {
                this.updatePosition();
              }}
            >
              {children}
            </ResizeObserver>
          </div>
        </div>
      </ResizeObserver>
    );
  }
}

export default Affix;
