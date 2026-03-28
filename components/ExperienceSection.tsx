interface ExperienceEntry {
  period: string;
  role: string;
  company: string;
  location: string;
  companyColor: string;
  bulletColor: string;
  accentBorder: string;
  highlights: string[];
  tags?: string[];
  showVerified?: boolean;
}

const experiences: ExperienceEntry[] = [
  {
    period: "NOV 2024 — PRESENT",
    role: "Senior Developer",
    company: "Entugo LLC",
    location: "Remote",
    companyColor: "text-primary",
    bulletColor: "text-primary",
    accentBorder: "border-l-4 border-primary",
    showVerified: true,
    tags: ["Microservices", "AWS", "Docker", "Stripe", "TurboRepo", "Vitest"],
    highlights: [
      "Architected a 6-service microservices backend (Auth, Payments, Notifications) with a centralized API Gateway, enabling independent scaling, RBAC enforcement, and elimination of cross-service dependency conflicts across portals.",
      "Led a 3-engineer team and implemented CI/CD via GitHub Actions with Docker; deployed to AWS (EC2, RDS/Aurora, S3), reducing PR review cycles from ~5 days to ~3 days and eliminating manual release errors.",
      "Automated QR-based loyalty workflows and integrated Stripe (subscriptions, webhooks, refunds) with idempotency and retry logic — processing 300+ transactions in QA and cutting staff validation workload by ~60%.",
      "Structured a TurboRepo monorepo with a shared Prisma client and achieved ~75% automated test coverage via Vitest, reducing setup time from ~2 hours to ~25 minutes and post-release regressions.",
    ],
  },
  {
    period: "APR 2023 — AUG 2024",
    role: "Junior Developer",
    company: "Newwton LLC",
    location: "Remote",
    companyColor: "text-secondary",
    bulletColor: "text-secondary",
    accentBorder: "border-l-4 border-outline-variant group-hover:border-secondary",
    tags: ["React", "Three.js", "Python", "NFC"],
    highlights: [
      "Integrated RESTful APIs across 3+ core product features in React, resolving authentication token edge cases and state management issues causing intermittent failures in CrypTag NFC workflows.",
      "Engineered performance-optimized Three.js 3D interactive components with improved render-state management, eliminating animation stutter on lower-end devices.",
      "Hardened a Python-based NFC tag validation backend by strengthening input verification logic, reducing invalid tag attempts reaching the authentication layer.",
    ],
  },
  {
    period: "JUN 2023 — JUL 2023",
    role: "Python Dev Intern",
    company: "IANT LLC",
    location: "Nagpur",
    companyColor: "text-tertiary",
    bulletColor: "text-tertiary",
    accentBorder: "border-l-4 border-outline-variant group-hover:border-tertiary",
    tags: ["Python", "SQLite", "GUI"],
    highlights: [
      "Developed a GUI-based Password Generator application in Python with SQLite database integration for persistent storage and record management.",
    ],
  },
  {
    period: "JUL 2021 — MAR 2023",
    role: "Freelance Web Developer",
    company: "Fiverr",
    location: "Independent — Remote",
    companyColor: "text-secondary",
    bulletColor: "text-secondary",
    accentBorder: "border-l-4 border-outline-variant group-hover:border-secondary",
    tags: ["HTML", "CSS", "JavaScript", "Client Work"],
    highlights: [
      "Ran an independent freelance practice while completing a Diploma in Computer Science — managed full project lifecycle: scoping, development, deployment, and post-launch support.",
      "Delivered 15+ client web applications end-to-end with a 100% on-time delivery rate and a 5.0/5 client satisfaction rating.",
      "Built responsive, cross-browser applications across 3+ industries (e-commerce, services, portfolio) from requirements analysis through production deployment.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24 px-4 md:px-8 max-w-screen-2xl mx-auto">
      <div className="flex items-center gap-4 mb-10 md:mb-16">
        <h2 className="font-headline text-2xl md:text-4xl font-bold shrink-0">CAREER_LOG</h2>
        <div className="flex-grow h-[1px] bg-gradient-to-r from-outline-variant/50 to-transparent" />
        <span className="font-mono text-outline text-xs hidden md:block">
          {experiences.length}_ENTRIES
        </span>
      </div>

      <div className="space-y-8 md:space-y-10">
        {experiences.map((exp) => (
          <div
            key={`${exp.company}-${exp.period}`}
            className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-3 md:gap-6 group"
          >
            {/* Sidebar: date + location — inline on mobile */}
            <div className="md:pt-1 flex md:flex-col gap-2 md:gap-1">
              <div className="font-mono text-[10px] md:text-xs text-outline uppercase tracking-wider">
                {exp.period}
              </div>
              <div className="font-mono text-[9px] md:text-[10px] text-outline-variant uppercase tracking-widest">
                {exp.location}
              </div>
            </div>

            {/* Card */}
            <div className={`liquid-glass p-4 md:p-8 transition-all duration-300 ${exp.accentBorder}`}>
              {/* Header */}
              <div className="flex flex-wrap justify-between items-start gap-2 mb-4 md:mb-5">
                <div>
                  <h3 className="text-base md:text-xl font-bold text-on-surface font-headline uppercase tracking-tight">
                    {exp.role}
                  </h3>
                  <p className={`${exp.companyColor} font-mono text-xs md:text-sm uppercase mt-0.5`}>
                    {exp.company}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-1.5 md:gap-2">
                  {exp.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-full border border-outline-variant/30 font-mono text-[8px] md:text-[9px] text-outline uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                  {exp.showVerified && (
                    <span
                      className={`material-symbols-outlined ${exp.companyColor} opacity-60 text-lg md:text-xl`}
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      verified
                    </span>
                  )}
                </div>
              </div>

              {/* Bullets */}
              <ul className="space-y-2 md:space-y-2.5">
                {exp.highlights.map((item, i) => (
                  <li key={i} className="flex gap-2 md:gap-3 text-xs md:text-sm text-on-surface-variant leading-relaxed">
                    <span className={`${exp.bulletColor} mt-0.5 text-[10px] md:text-xs font-mono shrink-0`}>
                      &gt;&gt;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
