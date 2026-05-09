import axios from 'axios'
import { normalizeApiError } from '../utils/normalizeApiError'

/*
 * axios 공통 인스턴스
 *
 * Spring Boot 백엔드와 통신할 때 사용할 기본 API 클라이언트입니다.
 * baseURL, timeout, 공통 header, 인증 토큰, 에러 처리처럼 모든 API 요청에 공통으로
 * 적용해야 하는 설정을 이 파일에서 관리합니다.
 *
 * 환경 변수:
 * - VITE_API_BASE_URL이 있으면 해당 값을 사용합니다.
 * - 값이 없으면 로컬 백엔드 기본 주소인 http://localhost:8080/api를 사용합니다.
 */
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

/*
 * 요청 인터셉터
 *
 * 로그인 기능이 붙은 뒤 localStorage에 accessToken을 저장하면,
 * 모든 API 요청에 Authorization 헤더를 자동으로 추가합니다.
 * 아직 인증이 없는 기획이라도 이 코드는 토큰이 없으면 아무 일도 하지 않습니다.
 */
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken')

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

/*
 * 응답 인터셉터
 *
 * 성공 응답은 그대로 반환하고, 실패 응답은 normalizeApiError로 형태를 맞춘 뒤 reject합니다.
 * 이렇게 하면 페이지에서는 error.message, error.status처럼 일관된 방식으로 처리할 수 있습니다.
 */
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(normalizeApiError(error))
)

export default axiosInstance
