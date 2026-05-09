/*
 Modal 컴포넌트
 - props: isOpen, onClose, title, children
 - 간단한 모달 레이아웃으로 focus/aria 처리는 최소화한 상태입니다.
*/
import React from 'react'
import './Modal.scss'

export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null
  return (
    <div className="fe-modal__backdrop" onClick={onClose}>
      <div className="fe-modal" onClick={(e) => e.stopPropagation()}>
        <div className="fe-modal__header">
          <div className="fe-modal__title">{title}</div>
          <button className="fe-modal__close" onClick={onClose}>×</button>
        </div>
        <div className="fe-modal__body">{children}</div>
      </div>
    </div>
  )
}
