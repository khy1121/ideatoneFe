/*
 Input component (common)
 - Lightweight wrapper around native `input` with a shared class name.
 - Use this for consistent spacing and border styles across forms.
*/
import React from 'react'
import './Input.scss'

export default function Input(props) {
  return <input className="fe-input" {...props} />
}
