/*
 Button component (common)
 - Simple presentational button used across the app.
 - `variant` controls visual style (e.g., 'primary', 'secondary').
 - Accepts any native button props via `...rest`.
*/
import React from 'react'
import './Button.scss'

export default function Button({
  children,
  type = 'button',
  variant = 'primary',
  disabled = false,
  ...rest
}) {
  return (
    <button className={`btn btn--${variant}`} type={type} disabled={disabled} {...rest}>
      {children}
    </button>
  )
}
