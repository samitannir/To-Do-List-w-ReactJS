import React from 'react'
import FormTextInput from './FormTextInput'

export default function FormEmailInput({ id, placeholder, value, setValue }) {
  return (
    <FormTextInput
      id={id}
      type='email'
      placeholder={placeholder}
      value={value}
      onChange={setValue}
    />
  )
}
