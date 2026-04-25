"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { submitOrder } from "../actions/order";

export default function CheckoutForm({ id = "checkout" }: { id?: string }) {
    const router = useRouter();
    const [bundle, setBundle] = useState<number>(2);
    const [orderBump, setOrderBump] = useState<boolean>(false);
    
    // Pricing logic
    let price = 249;
    if (bundle === 1) price = 249; // 1 USB
    if (bundle === 2) price = 399; // 2 USBs
    if (bundle === 3) price = 549; // 3 USBs
    
    if (orderBump) price += 99; // Add bump price

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        // Basic Moroccan phone validation (06 or 07 followed by 8 digits)
        const cleanPhone = phone.replace(/\s/g, "");
        if (!/^(06|07)\d{8}$/.test(cleanPhone)) {
            setError("المرجو إدخال رقم هاتف صحيح يتكون من 10 أرقام ويبدأ بـ 06 أو 07");
            return;
        }

        setIsSubmitting(true);

        try {
            // Price calculation fallback just to be sure
            let finalPrice = 399;
            if (bundle === 1) finalPrice = 249;
            if (bundle === 3) finalPrice = 549;
            if (orderBump) finalPrice += 99;

            // Call the secure Server Action
            const result = await submitOrder({
                name,
                phone: cleanPhone,
                city,
                bundle_type: bundle,
                total_price: finalPrice,
                has_bump: orderBump
            });

            if (!result.success) {
                setError(result.error || "حدث خطأ غير متوقع.");
                setIsSubmitting(false);
                return;
            }

            // Redirect smoothly
            router.push("/thank-you");
        } catch (err) {
            console.error(err);
            setError("حدث خطأ غير متوقع. المرجو المحاولة مرة أخرى.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="bg-brand-primary text-white py-20 relative rtl" id={id}>
            {/* Wave Divider */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform -translate-y-full">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[40px] fill-brand-primary">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                </svg>
            </div>

            <div className="container mx-auto px-5 max-w-5xl">
                <div className="text-center mb-8">
                    <h2 className="text-4xl md:text-5xl font-black mb-4">أطلب الآن وادفع عند الاستلام</h2>
                    <p className="text-xl text-brand-accent font-bold mb-4">التوصيل مجاني لجميع مدن المغرب 🇲🇦</p>
                    
                    {/* Urgency Element */}
                    <div className="inline-block bg-red-100 border border-red-200 text-red-700 px-6 py-2 rounded-full font-bold animate-pulse-slow">
                        <i className="fa-solid fa-fire mr-2"></i> سارع بالطلب! الكمية المتبقية: <span className="text-xl">4</span> قطع فقط
                    </div>
                </div>

                <div className="bg-white text-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
                    
                    <div className="w-full lg:w-1/2 p-8 md:p-12 order-2 lg:order-1 relative">
                        <form onSubmit={handleSubmit} className="space-y-5">
                            {error && (
                                <div className="bg-red-50 text-red-600 border border-red-200 rounded-xl p-4 text-sm font-bold text-center">
                                    {error}
                                </div>
                            )}
                            <div>
                                <input type="text" placeholder="الاسم الكامل" required value={name} onChange={e => setName(e.target.value)} className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-5 py-4 text-lg focus:border-brand-accent focus:outline-none" />
                            </div>
                            <div>
                                <input type="tel" placeholder="رقم الهاتف (06..)" dir="ltr" required value={phone} onChange={e => setPhone(e.target.value)} className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-5 py-4 text-lg focus:border-brand-accent focus:outline-none text-right" />
                            </div>
                            <div>
                                <input type="text" placeholder="المدينة" required value={city} onChange={e => setCity(e.target.value)} className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-5 py-4 text-lg focus:border-brand-accent focus:outline-none" />
                            </div>

                            <button type="submit" disabled={isSubmitting} className="w-full btn-primary neon-frame mt-6 text-2xl flex items-center justify-center gap-3">
                                {isSubmitting ? "جاري الإرسال..." : "تأكيد الطلب"} <i className="fa-solid fa-paper-plane"></i>
                            </button>
                            
                            <p className="text-center text-slate-500 font-bold mt-4 text-sm">
                                <i className="fa-solid fa-lock text-brand-green mr-1"></i> معلوماتك آمنة ولن يتم مشاركتها.
                            </p>
                        </form>
                    </div>

                    {/* Offers Section */}
                    <div className="w-full lg:w-1/2 bg-slate-50 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-slate-200 order-1 lg:order-2">
                        <h3 className="text-2xl font-black mb-6 text-brand-primary text-center lg:text-right">اختر العرض المناسب:</h3>

                        <div className="space-y-4">
                            {/* Bundle 1 */}
                            <div onClick={() => setBundle(1)} className={`p-5 rounded-2xl border-2 cursor-pointer transition-all flex justify-between items-center ${bundle === 1 ? 'border-brand-green bg-emerald-50' : 'border-slate-200 bg-white hover:border-slate-300'}`}>
                                <div className="flex items-center gap-3">
                                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${bundle === 1 ? 'border-brand-green' : 'border-slate-300'}`}>
                                        {bundle === 1 && <div className="w-2.5 h-2.5 rounded-full bg-brand-green" />}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">فلاش ميموري واحدة</h4>
                                        <p className="text-xs text-slate-500">سعة 64 جيجا</p>
                                    </div>
                                </div>
                                <span className="font-black text-xl">249 درهم</span>
                            </div>

                            {/* Bundle 2 (Popular) */}
                            <div onClick={() => setBundle(2)} className={`relative p-5 rounded-2xl border-2 cursor-pointer transition-all flex justify-between items-center ${bundle === 2 ? 'border-brand-accent bg-orange-50' : 'border-slate-200 bg-white hover:border-slate-300'}`}>
                                <div className="absolute -top-3 left-6 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-bounce">
                                    الأكثر طلباً 🔥
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${bundle === 2 ? 'border-brand-accent' : 'border-slate-300'}`}>
                                        {bundle === 2 && <div className="w-2.5 h-2.5 rounded-full bg-brand-accent" />}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">2 فلاش ميموري</h4>
                                        <p className="text-xs text-brand-accent font-bold">توفير 99 درهم</p>
                                    </div>
                                </div>
                                <div className="text-left">
                                    <span className="line-through text-slate-400 text-sm">498 د.م</span><br/>
                                    <span className="font-black text-2xl text-brand-accent">399 درهم</span>
                                </div>
                            </div>
                            
                            {/* Bundle 3 */}
                            <div onClick={() => setBundle(3)} className={`p-5 rounded-2xl border-2 cursor-pointer transition-all flex justify-between items-center ${bundle === 3 ? 'border-brand-green bg-emerald-50' : 'border-slate-200 bg-white hover:border-slate-300'}`}>
                                <div className="flex items-center gap-3">
                                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${bundle === 3 ? 'border-brand-green' : 'border-slate-300'}`}>
                                        {bundle === 3 && <div className="w-2.5 h-2.5 rounded-full bg-brand-green" />}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">باقة العائلة (3 فلاش)</h4>
                                        <p className="text-xs text-slate-500">أحسن ثمن للحبة</p>
                                    </div>
                                </div>
                                <span className="font-black text-xl">549 درهم</span>
                            </div>
                        </div>

                        {/* Order Bump */}
                        <div className={`mt-6 p-4 rounded-xl border-2 transition-all cursor-pointer flex gap-4 ${orderBump ? 'border-brand-primary bg-blue-50' : 'border-dashed border-brand-accent bg-orange-50/50 hover:bg-orange-50'}`} onClick={() => setOrderBump(!orderBump)}>
                            <div className="pt-1">
                                <div className={`w-6 h-6 rounded border-2 flex items-center justify-center ${orderBump ? 'bg-brand-primary border-brand-primary' : 'border-slate-400 bg-white'}`}>
                                    {orderBump && <i className="fa-solid fa-check text-white text-sm"></i>}
                                </div>
                            </div>
                            <div>
                                <h4 className="font-black text-lg text-slate-800 flex items-center gap-2">
                                    أضف فلاشة السيارة <span className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full animate-pulse">عرض خاص</span>
                                </h4>
                                <p className="text-sm text-slate-600 mt-1 leading-tight">احصل على فلاش ميموري إضافية للسيارة تحتوي على أناشيد وقرآن فقط بـ <span className="font-bold text-brand-accent">99 درهم</span> بدلاً من 199 درهم!</p>
                            </div>
                        </div>

                        <hr className="my-6 border-slate-200" />
                        <div className="flex justify-between items-center font-black">
                            <span className="text-xl">المجموع الدفع:</span>
                            <span className="text-3xl text-brand-primary">{price} درهم</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
