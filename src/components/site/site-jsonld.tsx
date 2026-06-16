const CLINIC = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "@id": "https://byulchae.vercel.app/#clinic",
  name: "별채 한의원",
  alternateName: "BYULCHAE Korean Medicine Clinic",
  description:
    "북촌의 한의원. 척추·관절 통증과 교통사고 후유증은 추나요법·침·약침으로, 다이어트·만성피로는 맞춤 한약으로 진료합니다. 건강보험·자동차보험 적용, 평일 야간진료.",
  url: "https://byulchae.vercel.app",
  logo: "https://byulchae.vercel.app/icon.svg",
  image: "https://byulchae.vercel.app/opengraph-image",
  telephone: "+82-2-720-0000",
  priceRange: "₩₩",
  medicalSpecialty: [
    "Traditional Korean Medicine",
    "Chuna Manual Therapy",
    "Physical Medicine and Rehabilitation",
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
      opens: "09:00",
      closes: "14:00",
    },
  ],
  availableService: [
    {
      "@type": "MedicalProcedure",
      name: "추나요법",
      procedureType: "https://schema.org/TherapeuticProcedure",
    },
    {
      "@type": "MedicalProcedure",
      name: "교통사고 후유증 한방치료",
      procedureType: "https://schema.org/TherapeuticProcedure",
    },
    {
      "@type": "MedicalProcedure",
      name: "약침",
      procedureType: "https://schema.org/TherapeuticProcedure",
    },
    {
      "@type": "MedicalProcedure",
      name: "맞춤 한약 처방",
      procedureType: "https://schema.org/TherapeuticProcedure",
    },
  ],
  employee: {
    "@type": "Person",
    "@id": "https://byulchae.vercel.app/#dr-ryu",
    name: "류은서",
    jobTitle: "한의사 · 원장",
    description:
      "척추·관절 통증과 교통사고 후유증, 한약 처방을 진료하는 한의사. 대한추나의학회 정회원.",
    alumniOf: "경희대학교 한의학과",
    knowsAbout: [
      "추나요법",
      "교통사고 후유증 한방치료",
      "통증 한방치료",
      "한약 처방",
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
