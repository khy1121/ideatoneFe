import React from 'react'
import './EmptyState.scss'

/*
 * EmptyState 컴포넌트
 *
 * 검색 결과가 없거나, 아직 생성된 데이터가 없거나, 사용자가 처음 진입한 화면에서
 * 보여줄 수 있는 공통 빈 상태 UI입니다. 기획이 확정되지 않아도 대부분의 서비스에서
 * 반복적으로 필요하므로 공통 컴포넌트로 분리했습니다.
 *
 * props:
 * - title: 빈 상태의 핵심 문구입니다.
 * - description: 추가 안내 문구입니다.
 * - action: 버튼이나 링크처럼 사용자가 다음 행동을 할 수 있는 React 요소입니다.
 */
export default function EmptyState({
  title = '표시할 내용이 없습니다.',
  description,
  action,
}) {
  return (
    <div className="empty-state">
      <p className="empty-state__title">{title}</p>
      {description && <p className="empty-state__description">{description}</p>}
      {action && <div className="empty-state__action">{action}</div>}
    </div>
  )
}
