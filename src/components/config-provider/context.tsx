import React from 'react';
import { SizeType } from './SizeContext';

export interface CSPConfig {
  nonce?: string;
}

export interface ConfigConsumerProps {
  getTargetContainer?: () => HTMLElement;
  getPopupContainer?: (triggerNode?: HTMLElement) => HTMLElement;
  rootPrefixCls?: string;
  iconPrefixCls?: string;
  getPrefixCls: (suffixCls?: string, customizePrefixCls?: string) => string;
  csp?: CSPConfig;
  autoInsertSpaceInButton?: boolean;
  input?: {
    autoComplete?: string;
  };
  pageHeader?: {
    ghost: boolean;
  };
  space?: {
    size?: SizeType | number;
  };
  virtual?: boolean;
  dropdownMathchSelectWidth?: boolean;
}

const defaultGetPrefixCls = (
  suffixCls?: string,
  customizePrefixCls?: string,
) => {
  if (customizePrefixCls) return customizePrefixCls;

  return suffixCls ? `whale-${suffixCls}` : 'whale';
};

export const ConfigContext = React.createContext<ConfigConsumerProps>({
  getPrefixCls: defaultGetPrefixCls,
});

export const ConfigConsumer = ConfigContext.Consumer;
