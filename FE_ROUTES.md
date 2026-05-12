# FE 라우팅 문서

이 문서는 현재 프로토타입의 라우트 초안을 정리한 문서입니다. 구현이 진행되면 와이어프레임과 기획 PPT 기준으로 계속 업데이트합니다.

라우팅 구현 위치: `src/routes/Router.jsx`

## 현재 라우트

| 경로 | 페이지 | 섹션 | 설명 |
|---|---|---|---|
| `/` | SplashPage | 공통 / 진입 | 시작 화면. 현재는 시작하기 버튼만 제공한다. |
| `/home` | LibraryPage | Section 2 | 서재 형태의 홈 화면. 저장된 책 목록을 보여준다. |
| `/login` | LoginPage | Section 1 | 이메일 로그인 프로토타입 화면. 더미값 기반으로 이동한다. |
| `/signup` | SignupPage | Section 1 | 이메일 회원가입 프로토타입 화면. |
| `/signup/nickname` | NicknamePage | Section 1 | 가입 후 닉네임 입력 화면. |
| `/book/:id` | BookDetailPage | Section 2 | 책 정보, 가독이챗, 메모 탭이 있는 상세 화면. |
| `/memo-edit` | MemoEditPage | Section 2 | 메모 작성/수정 화면. |
| `/analyze` | AnalyzePage | Section 3 | AI 캐릭터 생성 또는 입력 기반 분석 흐름 화면. |
| `/result` | ResultPage | Section 3 | 분석 결과 요약 화면. |
| `/mypage` | MyPage | Section 4 | 저장한 결과와 이력을 확인하는 마이페이지. |

## 구현 메모

- `MainPage` 는 임시 화면으로 따로 존재하지만, 현재 라우터 진입점은 `SplashPage` 이다.
- Section 2의 메인 화면은 책꽂이 형태의 `LibraryPage` 를 기준으로 한다.
- 하단 네비게이션은 추후 탭별 실제 페이지 분기와 함께 보완한다.

## 작업 기준

- 인증은 현재 더미값 기반 프로토타입으로 유지한다.
- 상세한 화면 구조는 `presentation.md` 와 와이어프레임을 우선 기준으로 삼는다.
- 새 화면이 추가되면 이 문서의 표에 바로 반영한다.
