---
title: Input
nav:
  title: React
  path: /react
group:
  title: Data Entry
  path: /entry
---

## Example

### basic

<code src="./demo/basic.tsx" />

### size

<code src="./demo/size.tsx" />

### prefix & suffix

<code src="./demo/prefix-suffix.tsx" />

### pre/post tab

<code src="./demo/addon.tsx" />

### textarea

<code src="./demo/textArea.tsx" />

### password

<code src="./demo/password.tsx" />

## API

### Input

| Property     | Description                                                                                                                                                         | Type                           | Default |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ | ------- |
| addonAfter   | The label text displayed after (on the right side of) the input field                                                                                               | ReactNode                      | -       |
| addonBefore  | The label text displayed before (on the left side of) the input field                                                                                               | ReactNode                      | -       |
| allowClear   | If allow to remove input content with clear icon                                                                                                                    | boolean                        | false   |
| bordered     | Whether has border style                                                                                                                                            | boolean                        | true    |
| defaultValue | The initial input content                                                                                                                                           | string                         | -       |
| disabled     | Whether the input is disabled                                                                                                                                       | boolean                        | false   |
| id           | The ID for input                                                                                                                                                    | string                         | -       |
| maxLength    | The max length                                                                                                                                                      | number                         | -       |
| prefix       | The prefix icon for the Input                                                                                                                                       | ReactNode                      | -       |
| size         | The size of the input box. Note: in the context of a form, the `large` size is used                                                                                 | `large` \| `middle` \| `small` | -       |
| suffix       | The suffix icon for the Input                                                                                                                                       | ReactNode                      | -       |
| type         | The type of input, see: [MDN](https://developer.mozilla.org/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types)( use `Input.TextArea` instead of `type="textarea"`) | string                         | `text`  |
| value        | The input content value                                                                                                                                             | string                         | -       |
| onChange     | Callback when user input                                                                                                                                            | function(e)                    | -       |
| onPressEnter | The callback function that is triggered when Enter key is pressed                                                                                                   | function(e)                    | -       |

### Input.TextArea

| Property     | Description                                                                                  | Type                                                                        | Default |
| ------------ | -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ------- |
| allowClear   | If allow to remove input content with clear icon                                             | boolean                                                                     | false   |
| autoSize     | Height autosize feature, can be set to true \| false or an object { minRows: 2, maxRows: 6 } | boolean \| object                                                           | false   |
| bordered     | Whether has border style                                                                     | boolean                                                                     | true    |
| defaultValue | The initial input content                                                                    | string                                                                      | -       |
| maxLength    | The max length                                                                               | number                                                                      | -       |
| showCount    | Whether show text count                                                                      | boolean \| { formatter: ({ count: number, maxLength?: number }) => string } | false   |
| value        | The input content value                                                                      | string                                                                      | -       |
| onPressEnter | The callback function that is triggered when Enter key is pressed                            | function(e)                                                                 | -       |
| onResize     | The callback function that is triggered when resize                                          | function({ width, height })                                                 | -       |

#### Input.Password

| Property         | Description                | Type                   | Default                                                                   |
| ---------------- | -------------------------- | ---------------------- | ------------------------------------------------------------------------- |
| iconRender       | Custom toggle button       | (visible) => ReactNode | (visible) => (visible ? &lt;EyeOutlined /> : &lt;EyeInvisibleOutlined />) |
| visibilityToggle | Whether show toggle button | boolean                | true                                                                      |

<style>
  [id^=components-input-demo-] > .whale-input,
  [id^=components-input-demo-] > .whale-input-affix-wrapper,
  [id^=components-input-demo-] > .whale-input-group-wrapper,
  [id^=components-input-demo-] > .whale-input-textarea  {
    max-width: 240px;
    margin-right: 8px;
    margin-bottom: 8px;
  }

</style>
