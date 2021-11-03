---
title: Radio
nav:
  title: React
  path: /react
group:
  title: Data Entry
  path: /entry
---

## Examples

### basic

<code src="./demo/basic" />

### disabled

<code src="./demo/disabled" />

### group

<code src="./demo/radio-group" />

### button

<code src="./demo/radio-button" />

## API

### Radio/Radio.Button

| Property       | Description                                                          | Type    | Default |
| -------------- | -------------------------------------------------------------------- | ------- | ------- |
| autoFocus      | Whether get focus when component mounted                             | boolean | false   |
| checked        | Specifies whether the radio is selected                              | boolean | false   |
| defaultChecked | Specifies the initial state: whether or not the radio is selected    | boolean | false   |
| disabled       | Disable radio                                                        | boolean | false   |
| value          | According to value for comparison, to determine whether the selected | any     | -       |

### RadioGroup

Radio group can wrap a group of `Radio`。

| Property     | Description                                                    | Type                                                                      | Default   | Version |
| ------------ | -------------------------------------------------------------- | ------------------------------------------------------------------------- | --------- | ------- |
| buttonStyle  | The style type of radio button                                 | `outline` \| `solid`                                                      | `outline` |         |
| defaultValue | Default selected value                                         | any                                                                       | -         |         |
| disabled     | Disable all radio buttons                                      | boolean                                                                   | false     |         |
| name         | The `name` property of all `input[type="radio"]` children      | string                                                                    | -         |         |
| options      | Set children optional                                          | string\[] \| Array&lt;{ label: string value: string disabled?: boolean }> | -         |         |
| optionType   | Set Radio optionType                                           | `default` \| `button`                                                     | `default` | 4.4.0   |
| size         | The size of radio button style                                 | `large` \| `middle` \| `small`                                            | -         |         |
| value        | Used for setting the currently selected value                  | any                                                                       | -         |         |
| onChange     | The callback function that is triggered when the state changes | function(e:Event)                                                         | -         |         |

## Methods

### Radio

| Name    | Description  |
| ------- | ------------ |
| blur()  | Remove focus |
| focus() | Get focus    |

<style>
[id^=components-radio-demo-] > .whale-radio-wrapper {
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>
