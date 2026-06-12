# 별채 한의원 · BYULCHAE — 디자인 시스템

> **제출용 한 줄**: `byulchae.vercel.app — 한옥 별채에서 체질을 짚다`
> **레포**: oriental-medicine-clinic
> **마감**: 오후 3시 50분

---

## 1. 콘셉트

> 일상(본채)에서 한 걸음 떨어진 한옥 **별채**에서 체질을 짚다.
> 도심 직장인이 잠시 자기 체질로 돌아가는 조용한 서재 같은 한의원.

- **무드**: 선비 서재 · 한옥 별채 · 먹향 · 한지 결
- **레퍼런스**: THE KYEOL Clinic (ArchDaily), Aeichi Korean Medical Clinic, 조선 백자
- **시장 포지셔닝**: 자생·경희대(보수적 메이저)와 이문원·광동(글로벌 클리닉 톤) 사이의 빈자리.
  인테리어 디자이너들이 이미 정의한 "한국적 모던 미감"을 웹에서 처음 구현하는 자리.

---

## 2. 디자인 시스템

### 컬러
| 토큰 | HEX | 용도 |
|---|---|---|
| `--hanji` | `#F5F1E8` | 배경, 카드 베이스 |
| `--ink` | `#1A1A1A` | 본문 텍스트, 명조 헤딩 |
| `--moss` | `#4A5C3F` | CTA, 강조, 인장, 링크 활성 |
| `--ink-soft` | `#6B6B6B` | 보조 텍스트 |
| `--paper-line` | `#E5DFD0` | 디바이더 |

### 폰트
- **Headline (H1/H2)**: Nanum Myeongjo (명조)
- **Body / UI**: Pretendard Variable
- **Numeric / Latin**: Pretendard (Tabular)
- **로딩 전략**: `next/font` self-host, `display: swap`

### 모티프 / 텍스처
- 한지 결 (옅은 grain noise)
- 인장(印章) 도장 — Moss 컬러, Hero 우상단 또는 푸터
- 세로 종이 결 선
- 약재 라인 일러스트 (당귀·감초·대추) — 콘텐츠 보조 아이콘

### 톤
- 절제, 여백, 세로 호흡
- 럭셔리 의존 X (금색, 화려한 그라데이션, 보석 모티프 금지)
- 궁궐 X (주묵·단청·오방색 금지)

---

## 3. 타겟

### 페르소나
**3040 도심 직장인, 만성피로·체질개선**
- 야근·회식·불규칙 식사
- 피로·소화불량·불면·목어깨 통증
- 평일 퇴근 후 / 토요일 오전 방문 가능

### 카피 톤
- "피로는 병이 아니다. 체질이다."
- "매일 아침, 몸이 가볍지 않다면."
- "머문릅니다, 체질에."

### 시그니처 진료 4

#### 1. 체질진단 (Constitution Diagnosis) — 70분
사상체질을 4가지로 분류하고 체질에 맞는 생활·식이·치료 방향을 잡는 첫 단계.
- 진행: 맥진(맥파) · 설진(혀) · 문진(생활습관 60문항) · 체형 사진
- 결과: 체질 리포트 PDF + 개인 처방 카드
- 권장: 평생 1–2회

#### 2. 맞춤 한약 (Personalized Herbal Medicine) — 1개월 단위
체질진단 결과를 바탕으로 원장이 직접 처방한 한약.
- 형태: 탕제(파우치) / 환약 / 농축액
- 조제: 자체 탕전실 또는 GMP 인증 외주
- 권장: 체질개선 3개월 / 단기 회복 1개월

#### 3. 약침 (Pharmacopuncture) — 부위별 15–20분
한약 정제액을 가느다란 침으로 정확한 경혈에 주입.
- 적용: 목·어깨·허리 통증, 두통, 만성피로
- 통증: 일반 침과 거의 동일, 효과는 더 빠름
- 권장: 주 1–2회 × 4–8주

#### 4. 수면·소화 클리닉 (Sleep & Digestion Clinic) — 패키지
직장인 만성피로의 핵심 두 축을 묶은 통합 프로그램.
- 구성: 체질진단 + 맞춤 한약 + 주 1회 약침 + 생활처방
- 기간: 8주 패키지
- 모니터링: 수면시간·소화상태 주간 체크인

---

## 4. 의료진 (가상)

### 류은서 원장 — "체질을 읽는 의사"
- 경희대학교 한의학과 졸업
- 경희대학교 대학원 사상체질의학 박사
- 전) 광동한방병원 임상과장
- 대한사상체질의학회 정회원
- 논문: "직장인 만성피로의 체질별 접근"

> 30대 후반~40대 초반 여성 원장 톤. 타겟과 같은 세대라 공감 파워 강함.

---

## 5. 위치

- **주소**: 서울 종로구 북촌로 11길 (한옥 골목 안)
- **운영시간**:
  - 평일 10:00–20:00
  - 토 10:00–16:00
  - 일·공휴일 휴진
