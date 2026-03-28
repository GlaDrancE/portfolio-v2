import Image from "next/image";
import TypewriterBadge from "@/components/TypewriterBadge";
import HeroHeadline from "@/components/HeroHeadline";

export default function HeroSection() {
  return (
    <section
      id="about"
      className="min-h-screen pt-32 pb-20 px-8 max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center gap-16"
    >
      {/* Text content */}
      <div className="flex-1 space-y-6 relative">
        <TypewriterBadge />

        <HeroHeadline />

        <p className="text-on-surface-variant max-w-xl text-lg leading-relaxed">
          Senior Full-Stack Architect specializing in high-performance
          distributed systems and responsive interactive interfaces. I translate
          abstract problems into executable excellence.
        </p>

        <div className="flex gap-4 pt-4">
          <button className="bg-primary text-on-primary px-8 py-4 font-bold tracking-tight transition-all duration-300 hover:shadow-[0_0_30px_rgba(129,236,255,0.4)]">
            INITIATE_PROJECT
          </button>
          <button className="border border-primary/30 text-primary px-8 py-4 font-bold tracking-tight hover:bg-primary/5 transition-all">
            VIEW_REPOS
          </button>
        </div>

        <div className="hud-text mt-12 block">
          LOC_STACK: 452,092 // REPO_STATUS: CLEAN // LAST_DEPLOY: 14:22:01
        </div>
      </div>

      {/* Profile image */}
      <div className="flex-1 relative group">
        <div className="absolute -inset-10 bg-primary/10 blur-[120px] rounded-full opacity-30 group-hover:opacity-50 transition-opacity" />

        <div className="relative w-full aspect-square max-w-[500px] mx-auto overflow-visible flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-surface to-transparent opacity-60 z-10 rounded-full" />

          <div className="relative w-full h-full hero-mask">
            <Image
              src="https://lh3.googleusercontent.com/aida/ADBb0uiQEWFWAmLtSF9GrY-Nh2fGNS-4Y-9BlkJRZMHRoXwmwn1dtzaQAMjRsnrHEwD4F-v35f7AhbR7l7EMqEtNnXmzR3rzqhLctacKj2z_DYudZ3u3CVEqkU1WJoKxAsZWRskI-nywW61NViO_1FNyiUAVv0hd8fKKbJAidweBzOdbONbPhDpQMKEB0Fa28CeQoZZ05gafravPsO52zXwmm6qo9aYl9rpWXx8H0H2gkfOC3mZYDSusS1Ou2vWvIKUVRsoUb5gEWIj9"
              alt="Developer Profile"
              fill
              className="object-cover grayscale opacity-90 brightness-75 group-hover:grayscale-0 group-hover:opacity-100 group-hover:brightness-100 transition-all duration-1000 ease-in-out"
              sizes="(max-width: 768px) 100vw, 500px"
            />
          </div>

          {/* HUD corner brackets */}
          <div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-primary/30 pointer-events-none" />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b border-r border-primary/30 pointer-events-none" />
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-primary/10 -translate-y-1/2 scale-x-125 hidden md:block" />

          <div className="absolute bottom-8 left-8 font-mono text-[10px] text-primary/80 liquid-glass px-3 py-1.5 z-20">
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
