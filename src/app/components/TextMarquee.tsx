"use client";

import React from "react";

const items = [
  "توصيل مجاني لكل المدن 🇲🇦",
  "ضمان لمدة سنة كاملة ⭐",
  "الدفع عند الاستلام 💸",
  "بدون انترنت ولا إعلانات 🚫",
  "محتوى آمن 100% 🛡️",
];

export default function TextMarquee() {
  return (
    <div className="w-full bg-brand-primary text-brand-accent py-3 overflow-hidden flex whitespace-nowrap border-y border-blue-900 shadow-md dir-ltr">
      {/* We force LTR for predictable marquee animation, while text remains arabic */}
      <div className="flex animate-[marquee_20s_linear_infinite]" style={{ direction: "ltr" }}>
        {/* Double the items to create the infinite loop effect */}
        {[...items, ...items, ...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center px-8 text-lg font-black tracking-wider">
            {text}
            <span className="mx-8 w-2 h-2 rounded-full bg-white/30 inline-block" />
          </div>
        ))}
      </div>
    </div>
  );
}
