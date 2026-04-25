"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToCheckout = () => {
    document.getElementById("checkout")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden rtl bg-gradient-to-br from-slate-50 via-white to-orange-50 border-b-2 border-slate-100">
      {/* Premium Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%231e3a8a\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
      
      {/* Background Decor Glows */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-accent/10 rounded-full blur-[120px] z-0 translate-x-1/3 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-green/10 rounded-full blur-[100px] z-0 -translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-5 max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 text-center lg:text-right"
          >
            <div className="inline-block bg-emerald-100 text-emerald-800 font-bold px-4 py-1.5 rounded-full text-sm mb-6 border border-emerald-200">
              <i className="fa-solid fa-star text-yellow-500 mr-2"></i> المنتج رقم 1 في تعليم الأطفال
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-brand-primary leading-[1.2] mb-6">
              أروع هدية لطفلك في 2026: <br/>
              <span className="text-gradient">مكتبة ذكية في جيبك!</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed font-medium">
              أكثر من 2000 فيديو تعليمي، قصص الأنبياء، تعلم اللغات، وأناشيد بدون موسيقى. كل هذا في فلاش ميموري واحدة بحجم 64 جيجا.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={scrollToCheckout}
                className="btn-primary neon-frame text-xl flex items-center justify-center gap-3"
              >
                اطلب الآن والدفع عند الاستلام <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>

            <div className="mt-8 flex items-center gap-6 justify-center lg:justify-start text-slate-500 font-medium text-sm">
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-truck-fast text-brand-accent text-xl"></i> توصيل مجاني
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-shield-halved text-brand-green text-xl"></i> ضمان الجودة
              </div>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto rounded-full">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/30 to-brand-green/30 rounded-full blur-3xl animate-pulse-slow"></div>
              <img 
                src="/hero.png" 
                alt="NoorUSB Premium Mockup" 
                className="w-full h-full object-cover rounded-full relative z-10 animate-float shadow-2xl border-4 border-white"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
