import { SiGithub, SiInstagram, SiTelegram, SiWhatsapp } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";

const socialLinks = [
  { href: "https://github.com/GlaDrancE",          label: "GITHUB",    icon: SiGithub    },
  { href: "https://linkedin.com/in/ayush-ramteke", label: "LINKEDIN",  icon: FaLinkedinIn },
  { href: "https://instagram.com/Glad__Code",       label: "INSTAGRAM", icon: SiInstagram },
  { href: "https://t.me/GlaDrancE",                label: "TELEGRAM",  icon: SiTelegram  },
  { href: "https://wa.me/919049606217",             label: "WHATSAPP",  icon: SiWhatsapp  },
];

export default function Footer() {
  return (
    <footer className="w-full py-10 md:py-12 px-4 md:px-8 mt-12 md:mt-20 bg-[#060e20] border-t border-slate-800/50 relative z-10">
      <div className="max-w-screen-2xl mx-auto space-y-5 md:space-y-6">
        {/* Top row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 md:gap-6">
          <div className="text-cyan-400 font-bold font-mono text-lg md:text-xl">GladCode//</div>

          {/* Social icons */}
          <div className="flex items-center gap-4 md:gap-6 flex-wrap justify-center">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-slate-500 hover:text-cyan-300 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
            <a
              href="mailto:ayushr1606@gmail.com"
              aria-label="Email"
              className="text-slate-500 hover:text-cyan-300 transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">mail</span>
            </a>
          </div>
        </div>

        {/* Contact details row */}
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-x-6 gap-y-2 border-t border-slate-800/50 pt-5 md:pt-6">
          <a
            href="mailto:ayushr1606@gmail.com"
            className="font-mono text-[10px] md:text-[11px] text-slate-500 hover:text-cyan-300 transition-colors tracking-wider"
          >
            ayushr1606@gmail.com
          </a>
          <a
            href="tel:+919359339507"
            className="font-mono text-[10px] md:text-[11px] text-slate-500 hover:text-cyan-300 transition-colors tracking-wider"
          >
            +91 93593 39507
          </a>
          <a
            href="https://wa.me/919049606217"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] md:text-[11px] text-slate-500 hover:text-cyan-300 transition-colors tracking-wider"
          >
            WhatsApp: +91 90496 06217
          </a>
          <span className="font-mono text-[10px] md:text-[11px] text-slate-600 tracking-widest uppercase">
            ©2025 // GladCode
          </span>
        </div>
      </div>
    </footer>
  );
}
