import { useDeviceType } from '@/hooks'
import DashboardSection from '@/components/organisms/DashboardSection'
import DownloadSection from '@/components/organisms/DownloadSection'
import FAQSection from '@/components/organisms/FAQSection'
import FeaturesSection from '@/components/organisms/FeaturesSection'
import HeroSection from '@/components/organisms/HeroSection/HeroSection'
import LunchSection from '@/components/organisms/LunchSection'
import ReviewsSection from '@/components/organisms/ReviewsSection'

export default function Home() {
  const { isMobile, isTablet } = useDeviceType()
  return (
    <>
      <HeroSection isMobile={isMobile} />
      <FeaturesSection />
      <DownloadSection isMobile={isMobile} />
      <LunchSection />
      <DashboardSection isTablet={isTablet} isMobile={isMobile} />
      <ReviewsSection />
      <FAQSection />
    </>
  )
}
