export default function FormulaExplainer() {
  return (
    <section className="py-16 section-surface" id="formula">
      <div className="container-content">
        <h2 className="section-heading">How the Formula Works</h2>
        <p className="section-subheading">
          The Modified Bavarian Formula is the official method used by Uni Assist and German universities to convert international grades.
        </p>

        {/* Formula display */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm mb-8">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest text-center mb-6">
              Modified Bavarian Formula
            </p>
            <div className="text-center font-mono">
              <div className="inline-block bg-primary-50 border border-primary-200 rounded-xl px-6 py-5">
                <span className="text-slate-700 font-semibold text-lg md:text-xl">
                  German Grade = 1 + 3 ×
                </span>
                <span className="text-primary-700 font-bold text-xl md:text-2xl ml-2">
                  (Max − Obtained)
                </span>
                <div className="h-0.5 bg-primary-700 my-1 mx-auto w-56 md:w-64" aria-hidden="true" />
                <span className="text-primary-700 font-bold text-xl md:text-2xl">
                  (Max − Min Passing)
                </span>
              </div>
            </div>
          </div>

          {/* Variables */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {[
              {
                label: "Max",
                description: "Maximum CGPA of your university",
                example: "4.00",
                color: "bg-blue-50 border-blue-200 text-blue-700",
              },
              {
                label: "Obtained",
                description: "Your actual CGPA",
                example: "3.50",
                color: "bg-emerald-50 border-emerald-200 text-emerald-700",
              },
              {
                label: "Min Passing",
                description: "Minimum passing CGPA",
                example: "2.00",
                color: "bg-amber-50 border-amber-200 text-amber-700",
              },
            ].map((v) => (
              <div
                key={v.label}
                className={`rounded-xl border p-4 ${v.color}`}
              >
                <code className="font-bold text-lg">{v.label}</code>
                <p className="text-sm mt-1 opacity-80">{v.description}</p>
                <p className="text-xs mt-1 font-medium opacity-60">e.g. {v.example}</p>
              </div>
            ))}
          </div>

          {/* Worked example */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Worked Example
            </h3>
            <div className="space-y-2 text-sm text-slate-600">
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span>Your CGPA</span>
                <span className="font-semibold text-slate-800">3.50 / 4.00</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span>Minimum Passing CGPA</span>
                <span className="font-semibold text-slate-800">2.00</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="font-mono text-xs bg-slate-50 px-2 py-0.5 rounded">1 + 3 × (4.00 − 3.50) / (4.00 − 2.00)</span>
                <span className="font-semibold text-slate-800">=</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="font-mono text-xs bg-slate-50 px-2 py-0.5 rounded">1 + 3 × 0.50 / 2.00</span>
                <span className="font-semibold text-slate-800">=</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="font-mono text-xs bg-slate-50 px-2 py-0.5 rounded">1 + 3 × 0.25</span>
                <span className="font-semibold text-slate-800">=</span>
              </div>
              <div className="flex justify-between py-2 font-bold">
                <span className="text-slate-800">German Grade</span>
                <span className="text-primary-600 text-lg">1.75 — Very Good</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
