/*
 Footer 컴포넌트
 - 페이지 하단 정보를 표시합니다.
*/
import React from 'react'
import './Footer.scss'

export default function Footer() {
  return (
    <footer className="app-footer">
      <div className="app-footer__inner">© {new Date().getFullYear()} AI-Hack. All rights reserved.</div>
    </footer>
  )
}
