import Image from "next/image";
import TypewriterBadge from "@/components/TypewriterBadge";
import HeroHeadline from "@/components/HeroHeadline";

export default function HeroSection() {
  return (
    <section
      id="about"
      className="min-h-screen pt-20 md:pt-32 pb-16 md:pb-20 px-4 md:px-8 max-w-screen-2xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16"
    >
      {/* Text content — shown second on mobile (below image via flex-col-reverse) */}
      <div className="flex-1 space-y-6 md:space-y-6 relative w-full">
        <TypewriterBadge />

        {/* Extra bottom padding on mobile to absorb font-cycling visual overflow */}
        <div className="pb-6 md:pb-0">
          <HeroHeadline />
        </div>

        <p className="text-on-surface-variant max-w-xl text-base md:text-lg leading-relaxed">
          Full-Stack Developer specializing in microservices, scalable backends,
          and responsive interactive interfaces. I translate abstract problems
          into executable excellence.
        </p>

        <div className="flex flex-wrap gap-3 md:gap-4 pt-2 md:pt-4">
          <a
            href="mailto:ayushr1606@gmail.com"
            className="bg-primary text-on-primary px-5 md:px-8 py-3 md:py-4 font-bold tracking-tight text-sm md:text-base transition-all duration-300 hover:shadow-[0_0_30px_rgba(129,236,255,0.4)]"
          >
            INITIATE_PROJECT
          </a>
          <a
            href="https://github.com/GlaDrancE"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-primary/30 text-primary px-5 md:px-8 py-3 md:py-4 font-bold tracking-tight text-sm md:text-base hover:bg-primary/5 transition-all"
          >
            VIEW_REPOS
          </a>
        </div>

        <div className="hud-text mt-6 md:mt-12 block hidden sm:block">
          LOC_STACK: 452,092 // REPO_STATUS: CLEAN // LAST_DEPLOY: 14:22:01
        </div>
      </div>

      {/* Profile image — shown first on mobile (top via flex-col-reverse) */}
      <div className="flex-1 relative group w-full">
        <div className="absolute -inset-6 md:-inset-10 bg-primary/10 blur-[80px] md:blur-[120px] rounded-full opacity-30 group-hover:opacity-50 transition-opacity" />

        <div className="relative w-full aspect-square max-w-[280px] sm:max-w-[360px] md:max-w-[500px] mx-auto overflow-visible flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-surface to-transparent opacity-60 z-10 rounded-full" />

          <div className="relative w-full h-full hero-mask">
            <Image
              src="https://lh3.googleusercontent.com/aida/ADBb0uiQEWFWAmLtSF9GrY-Nh2fGNS-4Y-9BlkJRZMHRoXwmwn1dtzaQAMjRsnrHEwD4F-v35f7AhbR7l7EMqEtNnXmzR3rzqhLctacKj2z_DYudZ3u3CVEqkU1WJoKxAsZWRskI-nywW61NViO_1FNyiUAVv0hd8fKKbJAidweBzOdbONbPhDpQMKEB0Fa28CeQoZZ05gafravPsO52zXwmm6qo9aYl9rpWXx8H0H2gkfOC3mZYDSusS1Ou2vWvIKUVRsoUb5gEWIj9"
              alt="Developer Profile"
              fill
              priority
              className="object-cover grayscale opacity-90 brightness-75 group-hover:grayscale-0 group-hover:opacity-100 group-hover:brightness-100 transition-all duration-1000 ease-in-out"
              sizes="(max-width: 640px) 280px, (max-width: 768px) 360px, 500px"
            />
          </div>

          {/* HUD corner brackets */}
          <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-16 h-16 md:w-24 md:h-24 border-t border-l border-primary/30 pointer-events-none" />
          <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 w-16 h-16 md:w-24 md:h-24 border-b border-r border-primary/30 pointer-events-none" />
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-primary/10 -translate-y-1/2 scale-x-125 hidden md:block" />

          <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 font-mono text-[9px] md:text-[10px] text-primary/80 liquid-glass px-2 md:px-3 py-1 md:py-1.5 z-20">
            <span className="animate-pulse">●</span> BIOMETRIC_ID: USER_8842_X
          </div>

          <div className="hud-text absolute top-0 right-[-60px] whitespace-nowrap rotate-90 hidden lg:block">
            SCANNING_FACIAL_NODES... [OK]
          </div>
        </div>
      </div>
    </section>
  );
}
