import { useCallback, useState } from 'react'

/*
 * 비동기 요청 상태 관리 훅
 *
 * API 호출처럼 loading, error, data 상태가 반복되는 작업에 사용합니다.
 * 각 페이지에서 같은 useState 패턴을 계속 작성하지 않도록 공통화한 훅입니다.
 *
 * 사용 예시:
 * const { data, error, isLoading, execute, reset } = useAsync(analyzeText)
 * await execute(inputText)
 *
 * 반환값:
 * - data: 비동기 함수가 성공했을 때 받은 결과입니다.
 * - error: 실패했을 때 받은 에러 객체입니다.
 * - isLoading: 요청 진행 여부입니다.
 * - execute: 실제 비동기 함수를 실행하는 함수입니다.
 * - reset: data, error, isLoading을 초기 상태로 되돌리는 함수입니다.
 */
export function useAsync(asyncFunction) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const execute = useCallback(
    async (...args) => {
      setIsLoading(true)
      setError(null)

      try {
        const result = await asyncFunction(...args)
        setData(result)
        return result
      } catch (err) {
        setError(err)
        throw err
      } finally {
        setIsLoading(false)
      }
    },
    [asyncFunction]
  )

  const reset = useCallback(() => {
    setData(null)
    setError(null)
    setIsLoading(false)
  }, [])

  return { data, error, isLoading, execute, reset }
}
