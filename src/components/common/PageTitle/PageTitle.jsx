import React from 'react'
import './PageTitle.scss'

/*
 * PageTitle 컴포넌트
 *
 * 각 페이지 상단에서 제목, 설명, 우측 액션 영역을 일관되게 보여주기 위한 컴포넌트입니다.
 * 분석 페이지, 결과 페이지, 마이페이지처럼 화면 목적이 다른 페이지에서도 같은 레이아웃을
 * 유지할 수 있습니다.
 *
 * props:
 * - title: 페이지의 대표 제목입니다.
 * - description: 페이지 설명 또는 보조 안내 문구입니다.
 * - rightArea: 우측에 배치할 버튼, 필터, 링크 등의 React 요소입니다.
 */
export default function PageTitle({ title, description, rightArea }) {
  return (
    <div className="page-title">
      <div>
        <h1 className="page-title__heading">{title}</h1>
        {description && <p className="page-title__description">{description}</p>}
      </div>
      {rightArea && <div className="page-title__right">{rightArea}</div>}
    </div>
  )
}
