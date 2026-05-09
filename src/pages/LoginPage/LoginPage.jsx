import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../constants/routes'
import './LoginPage.scss'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function LoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const emailTouched = email.length > 0
  const emailValid = emailRegex.test(email)
  const emailError = emailTouched && !emailValid
  const emailSuccess = emailTouched && emailValid

  const passwordTouched = password.length > 0
  const passwordValid = password.length >= 6 && password.length <= 8

  const canSubmit = emailValid && passwordValid

  const handleLogin = () => {
    if (!canSubmit) return
    navigate(ROUTES.HOME)
  }

  return (
    <div className="auth-page">
      <header className="auth-header">
        <button className="auth-header__back" onClick={() => navigate(-1)} aria-label="뒤로가기">
          <svg width="12" height="20" viewBox="0 0 20 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 29.1225L7.63833 16.5L20 3.8775L16.1943 0L0 16.5L16.1943 33L20 29.1225Z" fill="#999999"/>
          </svg>
        </button>
        <span className="auth-header__title">시작하기</span>
      </header>

      <div className="auth-body">
        <div className="auth-field">
          <input
            className="auth-field__input"
            type="email"
            placeholder="이메일"
            value={email}
            onChange={e => setEmail(e.target.value)}
            autoComplete="email"
          />
          {emailError && (
            <p className="auth-field__msg">이메일 형식이 올바르지 않습니다.</p>
          )}
          {emailSuccess && (
            <p className="auth-field__msg">사용할 수 있는 이메일입니다.</p>
          )}
        </div>

        <div className="auth-field">
          <input
            className="auth-field__input"
            type="password"
            placeholder="비밀번호(6~8자)"
            value={password}
            onChange={e => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          {passwordTouched && (
            <p className="auth-field__msg">6자~8자 내외로 설정해주세요.</p>
          )}
        </div>

        <button
          className={`auth-btn auth-btn--pill${canSubmit ? ' auth-btn--active' : ''}`}
          disabled={!canSubmit}
          onClick={handleLogin}
        >
          이메일로 로그인하기
        </button>

        <div className="auth-divider" />

        <button
          className="auth-btn auth-btn--pill"
          onClick={() => navigate(ROUTES.SIGNUP)}
        >
          이메일로 회원가입
        </button>
      </div>
    </div>
  )
}
