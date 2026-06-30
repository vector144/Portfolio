import React from "react";
import Starfield from "./components/common/Starfield";
import CustomCursor from "./components/common/CustomCursor";
import Navigation from "./components/common/Navigation";
import Footer from "./components/common/Footer";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import SkillsSection from "./components/sections/SkillsSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import EducationSection from "./components/sections/EducationSection";
import ContactSection from "./components/sections/ContactSection";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Starfield />
      <CustomCursor />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
