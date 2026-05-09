# FE 라우팅 문서

기본 라우팅은 `react-router-dom`을 사용합니다. 현재 정의된 경로는 다음과 같습니다.

| 경로 | 페이지 | 설명 |
|---|---|---|
| `/` | MainPage | 메인 랜딩 페이지 |
| `/analyze` | AnalyzePage | 텍스트 입력 및 분석 요청 화면 |
| `/result` | ResultPage | 분석 결과 요약 화면 (상세는 `/result/:id`로 확장 가능) |
| `/mypage` | MyPage | 사용자가 저장한 결과 목록 |

라우팅 구현 위치: `src/routes/Router.jsx`

추가 권장사항

- 인증이 필요한 라우트는 별도 `PrivateRoute` 컴포넌트를 만들어 처리하세요.
- 라우트별로 페이지 단위의 데이터를 미리 fetch하는 패턴을 정하면 코드가 깔끔해집니다.
