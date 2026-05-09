/*
 Card 컴포넌트
 - props: title, children
 - 간단한 카드 레이아웃으로 페이지 내 블록을 감쌉니다.
*/
import React from 'react'
import './Card.scss'

export default function Card({ title, children }) {
  return (
    <div className="fe-card">
      {title && <div className="fe-card__title">{title}</div>}
      <div className="fe-card__body">{children}</div>
    </div>
  )
}
