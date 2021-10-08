import canUseDom from 'rc-util/lib/Dom/canUseDom';

export const canUseDocElement = () =>
  canUseDom() && window.document.documentElement;

let flexGapSupported: boolean | undefined;

export const detectFlexGapSupported = () => {
  if (!canUseDocElement()) return false;

  if (flexGapSupported !== undefined) return flexGapSupported;

  // create flex container with row-gap set
  const flex = document.createElement('div');
  flex.style.display = 'flex';
  flex.style.flexDirection = 'column';
  flex.style.rowGap = '1px';

  // create two child elements inside it
  flex.appendChild(document.createElement('div'));
  flex.appendChild(document.createElement('div'));

  document.body.appendChild(flex);
  flexGapSupported = flex.scrollHeight === 1;
  document.body.removeChild(flex);

  return flexGapSupported;
};

export default detectFlexGapSupported;
