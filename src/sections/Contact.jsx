import { contact } from '../data/content'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Label */}
        <p className="text-brand text-sm font-medium tracking-widest uppercase mb-3">
          Contact
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Get in touch
        </h2>
        <p className="mt-4 text-muted text-lg">
          {contact.tagline}
        </p>

        {/* Email */}
        <a
          href={`mailto:${contact.email}`}
          className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-surface border border-border rounded-lg text-white hover:border-white/20 transition-colors duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-brand"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          <span className="text-sm font-medium">{contact.email}</span>
        </a>
      </div>
    </section>
  )
}
