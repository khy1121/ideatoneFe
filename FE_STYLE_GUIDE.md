# FE 스타일 가이드 (초안)

디자이너와 FE가 공통으로 사용하는 기본 규칙 및 토큰을 정리합니다.

## 색상 (예시)

```scss
$color-primary: #4f7cff;
$color-background: #f7f8fa;
$color-text: #222;
$color-sub-text: #777;
$color-border: #e5e5e5;
```

## 타이포그래피

- 기본 폰트: Pretendard
- 제목: 24px ~ 32px
- 본문: 16px
- 보조 텍스트: 14px

## 버튼 스타일

- Primary / Secondary / Danger / Ghost 변형을 컴포넌트 `variant`로 처리

## 반응형 기준

- `$breakpoint-mobile: 768px`를 기준으로 모바일 스타일을 나눕니다.

## SCSS 사용 규칙

- 변수/믹스인/리셋은 `styles/_*.scss`로 분리
- 컴포넌트 전용 스타일은 컴포넌트 폴더 안의 `ComponentName.scss`에 작성
