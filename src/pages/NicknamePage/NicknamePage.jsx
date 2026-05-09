import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../constants/routes'
import './NicknamePage.scss'

// 3~10자, 한글/영어 소문자/숫자, 특수문자 불가
const nicknameRegex = /^[가-힣a-z0-9]{3,10}$/

export default function NicknamePage() {
  const navigate = useNavigate()
  const [nickname, setNickname] = useState('')

  const touched = nickname.length > 0
  const isValid = nicknameRegex.test(nickname)

  return (
    <div className="auth-page">
      <header className="auth-header">
        <button className="auth-header__back" onClick={() => navigate(-1)} aria-label="뒤로가기">
          <svg width="12" height="20" viewBox="0 0 20 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 29.1225L7.63833 16.5L20 3.8775L16.1943 0L0 16.5L16.1943 33L20 29.1225Z" fill="#999999"/>
          </svg>
        </button>
      </header>

      <div className="auth-body nickname-body">
        <label className="nickname-label">닉네임</label>
        <input
          className="auth-field__input"
          type="text"
          placeholder="닉네임"
          value={nickname}
          onChange={e => setNickname(e.target.value)}
          maxLength={10}
        />
        <p className="auth-field__msg">
          {touched && isValid
            ? '사용할 수 있는 닉네임입니다.'
            : '3~10 사이의 한글, 영어, 소문자, 숫자로만 입력해주세요. 특수문자 불가능.'}
        </p>

        <div className="nickname-spacer" />

        <button
          className={`auth-btn auth-btn--pill${isValid ? ' auth-btn--active' : ''}`}
          disabled={!isValid}
          onClick={() => navigate(ROUTES.HOME)}
        >
          가입하기
        </button>
      </div>
    </div>
  )
}
