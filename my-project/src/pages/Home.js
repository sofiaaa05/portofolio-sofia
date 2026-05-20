
import React from 'react';
import Navbar from '../components/Navbar';
import ProfileCard from '../components/ProfileCard';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import PortfolioSection from '../components/PortfolioSection';
import AchievementSection from '../components/AchievementSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ProfileCard />
      <AboutSection />
      <SkillsSection />
      <PortfolioSection />
      <AchievementSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default Home;
