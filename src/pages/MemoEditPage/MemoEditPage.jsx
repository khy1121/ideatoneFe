import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { ROUTES } from '../../constants/routes'
import './MemoEditPage.scss'

export default function MemoEditPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const bookId = location.state?.bookId
  const [text, setText] = useState('')

  const handleSave = () => {
    if (!text.trim() || !bookId) {
      navigate(-1)
      return
    }

    const today = new Date().toLocaleDateString('ko-KR', {
      year: 'numeric', month: '2-digit', day: '2-digit',
    }).replace(/\. /g, '.').replace(/\.$/, '')

    const newMemo = { id: Date.now(), content: text.trim(), date: today }
    const saved = JSON.parse(localStorage.getItem(`memos_${bookId}`) || '[]')
    const updated = [...saved, newMemo]
    localStorage.setItem(`memos_${bookId}`, JSON.stringify(updated))

    navigate(`/book/${bookId}`, { state: { tab: 'memo' } })
  }

  return (
    <div className="memo-edit">
      <header className="memo-edit__header">
        <button className="memo-edit__back" onClick={() => navigate(-1)} aria-label="뒤로가기">
          <svg width="12" height="20" viewBox="0 0 20 33" fill="none">
            <path d="M20 29.1225L7.63833 16.5L20 3.8775L16.1943 0L0 16.5L16.1943 33L20 29.1225Z" fill="#999"/>
          </svg>
        </button>
        <span className="memo-edit__title">메모</span>
        <button className="memo-edit__save" onClick={handleSave} aria-label="저장">
          <svg width="34" height="32" viewBox="0 0 34 32" fill="none">
            <path d="M10.8182 25.3134L2.70455 15.2836L0 18.6269L10.8182 32L34 3.34328L31.2955 0L10.8182 25.3134Z" fill="#999"/>
          </svg>
        </button>
      </header>

      <div className="memo-edit__body">
        <textarea
          className="memo-edit__textarea"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="메모를 입력하세요..."
          autoFocus
        />
      </div>
    </div>
  )
}
