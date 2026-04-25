import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TextMarquee from "./components/TextMarquee";
import CheckoutForm from "./components/CheckoutForm";
import FeatureGrid from "./components/FeatureGrid";
import ProductDetailsSection from "./components/ProductDetailsSection";
import VideoCategories from "./components/VideoCategories";
import TextAndImagesSection from "./components/TextAndImagesSection";
import VideoOverview from "./components/VideoOverview";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden font-cairo">
      {/* Sticky Top Bar */}
      <div className="bg-brand-accent text-white text-center py-2 font-bold text-sm relative z-50">
        <span className="animate-pulse inline-block">🔥 عرض حصري: طلبية اليوم مع توصيل مجاني لكل المغرب!</span>
      </div>

      <Header />
      <HeroSection />
      <TextMarquee />
      <VideoOverview />
      <CheckoutForm id="checkout-top" />
      <FeatureGrid />
      <TextAndImagesSection />
      <ProductDetailsSection />
      <VideoCategories />
      <CheckoutForm id="checkout" />
      <Footer />

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/212600000000" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="تواصل معنا عبر واتساب"
        className="fixed bottom-6 left-6 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-50"
      >
        <i className="fa-brands fa-whatsapp text-3xl"></i>
      </a>
    </main>
  );
}
