import React from 'react'
import './Loading.scss'

export default function Loading({ size = 64, bg = '#ffffff', message }) {
  return (
    <div className="fe-loading" role="status" aria-label={message || '로딩 중'}>
      <div
        className="fe-loading__spinner"
        style={{ width: size, height: size, '--fe-loading-bg': bg }}
        aria-hidden="true"
      />
      {message && <p className="fe-loading__text">{message}</p>}
    </div>
  )
}
           
