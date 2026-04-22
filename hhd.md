# Build Harper Hill Digital Landing Page

## Objective

Create and deploy a production-ready landing page for **Harper Hill Digital** using **React + Vite + Tailwind CSS**, with source control in GitHub and hosting on Netlify.

This should result in:
- a local working project
- a GitHub repo with the full source
- a live Netlify deployment
- a clean one-page marketing site for Harper Hill Digital
- a contact section that is visually complete and ready for Netlify form handling

Do not stop at giving instructions. Perform the implementation.

---

## Project Context

Harper Hill Digital is a small digital studio. The site should position the business as:
- a builder of practical digital products
- a consulting partner for turning ideas into working software
- the home for projects such as **Plain Old Math**

Tone:
- clean
- modern
- restrained
- credible
- not hypey
- not corporate-agency fluff

The site should feel like a real small business, not a design exercise.

---

## Tech Stack

Use:
- **Vite**
- **React**
- **Tailwind CSS**

Use plain React unless TypeScript is already the default preference in the environment. JavaScript is fine.

---

## Deliverables

1. Scaffold a Vite React app
2. Add Tailwind CSS
3. Replace starter content with the Harper Hill Digital landing page
4. Ensure the page renders correctly locally
5. Initialize git if needed
6. Commit the code
7. Push to GitHub repo
8. Connect repo to Netlify
9. Deploy successfully
10. Return:
   - local project structure summary
   - GitHub repo URL
   - Netlify live URL
   - any follow-up items that still need manual input (for example domain DNS)

---

## Site Requirements

### Global requirements
- Single-page landing page
- Responsive
- Clean spacing
- White / slate style palette
- No loud gradients
- No unnecessary animations
- No stock photos required
- No placeholder lorem ipsum
- No fake testimonials
- No fake stats
- No fake logos
- No dark-pattern CTAs

### Navigation
Header should include:
- Harper Hill Digital
- About
- Projects
- Contact

### Hero section
Include:
- Winston-Salem, North Carolina badge
- headline: `Practical software, thoughtfully built.`
- supporting copy:
  `Harper Hill Digital builds useful digital products and helps businesses turn ideas, bottlenecks, and rough concepts into working software.`
- primary CTA to contact section
- secondary CTA to projects section

### About section
Include:
- heading introducing the company as a small digital studio
- copy explaining that Harper Hill Digital is the home for independent software products and consulting work
- emphasis on solving real problems simply

### What We Do section
Include three blocks:
- Product development
- AI-assisted execution
- Consulting

Use the following ideas in the copy:
- web apps, internal tools, software products
- AI used to accelerate planning, prototyping, development, and iteration
- practical help for shaping product ideas and getting software built

### Projects section
Include heading and intro copy.

Include two cards:
1. **Plain Old Math**
   - described as a simple, approachable math tool for kids
   - mention progress tracking and confidence building
   - note that it is an early public-facing project from Harper Hill Digital

2. **Consulting**
   - framed as help for getting a project moving
   - rough ideas, internal workflows, and product launch support
   - product thinking, technical guidance, and execution support

### Supporting value section
Three cards:
- Built for usefulness
- Modern workflows
- Personal attention

### Contact section
Dark section near footer.

Include:
- heading: `Let’s talk about what you’re building.`
- short supporting paragraph
- contact form UI with fields:
  - name
  - email
  - project description
  - send inquiry button

For now, make the form Netlify-ready:
- use a real `<form>`
- include `name="contact"`
- include `method="POST"`
- include `data-netlify="true"`
- include hidden input for `form-name`
- include honeypot field support if easy

Form does not need advanced validation yet.

### Footer
Footer must read:
`© 2026 Harper Hill Digital, LLC. All rights reserved.`

---

## Current Page Code To Implement

Use this as the base content and structure. Improve only where necessary for correctness, buildability, or Netlify form readiness.

```jsx
export default function HarperHillDigitalLandingPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10 lg:px-12">
          <div className="text-sm font-semibold tracking-tight text-slate-900">
            Harper Hill Digital
          </div>
          <nav className="flex items-center gap-6 text-sm text-slate-600">
            <a href="#about" className="hover:text-slate-900">About</a>
            <a href="#projects" className="hover:text-slate-900">Projects</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
        </div>
      </header>

      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 lg:px-12">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-600">
              Winston-Salem, North Carolina
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
              Practical software, thoughtfully built.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              Harper Hill Digital builds useful digital products and helps businesses turn ideas,
              bottlenecks, and rough concepts into working software.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="rounded-2xl bg-slate-900 px-5 py-3 text-center text-sm font-medium text-white shadow-sm transition hover:opacity-90"
              >
                Start a conversation
              </a>
              <a
                href="#projects"
                className="rounded-2xl border border-slate-300 px-5 py-3 text-center text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                See what we’re building
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:px-10 lg:grid-cols-2 lg:px-12">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">About</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
              A small digital studio with room to build.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Harper Hill Digital is the home for independent software products and consulting work.
              The focus is straightforward: build tools that solve real problems, keep the experience
              simple, and ship useful things.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">What we do</p>
            <div className="mt-4 space-y-4 text-slate-600">
              <div>
                <h3 className="font-medium text-slate-900">Product development</h3>
                <p className="mt-1 leading-7">
                  Building web apps, internal tools, and software products from idea to working release.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-slate-900">AI-assisted execution</h3>
                <p className="mt-1 leading-7">
                  Using modern AI workflows to move faster on planning, prototyping, development,
                  and iteration.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-slate-900">Consulting</h3>
                <p className="mt-1 leading-7">
                  Helping teams think through product ideas, workflows, and practical ways to get
                  software built.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 lg:px-12">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Projects</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Current work in progress
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Harper Hill Digital is building products of its own while also making room to help
              other people bring ideas to life.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-600">
                Featured product
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-slate-950">Plain Old Math</h3>
              <p className="mt-3 leading-7 text-slate-600">
                A simple, approachable math tool designed to help kids practice skills, build
                confidence, and keep progress visible over time.
              </p>
              <p className="mt-4 text-sm text-slate-500">
                Early public-facing project from Harper Hill Digital.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-600">
                Consulting
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-slate-950">Need help getting a project moving?</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Whether you have a rough idea, an internal workflow that needs improvement, or a
                product you want to get off the ground, Harper Hill Digital can help shape the next
                step and turn it into something real.
              </p>
              <p className="mt-4 text-sm text-slate-500">
                Product thinking, technical guidance, and execution support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 lg:px-12">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 p-7 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-950">Built for usefulness</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Clear, practical software with a bias toward simplicity over noise.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 p-7 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-950">Modern workflows</h3>
              <p className="mt-3 leading-7 text-slate-600">
                AI-assisted development used where it helps, with judgment still leading the work.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 p-7 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-950">Personal attention</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Small enough to stay focused, flexible enough to adapt as the work becomes clearer.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-start">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">Contact</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Let’s talk about what you’re building.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                Have an idea, a project, or a process that needs a better path forward? Reach out and
                start the conversation.
              </p>
            </div>

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />
              <div className="grid gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:outline-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:outline-none"
                />
                <textarea
                  name="message"
                  placeholder="Tell me a little about your project"
                  rows={5}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-slate-950 transition hover:opacity-90"
                >
                  Send inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-slate-500 md:px-10 lg:px-12">
          © 2026 Harper Hill Digital, LLC. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
