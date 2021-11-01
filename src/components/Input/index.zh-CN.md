---
title: Input 输入框
nav:
  path: /components
  title: 组件
---

## 代码演示

### 基本使用

<code src="./demo/basic.tsx" />

### 大小

<code src="./demo/size.tsx" />

### 前缀/后缀图标

<code src="./demo/prefix-suffix.tsx" />

### 前置/后置标签

<code src="./demo/addon.tsx" />

### 文本域

<code src="./demo/textArea.tsx" />

### 密码

<code src="./demo/password.tsx" />

## API

### Input

| 参数         | 说明                                                                                                                                                                                | 类型                           | 默认值 |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ | ------ |
| addonAfter   | 带标签的 input，设置后置标签                                                                                                                                                        | ReactNode                      | -      |
| addonBefore  | 带标签的 input，设置前置标签                                                                                                                                                        | ReactNode                      | -      |
| allowClear   | 可以点击清除图标删除内容                                                                                                                                                            | boolean                        | -      |
| bordered     | 是否有边框                                                                                                                                                                          | boolean                        | true   |
| defaultValue | 输入框默认内容                                                                                                                                                                      | string                         | -      |
| disabled     | 是否禁用状态，默认为 false                                                                                                                                                          | boolean                        | false  |
| id           | 输入框的 id                                                                                                                                                                         | string                         | -      |
| maxLength    | 最大长度                                                                                                                                                                            | number                         | -      |
| prefix       | 带有前缀图标的 input                                                                                                                                                                | ReactNode                      | -      |
| size         | 控件大小。注：标准表单内的输入框大小限制为 `large`                                                                                                                                  | `large` \| `middle` \| `small` | -      |
| suffix       | 带有后缀图标的 input                                                                                                                                                                | ReactNode                      | -      |
| type         | 声明 input 类型，同原生 input 标签的 type 属性，见：[MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#属性)(请直接使用 `Input.TextArea` 代替 `type="textarea"`) | string                         | `text` |
| value        | 输入框内容                                                                                                                                                                          | string                         | -      |
| onChange     | 输入框内容变化时的回调                                                                                                                                                              | function(e)                    | -      |
| onPressEnter | 按下回车的回调                                                                                                                                                                      | function(e)                    | -      |

### Input.TextArea

| 参数         | 说明                                                                      | 类型                                                                        | 默认值 |
| ------------ | ------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ------ |
| allowClear   | 可以点击清除图标删除内容                                                  | boolean                                                                     | false  |
| autoSize     | 自适应内容高度，可设置为 true \| false 或对象：{ minRows: 2, maxRows: 6 } | boolean \| object                                                           | false  |
| bordered     | 是否有边框                                                                | boolean                                                                     | true   |
| defaultValue | 输入框默认内容                                                            | string                                                                      | -      |
| maxLength    | 内容最大长度                                                              | number                                                                      | -      |
| showCount    | 是否展示字数                                                              | boolean \| { formatter: ({ count: number, maxLength?: number }) => string } | false  |
| value        | 输入框内容                                                                | string                                                                      | -      |
| onPressEnter | 按下回车的回调                                                            | function(e)                                                                 | -      |
| onResize     | resize 回调                                                               | function({ width, height })                                                 | -      |

#### Input.Password

| 参数             | 说明             | 类型                   | 默认值                                                                    |
| ---------------- | ---------------- | ---------------------- | ------------------------------------------------------------------------- |
| iconRender       | 自定义切换按钮   | (visible) => ReactNode | (visible) => (visible ? &lt;EyeOutlined /> : &lt;EyeInvisibleOutlined />) |
| visibilityToggle | 是否显示切换按钮 | boolean                | true                                                                      |

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
