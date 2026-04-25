"use client";

export default function ProductDetailsSection() {
    return (
      <section className="py-20 bg-white rtl">
        <div className="container mx-auto px-5 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Left/Image Content */}
            <div className="w-full lg:w-1/2">
                <div className="grid grid-cols-2 gap-4">
                    <img src="/product.png" alt="علبة فلاشة نور الذكية" className="rounded-3xl shadow-xl hover:scale-105 transition-transform w-full object-cover aspect-[4/5]" />
                    <img src="/hero.png" alt="طفل يتعلم من الفلاشة" className="rounded-3xl shadow-xl mt-8 hover:scale-105 transition-transform w-full object-cover aspect-[4/5]" />
                </div>
            </div>
  
            {/* Right/Text Content Placeholder */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-black text-brand-primary mb-6 leading-tight">
                الحل الأمثل لإبعاد طفلك عن مخاطر الإنترنت!
              </h2>
              
              <div className="space-y-6 text-lg text-slate-600 font-medium">
                  <p>
                      في عصر أصبحت فيه الهواتف الذكية تسرق تركيز أطفالنا، وتبرمج عقولهم بمحتوى غير آمن وإعلانات مزعجة... <strong className="text-brand-accent px-1">نور USB</strong> جاءت لتكون البديل التربوي الآمن والممتع. 
                  </p>
                  
                  <div className="bg-slate-50 p-6 rounded-2xl border-r-4 border-brand-accent">
                      <p className="font-bold text-brand-primary">
                          "مند أن بدأت أستعمل الفلاش ميموري لابني، تحسنت لغته العربية وبدأ يحفظ قصص الأنبياء. وارتحت تماماً من قلق اليوتيوب والإعلانات المخيفة."
                      </p>
                  </div>
  
                  <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                          <i className="fa-solid fa-circle-check text-brand-green"></i>
                          <span className="text-slate-700"><strong>بدون أنترنيت:</strong> يعمل على شاشة التلفاز، الحاسوب، الوحدة الذكية بمجرد تركيبه.</span>
                      </li>
                      <li className="flex items-center gap-3">
                          <i className="fa-solid fa-circle-check text-brand-green"></i>
                          <span className="text-slate-700"><strong>تأسيس اللغات:</strong> يضم كورسات شاملة للغة الإنجليزية والفرنسية من الصفر بطرق كرتونية محببة.</span>
                      </li>
                      <li className="flex items-center gap-3">
                          <i className="fa-solid fa-circle-check text-brand-green"></i>
                          <span className="text-slate-700"><strong>تنمية القيم:</strong> أناشيد هادفة بدون موسيقى وقصص تربوية لغرس العقيدة الصحيحة في ذهن طفلك.</span>
                      </li>
                  </ul>
              </div>
  
              <button 
                  onClick={() => document.getElementById("checkout")?.scrollIntoView({ behavior: "smooth" })}
                  className="btn-primary neon-frame mt-8 w-full sm:w-auto text-xl"
              >
                  احصل على الفلاش الآن <i className="fa-solid fa-arrow-left mr-2"></i>
              </button>
            </div>
  
          </div>
        </div>
      </section>
    );
  }
