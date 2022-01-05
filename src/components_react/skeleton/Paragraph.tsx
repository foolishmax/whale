import React from 'react';
import classNames from 'classnames';

type widthUnit = number | string;

export interface SkeletonParagraphProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  width?: widthUnit | Array<widthUnit>;
  rows?: number;
}

const Paragraph = (props: SkeletonParagraphProps) => {
  const { prefixCls, className, style, width, rows = 2 } = props;

  const getWidth = (index: number) => {
    if (Array.isArray(width)) {
      return width[index];
    }

    if (rows - 1 === index) {
      return width;
    }

    return undefined;
  };

  const rowList = [...Array(rows)].map((_, index) => (
    <li key={index} style={{ width: getWidth(index) }} />
  ));

  return (
    <ul className={classNames(prefixCls, className)} style={style}>
      {rowList}
    </ul>
  );
};

export default Paragraph;
