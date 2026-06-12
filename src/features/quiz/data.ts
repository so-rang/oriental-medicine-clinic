export type Constitution = "taeyang" | "taeum" | "soyang" | "soeum";

export interface QuizOption {
  label: string;
  detail?: string;
  match: Constitution;
}

export interface QuizQuestion {
  id: string;
  number: number;
  prompt: string;
  hint: string;
  options: QuizOption[];
}

export const QUESTIONS: QuizQuestion[] = [
  {
    id: "temperature",
    number: 1,
    prompt: "평소 추위와 더위, 어느 쪽이 더 불편하세요?",
    hint: "사상체질에서 한열(寒熱)의 결을 먼저 봅니다.",
    options: [
      {
        label: "추위에 약하고 손발이 자주 차다",
        detail: "차가운 공기·찬 음식이 부담스럽다",
        match: "soeum",
      },
      {
        label: "추위·더위 모두 둔감한 편이다",
        detail: "땀이 많고 시원한 게 좋다",
        match: "taeum",
      },
      {
        label: "더위에 잘 지치고 땀이 많다",
        detail: "여름이 특히 힘들다",
        match: "taeyang",
      },
      {
        label: "갑자기 열이 오르고 짜증이 난다",
        detail: "상열감과 갈증이 잦다",
        match: "soyang",
      },
    ],
  },
  {
    id: "digestion",
    number: 2,
    prompt: "소화는 어떠신가요?",
    hint: "위장의 강약은 체질의 핵심 단서입니다.",
    options: [
      {
        label: "조금만 먹어도 금세 더부룩하다",
        detail: "찬 음식·날 음식이 부담된다",
        match: "soeum",
      },
      {
        label: "잘 먹고 소화도 잘 되는 편이다",
        detail: "가끔 폭식 뒤 더부룩함만 있다",
        match: "taeum",
      },
      {
        label: "기름진 음식 뒤 속쓰림이 잦다",
        detail: "식사 뒤 무거움이 오래 간다",
        match: "taeyang",
      },
      {
        label: "위장이 예민하고 열감·갈증이 잦다",
        detail: "맵고 자극적인 음식 뒤 탈이 난다",
        match: "soyang",
      },
    ],
  },
  {
    id: "rhythm",
    number: 3,
    prompt: "활동과 휴식, 어느 쪽이 더 편하신가요?",
    hint: "타고난 기질의 결을 봅니다.",
    options: [
      {
        label: "조용한 곳에서 천천히 쉬는 게 좋다",
        detail: "변화보다 안정이 편하다",
        match: "soeum",
      },
      {
        label: "꾸준하고 안정적인 활동이 좋다",
        detail: "한 번 정한 패턴을 오래 유지한다",
        match: "taeum",
      },
      {
        label: "강한 활동·새로운 도전이 즐겁다",
        detail: "에너지가 강하고 추진력이 있다",
        match: "taeyang",
      },
      {
        label: "변화·자극이 좋지만 쉽게 지친다",
        detail: "흥분과 피로가 반복된다",
        match: "soyang",
      },
    ],
  },
  {
    id: "sweat",
    number: 4,
    prompt: "땀과 수면, 어느 쪽이 더 신경 쓰이세요?",
    hint: "체질별 회복 리듬을 가늠합니다.",
    options: [
      {
        label: "땀이 거의 없고 잠도 얕은 편",
        detail: "회복이 느리다",
        match: "soeum",
      },
      {
        label: "땀이 많고 잠은 잘 자는 편",
        detail: "다만 자고 일어나도 무겁다",
        match: "taeum",
      },
      {
        label: "땀은 보통, 잠은 깊지만 짧다",
        detail: "에너지 회전이 빠르다",
        match: "taeyang",
      },
      {
        label: "땀이 갑자기 나고 불면이 잦다",
        detail: "열·갈증으로 잠을 설친다",
        match: "soyang",
      },
    ],
  },
];

