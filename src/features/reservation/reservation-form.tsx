"use client";

import { motion } from "motion/react";
import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";

const TREATMENTS = [
  "사상체질 진단 (첫 방문)",
  "맞춤 한약",
  "약침",
  "수면·소화 클리닉",
  "재진",
];

const CONSTITUTION_LABEL: Record<string, string> = {
  taeyang: "체질 진단 결과 — 태양인",
  taeum: "체질 진단 결과 — 태음인",
  soyang: "체질 진단 결과 — 소양인",
  soeum: "체질 진단 결과 — 소음인",
};

export function ReservationForm() {
  const search = useSearchParams();
  const constitutionKey = search.get("type") ?? "";
  const presetConstitution = CONSTITUTION_LABEL[constitutionKey];
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
        className="border border-paper-line bg-hanji-deep/40 px-8 py-16 text-center"
      >
        <span className="font-myeongjo text-sm tracking-[0.4em] text-moss">
          受 付 完 了
        </span>
        <h2 className="mt-6 font-myeongjo text-3xl text-ink md:text-4xl">
          예약 요청이 접수되었습니다.
        </h2>
        <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-ink-soft">
          영업일 기준 24시간 이내에 진료실에서 카카오톡 또는 전화로 일정
          확정을 도와드립니다. 휴진일에 접수된 요청은 다음 진료일에 안내됩니다.
        </p>
        <p className="mt-8 text-sm text-ink-soft">
          별채 한의원 · 02-720-0000
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      {presetConstitution && (
        <div className="border border-moss/30 bg-moss/5 px-6 py-4 text-sm text-ink-soft">
          1분 체질 진단 결과 <strong className="text-moss">{presetConstitution}</strong>
          를 함께 전달드립니다.
        </div>
      )}

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

      <Field label="연락처" required hint="진료 일정 확정용 (카카오톡 우선)">
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
        <select
          required
          name="treatment"
          defaultValue=""
          className="form-input"
        >
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

      <div className="grid gap-6 md:grid-cols-2">
        <Field label="희망 날짜" required>
          <input
            required
            name="date"
            type="date"
            className="form-input"
          />
        </Field>
        <Field label="희망 시간대">
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
        hint="알레르기·복용 약·임신 여부 등 알려주시면 진료에 도움이 됩니다"
      >
        <textarea
          name="message"
          rows={5}
          placeholder="예) 6개월 이상 아침마다 몸이 무겁고, 야근 후 소화가 잘 되지 않습니다."
          className="form-input resize-none"
          defaultValue={
            constitutionKey
              ? `1분 체질 진단 결과: ${CONSTITUTION_LABEL[constitutionKey] ?? ""}`
              : ""
          }
        />
      </Field>

      <input
        type="hidden"
        name="constitution"
        value={constitutionKey}
        readOnly
      />

      <div className="border-t border-paper-line pt-8">
        <label className="flex items-start gap-3 text-sm text-ink-soft">
          <input
            type="checkbox"
            required
            name="consent"
            className="mt-1 h-4 w-4 accent-moss"
          />
          <span>
            개인정보(성함·연락처·증상)를 예약 일정 확정 목적으로 수집·이용하는
            데 동의합니다. 진료 종료 후 60일 이내에 폐기됩니다.
          </span>
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-moss px-8 py-4 font-myeongjo text-base text-hanji transition-colors hover:bg-moss-deep"
      >
        예약 요청 보내기 →
      </button>

      <style>{`
        .form-input {
          width: 100%;
          background: var(--color-hanji);
          border: 1px solid var(--color-paper-line);
          padding: 0.875rem 1rem;
          font-family: var(--font-sans);
          font-size: 1rem;
          color: var(--color-ink);
          transition: border-color 0.2s;
        }
        .form-input:focus {
          outline: none;
          border-color: var(--color-moss);
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
  children,
}: {
  label: string;
  hint?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <div className="flex items-baseline gap-2">
        <span className="font-myeongjo text-sm text-ink">{label}</span>
        {required && (
          <span className="text-xs text-moss">필수</span>
        )}
      </div>
      {hint && <p className="mt-1 text-xs text-ink-soft">{hint}</p>}
      <div className="mt-3">{children}</div>
    </label>
  );
}
