import React from 'react'
import TextArea from './TextArea'

export default function FormTextArea({
  id,
  placeholder,
  value,
  setValue,
  rows,
}) {
  const onChange = event => setValue(event.target.value)

  return (
    <TextArea
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={rows}
    />
  )
}