- **컨택**: 02-xxx-xxxx, kakao @byulchae
- **사진**: 한옥 머외수, 돌 다닛길, 녹은 대문, 안마당

---

## 6. 시그니처 와우 인터랙션

### A. Hero — 별채 대문 열기
- 페이지 진입 시 닫힌 한옥 대문(SVG) 표시
- 1.2초 후 좌우 분할 `clip-path` 모션으로 대문 열림
- 안쪽에서 명조체 Hero 카피 페이드인: **"머문릅니다, 체질에"**
- 기술: SVG + `motion/react` + `clip-path`
- 응답: `prefers-reduced-motion` 시 즉시 페이드인

### B. 체질 미니 진단 — 사상체질 4체질
- Hero 하단 CTA: `[ 1분 체질 알아보기 → ]`
- 4문항 → 결과 페이지
- 문항:
  1. 추위·더위 어느 쪽이 더 불편?
  2. 소화·수면 중 더 문제?
  3. 활동·휴식 어느 쪽 선호?
  4. 땀 많이 흘리고/적게 흘리고?
- 결과:
  - **태양인** — 추진력·눈안·조함·추이 / 추천: 체질진단 + 약침
  - **태음인** — 둘광·표현력 좋음·소화기 약함 / 추천: 맞춤 한약 + 수면 클리닉
  - **소양인** — 열·위장·아래가 약함·불면 / 추천: 수면 클리닉 + 체질진단
  - **소음인** — 내향·소화약·윈·쪼갑 / 추천: 맞춤 한약 + 약침
- 각 결과 페이지 = `[ 이 결과로 예약하기 → ]` CTA

---

## 7. 페이지 구조

| 경로 | 페이지 | 핵심 섹션 |
|---|---|---|
| `/` | 랜딩 | Hero(대문 모션) → 별채 콘셉트 → **시그니처 진료 4 (각 카드 클릭 → /treatments 상세)** → 1분 체질 진단 배너 → 의료진 프리뷰 → 위치·시간 → FAQ 프리뷰 → 예약 CTA |
| `/about` | 별채 이야기 | 콘셉트 · 진료 철학 · 류은서 원장 |
| `/treatments` | 진료 안내 | 체질진단 · 맞춤 한약 · 약침 · 수면·소화 클리닉 |
| `/quiz` | 체질 미니 진단 | 4문항 → 결과 → 예약 |
| `/location` | 오시는 길 | 지도 · 운영시간 · 한옥 골목 사진 |
| `/reservation` | 예약·문의 | 폼 (이름·연락처·희망일·증상·체질결과) |
| `/faq` | 자주 묻는 질문 | 질문형 H2/H3, JSON-LD `FAQPage` |
| `/admin` | AEO/GEO 관리 (목업) | AEO Score 대시보드 · FAQ 편집 · AI 노출 키워드 |

---

## 8. AEO/GEO

### JSON-LD
- `MedicalClinic` (별채 한의원)
- `Person` (류은서 원장)
- `FAQPage` (/faq)
- `BreadcrumbList`

### HTML / Meta
- `<html lang="ko">`
- 한글 메타 description, OG/Twitter 카드
- 시맨틱 태그 (`<article>`, `<section>`, `<nav>`)
- `sitemap.xml`, `robots.txt`

### 질문형 FAQ (AEO 핵심)
1. 한약 복용 중 커피 마셔도 되나요?
2. 첨 치료는 몇 회 받아야 효과가 있나요?
3. 사상체질은 평생 바뀌지 않나요?
4. 직장인 만성피로 체질개선은 얼마나 걸리나요?
5. 약침과 일반 침의 차이는 무엇인가요?
6. 수면 클리닉은 어떻게 진행되나요?
7. 한약은 식전·식후 어느 때 복용하나요?
8. 임신 중에도 침 치료 가능한가요?
9. 보험 적용은 어느 진료에 되나요?
10. 사상체질 진단 정확도는 어떻게 보장되나요?

---

## 9. 어드민 (/admin) 목업

**AEO 점수 대시보드 중심.**

```
┌── AEO Score 91 ─────────────┐
│  ↗ +8  this week              │
│  AI 노출 키워드 23             │
│  추천 챔피언 키워드:           │
│  · 사상체질 · 만성피로         │
│  · 직장인 한약 · 북촌 한의원   │
└──────────────────────────────┘
┌── FAQ 편집 ─────────────────┐
│ + 새 질문                     │
│ · 한약 복용 중 커피 마셔도?   │
│ · 첨 치료 몇 회?              │
│ · 사상체질 평생 바뀌지 않나?   │
└──────────────────────────────┘
┌── 콘텐츠 매니저 ─────────────┐
│ · 진료 페이지 · 의료진 카드     │
└──────────────────────────────┘
```

