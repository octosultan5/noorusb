"use client";

import { motion } from "framer-motion";

export default function TextAndImagesSection() {
    return (
      <section className="py-20 rtl bg-white">
        <div className="container mx-auto px-5 max-w-6xl">
          
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
            {/* Image Side */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2"
            >
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-8 border-slate-50 group">
                <img 
                  src="/learning_tv.png" 
                  alt="محتوى آمن على شاشة التلفاز" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
            
            {/* Text Side */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full lg:w-1/2"
            >
              <div className="inline-block bg-blue-100 text-blue-800 font-bold px-4 py-1.5 rounded-full text-sm mb-6">
                محتوى هادف ومراقب
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-brand-primary mb-6 leading-tight">
                بديل صحي وآمن لشاشات الهاتف
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed font-medium">
                في عصر التكنولوجيا، أصبح من الصعب التحكم فيما يشاهده أطفالنا. مع الفلاش ميموري التعليمي، نوفر لك بيئة آمنة 100%، خالية من الإعلانات والمقاطع غير اللائقة أو الموسيقى الصاخبة.
              </p>
              <ul className="space-y-4 font-bold text-slate-700">
                <li className="flex items-center gap-3">
                  <i className="fa-solid fa-check text-brand-green text-xl"></i> يعمل بدون انترنت
                </li>
                <li className="flex items-center gap-3">
                  <i className="fa-solid fa-check text-brand-green text-xl"></i> لا إعلانات مزعجة
                </li>
                <li className="flex items-center gap-3">
                  <i className="fa-solid fa-check text-brand-green text-xl"></i> متوافق مع شاشات التلفاز المحمولة والذكية
                </li>
              </ul>
            </motion.div>
          </div>
  
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            {/* Image Side */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2"
            >
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-8 border-slate-50 group">
                <img 
                  src="/gift.png" 
                  alt="أب يقدم هدية لطفله" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
            
            {/* Text Side */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full lg:w-1/2"
            >
              <div className="inline-block bg-orange-100 text-orange-800 font-bold px-4 py-1.5 rounded-full text-sm mb-6">
                تنمية المهارات
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-brand-primary mb-6 leading-tight">
                استثمار حقيقي في مستقبل طفلك
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed font-medium">
                يحتوي على مسلسلات كرتونية هادفة، تعليم الحروف والأرقام العربية والإنجليزية، وقصص الأنبياء بأسلوب ممتع وشيق يرسخ القيم الإسلامية والأخلاقية لدى طفلك.
              </p>
              <button 
                onClick={() => document.getElementById("checkout")?.scrollIntoView({ behavior: "smooth" })}
                className="mt-4 border-2 border-brand-accent text-brand-accent font-bold px-8 py-3 rounded-xl hover:bg-brand-accent hover:text-white hover:-translate-y-1 transition-all shadow-md"
              >
                احصل عليه الآن
              </button>
            </motion.div>
          </div>
  
        </div>
      </section>
    );
  }
  
