import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../constants/routes'
import './SplashPage.scss'

export default function SplashPage() {
  const navigate = useNavigate()

  return (
    <div className="splash">
      <div className="splash__logo">나독</div>
      <button className="splash__btn" onClick={() => navigate(ROUTES.SIGNUP)}>
        시작하기
      </button>
    </div>
  )
}
