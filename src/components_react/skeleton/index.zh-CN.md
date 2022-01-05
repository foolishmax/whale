---
title: skeleton 骨架屏
nav:
  title: Components
  path: /react
group:
  title: 反馈
  path: /feedback
  order: 6
---

## Examples

### 基本

<code src="./demo/basic" />

### 显示动画

<code src="./demo/active" />

### 复杂组合

<code src="./demo/complex" />

### 带有子组件

<code src="./demo/children" />

### 按钮

<code src="./demo/button" />

### 输入框

<code src="./demo/input" />

### 头像

<code src="./demo/avatar" />

### 图片

<code src="./demo/image" />

## API

### Skeleton

| 属性      | 说明                                   | 类型                                                         | 默认值                                    |
| --------- | -------------------------------------- | ------------------------------------------------------------ | ----------------------------------------- | ---- |
| active    | 是否展示动画效果                       | boolean                                                      | false                                     |
| avatar    | 是否显示头像展位图                     | boolean \| [SkeletonAvatarProps](#SkeletonAvatarProps)       | false                                     |
| loading   | 为 true 时，显示占位符，反之展示子组件 | boolean                                                      | -                                         |
| paragraph | 是否显示段落占位符                     | boolean \| [SkeletonParagraphProps](#SkeletonParagraphProps) | true                                      |
| round     | 为 true 时，段落和标题显示圆角         | boolean                                                      | false                                     |
| title     | 是否显示标题占位图                     | boolean                                                      | [SkeletonTitleProps](#SkeletonTitleProps) | true |

### SkeletonAvatarProps

| 属性   | 说明                                         | 类型                                      | 默认值 |
| ------ | -------------------------------------------- | ----------------------------------------- | ------ |
| active | 是否展示动画效果，仅在单独使用头像骨架时生效 | boolean                                   | false  |
| shape  | 指定头像的形状                               | `circle` \| `square`                      | -      |
| size   | 设置头像占位图的大小                         | number \| `large` \| `small` \| `default` | -      |

### SkeletonTitleProps

| 属性  | 说明                 | 类型             | 默认值 |
| ----- | -------------------- | ---------------- | ------ |
| width | 设置标题占位图的宽度 | number \| string | -      |

### SkeletonParagraphProps

| 属性  | 说明                                                                 | 类型                                           | 默认值 |
| ----- | -------------------------------------------------------------------- | ---------------------------------------------- | ------ |
| rows  | 设置段落占位图的行数                                                 | number                                         | -      |
| width | 设置段位占位图的宽度，若为数组则对应每行宽度，反之则是最后一行的宽度 | number \| string \| Array&lt;number \| string> | -      |

### SkeletonButtonProps

| 属性   | 说明                           | 类型                             | 默认值 |
| ------ | ------------------------------ | -------------------------------- | ------ |
| active | 是否展示动画效果               | boolean                          | false  |
| block  | 将按钮宽度调整为其父宽度的选项 | boolean                          | false  |
| shape  | 指定按钮的形状                 | `circle` \| `round` \| `default` | -      |
| size   | 设置按钮的大小                 | `large` \| `small` \| `default`  | -      |

### SkeletonInputProps

| 属性   | 说明             | 类型                            | 默认值 |
| ------ | ---------------- | ------------------------------- | ------ |
| active | 是否展示动画效果 | boolean                         | false  |
| size   | 设置输入框的大小 | `large` \| `small` \| `default` | -      |
