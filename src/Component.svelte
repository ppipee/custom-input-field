<script>
  import { CoreTextField } from '@budibase/bbui'

  import Field from './components/Field.svelte'
  import mapValueType from './utils/mapValueType'

  export let label
  export let field
  export let placeholder
  export let defaultValue
  export let disabled = false
  export let onChange
  export let type = 'text'
  export let align
  export let validation

  let fieldState
  let fieldApi

  const handleChange = e => {
    let value = mapValueType(e.detail)

    const dataChanged = fieldApi.setValue(value)

    if (onChange && dataChanged) {
      onChange({ value })
    }
  }
</script>

<Field
  {label}
  {field}
  {disabled}
  defaultValue={defaultValue ? mapValueType(defaultValue, type) : defaultValue}
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
