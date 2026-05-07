import { workItems } from '../data/content'

function WorkCard({ title, description, tags }) {
  return (
    <div className="group p-6 rounded-xl bg-surface border border-border hover:border-white/10 transition-colors duration-200">
      <h3 className="text-lg font-semibold text-white group-hover:text-brand transition-colors duration-200">
        {title}
      </h3>
      <p className="mt-3 text-sm text-muted leading-relaxed">
        {description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 text-xs font-medium text-brand bg-brand/10 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Work() {
  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Label */}
        <p className="text-brand text-sm font-medium tracking-widest uppercase mb-3">
          Work
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          What I've worked on
        </h2>
        <p className="mt-4 text-muted text-lg max-w-xl">
          Key areas of my professional security work.
        </p>

        {/* Cards Grid */}
        <div className="mt-10 grid sm:grid-cols-2 gap-5">
          {workItems.map((item) => (
            <WorkCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
