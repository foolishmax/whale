---
title: Affix
nav:
  path: /components
  title: Components
---

## Examples

### basic

<code src="./demo/basic.tsx" />

### callback

<code src="./demo/callback.tsx" />

### target

<code src="./demo/target.tsx" />

## API

| Property     | Description                                        | Type              | Default      |
| ------------ | -------------------------------------------------- | ----------------- | ------------ |
| offsetBottom | Offset from the bottom of the viewport (in pixels) | number            | -            |
| offsetTop    | Offset from the top of the viewport (in pixels)    | number            | 0            |
| target       | Specifies the scrollable area DOM node             | () => HTMLElement | () => window |
| onChange     | Callback for when Affix state is changed           | function(affixed) | -            |

**Note:** Children of `Affix` must not have the property `position: absolute`,but you can set `position: absolute` on `Affix` itself

<style>
#components-affix-demo-target .scrollable-container {
  height: 100px;
  overflow-y: scroll;
}

#components-affix-demo-target .background {
  padding-top: 60px;
  height: 300px;
  background-image: url('https://zos.alipayobjects.com/rmsportal/RmjwQiJorKyobvI.jpg');
}
</style>
