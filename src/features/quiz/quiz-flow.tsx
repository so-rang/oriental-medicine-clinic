"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { useMemo, useState } from "react";

import { LinkButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import {
  QUESTIONS,
  RESULTS,
  type Constitution,
  type QuizOption,
} from "./data";

type Step = "intro" | "question" | "result";

const ORDER: Constitution[] = ["taeyang", "taeum", "soyang", "soeum"];

function tally(answers: QuizOption[]): Constitution {
  const counts: Record<Constitution, number> = {
    taeyang: 0,
    taeum: 0,
    soyang: 0,
    soeum: 0,
  };
  for (const answer of answers) counts[answer.match] += 1;

  let winner: Constitution = "taeum";
  let max = -1;
  for (const key of ORDER) {
    if (counts[key] > max) {
      max = counts[key];
      winner = key;
    }
  }
  return winner;
}

export function QuizFlow() {
  const prefersReduced = useReducedMotion();
  const [step, setStep] = useState<Step>("intro");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizOption[]>([]);

  const total = QUESTIONS.length;
  const progress = step === "result" ? 1 : answers.length / total;

  const result = useMemo(
    () => (step === "result" ? RESULTS[tally(answers)] : null),
    [step, answers]
  );

  function startQuiz() {
    setAnswers([]);
    setQuestionIndex(0);
    setStep("question");
  }

  function selectOption(option: QuizOption) {
    const next = [...answers, option];
    setAnswers(next);
    if (next.length >= total) {
      setStep("result");
    } else {
      setQuestionIndex((i) => i + 1);
    }
  }

  function restart() {
    setAnswers([]);
    setQuestionIndex(0);
    setStep("intro");
  }

  const fadeVariants = prefersReduced
    ? { initial: {}, animate: {}, exit: {} }
    : {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -16 },
      };

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col">
      {/* Progress bar */}
      {step !== "intro" && (
        <div className="mb-12">
          <div className="flex items-center justify-between text-xs tracking-widest text-ink-soft">
            <span className="font-myeongjo">
              {step === "result"
                ? "결과"
                : `${questionIndex + 1} / ${total}`}
            </span>
            <span>{Math.round(progress * 100)}%</span>
          </div>
          <div className="mt-3 h-px w-full bg-paper-line">
            <motion.div
              className="h-px bg-moss"
              initial={{ width: 0 }}
              animate={{ width: `${progress * 100}%` }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </div>
        </div>
      )}

      <AnimatePresence mode="wait">
        {step === "intro" && (
          <motion.div
            key="intro"
            variants={fadeVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            <span className="font-myeongjo text-sm tracking-[0.4em] text-moss">
              四 象 體 質
            </span>
            <h1 className="mt-6 font-myeongjo text-3xl leading-snug text-ink md:text-5xl">
              네 가지 질문이면,
              <br />
              당신의 체질이 보입니다.
            </h1>
            <p className="mx-auto mt-8 max-w-lg text-base leading-relaxed text-ink-soft">
              사상체질은 사람을 네 가지 결(태양·태음·소양·소음)로 나누는 한방의
              체질 분류입니다. 가벼운 자기 진단이며, 정확한 진단은 진료실의
              맥진·설진과 함께 이루어집니다.
            </p>
            <div className="mt-12 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <button
                onClick={startQuiz}
                className="inline-flex items-center justify-center gap-2 bg-moss px-8 py-4 font-myeongjo text-base text-hanji transition-colors hover:bg-moss-deep"
              >
                시작하기 →
              </button>
              <Link
                href="/treatments#diagnosis"
                className="font-myeongjo text-sm text-moss underline-offset-4 hover:underline"
              >
                정식 체질진단 진료 보기
              </Link>
            </div>
          </motion.div>
        )}

        {step === "question" && (
          <motion.div
            key={`q-${questionIndex}`}
            variants={fadeVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4 }}
          >
            <QuestionView
              question={QUESTIONS[questionIndex]}
              onSelect={selectOption}
            />
          </motion.div>
        )}

        {step === "result" && result && (
          <motion.div
            key="result"
            variants={fadeVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            <ResultView result={result} onRestart={restart} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function QuestionView({
  question,
  onSelect,
}: {
  question: (typeof QUESTIONS)[number];
  onSelect: (option: QuizOption) => void;
}) {
  return (
    <div>
      <div className="flex items-baseline gap-3">
        <span className="font-myeongjo text-2xl text-moss">
          Q{question.number}.
        </span>
        <span className="text-xs tracking-widest text-ink-soft">
          {question.hint}
        </span>
      </div>
      <h2 className="mt-4 font-myeongjo text-2xl leading-snug text-ink md:text-3xl">
        {question.prompt}
      </h2>

      <div className="mt-10 grid gap-3">
        {question.options.map((option) => (
          <button
            key={option.label}
            onClick={() => onSelect(option)}
            className={cn(
              "group flex flex-col gap-1 border border-paper-line bg-hanji px-6 py-5 text-left transition-colors",
              "hover:border-moss hover:bg-hanji-deep/50"
            )}
          >
            <span className="font-myeongjo text-lg text-ink">
              {option.label}
            </span>
            {option.detail && (
              <span className="text-sm text-ink-soft">{option.detail}</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

function ResultView({
  result,
  onRestart,
}: {
  result: (typeof RESULTS)[Constitution];
  onRestart: () => void;
}) {
  return (
    <div>
      <div className="border border-paper-line bg-hanji-deep/40 p-8 md:p-12">
        <div className="flex items-start justify-between gap-6">
          <div>
            <span className="font-myeongjo text-xs tracking-[0.4em] text-moss">
              {result.hanja}
            </span>
            <h2 className="mt-4 font-myeongjo text-4xl leading-tight text-ink md:text-6xl">
              {result.name}
            </h2>
            <p className="mt-3 font-myeongjo text-lg text-moss">
              — {result.tagline}
            </p>
          </div>
          <div className="ink-seal">柳</div>
        </div>

        <p className="mt-8 text-base leading-relaxed text-ink-soft">
          {result.description}
        </p>

        <div className="paper-divider mt-10" />

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="font-myeongjo text-sm tracking-[0.3em] text-moss">
              결의 강점
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-ink">
              {result.strengths.map((s) => (
                <li key={s}>· {s}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-myeongjo text-sm tracking-[0.3em] text-moss">
              주의할 결
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-ink">
              {result.cautions.map((c) => (
                <li key={c}>· {c}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Recommended treatments */}
      <div className="mt-12">
        <h3 className="font-myeongjo text-sm tracking-[0.3em] text-moss">
          류은서 원장의 추천 진료
        </h3>
        <div className="mt-6 grid gap-px bg-paper-line md:grid-cols-2">
          {result.recommended.map((rec) => (
            <Link
              key={rec.href}
              href={rec.href}
              className="group flex flex-col gap-3 bg-hanji p-6 transition-colors hover:bg-hanji-deep/50"
            >
              <h4 className="font-myeongjo text-xl text-ink">{rec.title}</h4>
              <p className="text-sm leading-relaxed text-ink-soft">
                {rec.reason}
              </p>
              <span className="mt-2 text-sm text-moss group-hover:underline">
                자세히 보기 →
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 flex flex-col items-center gap-4 text-center">
        <p className="font-myeongjo text-lg text-ink">
          이 결과를 가지고 예약하시면, 진료실에서 정식 진단으로 이어집니다.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <LinkButton
            href={`/reservation?type=${result.key}`}
            size="lg"
          >
            이 결과로 예약하기 →
          </LinkButton>
          <button
            onClick={onRestart}
            className="inline-flex items-center justify-center gap-2 border border-ink/30 px-6 py-3 font-myeongjo text-base text-ink hover:border-ink"
          >
            다시 답해보기
          </button>
        </div>
      </div>
    </div>
  );
}
