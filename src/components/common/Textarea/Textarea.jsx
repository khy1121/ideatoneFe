/*
 Textarea 컴포넌트
 - props: value, onChange, placeholder, name, maxLength
 - 폼에서 다중행 입력을 받을 때 사용합니다.
*/
import React from 'react'
import './Textarea.scss'

export default function Textarea({ value, onChange, placeholder, name, maxLength }) {
  return (
    <textarea
      className="fe-textarea"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      maxLength={maxLength}
    />
  )
}
