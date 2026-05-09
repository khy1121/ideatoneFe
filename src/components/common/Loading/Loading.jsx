import React from 'react'
import './Loading.scss'

export default function Loading({ message = 'AI가 내용을 분석하고 있어요.' }) {
  return (
    <div className="fe-loading" role="status">
      <div className="fe-loading__spinner" />
      <div className="fe-loading__text">{message}</div>
    </div>
  )
}
