import React from 'react';
import { AvatarProps } from './Avatar';
import { SkeletonTitleProps } from './Title';
import { SkeletonParagraphProps } from './Paragraph';
import {
  ConfigConsumer,
  ConfigConsumerProps,
} from '../config-provider/context';
import classNames from 'classnames';
import Element from './Element';
import Title from './Title';
import Paragraph from './Paragraph';
import SkeletonButton from './Button';
import SkeletonAvatar from './Avatar';
import SkeletonImage from './Image';
import SkeletonInput from './Input';

interface SkeletonAvatarProps extends Omit<AvatarProps, 'active'> {}

export interface SkeletonProps {
  active?: boolean;
  loading?: boolean;
  prefixCls?: string;
  className?: string;
  children?: React.ReactNode;
  avatar?: SkeletonAvatarProps | boolean;
  title?: SkeletonTitleProps | boolean;
  paragraph?: SkeletonParagraphProps | boolean;
  round?: boolean;
}

function getComponentProps<T>(prop: T | boolean | undefined): T | {} {
  if (prop && typeof prop === 'object') {
    return prop;
  }

  return {};
}

function getTitleBasicProps(
  hasAvatar: boolean,
  hasParagraph: boolean,
): SkeletonTitleProps {
  if (!hasAvatar && hasParagraph) {
    return { width: '38%' };
  }

  if (hasAvatar && hasParagraph) {
    return { width: '50%' };
  }

  return {};
}

function getParagraphBasicProps(
  hasAvatar: boolean,
  hasTitle: boolean,
): SkeletonParagraphProps {
  const basicProps: SkeletonParagraphProps = {};

  // Width
  if (!hasAvatar || !hasTitle) {
    basicProps.width = '61%';
  }

  // Rows
  if (!hasAvatar && hasTitle) {
    basicProps.rows = 3;
  } else {
    basicProps.rows = 2;
  }

  return basicProps;
}

const Skeleton = (props: SkeletonProps) => {
  const renderSkeleton = ({ getPrefixCls }: ConfigConsumerProps) => {
    const {
      prefixCls: customizePrefixCls,
      loading,
      className,
      avatar,
      title,
      paragraph,
      active,
      round,
      children,
    } = props;

    const prefixCls = getPrefixCls('skeleton', customizePrefixCls);

    if (loading || !('loading' in props)) {
      const hasAvatar = !!avatar;
      const hasTitle = !!title;
      const hasParagraph = !!paragraph;

      let avatarNode;
      if (hasAvatar) {
        const avatarProps: SkeletonAvatarProps = {
          prefixCls: `${prefixCls}-avatar`,
          size: 'large',
          shape: 'circle',
          ...getComponentProps(avatar),
        };

        avatarNode = (
          <div className={`${prefixCls}-header`}>
            <Element {...avatarProps} />
          </div>
        );
      }

      let contentNode;
      if (hasTitle || hasParagraph) {
        let titleNode;
        if (hasTitle) {
          const titleProps: SkeletonTitleProps = {
            prefixCls: `${prefixCls}-title`,
            ...getTitleBasicProps(hasAvatar, hasParagraph),
            ...getComponentProps(title),
          };
          titleNode = <Title {...titleProps} />;
        }

        let paragraphNode;
        if (hasParagraph) {
          const paragraphProps: SkeletonParagraphProps = {
            prefixCls: `${prefixCls}-paragraph`,
            ...getParagraphBasicProps(hasAvatar, hasTitle),
            ...getComponentProps(paragraph),
          };

          paragraphNode = <Paragraph {...paragraphProps} />;
        }

        contentNode = (
          <div className={`${prefixCls}-content`}>
            {titleNode}
            {paragraphNode}
          </div>
        );
      }

      const classes = classNames(
        prefixCls,
        {
          [`${prefixCls}-width-avatar`]: hasAvatar,
          [`${prefixCls}-active`]: active,
          [`${prefixCls}-round`]: round,
        },
        className,
      );

      return (
        <div className={classes}>
          {avatarNode}
          {contentNode}
        </div>
      );
    }

    return children;
  };

  return <ConfigConsumer>{renderSkeleton}</ConfigConsumer>;
};

Skeleton.defaultProps = {
  avatar: false,
  title: true,
  paragraph: true,
};

Skeleton.Button = SkeletonButton;
Skeleton.Input = SkeletonInput;
Skeleton.Avatar = SkeletonAvatar;
Skeleton.Image = SkeletonImage;

export default Skeleton;
