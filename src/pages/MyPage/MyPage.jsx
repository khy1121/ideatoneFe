/*
 MyPage (임시)
 - 사용자가 저장한 결과 목록을 표시하는 페이지 템플릿입니다.
*/
import React from 'react'
import Layout from '../../components/layout/Layout/Layout'
import Card from '../../components/common/Card/Card'
import './MyPage.scss'

export default function MyPage() {
  // 임시: 빈 목록 표시
  const saved = []

  return (
    <Layout>
      <section className="my-page">
        <h2>저장한 분석 결과</h2>
        {saved.length === 0 ? (
          <Card title="저장된 결과가 없습니다">
            분석 결과를 저장하면 이곳에서 확인할 수 있습니다.
          </Card>
        ) : (
          saved.map((s) => <Card key={s.id} title={s.title}>{s.summary}</Card>)
        )}
      </section>
    </Layout>
  )
}
