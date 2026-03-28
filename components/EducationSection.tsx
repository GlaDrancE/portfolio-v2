interface CredentialItem {
  icon: string;
  iconColor: string;
  degree: string;
  institution: string;
  period: string;
  detail: string;
  detailColor: string;
  filled?: boolean;
  status?: "pursuing" | "completed";
}

const credentials: CredentialItem[] = [
  {
    icon: "school",
    iconColor: "text-primary",
    degree: "B.Tech in Computer Science",
    institution: "Government College of Engineering, Amravati",
    period: "Pursuing // Jun 2027",
    detail: "STATUS: IN_PROGRESS",
    detailColor: "text-primary",
    status: "pursuing",
  },
  {
    icon: "menu_book",
    iconColor: "text-secondary",
    degree: "Diploma in Computer Science",
    institution: "Government Polytechnic, Sakoli",
    period: "Completed // Jun 2024",
    detail: "AGGREGATE: 89.37%",
    detailColor: "text-secondary",
    status: "completed",
  },
  {
    icon: "workspace_premium",
    iconColor: "text-tertiary",
    degree: "SSC — 10th Standard",
    institution: "Blue Diamond English High School, Nagpur",
    period: "Completed // 2021",
    detail: "SCORE: 80.00%",
    detailColor: "text-tertiary",
    filled: true,
    status: "completed",
  },
];

export default function EducationSection() {
  return (
    <section className="py-24 px-8 max-w-screen-2xl mx-auto">
      <div className="liquid-glass p-12 relative">
        <div className="absolute top-0 right-12 w-24 h-1 bg-primary" />

        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div className="max-w-sm">
            <span className="font-mono text-outline text-xs uppercase tracking-widest">
              Foundation
            </span>
            <h2 className="font-headline text-4xl font-bold mt-2 uppercase tracking-tight">
              Academic_Log
            </h2>
            <p className="text-on-surface-variant mt-4 leading-relaxed">
              Formal academic training in Computer Science — from foundational
              schooling through diploma to engineering degree.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                Currently Enrolled
              </span>
            </div>
          </div>

          <div className="flex-grow space-y-8">
            {credentials.map((cred) => (
              <div key={cred.degree} className="flex items-start gap-4 group">
                <div className="relative">
                  <span
                    className={`material-symbols-outlined ${cred.iconColor} text-3xl mt-0.5 transition-all duration-300`}
                    style={
                      cred.filled
                        ? { fontVariationSettings: "'FILL' 1" }
                        : undefined
                    }
                  >
                    {cred.icon}
                  </span>
                </div>

                <div className="flex-grow">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h4 className="font-bold text-lg uppercase tracking-tighter text-on-surface">
                      {cred.degree}
                    </h4>
                    {cred.status === "pursuing" ? (
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-primary/30 font-mono text-[9px] text-primary uppercase tracking-wider">
                        <span className="w-1 h-1 rounded-full bg-primary animate-pulse" />
                        Pursuing
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded-full border border-outline-variant/30 font-mono text-[9px] text-outline uppercase tracking-wider">
                        Completed
                      </span>
                    )}
                  </div>
                  <p className="text-on-surface-variant text-sm mt-0.5">
                    {cred.institution}
                  </p>
                  <div className="flex items-center gap-4 mt-1.5">
                    <span className="font-mono text-[10px] text-outline uppercase tracking-wider">
                      {cred.period}
                    </span>
                    <span className={`font-mono text-[10px] ${cred.detailColor} uppercase tracking-wider`}>
                      {cred.detail}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
