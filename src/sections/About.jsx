import { about } from '../data/content'

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Label */}
        <p className="text-brand text-sm font-medium tracking-widest uppercase mb-3">
          About
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          What I do
        </h2>

        {/* Summary */}
        <p className="mt-6 text-muted text-lg leading-relaxed max-w-2xl">
          {about.summary}
        </p>

        {/* Highlights */}
        <div className="mt-10 grid sm:grid-cols-2 gap-4">
          {about.highlights.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-4 rounded-lg bg-surface border border-border"
            >
              <span className="mt-0.5 text-brand flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="text-sm text-neutral-300">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
