"use client";

import { Truck, Shield, Award, Headphones } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <Navbar />

      <section className="bg-[#1a1410] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-sm font-semibold text-[#c9a96a] uppercase tracking-widest">قصتنا</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-2">من نحن</h1>
          <div className="w-20 h-1 bg-[#c9a96a] mx-auto mt-4 rounded-full"></div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-extrabold text-[#1a1410] mb-6">
                إرث من <span className="text-gold-gradient">الفخامة</span> منذ 1985
              </h2>
              <p className="text-[#1a1410]/70 text-lg leading-relaxed mb-4">
                تأسس متجر مجوهراتنا عام 1985 برؤية واضحة: تقديم أرقى المجوهرات الفاخرة لعملائنا في المملكة العربية السعودية والخليج العربي. منذ ذلك الحين، ونحن نلتزم بأعلى معايير الجودة والأصالة.
              </p>
              <p className="text-[#1a1410]/70 text-lg leading-relaxed mb-4">
                نوفّر تشكيلة استثنائية من المجوهرات المرصّعة بأرقى الأحجار الكريمة، من الألماس والياقوت والزمرد إلى اللؤلؤ الطبيعي. كل قطعة تختارها تحمل قصة من الإبداع والحرفية.
              </p>
              <p className="text-[#1a1410]/70 text-lg leading-relaxed">
                نؤمن بأن المجوهرات ليست مجرد زينة، بل استثمار عاطفي وقيمي يدوم مدى الحياة. لذلك نوفّر ضمان مدى الحياة وشهادات أصالة لكل قطعة.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#c9a96a]/20 to-[#8a7448]/20 rounded-3xl blur-2xl"></div>
              <img
                src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80&auto=format&fit=crop"
                alt="luxury jewelry"
                className="relative rounded-3xl shadow-2xl w-full aspect-[4/3] object-cover"
              />
            </div>
          </div>

          {/* Values */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Award, title: "جودة عالية", desc: "أرقى الخامات والأحجار الكريمة الطبيعية" },
              { icon: Shield, title: "ضمان أصلي", desc: "شهادة أصالة وضمان مدى الحياة" },
              { icon: Truck, title: "شحن آمن", desc: "توصيل مؤمّن لجميع مناطق المملكة" },
              { icon: Headphones, title: "دعم متميز", desc: "خدمة عملاء على مدار الساعة" },
            ].map((v, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-[#c9a96a]/20 text-center card-lift">
                <div className="w-14 h-14 rounded-full bg-[#c9a96a]/10 flex items-center justify-center text-[#c9a96a] mx-auto mb-4">
                  <v.icon size={28} />
                </div>
                <h3 className="font-bold text-[#1a1410] mb-2">{v.title}</h3>
                <p className="text-sm text-[#8a7448]">{v.desc}</p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="bg-[#1a1410] rounded-3xl p-8 sm:p-12 text-center">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { num: "40+", label: "سنة خبرة" },
                { num: "50K+", label: "عميل سعيد" },
                { num: "1000+", label: "تصميم حصري" },
                { num: "100%", label: "أصالة مضمونة" },
              ].map((s, i) => (
                <div key={i}>
                  <div className="text-4xl sm:text-5xl font-extrabold text-gold-gradient">{s.num}</div>
                  <div className="text-sm text-white/70 mt-2">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
