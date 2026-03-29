import Image from "next/image";
import { SiGithub } from "react-icons/si";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24 px-4 md:px-8 bg-surface-container-lowest">
      <div className="max-w-screen-2xl mx-auto">
        <div className="mb-10 md:mb-16 text-center">
          <span className="font-mono text-primary text-xs tracking-[0.2em] uppercase">
            Deployment History
          </span>
          <h2 className="font-headline text-3xl md:text-5xl font-extrabold mt-3 md:mt-4">
            CORE_PROJECTS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">

          {/* ── Project 1: Tasks Bine — Large ── */}
          <div className="md:col-span-8 liquid-glass group overflow-hidden relative h-[340px] md:h-[500px]">
            <Image
              src="/projects/tasks-bine.png"
              alt="Tasks Bine"
              fill
              className="object-cover object-top opacity-25 group-hover:scale-105 group-hover:opacity-50 transition-all duration-1000"
              sizes="(max-width: 768px) 100vw, 66vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent p-6 md:p-12 flex flex-col justify-end">
              <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
                {["TypeScript", "VS Code Ext.", "mcp-use"].map((t) => (
                  <span key={t} className="px-2 py-1 liquid-glass text-primary text-[9px] md:text-[10px] font-mono">
                    {t.toUpperCase()}
                  </span>
                ))}
              </div>
              <h3 className="font-headline text-xl md:text-4xl font-bold mb-2 md:mb-4">
                TASKS_BINE // PERSONAL MCP SERVER
              </h3>
              <p className="text-on-surface-variant text-xs md:text-base max-w-lg mb-4 md:mb-6 leading-relaxed line-clamp-3 md:line-clamp-none">
                Built a personal MCP server in TypeScript that passively learns my behavior — terminal activity, browser context, downloads, and task patterns — so AI tools have full context of who I am without me repeating myself every time.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/GlaDrancE/Tasks-Bine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-mono text-xs md:text-sm hover:gap-4 transition-all"
                >
                  <SiGithub className="w-3.5 h-3.5 shrink-0" />
                  VIEW_SOURCE
                  <span className="material-symbols-outlined text-base md:text-xl">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>

          {/* ── Project 2: Entugo — Small ── */}
          <div className="md:col-span-4 liquid-glass group overflow-hidden relative flex flex-col">
            {/* Image + overlaid tech tags */}
            <div className="relative h-44 md:h-52 overflow-hidden shrink-0">
              <Image
                src="/projects/entugo-portfolio.png"
                alt="Entugo"
                fill
                className="object-cover object-top opacity-30 group-hover:opacity-55 group-hover:scale-105 transition-all duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface/90" />

              {/* Tech tags overlay */}
              <div className="absolute bottom-0 left-0 right-0 px-3 md:px-4 pb-2 md:pb-3 pt-4 md:pt-6 bg-gradient-to-t from-surface/95 to-transparent ease-out space-y-1 md:space-y-1.5">
                {[
                  { label: "FE", color: "text-primary",  tags: ["React", "TailwindCSS", "ShadCN"] },
                  { label: "BE", color: "text-secondary", tags: ["Node.js", "Express", "Prisma", "Stripe"] },
                  { label: "⬡",  color: "text-tertiary",  tags: ["TurboRepo", "Docker", "AWS"] },
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
            <div className="p-5 md:p-8 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="font-headline text-xl md:text-2xl font-bold mb-2 md:mb-3 uppercase">
                  Entugo_Platform
                </h3>
                <p className="text-on-surface-variant text-xs md:text-sm leading-relaxed">
                  Microservices-based SaaS platform for restaurants with QR-driven customer engagement and loyalty systems. API Gateway, shared schema strategy, and async integrations for payments, notifications, and referrals.
                </p>
              </div>
              <div className="mt-4 md:mt-6 flex gap-2">
                <a
                  href="https://entugo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 md:py-3 liquid-glass text-secondary font-mono text-[10px] md:text-xs hover:bg-secondary/10 transition-all uppercase flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                  LIVE_SITE
                </a>
              </div>
            </div>
          </div>

          {/* ── Project 3: BakedAssets — Small ── */}
          <div className="md:col-span-4 liquid-glass group overflow-hidden relative flex flex-col">
            <div className="relative h-40 md:h-48 overflow-hidden shrink-0">
              <Image
                src="/projects/BakedAssets.png"
                alt="BakedAssets"
                fill
                className="object-cover object-top opacity-30 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface/80" />
            </div>
            <div className="p-5 md:p-8 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="font-headline text-xl md:text-2xl font-bold mb-2 md:mb-3 uppercase">
                  BakedAsset
                </h3>
                <p className="text-on-surface-variant text-xs md:text-sm">
                  100+ AI tools but local businesses still struggle with websites. Today a website is about converting a landing page into an <em>asset</em> — building BakedAsset with that vision.
                </p>
              </div>
              <div className="mt-4 md:mt-6 flex items-center justify-between">
                <span className="font-mono text-[10px] text-tertiary">
                  STATUS: BUILDING_ASSETS
                </span>
                <a
                  href="https://github.com/GlaDrancE/BakedAsset"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-outline hover:text-tertiary transition-colors"
                >
                  <SiGithub className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* ── Project 4: Medilink — Large ── */}
          <div className="md:col-span-8 liquid-glass group overflow-hidden relative h-[340px] md:h-[420px]">
            <Image
              src="/projects/medilink.png"
              alt="Medilink"
              fill
              className="object-cover object-top opacity-25 group-hover:scale-105 group-hover:opacity-45 transition-all duration-1000"
              sizes="(max-width: 768px) 100vw, 66vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/50 to-transparent p-6 md:p-12 flex flex-col justify-end">
              <div className="flex gap-1.5 md:gap-2 mb-3 md:mb-4 flex-wrap">
                {["Next.js 15", "React 19", "TypeScript", "Tailwind 4", "PWA", "Bun", "Express.js 5", "Prisma", "PostgreSQL", "JWT", "Twilio", "TurboRepo"].map((t) => (
                  <span key={t} className="px-1.5 md:px-2 py-0.5 md:py-1 liquid-glass text-secondary text-[8px] md:text-[10px] font-mono">
                    {t.toUpperCase()}
                  </span>
                ))}
              </div>
              <h3 className="font-headline text-xl md:text-4xl font-bold mb-2 md:mb-4">
                MEDILINK // HEALTHCARE PLATFORM
              </h3>
              <p className="text-on-surface-variant max-w-lg mb-3 md:mb-5 text-xs md:text-sm leading-relaxed line-clamp-2 md:line-clamp-none">
                Full-stack healthcare system bridging doctors and patients with digital prescriptions, encrypted document storage, and real-time medical record access — secured via JWT + RBAC and OTP verification.
              </p>

              <div className="flex flex-wrap items-center gap-3 md:gap-6">
                <a
                  href="https://mediglad.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-secondary font-mono text-xs md:text-sm hover:gap-4 transition-all"
                >
                  <span className="material-symbols-outlined text-sm md:text-base">open_in_new</span>
                  LIVE_DEMO
                </a>
                <a
                  href="https://github.com/GlaDrancE/Medilink"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-outline hover:text-secondary font-mono text-xs md:text-sm transition-all"
                >
                  <SiGithub className="w-3.5 h-3.5 shrink-0" />
                  VIEW_SOURCE
                </a>
                <span className="font-mono text-[8px] md:text-[10px] text-secondary/50 uppercase tracking-widest hidden sm:block">
                  PWA // ROLE_BASED_ACCESS // OTP_AUTH
                </span>
              </div>
            </div>

            <div className="hud-text absolute top-3 md:top-4 right-3 md:right-4 hidden sm:block">
              STACK: TURBOREPO // ENV: PRODUCTION
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
