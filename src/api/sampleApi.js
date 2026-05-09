import axiosInstance from './axiosInstance'

/*
 * 샘플 API 함수 모음
 *
 * 실제 기획과 API 명세가 나오기 전까지 사용할 예시 API 파일입니다.
 * 이후 도메인이 정해지면 userApi.js, analyzeApi.js, resultApi.js처럼 파일을 나누고,
 * 각 함수는 axiosInstance를 사용해서 요청하도록 유지하면 됩니다.
 */

// AI 분석 요청 예시입니다. 입력 텍스트를 백엔드로 보내고 분석 결과를 받습니다.
export const analyzeText = async (text) => {
  const res = await axiosInstance.post('/analyze', { text })
  return res.data
}

// 분석 결과 조회 예시입니다. 결과 id를 기준으로 저장된 분석 결과를 조회합니다.
export const getResult = async (id) => {
  const res = await axiosInstance.get(`/result/${id}`)
  return res.data
}
