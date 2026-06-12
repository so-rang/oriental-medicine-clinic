const CLINIC = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "@id": "https://byulchae.vercel.app/#clinic",
  name: "별채 한의원",
  alternateName: "BYULCHAE Korean Medicine Clinic",
  description:
    "북촌 한옥 골목 안의 조용한 서재 같은 한의원. 사상체질 진단을 중심으로 도심 직장인의 만성피로·체질개선을 진료합니다.",
  url: "https://byulchae.vercel.app",
  logo: "https://byulchae.vercel.app/icon.svg",
  image: "https://byulchae.vercel.app/opengraph-image",
  telephone: "+82-2-720-0000",
  priceRange: "₩₩",
  medicalSpecialty: [
    "Traditional Korean Medicine",
    "Sasang Constitutional Medicine",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "북촌로 11길 14, 별채동",
    addressLocality: "종로구",
    addressRegion: "서울",
    postalCode: "03059",
    addressCountry: "KR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 37.5826,
    longitude: 126.9847,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Thursday", "Friday"],
      opens: "10:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Wednesday"],
      opens: "10:00",
      closes: "14:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "10:00",
      closes: "16:00",
    },
  ],
  availableService: [
    {
      "@type": "MedicalProcedure",
      name: "사상체질 진단",
      procedureType: "https://schema.org/DiagnosticProcedure",
    },
    {
      "@type": "MedicalProcedure",
      name: "맞춤 한약 처방",
      procedureType: "https://schema.org/TherapeuticProcedure",
    },
    {
      "@type": "MedicalProcedure",
      name: "약침",
      procedureType: "https://schema.org/TherapeuticProcedure",
    },
    {
      "@type": "MedicalProcedure",
      name: "수면·소화 클리닉",
      procedureType: "https://schema.org/TherapeuticProcedure",
    },
  ],
  employee: {
    "@type": "Person",
    "@id": "https://byulchae.vercel.app/#dr-ryu",
    name: "류은서",
    jobTitle: "한의학 박사 · 원장",
    description:
      "사상체질의학 전문 한의학 박사. 직장인 만성피로의 체질별 접근 임상 연구.",
    alumniOf: "경희대학교 한의학과",
    knowsAbout: [
      "사상체질의학",
      "만성피로 한방 치료",
      "수면·소화 통합 치료",
    ],
    worksFor: { "@id": "https://byulchae.vercel.app/#clinic" },
  },
} as const;

export function SiteJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(CLINIC) }}
    />
  );
}
