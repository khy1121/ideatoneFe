/*
 * API 에러 정규화 유틸
 *
 * axios에서 발생한 에러는 네트워크 오류, 서버 응답 오류, 요청 설정 오류에 따라
 * 객체 구조가 조금씩 다릅니다. 화면 컴포넌트에서 매번 error.response?.data?.message처럼
 * 깊은 접근을 하지 않도록, 프론트에서 공통으로 사용할 수 있는 에러 형태로 변환합니다.
 *
 * 반환 형태:
 * - status: HTTP 상태 코드입니다. 네트워크 오류처럼 응답이 없으면 0을 사용합니다.
 * - message: 사용자에게 보여주거나 로그에 남길 수 있는 대표 에러 메시지입니다.
 * - data: 백엔드가 내려준 원본 응답 body입니다.
 * - originalError: 디버깅이 필요할 때 확인할 수 있는 axios 원본 에러입니다.
 */
export function normalizeApiError(error) {
  const response = error?.response
  const data = response?.data

  return {
    status: response?.status || 0,
    message:
      data?.message ||
      data?.error ||
      error?.message ||
      '요청을 처리하는 중 문제가 발생했습니다.',
    data,
    originalError: error,
  }
}
