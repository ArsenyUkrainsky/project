import DashboardSection from '@/components/organisms/DashboardSection'
import DownloadSection from '@/components/organisms/DownloadSection'
import FAQSection from '@/components/organisms/FAQSection'
import FeaturesSection from '@/components/organisms/FeaturesSection'
import HeroSection from '@/components/organisms/HeroSection/HeroSection'
import LunchSection from '@/components/organisms/LunchSection'
import ReviewsSection from '@/components/organisms/ReviewsSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <DownloadSection />
      <LunchSection />
      <DashboardSection />
      <ReviewsSection />
      <FAQSection />
    </>
  )
}
