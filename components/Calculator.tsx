"use client";

import { useState, useCallback } from "react";
import {
  calculateGermanGrade,
  validateInputs,
  type CalculatorResult,
  type ValidationError,
} from "@/lib/calculator";
import ResultCard from "./ResultCard";

interface FormValues {
  currentCgpa: string;
  maxCgpa: string;
  minPassingCgpa: string;
  hscGpa: string;
  sscGpa: string;
}

const defaultValues: FormValues = {
  currentCgpa: "",
  maxCgpa: "4.00",
  minPassingCgpa: "2.00",
  hscGpa: "",
  sscGpa: "",
};

export default function Calculator() {
  const [values, setValues] = useState<FormValues>(defaultValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [result, setResult] = useState<CalculatorResult | null>(null);
  const [isCalculated, setIsCalculated] = useState(false);

  const handleChange = useCallback(
    (field: keyof FormValues) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      // Allow empty, digits, and one decimal point
      if (value === "" || /^\d*\.?\d*$/.test(value)) {
        setValues((prev) => ({ ...prev, [field]: value }));
        // Clear error on change
        if (errors[field]) {
          setErrors((prev) => {
            const next = { ...prev };
            delete next[field];
            return next;
          });
        }
      }
    },
    [errors]
  );

  const handleCalculate = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      const inputs = {
        currentCgpa: parseFloat(values.currentCgpa),
        maxCgpa: parseFloat(values.maxCgpa),
        minPassingCgpa: parseFloat(values.minPassingCgpa),
      };

      const validationErrors: ValidationError[] = validateInputs(inputs);

      if (validationErrors.length > 0) {
        const errorMap: Record<string, string> = {};
        validationErrors.forEach((err) => {
          errorMap[err.field] = err.message;
        });
        setErrors(errorMap);
        setResult(null);
        setIsCalculated(false);
        return;
      }

      setErrors({});
      const calcResult = calculateGermanGrade(inputs);
      setResult(calcResult);
      setIsCalculated(true);

      // Scroll to result on mobile
      setTimeout(() => {
        document.getElementById("calculator-result")?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }, 100);
    },
    [values]
  );

  const handleReset = useCallback(() => {
    setValues(defaultValues);
    setErrors({});
    setResult(null);
    setIsCalculated(false);
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form
        onSubmit={handleCalculate}
        noValidate
        aria-label="German VPD Grade Calculator"
        className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden"
      >
        {/* Form header */}
        <div className="bg-gradient-to-r from-primary-700 to-primary-600 px-6 py-5 text-white">
          <h2 className="text-xl font-bold tracking-tight">CGPA to German Grade Converter</h2>
          <p className="text-primary-100 text-sm mt-1">
            Using the Modified Bavarian Formula — the official Uni Assist method
          </p>
        </div>

        <div className="p-6 space-y-5">
          {/* Required fields */}
          <fieldset className="space-y-4">
            <legend className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2">
              Required Fields
            </legend>

            {/* Current CGPA */}
            <div>
              <label htmlFor="currentCgpa" className="form-label">
                Your Current CGPA <span className="text-red-500" aria-hidden="true">*</span>
              </label>
              <input
                id="currentCgpa"
                type="text"
                inputMode="decimal"
                className={`form-input ${errors.currentCgpa ? "error" : ""}`}
                placeholder="e.g. 3.50"
                value={values.currentCgpa}
                onChange={handleChange("currentCgpa")}
                aria-describedby={errors.currentCgpa ? "currentCgpa-error" : undefined}
                aria-invalid={!!errors.currentCgpa}
                autoComplete="off"
              />
              {errors.currentCgpa && (
                <p id="currentCgpa-error" className="form-error" role="alert">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 1.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zM7.25 5v4.75h1.5V5h-1.5zm0 5.75v1.5h1.5v-1.5h-1.5z"/></svg>
                  {errors.currentCgpa}
                </p>
              )}
            </div>

            {/* Max CGPA */}
            <div>
              <label htmlFor="maxCgpa" className="form-label">
                Maximum CGPA <span className="text-red-500" aria-hidden="true">*</span>
              </label>
              <input
                id="maxCgpa"
                type="text"
                inputMode="decimal"
                className={`form-input ${errors.maxCgpa ? "error" : ""}`}
                placeholder="e.g. 4.00"
                value={values.maxCgpa}
                onChange={handleChange("maxCgpa")}
                aria-describedby={errors.maxCgpa ? "maxCgpa-error" : "maxCgpa-hint"}
                aria-invalid={!!errors.maxCgpa}
                autoComplete="off"
              />
              <p id="maxCgpa-hint" className="text-xs text-slate-400 mt-1">
                Most Bangladeshi universities use 4.00
              </p>
              {errors.maxCgpa && (
                <p id="maxCgpa-error" className="form-error" role="alert">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 1.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zM7.25 5v4.75h1.5V5h-1.5zm0 5.75v1.5h1.5v-1.5h-1.5z"/></svg>
                  {errors.maxCgpa}
                </p>
              )}
            </div>

            {/* Min Passing CGPA */}
            <div>
              <label htmlFor="minPassingCgpa" className="form-label">
                Minimum Passing CGPA <span className="text-red-500" aria-hidden="true">*</span>
              </label>
              <input
                id="minPassingCgpa"
                type="text"
                inputMode="decimal"
                className={`form-input ${errors.minPassingCgpa ? "error" : ""}`}
                placeholder="e.g. 2.00"
                value={values.minPassingCgpa}
                onChange={handleChange("minPassingCgpa")}
                aria-describedby={errors.minPassingCgpa ? "minPassingCgpa-error" : "minPassingCgpa-hint"}
                aria-invalid={!!errors.minPassingCgpa}
                autoComplete="off"
              />
              <p id="minPassingCgpa-hint" className="text-xs text-slate-400 mt-1">
                Most Bangladeshi universities use 2.00
              </p>
              {errors.minPassingCgpa && (
                <p id="minPassingCgpa-error" className="form-error" role="alert">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 1.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zM7.25 5v4.75h1.5V5h-1.5zm0 5.75v1.5h1.5v-1.5h-1.5z"/></svg>
                  {errors.minPassingCgpa}
                </p>
              )}
            </div>
          </fieldset>

          {/* Optional fields */}
          <details className="group">
            <summary className="cursor-pointer text-sm font-medium text-primary-600 hover:text-primary-700 flex items-center gap-1.5 list-none select-none">
              <svg
                className="w-4 h-4 transition-transform group-open:rotate-90"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              Add HSC / SSC GPA (optional)
            </summary>
            <div className="mt-4 space-y-4 pl-4 border-l-2 border-primary-100">
              <div>
                <label htmlFor="hscGpa" className="form-label">HSC GPA</label>
                <input
                  id="hscGpa"
                  type="text"
                  inputMode="decimal"
                  className="form-input"
                  placeholder="e.g. 5.00"
                  value={values.hscGpa}
                  onChange={handleChange("hscGpa")}
                  autoComplete="off"
                />
              </div>
              <div>
                <label htmlFor="sscGpa" className="form-label">SSC GPA</label>
                <input
                  id="sscGpa"
                  type="text"
                  inputMode="decimal"
                  className="form-input"
                  placeholder="e.g. 5.00"
                  value={values.sscGpa}
                  onChange={handleChange("sscGpa")}
                  autoComplete="off"
                />
              </div>
              <p className="text-xs text-slate-400">
                HSC &amp; SSC GPA are recorded for reference only and do not affect the German grade calculation.
              </p>
            </div>
          </details>

          {/* Actions */}
          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              id="calculate-btn"
              className="btn-primary flex-1 text-base py-3"
            >
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 5a2 2 0 012-2h12a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V5z" />
              </svg>
              Calculate Grade
            </button>
            {isCalculated && (
              <button
                type="button"
                id="reset-btn"
                className="btn-secondary px-5"
                onClick={handleReset}
              >
                Reset
              </button>
            )}
          </div>
        </div>
      </form>

      {/* Result */}
      {result && (
        <div id="calculator-result" className="mt-6">
          <ResultCard result={result} cgpa={values.currentCgpa} maxCgpa={values.maxCgpa} />
        </div>
      )}
    </div>
  );
}
