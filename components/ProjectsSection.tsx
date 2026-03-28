import Image from "next/image";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-8 bg-surface-container-lowest">
      <div className="max-w-screen-2xl mx-auto">
        <div className="mb-16 text-center">
          <span className="font-mono text-primary text-xs tracking-[0.2em] uppercase">
            Deployment History
          </span>
          <h2 className="font-headline text-5xl font-extrabold mt-4">
            CORE_PROJECTS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* ── Project 1: Tasks Bine — Large ── */}
          <div className="md:col-span-8 liquid-glass group overflow-hidden relative h-[500px]">
            <Image
              src="/projects/tasks-bine.png"
              alt="Tasks Bine"
              fill
              className="object-cover object-top opacity-25 group-hover:scale-105 group-hover:opacity-50 transition-all duration-1000"
              sizes="(max-width: 768px) 100vw, 66vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent p-12 flex flex-col justify-end">
              <div className="flex flex-wrap gap-2 mb-4">
                {["TypeScript", "VS Code Ext.", "mcp-use"].map((t) => (
                  <span key={t} className="px-2 py-1 liquid-glass text-primary text-[10px] font-mono">
                    {t.toUpperCase()}
                  </span>
                ))}
              </div>
              <h3 className="font-headline text-4xl font-bold mb-4">
                TASKS_BINE // PERSONAL MCP SERVER
              </h3>
              <p className="text-on-surface-variant max-w-lg mb-6">
                Built a personal MCP server in TypeScript that passively learns my behavior — terminal activity, browser context, downloads, and task patterns — so AI tools have full context of who I am without me repeating myself every time.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-primary font-mono text-sm hover:gap-4 transition-all"
              >
                VIEW_SOURCE{" "}
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
          </div>

          {/* ── Project 2: Entugo — Small ── */}
          <div className="md:col-span-4 liquid-glass group overflow-hidden relative flex flex-col">
            {/* Image + overlaid tech tags */}
            <div className="relative h-52 overflow-hidden shrink-0">
              <Image
                src="/projects/entugo-portfolio.png"
                alt="Entugo"
                fill
                className="object-cover object-top opacity-30 group-hover:opacity-55 group-hover:scale-105 transition-all duration-700"
                sizes="33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface/90" />

              {/* Tech tags — revealed on hover, sit at bottom of image */}
              <div className="absolute bottom-0 left-0 right-0 px-4 pb-3 pt-6 bg-gradient-to-t from-surface/95 to-transparent ease-out space-y-1.5">
                {[
                  { label: "FE", color: "text-primary", tags: ["React", "TailwindCSS", "ShadCN", "lucide-react"] },
                  { label: "BE", color: "text-secondary", tags: ["Node.js", "TypeScript", "Express", "Prisma", "PostgreSQL", "Stripe"] },
                  { label: "⬡", color: "text-tertiary", tags: ["TurboRepo", "Docker", "AWS", "Cloudflare"] },
                ].map(({ label, color, tags }) => (
                  <div key={label} className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
                    <span className={`font-mono text-[8px] ${color} opacity-50 uppercase tracking-widest w-5 shrink-0`}>
                      {label}
                    </span>
                    {tags.map((t) => (
                      <span
                        key={t}
                        className={`px-1.5 py-[1px] rounded-full border border-current ${color} font-mono text-[8px] opacity-70`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Card content */}
            <div className="p-8 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="font-headline text-2xl font-bold mb-3 uppercase">
                  Entugo_Platform
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Entugo, a microservices-based SaaS platform for restaurants with QR-driven customer engagement and loyalty systems, using Node.js, TypeScript, and PostgreSQL.
                  Designed scalable service architecture with an API Gateway, shared schema strategy, and async integrations for payments, notifications, and referrals.
                </p>
              </div>
              <div className="mt-6">
                <a
                  href="#experience"
                  className="w-full py-3 liquid-glass text-secondary font-mono text-xs hover:bg-secondary/10 transition-all uppercase flex items-center justify-center gap-2"
                >
                  VIEW_CASE_STUDY
                </a>
              </div>
            </div>
          </div>

          {/* ── Project 3: BakedAssets — Small ── */}
          <div className="md:col-span-4 liquid-glass group overflow-hidden relative flex flex-col">
            <div className="relative h-48 overflow-hidden shrink-0">
              <Image
                src="/projects/BakedAssets.png"
                alt="BakedAssets"
                fill
                className="object-cover object-top opacity-30 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                sizes="33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface/80" />
            </div>
            <div className="p-8 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="font-headline text-2xl font-bold mb-3 uppercase">
                  BakedAsset
                </h3>
                <p className="text-on-surface-variant text-sm">
                  100+ AI tools but still local business suffer to create websites.
                  Today website is not about code, its about thinking to convert landing page into an *asset* with this vision creating BakedAsset
                </p>
              </div>
              <div className="mt-6">
                {/* <div className="flex flex-wrap gap-2 mb-4">
                  {["React", "Express", "MongoDB", "CSS"].map((t) => (
                    <span key={t} className="text-[10px] font-mono text-tertiary opacity-70">
                      {t.toUpperCase()}
                    </span>
                  ))}
                </div> */}
                <span className="font-mono text-[10px] text-tertiary">
                  STATUS: BUILDING_ASSETS
                </span>
              </div>
            </div>
          </div>

          {/* ── Project 4: Medilink — Large ── */}
          <div className="md:col-span-8 liquid-glass group overflow-hidden relative h-[420px]">
            <Image
              src="/projects/medilink.png"
              alt="Medilink"
              fill
              className="object-cover object-top opacity-25 group-hover:scale-105 group-hover:opacity-45 transition-all duration-1000"
              sizes="(max-width: 768px) 100vw, 66vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/50 to-transparent p-12 flex flex-col justify-end ">
              <div className="flex gap-2 mb-4 flex-wrap">
                {["Next.js 15", "React 19", "TypeScript", "Tailwind 4", "Radix UI", "GSAP", "PWA", "Bun", "Express.js 5", "Prisma", "PostgreSQL", "JWT", "Twilio", "TurboRepo", "TypeScript", "ESLint"].map((t) => (
                  <span key={t} className="px-2 py-1 liquid-glass text-secondary text-[10px] font-mono">
                    {t.toUpperCase()}
                  </span>
                ))}
              </div>
              <h3 className="font-headline text-4xl font-bold mb-4">
                MEDILINK // HEALTHCARE PLATFORM
              </h3>
              <p className="text-on-surface-variant max-w-lg mb-5 text-sm leading-relaxed">
                Full-stack healthcare system bridging doctors and patients with
                digital prescriptions, encrypted document storage, and real-time
                medical record access — secured via JWT + RBAC and OTP verification.
              </p>

              <div className="flex items-center gap-6">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-secondary font-mono text-sm hover:gap-4 transition-all"
                >
                  VIEW_SOURCE{" "}
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </a>
                <span className="font-mono text-[10px] text-secondary/50 uppercase tracking-widest">
                  AI_INTEGRATION // IMAGE_ANALYSIS // REDUCE_FRICTION
                </span>
              </div>
            </div>

            <div className="hud-text absolute top-4 right-4">
              STACK: TURBOREPO // ENV: PRODUCTION
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
