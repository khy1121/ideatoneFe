/*
 Layout 컴포넌트
 - 페이지 공통 레이아웃을 담당합니다 (Header, Footer 포함)
 - children에 페이지 본문이 들어갑니다.
*/
import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './Layout.scss'

export default function Layout({ children }) {
  return (
    <div className="app">
      <Header />
      <main className="app-main">{children}</main>
      <Footer />
    </div>
  )
}
