# FE 상태 관리 가이드

이 문서는 상태 관리를 어떻게 할지에 대한 기본 원칙과 예시를 제공합니다.

## 기본 원칙

- 페이지 내부에서만 사용하는 상태: `useState` 사용
- 비동기 요청/로딩/에러 관리는 각 페이지 또는 커스텀 훅에서 관리
- 로그인 사용자 정보는 Context API 또는 `localStorage` + Context로 관리
- 전역 상태가 많아지면 `Zustand` 또는 `Redux Toolkit` 검토

## 예시

AnalyzePage 내 상태 (간단한 예)

```js
const [text, setText] = useState('')
const [loading, setLoading] = useState(false)
const [error, setError] = useState(null)
```

로그인 사용자 정보 (Context 사용 예)

```js
// AuthContext.js
const AuthContext = createContext(null)
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>
}
```

## 비동기/캐싱

- 간단한 데이터는 페이지 단위로 fetch 후 캐싱 없이 사용
- 재사용/캐싱 필요 시 `react-query` 혹은 `SWR` 도입 검토
