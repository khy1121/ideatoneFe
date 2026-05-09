# FE 폴더 구조

프로젝트의 기본 폴더 구조(권장)는 다음과 같습니다.

```
src/
 ├─ api/          // axios 인스턴스와 API 호출 함수
 ├─ assets/       // 이미지, 아이콘, 폰트 등의 정적 자산
 │   ├─ images/
 │   └─ icons/
 ├─ components/   // 재사용 가능한 UI 컴포넌트
 │   ├─ common/   // Button, Input, Modal 등 공통 컴포넌트
 │   └─ layout/   // Header, Footer, Layout
 ├─ pages/        // 라우팅 단위 페이지 컴포넌트
 ├─ routes/       // Router 설정
 ├─ styles/       // 전역 SCSS, 변수, 믹스인, 리셋
 ├─ utils/        // 유틸 함수
 ├─ data/         // 모의 데이터 (mock)
 ├─ App.jsx
 └─ main.jsx
```

폴더별 역할

- `api`: 백엔드와 통신하는 함수들(`axiosInstance`, endpoint wrappers)
- `components`: 재사용 가능한 UI 단위. 두 명의 FE가 작업할 때 충돌 최소화를 위해 컴포넌트 단위로 분리
- `pages`: 라우팅에 바인딩되는 화면 단위 컴포넌트
- `styles`: 디자인 토큰(`_variables.scss`), mixin, reset, `global.scss`
- `utils`: 날짜 포맷, 문자열 헬퍼 등 작은 유틸 함수

개발 팁

- 컴포넌트는 폴더 단위로 관리하고 `index.js`로 export할 수 있습니다.
- 공통 스타일과 변수는 `styles/_variables.scss`에 두고 모든 컴포넌트에서 import하지 말고 `global.scss`에서 한 번 import하세요.
