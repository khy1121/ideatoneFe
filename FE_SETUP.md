# FE 개발 환경 설정 (초기 안내)

## 사용 기술

- React (Vite)
- JavaScript
- SCSS
- React Router (`react-router-dom`)
- Axios (`axios`)

## 프로젝트 생성 (권장)

Vite + React 템플릿을 사용합니다. 로컬에서 새 프로젝트를 만들려면:

```bash
npm create vite@latest frontend -- --template react
cd frontend
```

또는 이미 리포지토리에 `frontend` 폴더가 있다면 해당 폴더로 이동합니다.

## 의존성 설치

프로젝트 루트에서 다음을 실행하세요:

```bash
npm install
npm install react-router-dom axios sass
```

## 실행

개발 서버 실행:

```bash
npm run dev
```

기본 로컬 주소: `http://localhost:5173`

## 환경 변수

- `REACT_APP_API_BASE_URL` — 개발/테스트용 백엔드 기본 URL (예: `http://localhost:8080/api`)

예: `.env` 파일

```
REACT_APP_API_BASE_URL=http://localhost:8080/api
```

## 목적

이 문서는 팀원이 새로 프로젝트에 참여했을 때 빠르게 개발 환경을 띄울 수 있도록 최소한의 설정과 실행 방법을 정리한 것입니다.
