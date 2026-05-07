import { caseStudies } from '../data/content'

function SeverityBadge({ severity }) {
  const colors = {
    Critical: 'text-red-400 bg-red-400/10 border-red-400/20',
    High: 'text-orange-400 bg-orange-400/10 border-orange-400/20',
    Medium: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
    Low: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
  }

  return (
    <span
      className={`inline-block px-2.5 py-1 text-xs font-medium rounded-md border ${colors[severity] || colors.Medium}`}
    >
      {severity}
    </span>
  )
}

function CaseCard({ title, severity, summary, impact, approach }) {
  return (
    <div className="p-6 rounded-xl bg-surface border border-border">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <SeverityBadge severity={severity} />
      </div>

      {/* Summary */}
      <p className="text-sm text-muted leading-relaxed">{summary}</p>

      {/* Impact */}
      <div className="mt-5">
        <p className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-2">
          Impact
        </p>
        <p className="text-sm text-neutral-300 leading-relaxed">{impact}</p>
      </div>

      {/* Approach */}
      <div className="mt-5">
        <p className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-3">
          Approach
        </p>
        <ul className="space-y-2">
          {approach.map((step, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-neutral-300">
              <span className="text-brand mt-0.5 font-mono text-xs flex-shrink-0">
                0{i + 1}
              </span>
              {step}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function CaseStudies() {
  return (
    <section id="cases" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Label */}
        <p className="text-brand text-sm font-medium tracking-widest uppercase mb-3">
          Case Studies
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Notable findings
        </h2>
        <p className="mt-4 text-muted text-lg max-w-xl">
          Detailed walkthroughs of critical vulnerabilities discovered during security assessments.
        </p>

        {/* Case Cards */}
        <div className="mt-10 grid gap-6">
          {caseStudies.map((cs) => (
            <CaseCard key={cs.id} {...cs} />
          ))}
        </div>
      </div>
    </section>
  )
}
