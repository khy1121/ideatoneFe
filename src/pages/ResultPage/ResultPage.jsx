/*
 ResultPage (임시)
 - 분석 결과를 보여주는 페이지 템플릿입니다.
 - 실제는 `/result/:id` 형태로 상세 조회가 필요할 수 있습니다.
*/
import React from 'react'
import Layout from '../../components/layout/Layout/Layout'
import { mockAnalyzeResult } from '../../data/mockData'
import './ResultPage.scss'

export default function ResultPage() {
  // 임시: mock 데이터로 결과 표시
  const result = mockAnalyzeResult

  return (
    <Layout>
      <section className="result-page">
        <h2>{result.title}</h2>
        <p>{result.summary}</p>
        <h4>체크리스트</h4>
        <ul>
          {result.checklist.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
