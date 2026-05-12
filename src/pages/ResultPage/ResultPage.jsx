import React, { useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ROUTES } from '../../constants/routes'
import Loading from '../../components/common/Loading/Loading'
import './ResultPage.scss'

const PRINCE_IMG = 'https://www.figma.com/api/mcp/asset/30fb29b4-07ab-4fbd-97d1-f7a8ffac5f2e'
const SMALL_CHAR_IMG = 'https://www.figma.com/api/mcp/asset/f377f644-6363-410c-ab35-e0bf7b931f27'
const SHARE_ICON = 'https://www.figma.com/api/mcp/asset/48ba898f-19e1-46ca-907a-08bf1b5d4ed5'

const LOADING_QUOTES = [
  '중요한 것은 눈에 보이지 않아. 마음으로 보아야 해.',
  '오늘의 감정도 천천히 읽어보면 분명한 모양이 있어요.',
  '마음이 복잡한 날일수록 한 문장씩 정리해도 괜찮아요.',
]

const COIN_CHARACTERS = [
  { name: '나독이', type: '다정한 기록가', color: '#fbd76c' },
  { name: '부기', type: '차분한 관찰자', color: '#cce4ff' },
  { name: '펌피', type: '감정 분석가', color: '#ffd6dc' },
  { name: '루루', type: '응원 수집가', color: '#d8f2cf' },
]

const toResultChip = (emotion) => {
  const map = {
    공허한: '공허함',
    뿌듯한: '뿌듯함',
    피곤한: '무기력',
    슬픈: '우울',
  }

  return map[emotion] ?? emotion
}

export default function ResultPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const { prompt = '', emotions = [], loading: initialLoading = false } = location.state ?? {}
  const [loading, setLoading] = useState(initialLoading)
  const [quoteIndex, setQuoteIndex] = useState(0)
  const [showCoin, setShowCoin] = useState(false)

  useEffect(() => {
    if (!loading) return undefined
    const timer = window.setTimeout(() => setLoading(false), 2800)
    return () => window.clearTimeout(timer)
  }, [loading])

  useEffect(() => {
    if (!loading) return undefined
    const timer = window.setInterval(() => {
      setQuoteIndex(current => (current + 1) % LOADING_QUOTES.length)
    }, 1300)
    return () => window.clearInterval(timer)
  }, [loading])

  const chips = useMemo(() => {
    return emotions.length ? emotions.slice(0, 3).map(toResultChip) : ['공허함', '우울', '무기력']
  }, [emotions])

  const reason = prompt
    ? '뿌듯함과 지침이 동시에 느껴지는 오늘, 어린 왕자처럼 작은 것들의 소중함을 알면서도 그 무게에 지쳐있는 당신과 닮았어요.'
    : '뿌듯함과 지침이 동시에 느껴지는 오늘, 어린 왕자처럼 작은 것들의 소중함을 알면서도 그 무게에 지쳐있는 당신과 닮았어요.'

  if (loading) {
    return (
      <div className="result-loading">
        <div className="result-loading__copy">
          <h1>오늘의 당신을<br />정독하고 있어요.......</h1>
          <p>부기님의 상태를 체크 중이에요</p>
        </div>

        <div className="result-loading__spinner">
          <Loading size={159} />
        </div>

        <p className="result-loading__quote">{LOADING_QUOTES[quoteIndex]}</p>

        <p className="result-loading__notice">최대 2분까지 소요될 수 있어요</p>
      </div>
    )
  }

  if (showCoin) {
    return (
      <div className="coin-page">
        <button className="coin-page__back" type="button" onClick={() => setShowCoin(false)}>
          ← 뒤로
        </button>
        <h1>코인 구매</h1>
        <p className="coin-page__lead">캐릭터를 다시 생성하려면 코인이 필요해요.</p>
        <div className="coin-page__characters">
          {COIN_CHARACTERS.map(character => (
            <article key={character.name} className="coin-page__character">
              <span style={{ background: character.color }} />
              <div>
                <strong>{character.name}</strong>
                <p>{character.type}</p>
              </div>
            </article>
          ))}
        </div>
        <button className="coin-page__buy" type="button">
          코인 1개 구매하기
        </button>
      </div>
    )
  }

  return (
    <div className="result">
      <header className="result__header">
        <button type="button" onClick={() => navigate(ROUTES.CHARACTER)}>
          ← 뒤로
        </button>
        <strong>펌피의 감정분석 레포트</strong>
        <button className="result__share" type="button" aria-label="공유하기">
          <img src={SHARE_ICON} alt="" />
        </button>
      </header>

      <main className="result__content">
        <section className="result__intro">
          <h1>부기님은...</h1>
          <p>부기님의 상태를 정독한 결과에요.</p>
        </section>

        <section className="result__book-card">
          <p className="result__book-meta">어린왕자 ㅣ앙투안 드 생텍쥐페리</p>
          <h2>어른이 된 어린왕자</h2>
          <div className="result__book-portrait">
            <img src={PRINCE_IMG} alt="어른이 된 어린왕자" />
          </div>
          <p className="result__book-quote">
            “ 중요한 것은 눈에 보이지 않아.<br />
            마음으로 보아야 해.”
          </p>
        </section>

        <section className="result__mood">
          <h2>부기님의 기분 상태</h2>
          <p>어른이 된 어린왕자와 73% 일치해요.</p>
          <div className="result__chips">
            {chips.map(chip => (
              <span key={chip}># {chip}</span>
            ))}
          </div>
        </section>

        <section className="result__reason">
          <h2>오늘 부기님께 어울리는 이유</h2>
          <div className="result__reason-bubble">
            <p>{reason}</p>
            <div className="result__small-character">
              <img src={SMALL_CHAR_IMG} alt="" />
            </div>
          </div>
        </section>
      </main>

      <div className="result__divider" aria-hidden="true" />

      <button className="result__restart" type="button" onClick={() => setShowCoin(true)}>
        다시 생성하기
      </button>

    </div>
  )
}
