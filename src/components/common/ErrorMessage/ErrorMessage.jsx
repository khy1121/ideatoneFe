import React from 'react'
import './ErrorMessage.scss'

/*
 * ErrorMessage 컴포넌트
 *
 * API 요청 실패, 입력 검증 실패, 예외 상황 등에서 공통으로 사용할 에러 안내 UI입니다.
 * 페이지마다 다른 스타일의 에러 박스가 생기지 않도록 하나의 형태로 맞춰둡니다.
 *
 * props:
 * - title: 에러 상황을 짧게 설명하는 제목입니다.
 * - message: 사용자에게 보여줄 상세 안내 문구입니다.
 */
export default function ErrorMessage({
  title = '문제가 발생했습니다.',
  message = '잠시 후 다시 시도해주세요.',
}) {
  return (
    <div className="error-message" role="alert">
      <strong className="error-message__title">{title}</strong>
      <p className="error-message__text">{message}</p>
    </div>
  )
}
