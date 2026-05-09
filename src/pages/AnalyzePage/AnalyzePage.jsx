/*
 AnalyzePage (임시)
 - 텍스트 입력 및 분석 요청 UI의 최소 템플릿입니다.
*/
import React, { useState } from 'react'
import Layout from '../../components/layout/Layout/Layout'
import Textarea from '../../components/common/Textarea/Textarea'
import Button from '../../components/common/Button/Button'
import Loading from '../../components/common/Loading/Loading'
import { mockAnalyzeResult } from '../../data/mockData'
import './AnalyzePage.scss'

export default function AnalyzePage() {
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)

  const handleAnalyze = async () => {
    setLoading(true)
    // 실제 API 호출 대신 mock 사용 (백엔드 준비 전)
    setTimeout(() => {
      setResult(mockAnalyzeResult)
      setLoading(false)
    }, 900)
  }

  return (
    <Layout>
      <section className="analyze-page">
        <h2>분석할 텍스트 입력</h2>
        <Textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="공고문 내용을 붙여넣으세요." />
        <div className="analyze-page__actions">
          <Button variant="primary" onClick={handleAnalyze}>분석하기</Button>
        </div>

        {loading && <Loading />}

        {result && (
          <div className="analyze-page__result">
            <h3>미리보기 결과</h3>
            <pre>{JSON.stringify(result, null, 2)}</pre>
          </div>
        )}
      </section>
    </Layout>
  )
}
