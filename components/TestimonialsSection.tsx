interface Testimonial {
  quote: string;
  name: string;
  platform: string;
  accentColor: string;
  featured?: boolean;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Friendly and attentive seller and cheap and quality service. I sent him some photos of how I wanted my website to look and he gave me some templates that were exactly what I asked for. He placed the order on time and in great detail.",
    name: "diegort99",
    platform: "Fiverr",
    accentColor: "text-primary",
    featured: true,
  },
  {
    quote: "Great developer. I really like working with him. I hope for continued cooperation.",
    name: "andrewrom",
    platform: "Fiverr",
    accentColor: "text-secondary",
    featured: true,
  },
  {
    quote: "Amazing job.",
    name: "nawafali2",
    platform: "Fiverr",
    accentColor: "text-tertiary",
  },
  {
    quote: "Thanks, great work as always.",
    name: "andrewrom",
    platform: "Fiverr",
    accentColor: "text-primary",
  },
  {
    quote: "Good experience.",
    name: "cemcol",
    platform: "Fiverr",
    accentColor: "text-secondary",
  },
  {
    quote: "Tnx :)",
    name: "web_dev46138",
    platform: "Fiverr",
    accentColor: "text-tertiary",
  },
];

function StarRating() {
  return (
    <div className="flex gap-0.5 mb-3 md:mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-3 h-3 text-primary fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const featured = testimonials.filter((t) => t.featured);
  const rest = testimonials.filter((t) => !t.featured);

  return (
    <section id="testimonials" className="py-16 md:py-24 px-4 md:px-8 max-w-screen-2xl mx-auto">
      <div className="text-center mb-10 md:mb-16">
        <h2 className="font-headline text-2xl md:text-4xl font-bold uppercase tracking-tight">
          Peer_Review
        </h2>
        <p className="text-on-surface-variant font-mono text-xs md:text-sm mt-2">
          Verified client feedback from Fiverr engagements.
        </p>
        <div className="flex items-center justify-center gap-2 mt-3 md:mt-4">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="font-mono text-xs text-primary tracking-widest">5.0 // 6 REVIEWS</span>
        </div>
      </div>

      {/* Featured (large) testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
        {featured.map((t) => (
          <div
            key={`${t.name}-featured`}
            className="liquid-glass p-6 md:p-8 relative border-b-2 border-primary/30"
          >
            <span className="absolute top-3 right-4 md:top-4 md:right-5 font-mono text-4xl md:text-5xl text-outline-variant opacity-10 select-none leading-none">
              &quot;
            </span>
            <StarRating />
            <p className="text-on-surface mb-5 md:mb-8 italic leading-relaxed text-sm md:text-base">
              &quot;{t.quote}&quot;
            </p>
            <div className="flex items-center gap-3 md:gap-4 border-t border-outline-variant/20 pt-4 md:pt-5">
              <div
                className={`w-8 h-8 md:w-9 md:h-9 rounded-sm liquid-glass flex items-center justify-center font-mono ${t.accentColor} font-bold text-xs`}
              >
                {t.name.slice(0, 2).toUpperCase()}
              </div>
              <div>
                <p className="font-bold text-sm uppercase tracking-tighter">
                  {t.name}
                </p>
                <p className="text-[10px] text-outline font-mono uppercase tracking-widest">
                  CLIENT // {t.platform}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Compact testimonials */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {rest.map((t, i) => (
          <div
            key={`${t.name}-${i}`}
            className="liquid-glass p-4 md:p-5 relative group hover:-translate-y-0.5 transition-transform duration-300"
          >
            <StarRating />
            <p className="text-on-surface-variant text-sm italic mb-4 md:mb-5 leading-relaxed">
              &quot;{t.quote}&quot;
            </p>
            <div className="flex items-center gap-2 md:gap-3 border-t border-outline-variant/20 pt-3 md:pt-4">
              <div
                className={`w-7 h-7 rounded-sm liquid-glass flex items-center justify-center font-mono ${t.accentColor} font-bold text-[10px]`}
              >
                {t.name.slice(0, 2).toUpperCase()}
              </div>
              <div>
                <p className="font-bold text-xs uppercase tracking-tighter">
                  {t.name}
                </p>
                <p className="text-[9px] text-outline font-mono uppercase tracking-widest">
                  {t.platform}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
