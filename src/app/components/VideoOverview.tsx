"use client";

import { motion } from "framer-motion";

export default function VideoOverview() {
    return (
      <section className="py-20 bg-slate-50 rtl border-b border-slate-200">
        <div className="container mx-auto px-5 max-w-5xl text-center">
          <h2 className="text-3xl md:text-5xl font-black text-brand-primary mb-6">
            شاهد كيف يعمل الفلاش ميموري
          </h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto font-medium"
          >
            نظرة سريعة على المحتوى وكيفية استخدامه على التلفاز الذكي، الحاسوب، أو هاتف طفلك.
          </motion.p>
  
          {/* Video Placeholder Box */}
          <motion.div 
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-video bg-slate-800 rounded-3xl shadow-2xl overflow-hidden border-4 border-slate-800 group cursor-pointer flex items-center justify-center"
          >
            {/* Play Button Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex items-center justify-center z-10">
              <div className="w-20 h-20 bg-brand-accent text-white rounded-full flex items-center justify-center text-3xl shadow-[0_0_30px_rgba(251,146,60,0.6)] group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-play ml-2"></i>
              </div>
            </div>
            
            {/* Placeholder Content */}
            <div className="text-slate-400 flex flex-col items-center">
              <i className="fa-solid fa-video text-5xl mb-4 opacity-50"></i>
              <span className="font-bold text-xl tracking-wider opacity-70">مكان الفيديو التعريفي</span>
              <span className="text-sm mt-2 opacity-50">سيتم إضافة الفيديو هنا لاحقاً</span>
            </div>
          </motion.div>
  
        </div>
      </section>
    );
  }
  
