# Figma + MCP 서버 연동 및 디자인 토큰 가이드 (FE용)

이 문서는 디자이너가 Figma(Dev Mode)와 MCP 서버를 통해 제공한 디자인을 FE가 효율적으로 가져와 적용하는 절차와 권장 도구, 주의사항을 정리합니다.

## 요약

- 디자이너: Figma Dev Mode + 토큰 플러그인으로 디자인 토큰(export JSON) 제공
- FE: 토큰을 SCSS 변수로 변환하고, 아이콘은 SVG로 관리한 뒤 `vite`에서 사용
- 자동화: `style-dictionary`, `figma-tokens` 또는 커스텀 스크립트로 토큰을 빌드

## 요구 권한 및 준비물

- Figma 파일 접근 권한(뷰 or 편집)
- MCP 서버(또는 Figma API/Export) 접근 토큰 — 팀 보안 정책에 따라 관리
- FE 저장소에 `src/styles/_variables.scss`와 같은 토큰 적용 지점

## 디자인 토큰(Token)이란?

- 색상, 폰트, 간격, 브레이크포인트 등 디자인 상수(key-value)를 의미합니다.
- 토큰을 JSON으로 관리하면 코드로 변환(예: SCSS 변수, CSS custom properties, JS 객체)하여 일관성 유지 가능

## 권장 토큰 스키마 (예시)

토큰 JSON 예시:

```json
{
  "color": {
    "primary": { "value": "#4f7cff" },
    "text": { "value": "#222" }
  },
  "font": {
    "base": { "value": "Pretendard, system-ui, -apple-system" },
    "size": { "body": { "value": "16px" }, "h1": { "value": "24px" } }
  }
}
```

SCSS로 변환하면 `src/styles/_variables.scss`에 다음처럼 매핑됩니다:

```scss
$color-primary: #4f7cff;
$color-text: #222;
$font-base: 'Pretendard, system-ui, -apple-system';
$font-size-body: 16px;
```

## 권장 워크플로 — 디자이너 → FE

1. 디자이너가 Figma에서 Dev Mode 활성화 및 디자인 확정
2. 디자이너가 디자인 토큰을 `Figma Tokens` 플러그인 또는 MCP 통해 JSON으로 export
3. 디자이너가 아이콘(개별 SVG)과 이미지 원본을 export하여 `src/assets/icons`, `src/assets/images`에 업로드(또는 공유 링크 제공)
4. FE는 토큰 JSON을 repo에 커밋하거나 CI 빌드시 변환하도록 설정
5. `style-dictionary` 또는 `figma-tokens`로 토큰 → SCSS/JS 변환
6. 아이콘은 `svgo`로 최적화 후 `vite-plugin-svgr`로 React 컴포넌트로 사용

## 자동화 도구 및 스크립트 (권장)

- style-dictionary: 디자인 토큰을 SCSS/CSS/JS 등으로 변환
- figma-tokens / figma-export: Figma에서 토큰/자산을 추출하는 도구
- svgo: SVG 최적화
- vite-plugin-svgr: SVG를 React 컴포넌트로 import

예시 `package.json` 스크립트:

```json
{
  "scripts": {
    "tokens:build": "style-dictionary build",
    "icons:optimize": "svgo -f src/assets/icons -o src/assets/icons",
    "icons:dev": "svgr src/assets/icons --out-dir src/components/icons"
  }
}
```

## style-dictionary 기본 사용 예

- `config.json`에 token 소스와 변환 타겟(SCSS)을 정의 후 `style-dictionary build` 실행

간단한 config 예시(참고용):

```json
{
  "source": ["tokens/**/*.json"],
  "platforms": {
    "scss": {
      "transformGroup": "scss",
      "buildPath": "src/styles/",
      "files": [{ "destination": "_variables.scss", "format": "scss/variables" }]
    }
  }
}
```

## 아이콘/이미지 관리

- 디자이너는 개별 아이콘을 SVG로 제공
- FE는 `svgo`로 파일 최적화 후 `src/assets/icons/`에 저장
- Vite에서 SVG를 직접 React 컴포넌트로 사용하려면 `vite-plugin-svgr`를 추가

설치 예시:

```bash
npm install --save-dev style-dictionary svgo @svgr/cli vite-plugin-svgr
```

Vite 설정(간단):

```js
// vite.config.js (요약)
import svgr from 'vite-plugin-svgr'
export default {
  plugins: [svgr()]
}
```

## 폰트 및 라이선스

- Figma에서 사용한 폰트가 웹용으로 사용 가능한지(라이선스)를 확인하세요.
- 필요 시 폰트 파일(woff2) 또는 Google Fonts 링크를 제공받아 `index.html`이나 CSS에서 로드합니다.

## Dev Mode와 MCP 서버 사용 팁

- Dev Mode: 디자이너가 컴포넌트의 코드 힌트(HTML/CSS)를 제공하면 참고용으로 사용 가능
- MCP 서버: 코드-디자인 매핑(Design → Code)을 자동화할 수 있음. 그러나 FE는 생성된 코드를 그대로 적용하기 전에 수동 리뷰(접근성, 반응형)를 해야 합니다.

## 변경/버전 관리

- 토큰 변경은 PR로 관리하고 변경 로그를 남기세요. 토큰이 바뀌면 전역 스타일이 흔들릴 수 있습니다.
- 토큰은 major/minor로 버전 관리하거나 Git 태그를 활용하여 안정적인 릴리즈를 만드세요.

## 보안/주의사항

- Figma API 키나 MCP 접근 토큰은 절대 공개 리포지토리에 커밋하지 마세요.
- 디자인 토큰 JSON 자체는 일반적으로 커밋 가능하지만, 민감한 정보(예: 비밀번호 등)는 포함시키지 마세요.

## QA 체크리스트 (FE가 디자인을 적용할 때)

- 색상/폰트가 `_variables.scss`에 올바르게 반영되었는가?
- 아이콘이 SVG로 최적화되어 있고, 필요 시 React 컴포넌트로 사용 중인가?
- 반응형(모바일/데스크탑)에서 레이아웃이 의도대로 동작하는가?
- 접근성(대체 텍스트, aria 속성, 키보드 포커스)이 적용되었는가?
- 폰트 로딩/라이선스 문제는 없는가?

## 참고 자료

- Figma Dev Mode: https://help.figma.com/
- Style Dictionary: https://amzn.github.io/style-dictionary/
- SVGO: https://github.com/svg/svgo
- SVGR: https://react-svgr.com/

---

필요하면 이 가이드를 바탕으로 `style-dictionary` 설정 파일, `vite.config.js` 예시, `package.json` 스크립트와 예제 변환 파이프라인을 직접 생성해 드리겠습니다.
