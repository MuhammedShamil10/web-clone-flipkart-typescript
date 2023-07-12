import React from 'react'
import './Mansoon.css'

interface mansoonProps {
  mansoonValue: string[]
}

export default function Mansoon({mansoonValue}: mansoonProps) {
  return (
    <div className='mansoon-container'>
      {mansoonValue.map((item) => (
        <img src={item} alt="image" />
      ))}
    </div>
  )
}
