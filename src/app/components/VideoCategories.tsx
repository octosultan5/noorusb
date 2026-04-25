"use client";

export default function VideoCategories() {
  const categories = [
    { title: "الإنجليزية للأطفال", img: "/cat_english.png", label: "English for Kids" },
    { title: "الإسلام ممتع", img: "/cat_islam.png", label: "Islam for Kids" },
    { title: "قصص الأنبياء", img: "/cat_prophets.png", label: "Stories" },
    { title: "اللغة الفرنسية", img: "/cat_french.png", label: "French FF" },
    { title: "أناشيد بدون موسيقى", img: "/cat_nasheed.png", label: "Songs" },
    { title: "السيرة والعقيدة", img: "/cat_seerah.png", label: "Basics" },
  ];

  return (
    <section className="py-20 bg-slate-50 rtl">
      <div className="container mx-auto px-5 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-brand-primary mb-4">
            شنو كاين داخل <span className="text-brand-green">الفلاش؟</span>
          </h2>
          <p className="text-lg text-slate-500 font-medium">مكتبة ضخمة منظمة بعناية فائقة لسهولة الاستعمال.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <div key={i} className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer">
              <div className="aspect-video w-full bg-slate-200 relative overflow-hidden">
                {/* Note: Use Next Image in production */}
                <img 
                  src={cat.img} 
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <h3 className="text-white font-black text-xl">{cat.title}</h3>
                  <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-2 py-1 rounded-lg">
                    {cat.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <p className="text-xl font-bold text-brand-primary mb-6">... والعديد من الملفات الأخرى المصممة خصيصاً لطفلك!</p>
            <button 
                onClick={() => document.getElementById("checkout")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-white text-brand-primary border-2 border-brand-primary font-black py-3 px-8 rounded-full shadow-md hover:bg-brand-primary hover:text-white transition-colors"
              >
                اكتشف العرض الآن
            </button>
        </div>
      </div>
    </section>
  );
}
