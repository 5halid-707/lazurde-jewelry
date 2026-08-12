"use client";

import Link from "next/link";
import { Truck, Shield, RefreshCw, Headphones } from "lucide-react";
import { CATEGORIES, PRODUCTS } from "@/lib/data";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ProductCard from "@/components/product-card";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[500px] sm:h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80&auto=format&fit=crop)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#1a1410]/80 via-[#1a1410]/40 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center">
          <div className="max-w-lg text-white">
            <span className="inline-block bg-[#c9a96a]/20 backdrop-blur-md border border-[#c9a96a]/40 text-[#e6c885] px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-4">
              ✦ مجموعة 2026 الجديدة
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 leading-tight">
              فخامة تليق <span className="text-gold-gradient">بأناقتك</span>
            </h1>
            <p className="text-base sm:text-lg text-white/80 mb-6">
              اكتشف مجموعتنا الحصرية من المجوهرات الفاخرة المرصّعة بأرقى الأحجار الكريمة، مصمّمة بعناية لتُكمل إطلالتك بلمسة من الرقي الخالد.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/products"
                className="bg-[#c9a96a] hover:bg-[#8a7448] text-white font-bold px-6 py-3 rounded-full transition-all hover:scale-105 shadow-lg"
              >
                تسوّق الآن
              </Link>
              <a
                href="#categories"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold px-6 py-3 rounded-full transition-all hover:scale-105"
              >
                استكشف الفئات
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features bar */}
      <section className="bg-white border-b border-[#c9a96a]/20 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Truck, title: "شحن مجاني", desc: "للطلبات فوق 500 ر.س" },
            { icon: Shield, title: "ضمان أصلي", desc: "شهادة أصالة لكل قطعة" },
            { icon: RefreshCw, title: "استرجاع 30 يوم", desc: "إرجاع مجاني وسهل" },
            { icon: Headphones, title: "دعم 24/7", desc: "خدمة عملاء متميزة" },
          ].map((f, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#c9a96a]/10 flex items-center justify-center text-[#c9a96a]">
                <f.icon size={22} />
              </div>
              <div>
                <p className="font-bold text-sm text-[#1a1410]">{f.title}</p>
                <p className="text-xs text-[#8a7448]">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#c9a96a] uppercase tracking-widest">تسوّق حسب الفئة</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1410] mt-2">فئاتنا المميزة</h2>
            <div className="w-20 h-1 bg-[#c9a96a] mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                href={`/products?category=${cat.id}`}
                className="card-lift bg-white rounded-2xl p-6 text-center border border-[#c9a96a]/20 hover:border-[#c9a96a] transition-all"
              >
                <div className="text-4xl mb-3">{cat.icon}</div>
                <h3 className="font-bold text-[#1a1410] text-sm sm:text-base">{cat.nameAr}</h3>
                <p className="text-xs text-[#8a7448] mt-1">{cat.count} منتج</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-16 sm:py-20 bg-[#1a1410]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#c9a96a] uppercase tracking-widest">الأكثر مبيعاً</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">قطع لا تُقاوَم</h2>
            <div className="w-20 h-1 bg-[#c9a96a] mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {PRODUCTS.filter((p) => p.isBestseller).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Tabby + Tamara banner */}
      <section className="py-8 bg-gradient-to-r from-[#2d5f4e] via-[#1a3a5c] to-[#c9a96a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-white">
          <div className="text-center sm:text-right">
            <h3 className="text-xl sm:text-2xl font-extrabold mb-1">قسّط مشترياتك بكل سهولة</h3>
            <p className="text-sm text-white/80">4 دفعات بدون فوائد مع Tabby أو 3 دفعات مع Tamara</p>
          </div>
          <div className="flex gap-3">
            <div className="bg-white/15 backdrop-blur-md px-6 py-3 rounded-xl text-center">
              <div className="text-2xl font-extrabold">tabby</div>
              <div className="text-xs">4 دفعات بدون فوائد</div>
            </div>
            <div className="bg-white/15 backdrop-blur-md px-6 py-3 rounded-xl text-center">
              <div className="text-2xl font-extrabold">tamara</div>
              <div className="text-xs">3 دفعات بدون فوائد</div>
            </div>
          </div>
        </div>
      </section>

      {/* New arrivals */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#c9a96a] uppercase tracking-widest">وصل حديثاً</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1410] mt-2">أحدث التشكيلات</h2>
            <div className="w-20 h-1 bg-[#c9a96a] mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {PRODUCTS.filter((p) => p.isNew).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/products"
              className="inline-block bg-[#1a1410] hover:bg-[#c9a96a] text-white font-bold px-8 py-3 rounded-full transition-colors"
            >
              عرض كل المنتجات ←
            </Link>
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-semibold text-[#c9a96a] uppercase tracking-widest">من نحن</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1410] mt-2 mb-6">
              إرث من <span className="text-gold-gradient">الفخامة</span> منذ 1985
            </h2>
            <p className="text-[#1a1410]/70 text-base sm:text-lg leading-relaxed mb-4">
              نحن متجر مجوهرات فاخرة متخصص في تصميم وبيع أرقى المجوهرات منذ أكثر من 40 عاماً. نلتزم بأعلى معايير الجودة والأصالة، ونوفّر لعملائنا تشكيلة استثنائية من المجوهرات المرصّعة بأرقى الأحجار الكريمة.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center">
                <div className="text-3xl font-extrabold text-gold-gradient">40+</div>
                <div className="text-xs text-[#8a7448] mt-1">سنة خبرة</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-extrabold text-gold-gradient">50K+</div>
                <div className="text-xs text-[#8a7448] mt-1">عميل سعيد</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-extrabold text-gold-gradient">100%</div>
                <div className="text-xs text-[#8a7448] mt-1">أصالة مضمونة</div>
              </div>
            </div>
            <Link
              href="/about"
              className="inline-block mt-8 bg-[#c9a96a] hover:bg-[#8a7448] text-white font-bold px-6 py-3 rounded-full transition-colors"
            >
              اقرأ المزيد ←
            </Link>
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
      </section>

      <Footer />
    </div>
  );
}
