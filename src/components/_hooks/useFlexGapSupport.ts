import React from 'react';
import detectFlexGapSupported from '../_util/detectFlexGapSupported';

export default () => {
  const [flexible, setFlexible] = React.useState(false);

  React.useEffect(() => {
    setFlexible(detectFlexGapSupported());
  });

  return flexible;
};
