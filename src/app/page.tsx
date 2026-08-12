"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Truck, Shield, RefreshCw, Headphones, ChevronLeft, ChevronRight,
  Star, ArrowLeft, Sparkles, Award,
} from "lucide-react";
import { CATEGORIES, PRODUCTS, formatPrice } from "@/lib/data";
import { useCart } from "@/lib/cart-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ProductCard from "@/components/product-card";

// Hero carousel slides
const HERO_SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80&auto=format&fit=crop",
    badge: "مجموعة 2026 الجديدة",
    title: "فخامة تليق بأناقتك",
    subtitle: "اكتشف مجموعتنا الحصرية من المجوهرات الفاخرة المرصّعة بأرقى الأحجار الكريمة",
    ctaText: "تسوّق الآن",
    ctaLink: "/products",
    color: "#c9a96a",
  },
  {
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1920&q=80&auto=format&fit=crop",
    badge: "مجموعة الألماس",
    title: "المجوهرات الماسية لإطلالة تشعّ بالبريق",
    subtitle: "خواتم وقلائد ألماس فاخرة بتصاميم خالدة",
    ctaText: "اكتشف المجموعة",
    ctaLink: "/products?category=rings",
    color: "#e6c885",
  },
  {
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1920&q=80&auto=format&fit=crop",
    badge: "مجموعة اللؤلؤ",
    title: "أناقة خالدة مع اللؤلؤ الطبيعي",
    subtitle: "قلائد وأقراط من اللؤلؤ الطبيعي بلمسة عصرية",
    ctaText: "تسوّق اللؤلؤ",
    ctaLink: "/products?category=necklaces",
    color: "#d4a5a5",
  },
];

