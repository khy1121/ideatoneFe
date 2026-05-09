import React from 'react'
import './Toast.scss'

/*
 * Toast 컴포넌트
 *
 * 저장 완료, 분석 요청 성공, 에러 발생 같은 짧은 피드백을 화면 하단에 보여주는
 * 공통 알림 컴포넌트입니다. 전역 Toast 시스템을 붙이기 전에도 페이지 단위로 바로 사용할 수
 * 있도록 단순한 presentational component로 만들었습니다.
 *
 * props:
 * - message: 알림에 표시할 문구입니다. 값이 없으면 렌더링하지 않습니다.
 * - type: 알림 종류입니다. info, success, error, warning 값을 사용할 수 있습니다.
 * - onClose: 닫기 버튼 클릭 시 실행할 함수입니다. 없으면 닫기 버튼을 표시하지 않습니다.
 */
export default function Toast({
  message,
  type = 'info',
  onClose,
}) {
  if (!message) return null

  return (
    <div className={`toast toast--${type}`} role="status">
      <span className="toast__message">{message}</span>
      {onClose && (
        <button className="toast__close" type="button" onClick={onClose} aria-label="알림 닫기">
          x
        </button>
      )}
    </div>
  )
}
