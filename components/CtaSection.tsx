import { SiGithub, SiWhatsapp, SiTelegram } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";

const contactMethods = [
  {
    label: "EMAIL",
    value: "ayushr1606@gmail.com",
    href: "mailto:ayushr1606@gmail.com",
    color: "text-primary",
  },
  {
    label: "WHATSAPP",
    value: "+91 90496 06217",
    href: "https://wa.me/919049606217",
    color: "text-secondary",
  },
  {
    label: "PHONE",
    value: "+91 93593 39507",
    href: "tel:+919359339507",
    color: "text-tertiary",
  },
  {
    label: "TELEGRAM",
    value: "@GlaDrancE",
    href: "https://t.me/GlaDrancE",
    color: "text-primary",
  },
];

const quickLinks = [
  { icon: SiGithub,     label: "GitHub",   href: "https://github.com/GlaDrancE"          },
  { icon: FaLinkedinIn, label: "LinkedIn",  href: "https://linkedin.com/in/ayush-ramteke" },
  { icon: SiWhatsapp,   label: "WhatsApp",  href: "https://wa.me/919049606217"             },
  { icon: SiTelegram,   label: "Telegram",  href: "https://t.me/GlaDrancE"                },
];

export default function CtaSection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 max-w-4xl mx-auto">
      <div className="liquid-glass overflow-hidden rounded-sm">
        {/* Terminal title bar */}
        <div className="bg-surface-container-high/60 px-3 md:px-4 py-2 flex items-center gap-2 border-b border-outline-variant/20">
          <div className="flex gap-1.5">
            <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-error" />
            <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-tertiary" />
            <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-secondary" />
          </div>
          <span className="font-mono text-[9px] md:text-[10px] text-on-surface-variant ml-2 md:ml-4 uppercase tracking-widest truncate">
            ssh_connect.sh — ayush@gladcode
          </span>
        </div>

        {/* Terminal body */}
        <div className="p-5 md:p-8 font-mono text-xs md:text-sm leading-relaxed">
          {/* finger command */}
          <div className="flex gap-2 md:gap-3 mb-1">
            <span className="text-secondary">$</span>
            <span className="text-on-surface">finger ayush</span>
          </div>
          <div className="text-on-surface-variant mb-4 md:mb-6 pl-3 md:pl-4 border-l border-outline-variant/30 space-y-0.5 text-[11px] md:text-sm">
            <div>Login: <span className="text-primary">ayush</span> &nbsp; Name: <span className="text-on-surface">Ayush Ramteke</span></div>
            <div>Location: <span className="text-on-surface">Nagpur, India</span></div>
            <div>Role: <span className="text-on-surface">Full Stack Developer @ Entugo</span></div>
            <div>Status: <span className="text-secondary">AVAILABLE_FOR_FREELANCE</span></div>
            <div>Projects: <span className="text-on-surface">15+</span> &nbsp; Clients: <span className="text-on-surface">20+</span></div>
          </div>

          {/* contact --list command */}
          <div className="flex gap-2 md:gap-3 mb-1">
            <span className="text-secondary">$</span>
            <span className="text-on-surface">contact --list</span>
          </div>
          <div className="mb-4 md:mb-6 pl-3 md:pl-4 border-l border-outline-variant/30 space-y-1.5">
            {contactMethods.map((c) => (
              <div key={c.label} className="flex items-center gap-2 md:gap-3">
                <span className="text-outline w-16 md:w-20 text-[10px] md:text-[11px] uppercase tracking-wider shrink-0">{c.label}</span>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={`${c.color} hover:underline underline-offset-2 transition-all text-[11px] md:text-sm truncate`}
                >
                  {c.value}
                </a>
              </div>
            ))}
          </div>

          {/* open --channel command */}
          <div className="flex gap-2 md:gap-3 mb-3 md:mb-4">
            <span className="text-secondary">$</span>
            <span className="text-on-surface">open --channel email</span>
          </div>

          {/* Action row */}
          <div className="flex flex-wrap items-center gap-3 md:gap-4 pt-1 md:pt-2">
            <a
              href="mailto:ayushr1606@gmail.com"
              className="bg-primary text-on-primary px-4 md:px-6 py-2.5 md:py-3 font-bold hover:shadow-[0_0_20px_#81ecff] transition-all uppercase tracking-tighter text-[11px] md:text-sm"
            >
              Execute_Contact_Sequence
            </a>

            <div className="flex items-center gap-3 md:gap-4 ml-0 md:ml-2">
              {quickLinks.map((l) => {
                const Icon = l.icon;
                return (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={l.label}
                    className="text-outline hover:text-cyan-300 transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
