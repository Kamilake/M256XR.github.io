# Copilot Instructions — M256XR.github.io

## Project Overview

GitHub Pages 정적 사이트로, 독립적인 단일 페이지 웹앱들의 모음입니다. 빌드 시스템이나 번들러 없이 순수 HTML/CSS/JS만 사용합니다.

## Architecture

각 서브디렉토리가 독립된 웹앱입니다:

- **`poke/`** — PotaKB 커스텀 키보드 설정 도구 (Web Bluetooth / Web Serial API로 키보드 펌웨어와 통신) - 이번 프로젝트에서 사용되지 않음. deprecated 상태로 유지, 향후 제거 예정
- **`funya/`** — VRChat 성격 진단 퀴즈 (클라이언트 사이드 퀴즈 + Twitter 공유)

앱 간 코드 공유나 의존성은 없습니다. 각 앱은 `index.html` + `script.js` + `style.css` 구조입니다.

## Key Conventions

### Language & Locale
- UI 텍스트와 코멘트는 **일본어(日本語)**로 작성합니다
- `<html lang="ja">` 사용
- 코드 내 변수명/상수명은 영어, 사용자 대면 문자열은 일본어

### No Build System
- npm, webpack, 번들러 없음 — 파일을 직접 편집하면 바로 반영됩니다
- 외부 라이브러리 의존성 없음 (순수 Vanilla JS)
- `funya/docker-compose.yml`로 nginx 로컬 서버 실행 가능: `docker compose up`

### funya/ (VRChat Quiz) 핵심 패턴
- 질문 데이터는 `questions` 배열에 인라인 정의 (score + tags 시스템)
- 결과 판정: 누적 점수 기반 구간 판정 + 특수 태그 조합 우선 판정
- Tokyo Night 컬러 테마 (CSS 변수: `--bg-dark`, `--primary`, `--accent` 등)

## Style Guidelines
- 모바일 퍼스트 반응형 디자인 (`@media (max-width: 768px)`)
- `touch-action: manipulation`, `-webkit-tap-highlight-color: transparent` 등 모바일 터치 최적화 적용
- CSS 클래스 토글로 화면 전환 (`.hidden`, `.active`)
