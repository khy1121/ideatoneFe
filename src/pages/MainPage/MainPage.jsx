/*
 MainPage (임시)
 - 해커톤 초기 단계에서 보여줄 간단한 랜딩/설명 페이지입니다.
*/
import React from 'react'
import Layout from '../../components/layout/Layout/Layout'
import './MainPage.scss'

export default function MainPage() {
  return (
    <Layout>
      <section className="main-hero">
        <h1>AI로 (    )를 없앨 수 있다면?</h1>
        <p>해커톤: 아이디어를 빠르게 시제품으로 만들어보세요.</p>
      </section>
    </Layout>
  )
}
