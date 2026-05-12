import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../constants/routes'
import './CharacterErrorPage.scss'

export default function CharacterErrorPage() {
  const navigate = useNavigate()

  return (
    <div className="character-error">
      <button type="button" onClick={() => navigate(ROUTES.CHARACTER)}>
        뒤로
      </button>
      <div className="character-error__content">
        <h1>오류</h1>
        <p>네트워크 환경 문제로 다음 화면으로 이동할 수 없어요.</p>
      </div>
    </div>
  )
}
