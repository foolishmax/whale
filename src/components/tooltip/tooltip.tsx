import React from 'react';
import { TooltipProps as RcTooltipProps } from 'rc-tooltip/lib/Tooltip';
import { LiteralUnion } from '../_utils/type';
import { PresetColorType } from '../_utils/colors';

export interface AbstractTooltipProps
  extends Partial<Omit<RcTooltipProps, 'children'>> {
  style?: React.CSSProperties;
  className?: string;
  color?: LiteralUnion<PresetColorType, string>;
}

export type RenderFunction = () => React.ReactNode;

export interface TooltipPropsWithOverlay extends AbstractTooltipProps {
  title?: React.ReactNode | RenderFunction;
  overlay: React.ReactNode | RenderFunction;
}

export interface TooltipPropsWidthTitle extends AbstractTooltipProps {
  title: React.ReactNode | RenderFunction;
  overlay?: React.ReactNode | RenderFunction;
}

export type TooltipProps = TooltipPropsWidthTitle | TooltipPropsWithOverlay;

const Tooltip = React.forwardRef<unknown, TooltipProps>((props, ref) => {
  return <div></div>;
});

Tooltip.displayName = 'Tooltip';

export default Tooltip;
