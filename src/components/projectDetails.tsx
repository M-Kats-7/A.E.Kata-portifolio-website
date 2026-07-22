import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/portfolio'

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((p) => p.slug === slug)

  // Automatically scroll to the top of the view when mounting this subpage
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6">
        <h1 className="text-2xl font-bold text-slate-950">Case Study Not Found</h1>
        <Link to="/" className="mt-4 inline-flex rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-700">
          Return Home
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      {/* Detail View Header Header */}
      <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8">
          <Link to="/" className="text-lg font-semibold tracking-tight text-slate-900">
            ← Back to Portfolio
          </Link>
        </div>
      </header>

      {/* Main Study Presentation Area */}
      <main className="flex-grow mx-auto max-w-4xl px-6 py-12 w-full md:px-8">
        <div className="rounded-3xl border border-slate-200/90 bg-white p-8 shadow-sm sm:p-12">
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span key={tag} className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl sm:text-4xl font-semibold text-slate-950 tracking-tight">
            {project.title}
          </h1>

          <div className="mt-8 grid gap-8 md:grid-cols-3 items-start">
            {/* Deep Technical Case Breakdown */}
            <div className="md:col-span-2 space-y-6 text-slate-600 leading-relaxed">
              <section>
                <h2 className="text-lg font-medium text-slate-950 mb-2">Project Overview</h2>
                <p>{project.longDescription || project.description}</p>
              </section>

              {project.features && (
                <section>
                  <h2 className="text-lg font-medium text-slate-950 mb-3">Key Features & Implementations</h2>
                  <ul className="space-y-3">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <span className="text-accent font-bold mr-2">▪</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>

            {/* Sidebar Details Block */}
            <div className="rounded-2xl bg-slate-50 border border-slate-200/60 p-6 space-y-4">
              <div>
                <h3 className="text-xs uppercase tracking-wider text-slate-400 font-bold">Role</h3>
                <p className="text-sm font-medium text-slate-800">Primary Software Engineer</p>
              </div>
              <hr className="border-slate-200" />
              <div>
                <h3 className="text-xs uppercase tracking-wider text-slate-400 font-bold">Source Code</h3>
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="mt-1 inline-flex text-sm font-semibold text-accent hover:underline"
                >
                  View Repository ↗
                </a>
              </div>
            </div>
          </div>

        </div>
      </main>

      <footer className="border-t border-slate-200 bg-white py-6 text-center text-sm text-slate-500">
        <p>© {new Date().getFullYear()} Alvin Edward Katabalwa. All rights reserved.</p>
      </footer>
    </div>
  )
}