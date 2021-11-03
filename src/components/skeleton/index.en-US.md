---
title: skeleton
nav:
  title: React
  path: /react
group:
  title: Feedback
  path: /feedback
---

## Examples

### basic

<code src="./demo/basic" />

### active

<code src="./demo/active" />

### complex

<code src="./demo/complex" />

### children

<code src="./demo/children" />

### button

<code src="./demo/button" />

### input

<code src="./demo/input" />

### avatar

<code src="./demo/avatar" />

### image

<code src="./demo/image" />

## API

### Skeleton

| Property  | Description                               | Type                                                         | Default |
| --------- | ----------------------------------------- | ------------------------------------------------------------ | ------- |
| active    | Show animation effect                     | boolean                                                      | false   |
| avatar    | Show avatar placeholder                   | boolean \| [SkeletonAvatarProps](#SkeletonAvatarProps)       | false   |
| loading   | Display the skeleton when true            | boolean                                                      | -       |
| paragraph | Show paragraph placeholder                | boolean \| [SkeletonParagraphProps](#SkeletonParagraphProps) | true    |
| round     | Show paragraph and title radius when true | boolean                                                      | false   |
| title     | Show title placeholder                    | boolean \| [SkeletonTitleProps](#SkeletonTitleProps)         | true    |

### SkeletonAvatarProps

| Property | Description                                                      | Type                                      | Default |
| -------- | ---------------------------------------------------------------- | ----------------------------------------- | ------- |
| active   | Show animation effect, only valid when used avatar independently | boolean                                   | false   |
| shape    | Set the shape of avatar                                          | `circle` \| `square`                      | -       |
| size     | Set the size of avatar                                           | number \| `large` \| `small` \| `default` | -       |

### SkeletonTitleProps

| Property | Description            | Type             | Default |
| -------- | ---------------------- | ---------------- | ------- |
| width    | Set the width of title | number \| string | -       |

### SkeletonParagraphProps

| Property | Description                                                                                                                 | Type                                           | Default |
| -------- | --------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- | ------- |
| rows     | Set the row count of paragraph                                                                                              | number                                         | -       |
| width    | Set the width of paragraph. When width is an Array, it can set the width of each row. Otherwise only set the last row width | number \| string \| Array&lt;number \| string> | -       |

### SkeletonButtonProps

| Property | Description                                    | Type                             | Default |
| -------- | ---------------------------------------------- | -------------------------------- | ------- |
| active   | Show animation effect                          | boolean                          | false   |
| block    | Option to fit button width to its parent width | boolean                          | false   |
| shape    | Set the shape of button                        | `circle` \| `round` \| `default` | -       |
| size     | Set the size of button                         | `large` \| `small` \| `default`  | -       |

### SkeletonInputProps

| Property | Description           | Type                            | Default |
| -------- | --------------------- | ------------------------------- | ------- |
| active   | Show animation effect | boolean                         | false   |
| size     | Set the size of input | `large` \| `small` \| `default` | -       |
