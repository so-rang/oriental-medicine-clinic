"use client";

import { motion } from "motion/react";
import { useState, type FormEvent } from "react";

import { cn } from "@/lib/utils";

const TREATMENTS = [
  "척추·관절 통증 (추나)",
  "교통사고 후유증",
  "한방 다이어트",
  "한약·보약",
  "기타 / 상담 후 결정",
];

export function ReservationForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    // mock — 실제 백엔드 없이 콘솔에 출력
    console.info("[reservation] submitted", data);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl bg-sage-soft/40 px-8 py-14 text-center ring-1 ring-paper-line"
      >
        <span className="text-xs tracking-[0.3em] text-sage">受付完了</span>
        <h2 className="mt-5 font-myeongjo text-2xl text-ink md:text-3xl">
          예약 요청이 접수되었습니다
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-ink-soft">
          영업일 기준 24시간 이내에 카카오톡 또는 전화로 일정 확정을
          도와드립니다.
        </p>
        <p className="mt-6 text-sm text-ink-soft">별채 한의원 · 02-720-0000</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-x-5 gap-y-5 sm:grid-cols-2">
        <Field label="성함" required>
          <input
            required
            name="name"
            type="text"
            placeholder="홍길동"
            className="form-input"
            autoComplete="name"
          />
        </Field>

        <Field label="연락처" required>
          <input
            required
            name="phone"
            type="tel"
            inputMode="tel"
            placeholder="010 0000 0000"
            className="form-input"
            autoComplete="tel"
          />
        </Field>

        <Field label="진료 항목" required>
          <select required name="treatment" defaultValue="" className="form-input">
            <option value="" disabled>
              선택해 주세요
            </option>
            {TREATMENTS.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>

        <Field label="희망 날짜" required>
          <input required name="date" type="date" className="form-input" />
        </Field>

        <Field label="희망 시간대" className="sm:col-span-2">
          <select name="time" defaultValue="" className="form-input">
            <option value="">상관없음</option>
            <option>오전 (10–13시)</option>
            <option>오후 (14–17시)</option>
            <option>퇴근 후 (17–20시)</option>
            <option>토요일 오전</option>
          </select>
        </Field>
      </div>

      <Field
        label="증상·요청 사항"
        hint="교통사고는 사고 접수번호를, 그 외에는 증상을 적어주세요"
      >
        <textarea
          name="message"
          rows={3}
          placeholder="예) 2주 전부터 허리가 아프고 다리가 저립니다. / 지난주 교통사고 후 목이 뻐근합니다."
          className="form-input resize-none"
        />
      </Field>

      <label className="flex items-start gap-3 text-xs leading-relaxed text-ink-soft">
        <input
          type="checkbox"
          required
          name="consent"
          className="mt-0.5 h-4 w-4 shrink-0 accent-moss"
        />
        <span>
          개인정보(성함·연락처·증상)를 예약 일정 확정 목적으로 수집·이용하는
          데 동의합니다. 진료 종료 후 60일 이내 폐기됩니다.
        </span>
      </label>

      <button
        type="submit"
        className="w-full rounded-full bg-moss px-8 py-3.5 text-base font-medium text-hanji shadow-sm transition-all hover:-translate-y-0.5 hover:bg-moss-deep hover:shadow-md"
      >
        예약 요청 보내기 →
      </button>

      <style>{`
        .form-input {
          width: 100%;
          background: var(--color-hanji);
          border: 1px solid var(--color-paper-line);
          border-radius: 0.75rem;
          padding: 0.75rem 1rem;
          font-family: var(--font-sans);
          font-size: 1rem;
          color: var(--color-ink);
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .form-input:focus {
          outline: none;
          border-color: var(--color-moss);
          box-shadow: 0 0 0 3px var(--color-sage-soft);
        }
        .form-input::placeholder { color: #a8a194; }
      `}</style>
    </form>
  );
}

function Field({
  label,
  hint,
  required,
  className,
  children,
}: {
  label: string;
  hint?: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={cn("block", className)}>
      <div className="flex items-baseline gap-2">
        <span className="font-myeongjo text-sm text-ink">{label}</span>
        {required && <span className="text-xs text-moss">필수</span>}
      </div>
      {hint && <p className="mt-1 text-xs text-ink-soft">{hint}</p>}
      <div className="mt-2">{children}</div>
    </label>
  );
}
