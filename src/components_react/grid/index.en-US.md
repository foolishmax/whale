---
title: Grid
nav:
  title: Components
  path: /react
group:
  title: Layout
  path: /layout
  order: 2
---

## Examples

### Gird Base

<code src="./demo/base.tsx" />

### Grid Gutter

<code src="./demo/gutter.tsx" />

### Typesetting

<code src="./demo/flex-justify.tsx" />

### Flex Align

<code src="./demo/flex-align.tsx" />

### Order

<code src="./demo/flex-order.tsx" />

### Flex Stretch

<code src="./demo/flex.tsx" />

### Column Offset

<code src="./demo/offset.tsx" />

## API

### Row

| Property | Description                                                                                                                                                                                    | Type                                                      | Default |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- | ------- |
| align    | Vertical alignment                                                                                                                                                                             | `top`\|`middle`\|`bottom`                                 | `top`   |
| gutter   | Spacing between grids, could be a number or a object like { xs: 8, sm: 16, md: 24}.Or you can use array to make horizontal and vertical spacing work at the same time `[horizontal, vertical]` | `number`\|`object`\|`array`                               | 0       |
| justify  | horizontal arrangement                                                                                                                                                                         | `start`\|`end`\|`center`\|`space-around`\|`space-between` | `start` |
| wrap     | auto wrap line                                                                                                                                                                                 | boolean                                                   | true    |

### Col

| Property | Description                                                                                            | Type             | Default |
| -------- | ------------------------------------------------------------------------------------------------------ | ---------------- | ------- |
| flex     | Flex layout style                                                                                      | string \| number | -       |
| offset   | The number of cells to offset Col from the left                                                        | number           | 0       |
| order    | Raster order                                                                                           | number           | 0       |
| pull     | The number of cells that raster is moved to the left                                                   | number           | 0       |
| push     | The number of cells that raster is moved to the right                                                  | number           | 0       |
| span     | Raster number of cells to occupy, 0 corresponds to `display: none`                                     | number           | none    |
| xs       | `screen < 576px` and also default setting, could be a `span` value or an object containing above props | number \| object | -       |
| sm       | `screen ≥ 576px`, could be a `span` value or an object containing above props                          | number \| object | -       |
| md       | `screen ≥ 768px`, could be a `span` value or an object containing above props                          | number \| object | -       |
| lg       | `screen ≥ 992px`, could be a `span` value or an object containing above props                          | number \| object | -       |
| xl       | `screen ≥ 1200px`, could be a `span` value or an object containing above props                         | number \| object | -       |
| xxl      | `screen ≥ 1600px`, could be a `span` value or an object containing above props                         | number \| object | -       |

<style>
[id^=components-grid-demo-] .whale-row > .whale-col {
  min-height: 30px;
  margin-top: 8px;
  margin-bottom: 8px;
  color: #fff;
  text-align: center;
  border-radius: 0;
  padding: 16px 0;
  background-color: rgba(0, 146, 255, 0.75);
}

[id^=components-grid-demo-] .whale-row > .whale-col:nth-child(even) {
  background-color: rgba(0, 146, 255);
}

[id^=components-grid-demo-] .whale-row  .gutter-row {
  background-color: #fff;
  padding: 0;
}
</style>
