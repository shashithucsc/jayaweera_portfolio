import LoadingAnimation from '@/components/LoadingAnimation';
import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import Marquee from '@/components/Marquee';
import AboutSection from '@/components/AboutSection';
import ProcessSection from '@/components/ProcessSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import EducationSection from '@/components/EducationSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-ink text-cream">
      <LoadingAnimation />
      <CustomCursor />
      <Navbar />
      <main>
        <HeroSection />
        <Marquee />
        <AboutSection />
        <ProcessSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <Footer />
      </main>
    </div>
  );
}
