import { SiGithub, SiInstagram, SiTelegram } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";

const socialLinks = [
  {
    icon: SiGithub,
    href: "https://github.com/GlaDrancE",
    label: "GitHub",
  },
  {
    icon: FaLinkedinIn,
    href: "https://linkedin.com/in/ayush-ramteke",
    label: "LinkedIn",
  },
  {
    icon: SiInstagram,
    href: "https://instagram.com/Glad__Code",
    label: "Instagram",
  },
  {
    icon: SiTelegram,
    href: "https://t.me/GlaDrancE",
    label: "Telegram",
  },
];

export default function SideNav() {
  return (
    <aside className="fixed right-6 top-1/2 -translate-y-1/2 rounded-full py-6 bg-[#091328]/80 backdrop-blur-lg shadow-[0_0_30px_rgba(0,0,0,0.5)] z-40 hidden md:block">
      <div className="flex flex-col gap-6 items-center px-3">
        <div className="flex flex-col items-center gap-1 mb-2">
          <div className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_#62fae3]" />
          <span className="font-mono text-[8px] uppercase text-secondary tracking-widest">
            ONLINE
          </span>
        </div>

        {socialLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-slate-500 hover:text-cyan-300 transition-all duration-500 ease-in-out"
            >
              <Icon className="w-4 h-4" />
            </a>
          );
        })}

        {/* Mail icon using Material Symbols */}
        <a
          href="mailto:ayushr1606@gmail.com"
          aria-label="Email"
          className="text-slate-500 hover:text-cyan-300 transition-all duration-500 ease-in-out"
        >
          <span className="material-symbols-outlined text-[18px]">mail</span>
        </a>

        <div className="rotate-90 mt-6 mb-2">
          <span className="font-mono text-[10px] uppercase text-cyan-400 tracking-widest">
            CONTACT
          </span>
        </div>
      </div>
    </aside>
  );
}
