# Git 브랜치 / 커밋 규칙

해커톤 기간에는 빠르고 안전한 협업이 중요합니다. 아래 규칙을 기본으로 삼으세요.

## 브랜치 전략

- `main` — 배포(또는 제출) 가능한 상태
- `feat/기능명` — 신규 기능
- `fix/버그수정` — 버그 수정
- `style/스타일` — 스타일 관련 변경
- `docs/문서` — 문서 변경

예시

```
feat/main-page
feat/analyze-page
fix/api-error-handling
```

## 커밋 메시지 컨벤션

- `feat: 메인 페이지 UI 구현`
- `fix: 분석 결과 null 예외 처리`
- `style: 버튼 공통 스타일 수정`
- `docs: FE 실행 방법 문서 추가`

## PR/리뷰

- 작업은 `main` 브랜치에서 최신 코드를 pull 한 뒤 새로운 `feat/...` 브랜치를 만듭니다.
- 작업 완료 후 PR 생성, 적어도 1명 이상 리뷰를 받습니다.
- 충돌(merge conflict) 발생 시 PR에 코멘트 남기고 함께 해결합니다.
