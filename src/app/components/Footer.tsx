export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 rtl text-center lg:text-right border-t border-slate-800 pb-24 lg:pb-12">
      <div className="container mx-auto px-5 max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-black text-white mb-2 tracking-wider font-inter">NoorUSB</h2>
          <p className="text-sm">المكتبة الذكية الأولى لطفلك في المغرب.</p>
        </div>

        <div className="flex gap-6 text-2xl">
          <a href="#" aria-label="Facebook" className="hover:text-white transition-colors"><i className="fa-brands fa-facebook"></i></a>
          <a href="#" aria-label="Instagram" className="hover:text-white transition-colors"><i className="fa-brands fa-instagram"></i></a>
          <a href="#" aria-label="TikTok" className="hover:text-white transition-colors"><i className="fa-brands fa-tiktok"></i></a>
        </div>

        <div className="text-sm">
          <p>© 2026 جميع الحقوق محفوظة لـ NoorUSB.</p>
          <p className="mt-1">صنع بكل ❤️ من أجل أطفالنا.</p>
        </div>
      </div>
    </footer>
  );
}
