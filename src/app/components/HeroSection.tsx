"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToCheckout = () => {
    document.getElementById("checkout")?.scrollIntoView({ behavior: "smooth" });
  };

  const lineVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="relative w-full h-[90vh] lg:h-screen min-h-[650px] flex items-center justify-center overflow-hidden rtl bg-[#0a0a0a]">
      {/* Background Image with Slow Parallax Overlay */}
      <motion.div 
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 w-full h-full"
      >
        <Image 
          src="/hero.png" 
          alt="NoorUSB Premium Background" 
          fill
          priority
          quality={100}
          className="object-cover opacity-[0.15] mix-blend-luminosity filter contrast-125"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent pointer-events-none"></div>

      {/* Animated Geometric Slashes (Rifmachine Style) */}
      <motion.div 
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-0 right-0 w-full h-full pointer-events-none z-0"
      >
        {/* Right side primary slash */}
        <div className="absolute top-[-20%] right-[15%] w-[150%] h-[150%] bg-[#1e3a8a]/5 origin-bottom-right transform -rotate-[15deg] border-l border-[#1e3a8a]/20 backdrop-blur-[2px]"></div>
        <div className="absolute top-[-30%] right-[30%] w-[100%] h-[150%] bg-[#F29B61]/5 origin-bottom-right transform -rotate-[15deg] border-l border-[#F29B61]/10 backdrop-blur-[4px]"></div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        className="absolute bottom-0 left-0 w-full h-full pointer-events-none z-0"
      >
        {/* Left corner accent triangle */}
        <svg viewBox="0 0 300 300" fill="none" className="absolute bottom-0 left-0 w-[40vw] max-w-[400px] h-auto opacity-10">
          <polygon points="0,300 300,300 0,0" fill="#F29B61"/>
        </svg>
      </motion.div>

      <div className="container mx-auto px-5 max-w-7xl relative z-10 flex flex-col lg:flex-row items-center h-full pt-20">
        
        {/* Text Content */}
        <div className="w-full lg:w-3/5 text-center lg:text-right flex flex-col justify-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center gap-4 mb-6 justify-center lg:justify-start"
          >
            <span className="w-12 h-[2px] bg-[#F29B61] block"></span>
            <span className="text-white/80 font-bold tracking-widest text-sm md:text-base uppercase">المنتج رقم 1 في تعليم الأطفال</span>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl lg:text-[5rem] font-black text-white leading-[1.1] mb-8 py-2">
            <motion.div className="overflow-hidden mb-2">
              <motion.span variants={lineVariants} initial="hidden" animate="visible" className="block">
                أروع هدية لطفلك
              </motion.span>
            </motion.div>
            <motion.div className="overflow-hidden mb-2">
              <motion.span variants={lineVariants} initial="hidden" animate="visible" transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }} className="block text-[#F29B61]">
                في 2026
              </motion.span>
            </motion.div>
            <motion.div className="overflow-hidden mt-4">
              <motion.span variants={lineVariants} initial="hidden" animate="visible" transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }} className="block text-[0.6em] text-white/90">
                مكتبة ذكية في جيبك!
              </motion.span>
            </motion.div>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-2xl text-white/60 mb-10 leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0"
          >
            أكثر من 2000 فيديو تعليمي، قصص الأنبياء، تعلم اللغات، وأناشيد بدون موسيقى. كل هذا في فلاش ميموري واحدة بحجم 64 جيجا.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center"
          >
            <button 
              onClick={scrollToCheckout}
              className="bg-[#F29B61] text-white hover:bg-orange-500 text-xl flex items-center justify-center gap-3 px-10 py-4 font-black transition-all shadow-[0_0_20px_rgba(242,155,97,0.3)] hover:shadow-[0_0_40px_rgba(242,155,97,0.5)]"
            >
              اطلب الآن والدفع عند الاستلام <i className="fa-solid fa-cart-shopping"></i>
            </button>
            <a href="#checkout-top" className="text-white/70 hover:text-white font-bold text-lg transition-colors flex items-center gap-2 border border-white/20 hover:border-white px-8 py-4">
              اكتشف المزيد
            </a>
          </motion.div>

        </div>

        {/* Hero Image (Foreground Floating) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="w-full lg:w-2/5 relative mt-12 lg:mt-0 hidden md:block"
        >
          <div className="relative w-full aspect-square max-w-[450px] mx-auto">
            {/* Dark Glow behind image */}
            <div className="absolute inset-0 bg-[#F29B61]/20 rounded-full blur-[100px] animate-pulse-slow"></div>
            <Image 
              src="/product.png" 
              alt="NoorUSB Product" 
              fill
              className="object-contain relative z-10 animate-float drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            />
          </div>
        </motion.div>

      </div>

      {/* Animated Scroll Hint (Rifmachine Bottom Left Style) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 right-8 md:right-12 flex items-center gap-4 cursor-pointer z-20"
        onClick={scrollToCheckout}
      >
        <span className="text-white/40 text-xs tracking-[0.2em] font-bold">دحرج للأسفل</span>
        <div className="w-16 h-[2px] bg-white/10 relative overflow-hidden">
          <motion.div 
            animate={{ x: [64, -64] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute top-0 right-0 w-1/2 h-full bg-[#F29B61]"
          />
        </div>
      </motion.div>
    </section>
  );
}
