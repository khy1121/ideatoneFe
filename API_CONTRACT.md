# API 연동 문서 (초안)

이 문서는 프론트엔드와 백엔드가 협업할 때 사용하는 기본 API 규격 템플릿입니다. 프로젝트 초기에는 개발 편의상 mock 데이터를 사용하다가 백엔드가 준비되면 이 문서의 스펙에 맞춰 구현하세요.

---

## 공통 응답 형식 (권장)

성공 응답 예시

```json
{
  "status": 200,
  "data": { /* 페이로드 */ },
  "message": "success"
}
```

에러 응답 예시

```json
{
  "status": 400,
  "error": "Bad Request",
  "message": "입력값이 비어 있습니다."
}
```

---

## 1) 공고문 분석 요청

### Request

- Method: `POST`
- URL: `/api/analyze`
- Content-Type: `application/json`

Body 예시

```json
{
  "text": "공고문 전체 텍스트"
}
```

### Response

```json
{
  "status": 200,
  "data": {
    "id": "result-id",
    "title": "청년 월세 지원사업",
    "summary": "요약문...",
    "target": "대상",
    "period": "기간",
    "documents": ["신분증", "임대차계약서"],
    "checklist": ["조건1", "조건2"]
  }
}
```

---

## 2) 결과 조회

- Method: `GET`
- URL: `/api/result/{id}`

Response: 위 `data` 형식과 동일

---

## 계약(Contract) 주의사항

- FE와 BE는 필드 이름과 중첩 구조에 대해 엄격하게 합의하세요. (예: `response.data.summary` vs `response.data.result.summaryText`)
- 에러 형식은 통일하여 FE에서 일괄 처리할 수 있도록 합니다.
- 인증이 필요한 API는 401/403 처리 규칙을 명확히 합니다.
