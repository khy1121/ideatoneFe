import React from 'react'
import { useNavigate } from 'react-router-dom'
import BottomNav from '../../components/common/BottomNav/BottomNav'
import { ROUTES } from '../../constants/routes'
import './CharacterPage.scss'

export default function CharacterPage() {
  const navigate = useNavigate()

  return (
    <div className="char-landing">

      {/* === 배경 글로우 / 장식 === */}
      <div className="char-landing__bg-glow-orange" aria-hidden="true" />

      {/* 동심원 링 (바깥 → 안쪽) */}
      <div className="char-landing__ring char-landing__ring--outer" aria-hidden="true" />
      <div className="char-landing__ring char-landing__ring--mid"   aria-hidden="true" />
      <div className="char-landing__ring char-landing__ring--inner" aria-hidden="true" />

      {/* 캐릭터 중심 오렌지 글로우 */}
      <div className="char-landing__glow-center" aria-hidden="true" />

      {/* 캐릭터 이미지 */}
      <img
        className="char-landing__char-img"
        src="/assets/character/nadok-front.svg"
        alt="가독이 캐릭터"
      />

      {/* 하단 오렌지 글로우 */}
      <div className="char-landing__glow-bottom" aria-hidden="true" />

      {/* 스파클 점들 */}
      <img
        className="char-landing__sparkles"
        src="/assets/char-sparkles.svg"
        aria-hidden="true"
        alt=""
      />

      {/* 장식 노란 원들 */}
      <div className="char-landing__dot char-landing__dot--lg-left"  aria-hidden="true" />
      <div className="char-landing__dot char-landing__dot--sm-left"  aria-hidden="true" />
      <div className="char-landing__dot char-landing__dot--xs-left"  aria-hidden="true" />
      <div className="char-landing__dot char-landing__dot--lg-right" aria-hidden="true" />
      <div className="char-landing__dot char-landing__dot--sm-right" aria-hidden="true" />
      <div className="char-landing__dot char-landing__dot--xs-right" aria-hidden="true" />
      <div className="char-landing__dot char-landing__dot--gold"     aria-hidden="true" />

      {/* === 텍스트 === */}
      <h1 className="char-landing__title">오늘 하루는 어땠어?</h1>
      <p className="char-landing__subtitle">
        네 감정을 알려주면<br />
        우리는 캐릭터를 찾아드릴게요
      </p>

      {/* === CTA 버튼 === */}
      <button
        className="char-landing__btn"
        type="button"
        onClick={() => navigate(ROUTES.ANALYZE)}
      >
        캐릭터 찾기
      </button>

      <BottomNav active="character" />
    </div>
  )
}
