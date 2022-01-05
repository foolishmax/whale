---
title: Tooltip
nav:
  title: Components
  path: /react
group:
  title: Data Display
  path: /display
  order: 5
---

## Examples

### basic

<code src='./demo/basic.tsx' />

### placement

<code src='./demo/placement.tsx' />

### arrow pointing at the center

<code src='./demo/arrow-point-at-center.tsx' />

### colorful

<code src='./demo/colorful.tsx' />

## API

## API

| Property | Description                   | Type                         | Default |
| -------- | ----------------------------- | ---------------------------- | ------- |
| title    | The text shown in the tooltip | ReactNode \| () => ReactNode | -       |

### Common API

The following APIs are shared by Tooltip, Popconfirm, Popover.

| Property             | Description                                                                                                                                                                                           | Type                                                               | Default             |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | ------------------- |
| align                | This value will be merged into placement's config, please refer to the settings [rc-tooltip](https://github.com/react-component/tooltip)                                                              | object                                                             | -                   |
| arrowPointAtCenter   | Whether the arrow is pointed at the center of target                                                                                                                                                  | boolean                                                            | false               |
| autoAdjustOverflow   | Whether to adjust popup placement automatically when popup is off screen                                                                                                                              | boolean                                                            | true ｜             |
| color                | The background color                                                                                                                                                                                  | string                                                             | -                   |
| defaultVisible       | Whether the floating tooltip card is visible by default                                                                                                                                               | boolean                                                            | false ｜            |
| destroyTooltipOnHide | Whether destroy tooltip when hidden, parent container of tooltip will be destroyed when `keepParent` is false                                                                                         | boolean \| { keepParent?: boolean }                                | false               |
| getPopupContainer    | The DOM container of the tip, the default behavior is to create a `div` element in `body`                                                                                                             | function(triggerNode)                                              | () => document.body |
| mouseEnterDelay      | Delay in seconds, before tooltip is shown on mouse enter                                                                                                                                              | number                                                             | 0.1                 |
| mouseLeaveDelay      | Delay in seconds, before tooltip is hidden on mouse leave                                                                                                                                             | number                                                             | 0.1                 |
| overlayClassName     | Class name of the tooltip card                                                                                                                                                                        | string                                                             | -                   |
| overlayStyle         | Style of the tooltip card                                                                                                                                                                             | object                                                             | -                   |
| overlayInnerStyle    | Style of the tooltip inner content                                                                                                                                                                    | object                                                             | -                   |
| placement            | The position of the tooltip relative to the target, which can be one of `top` `left` `right` `bottom` `topLeft` `topRight` `bottomLeft` `bottomRight` `leftTop` `leftBottom` `rightTop` `rightBottom` | string                                                             | `top`               |
| trigger              | Tooltip trigger mode. Could be multiple by passing an array                                                                                                                                           | `hover` \| `focus` \| `click` \| `contextMenu` \| Array&lt;string> | `hover`             |
| visible              | Whether the floating tooltip card is visible or not                                                                                                                                                   | boolean                                                            | false               |
| zIndex               | Config `z-index` of Tooltip                                                                                                                                                                           | number                                                             | -                   |
| onVisibleChange      | Callback executed when visibility of the tooltip card is changed                                                                                                                                      | (visible) => void                                                  | -                   |

<style>
[id^="components-tooltip-demo-placement"] {
  overflow: auto;
}

[id^="components-tooltip-demo-placement"] .whale-btn {
    width: 70px;
    padding: 0;
    text-align: center;
    margin-right: 8px;
    margin-bottom: 8px;
}

[id^="components-tooltip-demo-point"] .whale-btn {
    margin-right: 8px;
    margin-bottom: 8px;
}

[id^="components-tooltip-demo-colorful"] .whale-btn {
    margin-right: 8px;
    margin-bottom: 8px;
}
</style>
