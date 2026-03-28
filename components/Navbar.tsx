import NavLogo from "@/components/NavLogo";

export default function Navbar() {
  const navLinks = [
    { href: "#about", label: "About", active: true },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#testimonials", label: "Testimonials" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#060e20]/60 backdrop-blur-xl shadow-[0_0_20px_rgba(0,229,255,0.1)]">
      <div className="flex justify-between items-center px-8 py-4 max-w-screen-2xl mx-auto">
        <NavLogo />

        <div className="hidden md:flex gap-8 items-center font-headline tracking-tight">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={
                link.active
                  ? "text-cyan-400 border-b-2 border-cyan-400 pb-1"
                  : "text-slate-400 hover:text-cyan-200 transition-colors"
              }
            >
              {link.label}
            </a>
          ))}
        </div>

        <button className="bg-primary text-on-primary px-4 py-2 font-mono text-sm font-bold scale-95 active:scale-90 transition-transform hover:bg-cyan-500/10 transition-all duration-300">
          RESUME.EXE
        </button>
      </div>

      <div className="bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent h-[1px] w-full absolute bottom-0" />
    </nav>
  );
}
