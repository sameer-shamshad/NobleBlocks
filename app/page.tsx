import BackgroundGradients from '@/components/layout/BackgroundGradients';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/hero/HeroSection';
import IntroHeader from '@/components/sections/IntroHeader';
import SearchSection from '@/components/features/SearchSection';
import ChatSection from '@/components/features/ChatSection';
import ScanSection from '@/components/features/ScanSection';
import ExtractSection from '@/components/features/ExtractSection';
import SystematicReviewSection from '@/components/features/SystematicReviewSection';
import PodcastSection from '@/components/features/PodcastSection';
import PublishSection from '@/components/features/PublishSection';
import AudienceSection from '@/components/features/AudienceSection';
import FinalCTA from '@/components/sections/FinalCTA';

export default function Home() {
  return (
    <main>
      <BackgroundGradients />
      <Navigation />
      <HeroSection />
      <IntroHeader />
      <SearchSection />
      <ChatSection />
      <ScanSection />
      <ExtractSection />
      <SystematicReviewSection />
      <PodcastSection />
      <PublishSection />
      <AudienceSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
