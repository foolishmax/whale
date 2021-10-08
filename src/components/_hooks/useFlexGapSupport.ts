import React from 'react';
import detectFlexGapSupported from '../_utils/detectFlexGapSupported';

export default () => {
  const [flexible, setFlexible] = React.useState(false);

  React.useEffect(() => {
    setFlexible(detectFlexGapSupported());
  });

  return flexible;
};
