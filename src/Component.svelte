<script>
  import Field from './components/Field.svelte'
  import { CoreTextField } from '@budibase/bbui'

  export let label
  export let field
  export let placeholder
  export let defaultValue
  export let disabled = false
  export let onChange
  export let type = 'text'
  export let align

  export let stringValidation
  export let numberValidation
  export let booleanValidation
  export let arrayValidation
  export let datetimeValidation
  export let linkValidation

  let fieldState
  let fieldApi

  const handleChange = e => {
    const dataChanged = fieldApi.setValue(e.detail)

    if (onChange && dataChanged) {
      onChange({ value: e.detail })
    }
  }

  const validationMapper = {
    text: stringValidation,
    number: numberValidation,
    boolean: booleanValidation,
    array: arrayValidation,
    json: [
      {
        constraint: 'json',
        type: 'json',
        error: 'JSON syntax is invalid',
      },
    ],
    datetime: datetimeValidation,
    link: linkValidation,
    longform: stringValidation,
  }

  const validation = validationMapper[type]
</script>

<Field
  {label}
  {field}
  {disabled}
  {defaultValue}
  {type}
  {validation}
  bind:fieldState
  bind:fieldApi
>
  {#if fieldState}
    <CoreTextField
      updateOnChange={false}
      value={fieldState.value}
      on:change={handleChange}
      disabled={fieldState.disabled}
      error={fieldState.error}
      id={fieldState.fieldId}
      {placeholder}
      {type}
      {align}
    />
  {/if}
</Field>
