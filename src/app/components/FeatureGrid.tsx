"use client";

import { motion } from "framer-motion";

export default function FeatureGrid() {
  const features = [
    {
      icon: "fa-solid fa-moon",
      title: "تربية إسلامية صحيحة",
      desc: "قصص الأنبياء، أحاديث، وأناشيد تربوية هادفة ترسخ القيم.",
      color: "text-brand-green bg-emerald-100"
    },
    {
      icon: "fa-solid fa-language",
      title: "تعلم اللغات بسهولة",
      desc: "دروس تفاعلية بالإنجليزية، الفرنسية، والعربية الفصحى.",
      color: "text-brand-primary bg-blue-100"
    },
    {
      icon: "fa-solid fa-shield-cat",
      title: "بيئة آمنة 100%",
      desc: "فيديوهات مختارة بعناية، بدون إعلانات مزعجة وبدون أنترنيت.",
      color: "text-brand-accent bg-orange-100"
    },
    {
      icon: "fa-solid fa-sd-card",
      title: "سعة 64 جيجا",
      desc: "فلاش ميموري عالية الجودة تضم ساعات من المرح والتعلم.",
      color: "text-purple-600 bg-purple-100"
    }
  ];

  return (
    <section className="py-20 bg-white rtl relative">
      {/* Curved Divider Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform -translate-y-full">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="block w-full h-[60px] fill-white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-5 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-brand-primary mb-4">
            شنو كيميز <span className="text-brand-accent">نور USB</span>؟
          </h2>
          <p className="text-lg text-slate-500 font-medium">كل ما يحتاجه طفلك في مكان واحد آمن.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-50 rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 text-center group"
            >
              <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${item.color}`}>
                <i className={`${item.icon} text-4xl`}></i>
              </div>
              <h3 className="text-xl font-black text-brand-primary mb-3">{item.title}</h3>
              <p className="text-slate-600 font-medium leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