- 좌측: 점수 추이 그래프, AI 노출 키워드 23, "이번 주 +8" 같은 게이미피케이션
- 우측: FAQ 편집기, 콘텐츠 카드 매니저
- 데이터: 정적 목업 (실제 DB X)
- 인증: 가상 로그인 (token 검증 없이 통과)

---

## 10. 이미지 자산 (Higgsfield MCP 또는 `/oma-image`)

> 모두 가상 인물·환자 사진 X. 한옥 공간·약재·자연 텍스처만. 흑백·세피아 또는 채도 낮은 톤.

| # | 자리 | 용도 | 크기 | 프롬프트 시드 |
|---|---|---|---|---|
| IMG-1 | OG 카드 | 제출 링크 카드 | 1200×630 | "minimal hanok side wing courtyard, warm hanji beige tone, ink black calligraphy mood, soft afternoon light, no people, no text" |
| IMG-2 | Hero 백그라운드 (대문 SVG 뒤) | 진입 임팩트 | 2400×1500 | "close-up of a traditional korean hanok wooden gate, dark ink-stained wood, warm side-lit, slightly closed, no people" |
| IMG-3 | 별채 콘셉트 섹션 | "한 걸음 떨어진" 카피 옆 | 1600×1000 | "quiet bukchon hanok stone path leading to a small side wing, autumn dusk, no people, cinematic" |
| IMG-4a | 진료 카드 — 체질진단 | 카드 비주얼 | 1000×1000 | "macro of a wrist being read for pulse on hanji paper, hands only, warm desaturated tone" |
| IMG-4b | 진료 카드 — 맞춤 한약 | 카드 비주얼 | 1000×1000 | "traditional korean herbal medicine pouches arranged on dark wood, top-down, moody side light" |
| IMG-4c | 진료 카드 — 약침 | 카드 비주얼 | 1000×1000 | "fine acupuncture needles and small amber vials on a slate stone tray, macro, ink-black background" |
| IMG-4d | 진료 카드 — 수면·소화 클리닉 | 카드 비주얼 | 1000×1000 | "dried jujube and licorice herbs scattered on hanji paper, soft natural window light, still life" |
| IMG-5 | /about 별채 이야기 | 와이드 헤더 | 1920×900 | "interior of a quiet korean scholar's study, wooden bookshelves, low table, paper lantern, no people" |
| IMG-6 | /location 한옥 골목 | 오시는 길 헤더 | 1920×900 | "bukchon hanok alley with stone wall and traditional roof tiles, autumn morning, no people" |

### 생성 우선순위
- **P0**: IMG-1 (OG), IMG-2 (Hero 백그라운드)
- **P1**: IMG-4a~d (진료 카드 4종), IMG-6 (위치)
- **P2**: IMG-3, IMG-5

### 사용 규칙
- 저장: `public/images/{img-id}.webp`
- Next/Image로 렌더, `priority` 는 Hero/OG 만, 나머지 lazy
- `alt` 한국어로 명확하게 (AEO에도 가점)
- 모든 이미지 위에 텍스트 올릴 때 충분한 대비 — `mix-blend-mode: multiply` 또는 `bg-ink/30` 오버레이

---

## 11. 다른 두 트랙과의 차별화

| 항목 | 별채(한의원) | 피부과(예상) | 치과(예상) |
|---|---|---|---|
| 베이스 컬러 | Hanji + Ink + Moss | 화이트 + 핑크/누드 | 화이트 + 블루/민트 |
| 폰트 | 명조 + Pretendard | Sans-serif (Inter) | Sans-serif (Inter) |
| 모티프 | 한옥 대문 · 인장 · 한지 결 | 클린 글라스모피즘 · 사진 | 미니멀 그리드 · 아이콘 |
| 핵심 와우 | 대문 열기 + 체질 진단 | 시술 비교 슬라이더 (예상) | 3D 치아 인터랙션 (예상) |

→ 한 눈에 다른 톤. "같은 템플릿 색만 바꾼 느낌" 위험 0.

---

## 12. 다음 단계

- [ ] `/plan` 으로 핸드오프 → 태스크 분해
- [ ] 디자인 시스템 토큰을 Tailwind v4 `@theme`에 주입
- [ ] Hero 대문 SVG 일러스트 작업
- [ ] 페이지 7개 와이어프레임 → 컴포넌트 → 콘텐츠 채우기
- [ ] JSON-LD, sitemap, robots.txt
- [ ] Vercel 자동 배포 확인 (URL: byulchae.vercel.app 또는 `oriental-medicine-clinic-*.vercel.app`)
- [ ] 마감 30분 전 Production URL 최종 확인

---

## 의료광고법 준수 (지양 표현)

- "1위", "최고", "유일" — 사용 금지
- 치료 결과 보장 표현 — 사용 금지
- 한약 효능 단정 — 사용 금지
- 실제 환자 후기처럼 보이는 허위 콘텐츠 — 금지
- 실제 인물 사진 — 사용 안 함 (의료진은 가상, 아바타는 SVG/일러스트 또는 빈 카드)
