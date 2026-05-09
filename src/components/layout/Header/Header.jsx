/*
 Header 컴포넌트
 - 앱 최상단의 헤더입니다. 로고와 네비게이션을 간단히 렌더링합니다.
*/
import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

export default function Header() {
  return (
    <header className="app-header">
      <div className="app-header__inner">
        <Link to="/" className="app-header__logo">AI-Hack</Link>
        <nav className="app-header__nav">
          <Link to="/analyze">분석</Link>
          <Link to="/result">결과</Link>
          <Link to="/mypage">마이</Link>
        </nav>
      </div>
    </header>
  )
}
