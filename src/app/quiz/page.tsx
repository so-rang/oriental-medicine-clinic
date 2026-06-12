import type { Metadata } from "next";

import { QuizFlow } from "@/features/quiz/quiz-flow";

export const metadata: Metadata = {
  title: "1분 체질 진단",
  description:
    "사상체질(태양·태음·소양·소음) 네 가지로 본 결을 가볍게 가늠해 보고, 결과에 맞는 진료를 추천받으세요.",
};

export default function QuizPage() {
  return (
    <div className="bg-hanji py-24 md:py-32">
      <div className="px-6">
        <QuizFlow />
      </div>
    </div>
  );
}
