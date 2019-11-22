import './LoadingScreen.css'
import React from 'react'

export default function LoadingScreen({ label }) {
  return (
    <div className='LoadingScreen'>
      <div className='LoadingScreen-Label'>{label}</div>
      <div className='LoadingScreen-Spinner'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