export interface ConstitutionResult {
  key: Constitution;
  name: string;
  hanja: string;
  tagline: string;
  description: string;
  strengths: string[];
  cautions: string[];
  recommended: {
    href: string;
    title: string;
    reason: string;
  }[];
}

export const RESULTS: Record<Constitution, ConstitutionResult> = {
  taeyang: {
    key: "taeyang",
    name: "태양인",
    hanja: "太 陽 人",
    tagline: "추진력의 결",
    description:
      "강한 에너지로 앞으로 나아가는 결. 빠르게 달리지만 오래 달리면 간(肝)의 기운이 쉽게 흩어집니다. 회복기를 의식적으로 만들어주는 것이 중요합니다.",
    strengths: ["추진력", "결단", "체력 회전이 빠름"],
    cautions: ["과로 후 급격한 피로", "속쓰림·역류감", "감정의 기복"],
    recommended: [
      {
        href: "#diagnosis",
        title: "사상체질 진단",
        reason: "달리는 결을 어디까지 풀어줘야 할지 먼저 가늠합니다.",
      },
      {
        href: "#pharmacopuncture",
        title: "약침",
        reason: "긴장된 어깨·뒷목과 흩어진 기운을 빠르게 모아줍니다.",
      },
    ],
  },
  taeum: {
    key: "taeum",
    name: "태음인",
    hanja: "太 陰 人",
    tagline: "묵직한 결",
    description:
      "한 번 정한 흐름을 길게 끌고 가는 결. 잘 먹고 잘 자지만 그만큼 정체되기도 쉽습니다. 순환을 깨워주는 것이 가장 큰 숙제입니다.",
    strengths: ["지구력", "안정감", "넉넉한 체력"],
    cautions: ["순환 정체", "체중 증가", "땀이 많아도 무거운 피로"],
    recommended: [
      {
        href: "#herbal",
        title: "맞춤 한약",
        reason: "정체된 흐름을 풀어 본래의 순환으로 돌려놓습니다.",
      },
      {
        href: "#sleep-digestion",
        title: "수면·소화 클리닉",
        reason: "아침의 무거움을 한 달 단위로 다듬는 패키지.",
      },
    ],
  },
  soyang: {
    key: "soyang",
    name: "소양인",
    hanja: "少 陽 人",
    tagline: "예민한 열의 결",
    description:
      "위로 올라가는 열이 강해 빠르게 흥분하고 빠르게 지치는 결. 잠과 갈증, 위장의 자극이 가장 먼저 신호를 보냅니다.",
    strengths: ["순발력", "민첩함", "예민한 감각"],
    cautions: ["불면·상열감", "위장 자극", "감정의 빠른 소진"],
    recommended: [
      {
        href: "#sleep-digestion",
        title: "수면·소화 클리닉",
        reason: "위로 뜬 열을 가라앉히고 잠의 리듬을 다시 잡습니다.",
      },
      {
        href: "#diagnosis",
        title: "사상체질 진단",
        reason: "체질 안에서도 한열의 결이 가장 다르게 갈립니다.",
      },
    ],
  },
  soeum: {
    key: "soeum",
    name: "소음인",
    hanja: "少 陰 人",
    tagline: "차분한 안의 결",
    description:
      "조용히 안을 바라보는 결. 위장이 약하고 회복이 느려, 차고 무리한 자극을 가장 피해야 합니다. 천천히 그러나 깊게 데우는 처방이 잘 맞습니다.",
    strengths: ["섬세함", "꾸준함", "집중력"],
    cautions: ["소화 약함", "추위·낮은 체력", "예민함·불안"],
    recommended: [
      {
        href: "#herbal",
        title: "맞춤 한약",
        reason: "차고 약한 속을 천천히 데우는 가장 기본의 처방.",
      },
      {
        href: "#pharmacopuncture",
        title: "약침",
        reason: "기력의 회전을 끌어올려 회복을 앞당깁니다.",
      },
    ],
  },
};
