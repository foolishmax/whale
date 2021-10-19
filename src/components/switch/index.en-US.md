---
title: Switch
nav:
  path: /components
  title: Components
---

## Examples

### Basic

<code src="./demo/base.tsx" />

### Disabled

<code src="./demo/disabled.tsx" />

### Two Sizes

<code src="./demo/size.tsx">

### Text & Icon

<code src="./demo/text-icon.tsx" />

### Loading

<code src="./demo/loading.tsx" />

## API

| Property          | Description                                         | Type                                     | Default   |
| ----------------- | --------------------------------------------------- | ---------------------------------------- | --------- |
| autoFocus         | Whether get focus when component mounted            | boolean                                  | false     |
| checked           | Determine whether the Switch is checked             | boolean                                  | false     |
| checkedChildren   | The content to be shown when the state is checked   | ReactNode                                | -         |
| className         | The additional class to Switch                      | string                                   | -         |
| defaultChecked    | Whether to set the initial state                    | boolean                                  | false     |
| disabled          | Disable switch                                      | boolean                                  | false     |
| loading           | Loading state of switch                             | boolean                                  | false     |
| size              | The size of the Switch, options: `default` `small`  | string                                   | `default` |
| unCheckedChildren | The content to be shown when the state is unchecked | ReactNode                                | -         |
| onChange          | Trigger when the checked state is changing          | function(checked: boolean, event: Event) | -         |
| onClick           | Trigger when clicked                                | function(checked: boolean, event: Event) | -         |

## Methods

| Name    | Description  |
| ------- | ------------ |
| blur()  | Remove focus |
| focus() | Get focus    |
