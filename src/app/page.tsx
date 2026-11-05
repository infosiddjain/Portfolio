import { AboutSection } from "@/components/AboutSection";
import { AppsShowcase } from "@/components/AppsShowcase";
import { ContactSection } from "@/components/ContactSection";
import ExperienceSection from "@/components/ExperienceSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { MarqueeBand } from "@/components/MarqueeBand";
import { Preloader } from "@/components/motion/Preloader";
import { ProcessSection } from "@/components/ProcessSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import { ServicesSection } from "@/components/ServicesSection";
import { SkillsSection } from "@/components/SkillsSection";
import { StatsSection } from "@/components/StatsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { WorkStack } from "@/components/WorkStack";

export default function Home() {
  return (
    <>
      <Preloader />
      <Header />
      <main>
        <HeroSection />
        <MarqueeBand />
        <WorkStack />
        <TestimonialsSection />
        <AppsShowcase />
        <ProjectsSection />
        <StatsSection />
        <ServicesSection />
        <SkillsSection />
        <ProcessSection />
        <ExperienceSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
