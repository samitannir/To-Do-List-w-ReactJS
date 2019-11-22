import './FormSubmit.css'
import React from 'react'

export default function FormSubmit({
  onClick,
  isComplete,
  isLoading,
  isDisabled,
  loadingText,
  submitText,
  completeText,
}) {
  let buttonClassName = 'FormSubmit-Button'
  if (isComplete) {
    buttonClassName += ' FormSubmit-Button__Success'
  } else if (isLoading) {
    buttonClassName += ' FormSubmit-Button__Loading'
  } else if (isDisabled) {
    buttonClassName += ' FormSubmit-Button__Disabled'
  }

  return (
    <div className='FormSubmit'>
      <button
        className={buttonClassName}
        onClick={onClick}
        disabled={isDisabled || isLoading || isComplete}
      >
        {isComplete ? completeText : isLoading ? loadingText : submitText}
      </button>
    </div>
  )
}
