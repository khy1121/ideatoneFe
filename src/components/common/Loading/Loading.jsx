import React from 'react'
import './Loading.scss'

export default function Loading({ size = 64, bg = '#ffffff', message }) {
  return (
    <div className="fe-loading" role="status" aria-label={message || '로딩 중'}>
      <div className="fe-loading__spinner" style={{ width: size, height: size }}>
        <div className="fe-loading__inner" style={{ background: bg }} />
        <div className="fe-loading__dot" />
      </div>
      {message && <p className="fe-loading__text">{message}</p>}
    </div>
  )
}
           