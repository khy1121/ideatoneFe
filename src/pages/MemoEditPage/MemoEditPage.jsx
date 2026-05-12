import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { ROUTES } from '../../constants/routes'
import MemoToolbar from '../../components/common/MemoToolbar/MemoToolbar'
import { ChevronLeftIcon, CheckIcon } from '../../assets/icons'
import './MemoEditPage.scss'

export default function MemoEditPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const bookId = location.state?.bookId
  const [text, setText] = useState('')
  const [activeTool, setActiveTool] = useState('write')
  const [bookmarked, setBookmarked] = useState(false)

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
    localStorage.setItem(`memos_${bookId}`, JSON.stringify([...saved, newMemo]))

    navigate(`/book/${bookId}`, { state: { tab: 'memo' } })
  }

  return (
    <div className="memo-edit">
      <header className="memo-edit__header">
        <button className="memo-edit__back" onClick={() => navigate(-1)} aria-label="뒤로가기">
          <ChevronLeftIcon size={24} color="#999" />
        </button>
        <span className="memo-edit__title">메모</span>
        <button className="memo-edit__save" onClick={handleSave} aria-label="저장">
          <CheckIcon size={24} color="#999" />
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

      <MemoToolbar
        activeTool={activeTool}
        onToolChange={setActiveTool}
        bookmarked={bookmarked}
        onBookmark={() => setBookmarked(b => !b)}
      />
    </div>
  )
}