// Collection cards
const COLLECTIONS = [
  { name: "ألماس", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80&auto=format&fit=crop", link: "/products?category=rings", color: "#c9a96a" },
  { name: "ذهب أبيض", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80&auto=format&fit=crop", link: "/products?category=bracelets", color: "#e6c885" },
  { name: "ذهب أصفر", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80&auto=format&fit=crop", link: "/products?category=earrings", color: "#facc15" },
  { name: "ذهب وردي", image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400&q=80&auto=format&fit=crop", link: "/products?category=rings", color: "#d4a5a5" },
  { name: "لؤلؤ", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80&auto=format&fit=crop", link: "/products?category=necklaces", color: "#faf8f5" },
  { name: "أحجار ملونة", image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400&q=80&auto=format&fit=crop", link: "/products?category=rings", color: "#a855f7" },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { addItem } = useCart();

  // Auto-advance hero carousel
  useEffect(() => {
    const id = setInterval(() => {
      setCurrentSlide((s) => (s + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const bestsellers = PRODUCTS.filter((p) => p.isBestseller);
  const newArrivals = PRODUCTS.filter((p) => p.isNew);
  const topRated = [...PRODUCTS].sort((a, b) => b.rating - a.rating).slice(0, 4);

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <Navbar />

      {/* Hero carousel */}
      <section className="relative h-[500px] sm:h-[600px] overflow-hidden">
        {HERO_SLIDES.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-l from-[#1a1410]/80 via-[#1a1410]/40 to-transparent" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center">
              <div className="max-w-lg text-white">
                <span
                  className="inline-block backdrop-blur-md border px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-4"
                  style={{ backgroundColor: `${slide.color}20`, borderColor: `${slide.color}40`, color: slide.color }}
                >
                  ✦ {slide.badge}
                </span>
                <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-base sm:text-lg text-white/80 mb-6">{slide.subtitle}</p>
                <Link
                  href={slide.ctaLink}
                  className="inline-block bg-[#c9a96a] hover:bg-[#8a7448] text-white font-bold px-6 py-3 rounded-full transition-all hover:scale-105 shadow-lg"
                >
                  {slide.ctaText} ←
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel arrows */}
        <button
          onClick={() => setCurrentSlide((s) => (s - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
          className="absolute top-1/2 -translate-y-1/2 right-4 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/40 text-white flex items-center justify-center transition-all"
          aria-label="Previous"
        >
          <ChevronRight size={24} />
        </button>
        <button
          onClick={() => setCurrentSlide((s) => (s + 1) % HERO_SLIDES.length)}
          className="absolute top-1/2 -translate-y-1/2 left-4 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/40 text-white flex items-center justify-center transition-all"
          aria-label="Next"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 rounded-full transition-all ${
                i === currentSlide ? "bg-[#c9a96a] w-10" : "bg-white/40 w-2"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
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

      {/* Shop by category */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#c9a96a] uppercase tracking-widest">تصفّح حسب الفئة</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1410] mt-2">تسوّقوا حسب الفئة</h2>
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

      {/* Shop by collection (Lazurde-style) */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#c9a96a] uppercase tracking-widest">تشكيلاتنا</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1410] mt-2">تسوّقوا المجموعات</h2>
            <div className="w-20 h-1 bg-[#c9a96a] mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
            {COLLECTIONS.map((col, i) => (
              <Link
                key={i}
                href={col.link}
                className="relative aspect-[4/5] rounded-2xl overflow-hidden group"
              >
                <img
                  src={col.image}
                  alt={col.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410]/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-6 text-center">
                  <h3 className="text-2xl font-extrabold text-white mb-2">{col.name}</h3>
                  <span className="inline-block text-[#c9a96a] text-sm font-medium border-b-2 border-[#c9a96a] pb-1">
                    تسوّق الآن ←
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-16 sm:py-20 bg-[#1a1410]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <span className="text-sm font-semibold text-[#c9a96a] uppercase tracking-widest">الأكثر مبيعاً</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">قطع لا تُقاوَم</h2>
            </div>
            <Link
              href="/products"
              className="hidden sm:flex items-center gap-1 text-[#c9a96a] hover:text-white transition-colors text-sm font-medium"
            >
              عرض الكل <ArrowLeft size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {bestsellers.map((product) => (
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
          <div className="flex items-center justify-between mb-12">
            <div>
              <span className="text-sm font-semibold text-[#c9a96a] uppercase tracking-widest">وصل حديثاً</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1410] mt-2">أحدث التشكيلات</h2>
            </div>
            <Link
              href="/products"
              className="hidden sm:flex items-center gap-1 text-[#c9a96a] hover:text-[#8a7448] transition-colors text-sm font-medium"
            >
              عرض الكل <ArrowLeft size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Top rated */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#c9a96a] uppercase tracking-widest">الأعلى تقييماً</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1410] mt-2">مختارات العملاء</h2>
            <div className="w-20 h-1 bg-[#c9a96a] mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {topRated.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Promotional banner */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-l from-[#1a1410] via-[#2d2418] to-[#1a1410] p-8 sm:p-16 text-center">
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: "url(https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80&auto=format&fit=crop)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }} />
            <div className="relative">
              <Sparkles className="mx-auto text-[#c9a96a] mb-4" size={40} />
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                خصم <span className="text-gold-gradient">25%</span> على مجموعة الألماس
              </h2>
              <p className="text-white/70 text-lg mb-6 max-w-2xl mx-auto">
                لفترة محدودة، استمتع بخصم حصري على تشكيلة الألماس الفاخرة. اكتشف القطع التي تليق بلحظاتك الثمينة.
              </p>
              <Link
                href="/products?category=rings"
                className="inline-block bg-[#c9a96a] hover:bg-[#8a7448] text-white font-bold px-8 py-4 rounded-full transition-colors shadow-lg"
              >
                تسوّق العرض الآن ←
              </Link>
              <p className="text-xs text-white/50 mt-4">* العرض ساري لفترة محدودة</p>
            </div>
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

      {/* Newsletter */}
      <section className="py-16 bg-[#1a1410]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <Award className="mx-auto text-[#c9a96a] mb-4" size={40} />
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            اشتركوا للحصول على إشعارات بشأن أحدث المنتجات والعروض والخصومات
          </h2>
          <p className="text-white/70 mb-6">كن أول من يعرف عن عروضنا الحصرية</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => { e.preventDefault(); alert("✓ تم الاشتراك بنجاح!"); }}>
            <input
              type="email"
              required
              placeholder="بريدك الإلكتروني"
              className="flex-1 px-4 py-3 rounded-full text-[#1a1410] bg-white border-2 border-[#c9a96a]/30 focus:border-[#c9a96a] focus:outline-none"
              dir="ltr"
            />
            <button
              type="submit"
              className="bg-[#c9a96a] hover:bg-[#8a7448] text-white font-bold px-6 py-3 rounded-full transition-colors"
            >
              اشترك
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
