import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import StorySection from "@/components/story-section"
import ProductsSection from "@/components/products-section"
import AnalyticsSection from "@/components/analytics-section"
import ProcessSection from "@/components/process-section"
import TestimonialsSection from "@/components/testimonials-section"
import FaithSection from "@/components/faith-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <StorySection />
      <ProductsSection />
      <AnalyticsSection />
      <ProcessSection />
      <TestimonialsSection />
      <FaithSection />
      <Footer />
    </main>
  )
}
