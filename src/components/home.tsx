import React from 'react'
import { Link } from 'react-router-dom'
import { hero, about, projects, skills, contact } from '../data/portfolio'

const avatarUrl = '/web-profile.png'

function Badge({ label }: { label: string }) {
  return (
    <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">
      {label}
    </span>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-text selection:bg-teal-700/20">
      <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-background/95 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8" aria-label="Primary navigation">
          <a href="#" className="text-lg font-semibold tracking-tight text-slate-900">
            {hero.name}
          </a>
          <div className="flex items-center gap-4 text-sm text-slate-600">
            <a href="#projects" className="transition hover:text-accent">Projects</a>
            <a href="#skills" className="transition hover:text-accent">Skills</a>
            <Link to="/contact" className="rounded-full border border-slate-300 px-4 py-2 transition hover:border-accent hover:text-accent">
                Contact
            </Link>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-12 md:px-8">
        <section id="home" className="grid gap-8 md:grid-cols-[1fr,auto] md:items-center py-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">{hero.title}</h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">{hero.description}</p>
            <div className="mt-8">
              <a href="#projects" className="inline-flex rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-700">
                {hero.cta}
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative h-40 w-40 overflow-hidden rounded-full border border-slate-200 bg-slate-50 sm:h-48 sm:w-48">
              <img src={avatarUrl} alt="Avatar illustration" className="h-full w-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none' }} />
            </div>
          </div>
        </section>

        <section id="about" className="mt-20">
          <p className="text-sm uppercase tracking-[0.35em] text-accent">{about.heading}</p>
          <div className="mt-4 max-w-3xl">
            <p className="text-lg leading-relaxed text-slate-600">{about.body}</p>
            <ul className="mt-6 space-y-3 text-slate-600" role="list">
              {about.bullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-accent mt-1" aria-hidden="true">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="projects" className="mt-20">
          <p className="text-sm uppercase tracking-[0.35em] text-accent">Work</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950">Featured Projects</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article key={index} className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-soft transition hover:border-slate-300">
                <div>
                  <h3 className="text-xl font-semibold text-slate-950">{project.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} label={tag} />
                    ))}
                  </div>
                </div>
                <div className="mt-6 pt-4">
                  {/* Changed from standard anchor to React Router Links */}
                  <Link 
                    to={`/project/${project.slug}`} 
                    className="inline-flex text-sm font-semibold text-accent hover:underline"
                  >
                    View Details →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="mt-20">
          <p className="text-sm uppercase tracking-[0.35em] text-accent">Skills</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950">Core Expertise</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, index) => (
              <div key={index} className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-soft">
                <h3 className="font-semibold text-slate-950">{skill.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{skill.description}.</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-20 rounded-3xl border border-slate-200/90 bg-white p-8 shadow-soft sm:p-10">
          <div className="grid gap-6 md:grid-cols-[1.2fr,0.8fr] md:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-accent">Contact</p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-950">{contact.heading}</h2>
              <p className="mt-4 max-w-xl text-slate-600">Reach out by email to discuss your next project, collaboration, or a Web performance audit.</p>
            </div>
            <div className="flex items-center justify-start">
              <Link to="/contact" className="inline-flex rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-700">
                    {contact.button}
                </Link>
              
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 py-6 text-center text-sm text-slate-500">
        <p>© {new Date().getFullYear()} {hero.name}. All rights reserved.</p>
      </footer>
    </div>
  )
}