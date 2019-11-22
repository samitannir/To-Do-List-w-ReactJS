import React from 'react'

export default function useTextInputState() {
  const [value, setValue] = React.useState('')
  const onChange = event => setValue(event.target.value)
  return {
    value,
    onChange,
  }
}
