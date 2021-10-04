import React, { useContext, useEffect } from 'react';
import { updateCSS } from 'rc-util/lib/Dom/dynamicCSS';
import IconContext from './Context';



// These props make sure that the SVG behaviours like general text.
// Reference: https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
export const svgBaseProps = {
  width: '1em',
  height: '1em',
  fill: 'currentColor',
  'aria-hidden': 'true',
  focusable: 'false',
};

export const iconStyles = `
.whaleicon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.whaleicon > * {
  line-height: 1;
}

.whaleicon svg {
  display: inline-block;
}

.whaleicon::before {
  display: none;
}

.whaleicon .whaleicon-icon {
  display: block;
}

.whaleicon[tabindex] {
  cursor: pointer;
}

.whaleicon-spin::before,
.whaleicon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`;

export const useInsertStyles = (styleStr: string = iconStyles) => {
  const { csp } = useContext(IconContext);

  useEffect(() => {
    updateCSS(styleStr, 'whale-design-icon', {
      prepend: true,
      csp,
    });
  }, []);
};
