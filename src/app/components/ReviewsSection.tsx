"use client";

import { motion } from "framer-motion";

export default function ReviewsSection() {
  const reviews = [
    {
      name: "خديجة م.",
      city: "الدار البيضاء",
      text: "صراحة منتج رائع جداً! ولادي كانو مدمنين على التليفون واليوتوب، دابا ولفو يتفرجو فالفلاشة وفيها قصص الأنبياء وأناشيد مفيدة. شكراً بزاف!",
      stars: 5,
    },
    {
      name: "يوسف ب.",
      city: "الرباط",
      text: "الجودة ديال الفيديوهات ممتازة، ومقسومين بطريقة زوينة. بنتي تعلمات بزاف ديال الحوايج فالدين ديالنا بطريقة ممتعة.",
      stars: 5,
    },
    {
      name: "فاطمة الزهراء",
      city: "مراكش",
      text: "احسن استثمار درتو لولادي هاد العام. الفلاشة خدامة مزيان فالتلفزة والبيسي، والأهم أنني مكنبقاش خايفة من الإعلانات لي كطلع ليهم.",
      stars: 5,
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50 rtl border-t border-slate-100">
      <div className="container mx-auto px-5 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-brand-primary mb-4">
            شنو قالو <span className="text-brand-accent">الآباء والأمهات؟</span>
          </h2>
          <p className="text-lg text-slate-500 font-medium">أكثر من 10,000 عائلة مغربية يثقون في نور USB</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Main Image */}
          <div className="w-full lg:w-1/3">
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
               <img 
                 src="/mom.png" 
                 alt="أم سعيدة وطفلها يتعلمان" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6">
                 <div className="flex items-center gap-2 mb-2">
                   {[1,2,3,4,5].map(i => <i key={i} className="fa-solid fa-star text-yellow-400 text-lg"></i>)}
                 </div>
                 <p className="text-white font-bold text-lg">"غيّر حياة أطفالي للأفضل!"</p>
               </div>
            </div>
          </div>

          {/* Review Cards */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100 relative"
              >
                <div className="absolute -top-4 -right-4 bg-brand-accent text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
                  <i className="fa-solid fa-quote-right"></i>
                </div>
                
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.stars)].map((_, idx) => (
                    <i key={idx} className="fa-solid fa-star text-yellow-400 text-sm"></i>
                  ))}
                </div>
                
                <p className="text-slate-600 font-medium mb-6 leading-relaxed line-clamp-4 text-sm sm:text-base">
                  "{review.text}"
                </p>
                
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-primary text-sm">{review.name}</h4>
                    <p className="text-xs text-slate-400 flex items-center gap-1">
                      <i className="fa-solid fa-location-dot"></i> {review.city}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
            
            <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="bg-brand-primary/5 p-6 rounded-3xl border-2 border-dashed border-brand-primary/20 flex flex-col items-center justify-center text-center hover:bg-brand-primary/10 cursor-pointer transition-colors"
                onClick={() => document.getElementById("checkout")?.scrollIntoView({ behavior: "smooth" })}
              >
                <div className="w-16 h-16 bg-brand-primary rounded-full text-white flex items-center justify-center text-2xl mb-4 shadow-lg animate-bounce">
                  <i className="fa-solid fa-cart-plus"></i>
                </div>
                <h4 className="font-black text-brand-primary text-lg mb-2">كن من زبنائنا السعداء!</h4>
                <p className="text-slate-600 text-sm font-medium">اطلب الآن والدفع عند الاستلام</p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
