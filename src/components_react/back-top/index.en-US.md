---
title: BackTop
nav:
  title: Components
  path: /react
group:
  title: Other
  path: /other
  order: 7
---

## Examples

### basic

<code src="./demo/basic.tsx" />

### target

<code src="./demo/target.tsx" />

## API

> The distance to the bottom is set to `50px` by default, which is overridable.
>
> If you decide to use custom styles, please note the size limit: no more than `40px * 40px`.

| Property         | Description                                                                 | Type              | Default      |
| ---------------- | --------------------------------------------------------------------------- | ----------------- | ------------ |
| duration         | Time to return to top（ms）                                                 | number            | 450          |
| target           | Specifies the scrollable area dom node                                      | () => HTMLElement | () => window |
| visibilityHeight | The BackTop button will not show until the scroll height reaches this value | number            | 400          |
| onClick          | A callback function, which can be executed when you click the button        | function          | -            |
