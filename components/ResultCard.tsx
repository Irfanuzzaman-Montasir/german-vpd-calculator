"use client";

import { useState } from "react";
import { type CalculatorResult, getClassificationColor } from "@/lib/calculator";

interface ResultCardProps {
  result: CalculatorResult;
  cgpa: string;
  maxCgpa: string;
}

const classificationEmoji: Record<string, string> = {
  Excellent: "🏆",
  "Very Good": "⭐",
  Good: "✅",
  Pass: "📋",
  Insufficient: "❌",
};

const classificationDesc: Record<string, string> = {
  Excellent: "Sehr gut — Outstanding academic performance",
  "Very Good": "Gut — Strong performance, competitive for most programs",
  Good: "Befriedigend — Solid performance, meets most requirements",
  Pass: "Ausreichend — Minimum passing level",
  Insufficient: "Nicht bestanden — Does not meet minimum requirement",
};

export default function ResultCard({ result, cgpa, maxCgpa }: ResultCardProps) {
  const [copied, setCopied] = useState(false);

  const colorClass = getClassificationColor(result.classification);

  const handleCopy = async () => {
    const text = `My German Grade: ${result.germanGrade.toFixed(2)} (${result.classification})\nConverted from CGPA ${cgpa}/${maxCgpa} using the Modified Bavarian Formula\nSource: German VPD Calculator`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback: select text manually
    }
  };

  if (result.error) {
    return (
      <div
        className="rounded-2xl border border-red-200 bg-red-50 p-6 animate-scale-in"
        role="alert"
        aria-live="polite"
      >
        <p className="text-red-700 font-semibold flex items-center gap-2">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          Calculation Error
        </p>
        <p className="text-red-600 text-sm mt-1">{result.error}</p>
      </div>
    );
  }

  return (
    <div
      className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden animate-scale-in"
      role="region"
      aria-label="Calculation result"
      aria-live="polite"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 px-6 py-4 text-white flex items-center justify-between">
        <div>
          <p className="text-slate-400 text-xs font-medium uppercase tracking-widest">Your Result</p>
          <h3 className="text-lg font-bold mt-0.5">German Grade</h3>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-slate-700 hover:bg-slate-600 transition-colors px-3 py-1.5 rounded-lg"
          aria-label="Copy result to clipboard"
        >
          {copied ? (
            <>
              <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Copy
            </>
          )}
        </button>
      </div>

      {/* Main grade display */}
      <div className="px-6 py-8 text-center">
        <div className="inline-flex flex-col items-center">
          <span className="text-7xl font-black text-slate-900 tracking-tight leading-none tabular-nums">
            {result.germanGrade.toFixed(2)}
          </span>
          <span className="text-slate-400 text-sm mt-2 font-medium">out of 4.00</span>
        </div>

        {/* Classification badge */}
        <div className={`inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-full border-2 font-semibold text-sm ${colorClass}`}>
          <span aria-hidden="true">{classificationEmoji[result.classification]}</span>
          <span>{result.classification}</span>
        </div>

        <p className="text-slate-500 text-sm mt-3 max-w-xs mx-auto">
          {classificationDesc[result.classification]}
        </p>
      </div>

      {/* Grade scale visualization */}
      <div className="px-6 pb-6">
        <div className="bg-slate-50 rounded-xl p-4">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">German Grade Scale</p>
          <div className="relative">
            {/* Scale bar */}
            <div className="h-2 rounded-full bg-gradient-to-r from-emerald-400 via-blue-400 via-amber-400 to-red-400" aria-hidden="true" />
            {/* Marker */}
            <div
              className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-slate-800 rounded-full border-2 border-white shadow-md transition-all duration-500"
              style={{ left: `${((result.germanGrade - 1) / 3) * 100}%`, transform: "translate(-50%, -50%)" }}
              aria-hidden="true"
            />
          </div>
          <div className="flex justify-between text-xs text-slate-400 mt-2">
            <span>1.0 — Best</span>
            <span>2.5</span>
            <span>4.0 — Pass</span>
          </div>
        </div>

        {/* Input summary */}
        <div className="mt-4 grid grid-cols-3 gap-2 text-center">
          <div className="bg-slate-50 rounded-lg p-2.5">
            <p className="text-xs text-slate-400">Your CGPA</p>
            <p className="text-sm font-bold text-slate-700">{cgpa}</p>
          </div>
          <div className="bg-slate-50 rounded-lg p-2.5">
            <p className="text-xs text-slate-400">Max CGPA</p>
            <p className="text-sm font-bold text-slate-700">{maxCgpa}</p>
          </div>
          <div className="bg-slate-50 rounded-lg p-2.5">
            <p className="text-xs text-slate-400">German Grade</p>
            <p className="text-sm font-bold text-primary-600">{result.germanGrade.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
