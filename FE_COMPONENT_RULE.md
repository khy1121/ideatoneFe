# 컴포넌트 작성 규칙

이 섹션은 팀이 일관된 방식으로 컴포넌트를 작성하도록 돕습니다.

## 파일/폴더 구조

컴포넌트는 폴더 단위로 작성합니다.

```
Button/
 ├─ Button.jsx
 └─ Button.scss
```

## 네이밍 규칙

- 컴포넌트 이름은 `PascalCase` 사용 (예: `NoticeCard`, `LoadingSpinner`)
- 파일명도 컴포넌트와 동일하게 `Button.jsx` 등으로 작성

## Props 규칙

- Boolean props는 `is`, `has`, `can` 접두어를 사용
- 함수형 props는 `on` 접두어 사용 (예: `onClick`, `onClose`)
- 스타일 관련 prop은 최소화하고 CSS 클래스/variant로 분리

## 공통 컴포넌트 사양

### Button

- Props: `children`, `onClick`, `type`, `variant`, `disabled`
- `variant` 지원: `primary`, `secondary`, `danger`, `ghost`

예시

```jsx
<Button variant="primary" onClick={handle}>분석하기</Button>
```

### Input

- Props: `value`, `onChange`, `placeholder`, `type`, `name`

### Textarea

- Props: `value`, `onChange`, `placeholder`, `name`, `maxLength`

### Card

- Props: `title`, `children`

### Loading

- 기본 문구: `AI가 내용을 분석하고 있어요.`

### Modal

- Props: `isOpen`, `onClose`, `title`, `children`

## 스타일과 구조

- 컴포넌트 내부 스타일은 컴포넌트 전용 SCSS(`ComponentName.scss`)에 두고 BEM-ish 클래스 네이밍을 권장합니다.
- 재사용 가능한 유틸 클래스는 `styles` 또는 `global.scss`에 추가하세요.
