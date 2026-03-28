import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiDocker,
  SiGit,
  SiLinux,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiPython,
  SiFirebase,
  SiFigma,
  SiBootstrap,
  SiWebpack,
  SiNginx,
  SiNpm,
  SiVuedotjs,
  SiCplusplus,
  SiC,
  SiBabel,
  SiPhp,
  SiGooglecloud,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import type { IconType } from "react-icons";

interface Tech {
  name: string;
  icon: IconType;
}

interface TechGroup {
  label: string;
  accent: "primary" | "secondary" | "tertiary";
  techs: Tech[];
}

const groups: TechGroup[] = [
  {
    label: "Frontend",
    accent: "primary",
    techs: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Vue.js", icon: SiVuedotjs },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
    ],
  },
  {
    label: "Backend",
    accent: "secondary",
    techs: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "Python", icon: SiPython },
      { name: "PHP", icon: SiPhp },
      { name: "C++", icon: SiCplusplus },
      { name: "C", icon: SiC },
    ],
  },
  {
    label: "Database",
    accent: "tertiary",
    techs: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "Redis", icon: SiRedis },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
  {
    label: "DevOps & Tools",
    accent: "primary",
    techs: [
      { name: "AWS", icon: FaAws },
      { name: "Docker", icon: SiDocker },
      { name: "Google Cloud", icon: SiGooglecloud },
      { name: "Nginx", icon: SiNginx },
      { name: "Linux", icon: SiLinux },
      { name: "Git", icon: SiGit },
      { name: "npm", icon: SiNpm },
      { name: "Webpack", icon: SiWebpack },
      { name: "Babel", icon: SiBabel },
      { name: "Figma", icon: SiFigma },
    ],
  },
];

const accentClasses = {
  primary: {
    badge:
      "border-primary/20 hover:border-primary/60 hover:bg-primary/8 hover:text-primary",
    icon: "text-primary/60 group-hover:text-primary",
    label: "text-secondary",
    dot: "bg-primary",
  },
  secondary: {
    badge:
      "border-secondary/20 hover:border-secondary/60 hover:bg-secondary/8 hover:text-secondary",
    icon: "text-secondary/60 group-hover:text-secondary",
    label: "text-secondary",
    dot: "bg-secondary",
  },
  tertiary: {
    badge:
      "border-tertiary/20 hover:border-tertiary/60 hover:bg-tertiary/8 hover:text-tertiary",
    icon: "text-tertiary/60 group-hover:text-tertiary",
    label: "text-tertiary",
    dot: "bg-tertiary",
  },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24 px-4 md:px-8 bg-surface-container-low/30">
      <div className="max-w-screen-2xl mx-auto">
        {/* Section header */}
        <div className="flex items-end justify-between mb-8 md:mb-12 border-b border-outline-variant/20 pb-5 md:pb-6">
          <div>
            <span className="font-mono text-secondary text-xs tracking-widest uppercase">
              01 // Toolkit
            </span>
            <h2 className="font-headline text-2xl md:text-4xl font-bold text-on-surface mt-2">
              TECHNICAL_STACK
            </h2>
          </div>
          <span className="font-mono text-outline text-xs hidden md:block">
            RESOURCES_STABLE
          </span>
        </div>

        {/* Tech groups */}
        <div className="space-y-10">
          {groups.map((group) => {
            const accent = accentClasses[group.accent];
            return (
              <div key={group.label}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-1 h-1 rounded-full ${accent.dot}`} />
                  <span
                    className={`font-mono text-[10px] uppercase tracking-[0.18em] ${accent.label}`}
                  >
                    {group.label}
                  </span>
                  <div className="flex-grow h-px bg-outline-variant/20" />
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.techs.map((tech) => {
                    const Icon = tech.icon;
                    return (
                      <div
                        key={tech.name}
                        className={`group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border liquid-glass cursor-default transition-all duration-300 ${accent.badge}`}
                      >
                        <Icon
                          className={`w-3 h-3 shrink-0 transition-colors duration-300 ${accent.icon}`}
                        />
                        <span className="font-mono text-[11px] text-on-surface-variant group-hover:text-inherit transition-colors duration-300 leading-none">
                          {tech.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
