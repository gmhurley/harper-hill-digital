import Logo from './Logo'

export default function App() {
  return (
    <main className="min-h-screen bg-white font-sans text-ink">
      <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between md:gap-0 md:px-10 lg:px-12">
          <div className="flex items-center gap-3">
            <Logo className="h-8 w-8 md:h-9 md:w-9" />
            <span className="font-display text-xl font-bold text-ink md:text-2xl">Harper Hill Digital</span>
          </div>
          <nav className="flex items-center gap-6 text-sm font-medium text-ink/80 md:gap-8 md:text-[14.5px]">
            <a href="#about" className="hover:text-ink">About</a>
            <a href="#projects" className="hover:text-ink">Projects</a>
            <a href="#contact" className="font-bold text-coral-nav hover:opacity-80">Contact</a>
          </nav>
        </div>
      </header>

      <section className="border-b border-black/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-6 md:py-20 md:px-10 lg:px-12">
          <div className="max-w-3xl">
            <span className="mb-4 inline-flex items-center rounded-full border border-coral-border bg-coral-tint px-3.5 py-1.5 text-[12.5px] font-semibold text-coral-dark">
              Winston-Salem, North Carolina
            </span>
            <h1 className="font-display max-w-xl text-4xl font-bold leading-[1.08] text-ink md:text-5xl">
              Practical software, thoughtfully built.
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-body md:text-[17px]">
              Harper Hill Digital builds useful digital products and helps businesses turn ideas,
              bottlenecks, and rough concepts into working software.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row md:mt-8">
              <a
                href="#contact"
                className="rounded-[9px] bg-ink px-6 py-3.5 text-center text-[15px] font-semibold text-white shadow-sm transition hover:opacity-90"
              >
                Start a conversation
              </a>
              <a
                href="#projects"
                className="rounded-[9px] border border-black/15 px-6 py-3.5 text-center text-[15px] font-semibold text-ink transition hover:bg-black/[0.03]"
              >
                See what we're building
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-b border-black/[0.06]">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:px-10 lg:grid-cols-2 lg:px-12">
          <div className="rounded-2xl bg-card p-8">
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-coral">About</p>
            <h2 className="font-display mt-4 text-2xl font-bold text-ink">
              A small digital studio with room to build.
            </h2>
            <p className="mt-3 text-[14.5px] leading-relaxed text-body">
              Harper Hill Digital is the home for independent software products and consulting work.
              The focus is straightforward: build tools that solve real problems, keep the experience
              simple, and ship useful things.
            </p>
          </div>

          <div className="p-8">
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-coral">What we do</p>
            <div className="mt-4 space-y-5">
              <div>
                <h3 className="font-display text-[15.5px] font-bold text-ink">Product development</h3>
                <p className="mt-1 text-[14.5px] leading-relaxed text-body">
                  Building web apps, internal tools, and software products from idea to working release.
                </p>
              </div>
              <div>
                <h3 className="font-display text-[15.5px] font-bold text-ink">AI-assisted execution</h3>
                <p className="mt-1 text-[14.5px] leading-relaxed text-body">
                  Using modern AI workflows to move faster on planning, prototyping, development,
                  and iteration.
                </p>
              </div>
              <div>
                <h3 className="font-display text-[15.5px] font-bold text-ink">Consulting</h3>
                <p className="mt-1 text-[14.5px] leading-relaxed text-body">
                  Helping teams think through product ideas, workflows, and practical ways to get
                  software built.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="border-b border-black/[0.06] bg-card">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 lg:px-12">
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-coral">Projects</p>
            <h2 className="font-display mt-4 text-3xl font-bold text-ink">
              Current work in progress
            </h2>
            <p className="mt-3 text-[15.5px] leading-relaxed text-body">
              Harper Hill Digital is building products of its own while also making room to help
              other people bring ideas to life.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-black/[0.06] bg-white p-7">
              <span className="inline-flex rounded-md bg-black/[0.04] px-2.5 py-1 font-mono text-[10.5px] font-semibold uppercase tracking-[0.08em] text-muted">
                Featured product
              </span>
              <h3 className="font-display mt-4 text-xl font-bold text-ink">Plain Old Math</h3>
              <p className="mt-2.5 text-[14.5px] leading-relaxed text-body">
                A simple, approachable math tool designed to help kids practice skills, build
                confidence, and keep progress visible over time.
              </p>
              <p className="mt-4 text-[13px] text-muted">
                Early public-facing project from Harper Hill Digital.
              </p>
            </div>

            <div className="rounded-2xl border border-black/[0.06] bg-white p-7">
              <span className="inline-flex rounded-md bg-black/[0.04] px-2.5 py-1 font-mono text-[10.5px] font-semibold uppercase tracking-[0.08em] text-muted">
                Consulting
              </span>
              <h3 className="font-display mt-4 text-xl font-bold text-ink">Need help getting a project moving?</h3>
              <p className="mt-2.5 text-[14.5px] leading-relaxed text-body">
                Whether you have a rough idea, an internal workflow that needs improvement, or a
                product you want to get off the ground, Harper Hill Digital can help shape the next
                step and turn it into something real.
              </p>
              <p className="mt-4 text-[13px] text-muted">
                Product thinking, technical guidance, and execution support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 lg:px-12">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="inline-block border-b-[2.5px] border-coral pb-2 font-display text-base font-bold text-ink">
                Built for usefulness
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-body">
                Clear, practical software with a bias toward simplicity over noise.
              </p>
            </div>
            <div className="md:border-l md:border-black/[0.08] md:pl-8">
              <h3 className="inline-block border-b-[2.5px] border-coral pb-2 font-display text-base font-bold text-ink">
                Modern workflows
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-body">
                AI-assisted development used where it helps, with judgment still leading the work.
              </p>
            </div>
            <div className="md:border-l md:border-black/[0.08] md:pl-8">
              <h3 className="inline-block border-b-[2.5px] border-coral pb-2 font-display text-base font-bold text-ink">
                Personal attention
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-body">
                Small enough to stay focused, flexible enough to adapt as the work becomes clearer.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-black/[0.06] bg-ink text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-start">
            <div>
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-coral">Contact</p>
              <h2 className="font-display mt-4 text-3xl font-bold leading-tight md:text-4xl">
                Let's talk about what you're building.
              </h2>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/70">
                Have an idea, a project, or a process that needs a better path forward? Reach out and
                start the conversation.
              </p>
            </div>

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="rounded-2xl bg-white/[0.06] p-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>Don't fill this out: <input name="bot-field" /></label>
              </p>
              <div className="grid gap-3.5">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="rounded-lg border border-white/15 bg-white/[0.04] px-4 py-3.5 text-sm text-white placeholder:text-white/40 focus:border-coral focus:outline-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  className="rounded-lg border border-white/15 bg-white/[0.04] px-4 py-3.5 text-sm text-white placeholder:text-white/40 focus:border-coral focus:outline-none"
                />
                <textarea
                  name="message"
                  placeholder="Tell me a little about your project"
                  rows={5}
                  className="rounded-lg border border-white/15 bg-white/[0.04] px-4 py-3.5 text-sm text-white placeholder:text-white/40 focus:border-coral focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-coral px-5 py-3.5 text-[14.5px] font-bold text-ink transition hover:opacity-90"
                >
                  Send inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/[0.06] bg-white">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-muted md:px-10 lg:px-12">
          © 2026 Harper Hill Digital, LLC. All rights reserved.
        </div>
      </footer>
    </main>
  )
}
