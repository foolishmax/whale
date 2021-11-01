import Affix from './Affix';
import addEventListener from 'rc-util/lib/Dom/addEventListener';

interface ObserverEntity {
  target: HTMLElement | Window;
  affixList: Affix[];
  eventHandlers: {
    [eventName: string]: any;
  };
}

const TRIGGER_EVENTS = [
  'resize',
  'scroll',
  'touchstart',
  'touchmove',
  'touchend',
  'pageshow',
  'load',
];

export function getTargetRect(target: HTMLElement | Window | null | undefined) {
  return target !== window
    ? (target as HTMLElement).getBoundingClientRect()
    : ({ top: 0, bottom: window.innerHeight } as DOMRect);
}

export function getFixedTop(
  placeholderRect: DOMRect,
  targetRect: DOMRect,
  offsetTop: number | undefined,
) {
  if (
    offsetTop !== undefined &&
    targetRect.top > placeholderRect.top - offsetTop
  ) {
    return offsetTop + targetRect.top;
  }

  return undefined;
}

export function getFixedBottom(
  placeholderReact: DOMRect,
  targetRect: DOMRect,
  offsetBottom: number | undefined,
) {
  if (
    offsetBottom !== undefined &&
    targetRect.bottom < placeholderReact.bottom + offsetBottom
  ) {
    const targetBottomOffset = window.innerHeight - targetRect.bottom;
    return offsetBottom + targetBottomOffset;
  }
  return undefined;
}

let observerEntities: ObserverEntity[] = [];

export function addObserveTarget(
  target: HTMLElement | Window | null,
  affix: Affix,
): void {
  if (!target) return;

  let entity: ObserverEntity | undefined = observerEntities.find(
    (item) => item.target === target,
  );

  if (entity) {
    entity.affixList.push(affix);
  } else {
    entity = {
      target,
      affixList: [affix],
      eventHandlers: {},
    };

    observerEntities.push(entity);
  }

  TRIGGER_EVENTS.forEach((eventName) => {
    entity!.eventHandlers[eventName] = addEventListener(
      target,
      eventName,
      () => {
        entity!.affixList.forEach((targetAffix) => {
          targetAffix.lazyUpdatePosition();
        });
      },
    );
  });
}

export function removeObserveTarget(affix: Affix): void {
  const observerEntity = observerEntities.find((oriObserverEntity) => {
    const hasAffix = oriObserverEntity.affixList.some((item) => item === affix);
    if (hasAffix) {
      oriObserverEntity.affixList = oriObserverEntity.affixList.filter(
        (item) => item !== affix,
      );
    }
    return hasAffix;
  });

  if (observerEntity && observerEntity.affixList.length === 0) {
    observerEntities = observerEntities.filter(
      (item) => item !== observerEntity,
    );

    // Remove listener
    TRIGGER_EVENTS.forEach((eventName) => {
      const handler = observerEntity.eventHandlers[eventName];
      if (handler && handler.remove) {
        handler.remove();
      }
    });
  }
}
