import './FormLabel.css'
import React from 'react'

export default function FormLabel({ htmlFor, text, isOptional }) {
  return (
    <label className='FormLabel' htmlFor={htmlFor}>
      <span className='FormLabel-Text'>{text}</span>
      {isOptional && <span className='FormLabel-SubText'>Optional</span>}
    </label>
  )
}
