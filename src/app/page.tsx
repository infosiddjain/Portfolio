import { AboutSection } from "@/components/AboutSection";
import { BlogsSection } from "@/components/BlogsSection";
import { ContactSection } from "@/components/ContactSection";
import { EducationSection } from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import { SkillsSection } from "@/components/SkillsSection";

export default function Home() {
  return (
    <div className="text-black text-base not-italic normal-nums font-normal accent-auto bg-gray-900 box-border block tracking-[normal] leading-6 list-outside list-disc text-start indent-[0px] normal-case visible border-separate font-inter">
      <div className="box-border"></div>
      <main className="relative text-white box-border max-w-none min-h-[1000px] mx-auto px-6 md:max-w-[1216px] md:px-12">
        <Header />
        <div className="box-border">
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <ProjectsSection />
          <EducationSection />
          <BlogsSection />
          <ContactSection />
        </div>
        <ScrollToTopButton />
      </main>
      <Footer />
      <div className="absolute box-border block"></div>
    </div>
  );
}
