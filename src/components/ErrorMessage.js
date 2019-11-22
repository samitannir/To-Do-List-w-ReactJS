import './ErrorMessage.css'
import React from 'react'

export default function ErrorMessage({ label }) {
  return (
    <div className='ErrorMessage'>
      <div className='ErrorMessage-Text'>{label}</div>
    </div>
  )
}
