import HeaderSection from '@/components/sections/header';
import HeroSection from '@/components/sections/hero';
import TrustBadgesSection from '@/components/sections/trust-badges';
import ValuePropsSection from '@/components/sections/value-props';
import HowItWorksSection from '@/components/sections/how-it-works';
import AnySituationSection from '@/components/sections/any-situation';
import FounderStorySection from '@/components/sections/founder-story';
import ComparisonTableSection from '@/components/sections/comparison-table';
import TestimonialsSection from '@/components/sections/testimonials';
import FooterSection from '@/components/sections/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white pt-[60px] md:pt-[64px]">
      <HeaderSection />
      <HeroSection />
      <TrustBadgesSection />
      <ValuePropsSection />
      <HowItWorksSection />
      <AnySituationSection />
      <FounderStorySection />
      <ComparisonTableSection />
      <TestimonialsSection />
      <FooterSection />
    </main>
  );
}
