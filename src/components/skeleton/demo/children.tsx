/**
 * title: Contains sub component
 * desc: Skeleton contains sub component.
 *
 * title.zh-CN: 包含子组件
 * desc.zh-CN: 加载占位图包含子组件。
 */

import React, { useState } from 'react';
import { Skeleton, Button } from 'whale-design';

export default () => {
  const [loading, setLoading] = useState(false);

  const showSkeleton = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <div id="components-skeleton-demo-children">
      <Skeleton loading={loading}>
        <div>
          <h4>Love is a carefully designed lie.</h4>
          <p>
            I don't know what I do now is right, those are wrong, and when I
            finally die then I know these. So what I can do now is to try to do
            everything well, and then wait to die .Sometimes I can be very happy
            to talk to everyone, can be very presumptuous, but no one knows, it
            is but very deliberatelycamouflage, camouflage; I can make him very
            happy very happy, but couldn't find the source of happiness, just
            giggle.
          </p>
        </div>
      </Skeleton>
      <Button onClick={showSkeleton} disabled={loading}>
        Show Skeleton
      </Button>
    </div>
  );
};
