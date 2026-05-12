import React from 'react'
import './Chip.scss'

export default function Chip({ active = false, onClick, children }) {
  return (
    <button
      type="button"
      className={`chip${active ? ' chip--active' : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
