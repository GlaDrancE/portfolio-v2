import type { Metadata } from "next";
import HudOverlay from "@/components/HudOverlay";
import Navbar from "@/components/Navbar";
import SideNav from "@/components/SideNav";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Full-Stack Developer",
  description:
    "Full-stack developer portfolio of Ayush Ramteke (GladCode) covering Next.js, Node.js, microservices, cloud deployment, and production web apps.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ayush Ramteke",
    alternateName: "GladCode",
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    jobTitle: "Full-Stack Developer",
    email: "mailto:ayushr1606@gmail.com",
    telephone: "+91-93593-39507",
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Microservices",
      "PostgreSQL",
      "AWS",
      "Docker",
      "Prisma",
    ],
    sameAs: [
      "https://github.com/GlaDrancE",
      "https://linkedin.com/in/ayush-ramteke",
      "https://instagram.com/Glad__Code",
      "https://t.me/GlaDrancE",
    ],
  };

  const webSiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
      />
      <HudOverlay />
      <Navbar />
      <SideNav />
      <main className="relative z-10">
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
