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
      <div className="flex justify-between items-center px-4 md:px-8 py-3 md:py-4 max-w-screen-2xl mx-auto">
        <NavLogo />

        {/* Desktop nav links */}
        <div className="hidden md:flex gap-8 items-center font-headline tracking-tight">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={
                link.active
                  ? "text-cyan-400 border-b-2 border-cyan-400 pb-1 text-sm"
                  : "text-slate-400 hover:text-cyan-200 transition-colors text-sm"
              }
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile: icon-only quick nav + resume button */}
        <div className="flex items-center gap-2">
          {/* Mobile quick links — show 3 key sections as dots */}
          <div className="flex md:hidden gap-3 mr-1">
            {[
              { href: "#skills", icon: "terminal" },
              { href: "#projects", icon: "folder_open" },
              { href: "#experience", icon: "history" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-slate-500 hover:text-cyan-300 transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">{l.icon}</span>
              </a>
            ))}
          </div>

          <a
            href="/Gldsy.pdf"
            target="_blank"
            className="bg-primary text-on-primary px-3 md:px-4 py-1.5 md:py-2 font-mono text-xs md:text-sm font-bold active:scale-90 transition-transform hover:bg-cyan-500/10 transition-all duration-300 whitespace-nowrap"
          >
            <span className="hidden sm:inline">RESUME.EXE</span>
            <span className="sm:hidden">HIRE</span>
          </a>
        </div>
      </div>

      <div className="bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent h-[1px] w-full absolute bottom-0" />
    </nav>
  );
}
