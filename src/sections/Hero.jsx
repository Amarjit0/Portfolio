import { hero } from '../data/content'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-2xl text-center">
        {/* Eyebrow */}
        <p className="text-brand text-sm font-medium tracking-widest uppercase mb-4">
          {hero.role} @ {hero.company}
        </p>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]">
          {hero.name}
        </h1>

        {/* Description */}
        <p className="mt-6 text-muted text-lg leading-relaxed max-w-xl mx-auto">
          {hero.description}
        </p>

        {/* Buttons */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="#work"
            className="px-6 py-3 bg-brand text-black text-sm font-medium rounded-lg hover:bg-brand-dim transition-colors duration-200"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-border text-muted text-sm font-medium rounded-lg hover:border-white/30 hover:text-white transition-colors duration-200"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  )
}
