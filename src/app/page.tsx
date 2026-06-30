import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FooterTitle from "@/components/FooterTitle";
import Ferrofluid from "@/components/Ferrofluid";
import AboutSection from "@/components/AboutSection";
import TechStackSection from "@/components/TechStackSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import GlobalPreloader from "@/components/GlobalPreloader";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black flex flex-col">
      {/* Global preloader screen */}
      <GlobalPreloader />
      {/* Background Ferrofluid (Fixed agar tetap ada saat scroll) */}
      <div className="fixed inset-0 z-0 pointer-events-auto">
        <Ferrofluid
          colors={["#222222", "#444444", "#000000"]}
          speed={0.15}
          scale={1.6}
          turbulence={1}
          fluidity={0.1}
          rimWidth={0.2}
          sharpness={2.5}
          shimmer={1.5}
          glow={2}
          flowDirection="down"
          opacity={1}
          mouseInteraction={true}
          mouseStrength={1}
          mouseRadius={0.35}
          className=""
          dpr={1}
          mixBlendMode="normal"
        />
      </div>

      {/* Konten Halaman */}
      <div className="relative z-10 w-full flex flex-col">
        <Header />
        <HeroSection />
        
        {/* Scrolling Text */}
        <div className="w-full mt-12 mb-12">
          <FooterTitle />
        </div>

        {/* Halaman About Me */}
        <AboutSection />
        
        {/* Tech Stack */}
        <TechStackSection />

        {/* Projects */}
        <ProjectsSection />

        {/* Contact Me */}
        <ContactSection />
      </div>
    </main>
  );
}
