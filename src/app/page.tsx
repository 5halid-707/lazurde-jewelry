"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Menu, X, Search, Heart, ShoppingCart, User, ChevronLeft, ChevronRight,
  Star, Truck, Shield, RefreshCw, Headphones, Instagram, Twitter, Facebook,
  Youtube, Mail, Phone, MapPin,
} from "lucide-react";
import { CATEGORIES, PRODUCTS, formatPrice, type Product } from "@/lib/data";

export default function Home() {
  const [cart, setCart] = useState<string[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const addToCart = (id: string) => {
    setCart((c) => [...c, id]);
    alert("✓ تمت الإضافة إلى السلة");
  };
  const toggleWishlist = (id: string) => {
    setWishlist((w) => (w.includes(id) ? w.filter((x) => x !== id) : [...w, id]));
  };

  const filteredProducts = activeCategory === "all"
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      {/* Top announcement bar */}
      <div className="bg-[#1a1410] text-[#c9a96a] text-center py-2 text-xs sm:text-sm">
        <div className="animate-marquee inline-block whitespace-nowrap">
          ✦ شحن مجاني للطلبات فوق 500 ر.س ✦ خصم 25% على الألماس هذا الأسبوع ✦ ضمان استرجاع 30 يوم ✦ تواصل معنا: 0575015019 ✦
        </div>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white shadow-md border-b border-[#c9a96a]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-4">
          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-[#1a1410]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#c9a96a] to-[#8a7448] flex items-center justify-center text-white font-extrabold text-xl shadow-lg group-hover:scale-110 transition-transform">
              م
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-lg sm:text-xl font-extrabold text-gold-gradient">مجوهرات</span>
              <span className="text-[10px] text-[#8a7448] tracking-widest hidden sm:block">LUXURY JEWELRY</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link href="/" className="text-sm font-semibold text-[#1a1410] hover:text-[#c9a96a] transition-colors">الرئيسية</Link>
            <Link href="#categories" className="text-sm font-semibold text-[#1a1410] hover:text-[#c9a96a] transition-colors">الفئات</Link>
            <Link href="#products" className="text-sm font-semibold text-[#1a1410] hover:text-[#c9a96a] transition-colors">المنتجات</Link>
            <Link href="#bestsellers" className="text-sm font-semibold text-[#1a1410] hover:text-[#c9a96a] transition-colors">الأكثر مبيعاً</Link>
            <Link href="#about" className="text-sm font-semibold text-[#1a1410] hover:text-[#c9a96a] transition-colors">من نحن</Link>
            <Link href="#contact" className="text-sm font-semibold text-[#1a1410] hover:text-[#c9a96a] transition-colors">تواصل</Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button className="p-2 text-[#1a1410] hover:text-[#c9a96a] transition-colors" aria-label="Search">
              <Search size={20} />
            </button>
            <button className="p-2 text-[#1a1410] hover:text-[#c9a96a] transition-colors relative" aria-label="Wishlist">
              <Heart size={20} />
              {wishlist.length > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>
            <button className="p-2 text-[#1a1410] hover:text-[#c9a96a] transition-colors relative" aria-label="Cart">
              <ShoppingCart size={20} />
              {cart.length > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-[#c9a96a] text-white text-[10px] rounded-full flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </button>
            <button className="hidden sm:block p-2 text-[#1a1410] hover:text-[#c9a96a] transition-colors" aria-label="Account">
              <User size={20} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-[#c9a96a]/20 py-4">
            <nav className="flex flex-col px-4 gap-2">
              <Link href="/" onClick={() => setMenuOpen(false)} className="py-2 text-sm font-semibold text-[#1a1410] hover:text-[#c9a96a]">الرئيسية</Link>
              <Link href="#categories" onClick={() => setMenuOpen(false)} className="py-2 text-sm font-semibold text-[#1a1410] hover:text-[#c9a96a]">الفئات</Link>
              <Link href="#products" onClick={() => setMenuOpen(false)} className="py-2 text-sm font-semibold text-[#1a1410] hover:text-[#c9a96a]">المنتجات</Link>
              <Link href="#bestsellers" onClick={() => setMenuOpen(false)} className="py-2 text-sm font-semibold text-[#1a1410] hover:text-[#c9a96a]">الأكثر مبيعاً</Link>
              <Link href="#about" onClick={() => setMenuOpen(false)} className="py-2 text-sm font-semibold text-[#1a1410] hover:text-[#c9a96a]">من نحن</Link>
              <Link href="#contact" onClick={() => setMenuOpen(false)} className="py-2 text-sm font-semibold text-[#1a1410] hover:text-[#c9a96a]">تواصل</Link>
            </nav>
          </div>
        )}
      </header>

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
              <a
                href="#products"
                className="bg-[#c9a96a] hover:bg-[#8a7448] text-white font-bold px-6 py-3 rounded-full transition-all hover:scale-105 shadow-lg"
              >
                تسوّق الآن
              </a>
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
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="card-lift bg-white rounded-2xl p-6 text-center border border-[#c9a96a]/20 hover:border-[#c9a96a] transition-all"
              >
                <div className="text-4xl mb-3">{cat.icon}</div>
                <h3 className="font-bold text-[#1a1410] text-sm sm:text-base">{cat.nameAr}</h3>
                <p className="text-xs text-[#8a7448] mt-1">{cat.count} منتج</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section id="bestsellers" className="py-16 sm:py-20 bg-[#1a1410]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#c9a96a] uppercase tracking-widest">الأكثر مبيعاً</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">قطع لا تُقاوَم</h2>
            <div className="w-20 h-1 bg-[#c9a96a] mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {PRODUCTS.filter((p) => p.isBestseller).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={() => addToCart(product.id)}
                onWishlist={() => toggleWishlist(product.id)}
                isWishlisted={wishlist.includes(product.id)}
                onClick={() => setSelectedProduct(product)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* All products with filter */}
      <section id="products" className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-sm font-semibold text-[#c9a96a] uppercase tracking-widest">كل المنتجات</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1410] mt-2">تشكيلتنا الكاملة</h2>
            </div>
            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2 custom-scrollbar overflow-x-auto max-w-full">
              <button
                onClick={() => setActiveCategory("all")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  activeCategory === "all"
                    ? "bg-[#c9a96a] text-white"
                    : "bg-white border border-[#c9a96a]/30 text-[#1a1410] hover:border-[#c9a96a]"
                }`}
              >
                الكل
              </button>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                    activeCategory === cat.id
                      ? "bg-[#c9a96a] text-white"
                      : "bg-white border border-[#c9a96a]/30 text-[#1a1410] hover:border-[#c9a96a]"
                  }`}
                >
                  {cat.icon} {cat.nameAr}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={() => addToCart(product.id)}
                onWishlist={() => toggleWishlist(product.id)}
                isWishlisted={wishlist.includes(product.id)}
                onClick={() => setSelectedProduct(product)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About section */}
      <section id="about" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-semibold text-[#c9a96a] uppercase tracking-widest">من نحن</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1410] mt-2 mb-6">
              إرث من <span className="text-gold-gradient">الفخامة</span> منذ 1985
            </h2>
            <p className="text-[#1a1410]/70 text-base sm:text-lg leading-relaxed mb-4">
              نحن متجر مجوهرات فاخرة متخصص في تصميم وبيع أرقى المجوهرات منذ أكثر من 40 عاماً. نلتزم بأعلى معايير الجودة والأصالة، ونوفّر لعملائنا تشكيلة استثنائية من المجوهرات المرصّعة بأرقى الأحجار الكريمة.
            </p>
            <p className="text-[#1a1410]/70 text-base sm:text-lg leading-relaxed mb-6">
              كل قطعة من مجوهراتنا تأتي مع شهادة أصالة وضمان مدى الحياة، ونوفّر خدمة صيانة وتنظيف مجانية مدى الحياة لكل عملائنا.
            </p>
            <div className="grid grid-cols-3 gap-4">
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

      {/* Contact / Footer */}
      <footer id="contact" className="bg-[#1a1410] text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#c9a96a] to-[#8a7448] flex items-center justify-center text-white font-extrabold text-xl">
                  م
                </div>
                <div>
                  <p className="text-xl font-extrabold text-gold-gradient">مجوهرات</p>
                  <p className="text-[10px] text-[#c9a96a] tracking-widest">LUXURY JEWELRY</p>
                </div>
              </div>
              <p className="text-sm text-white/60 mb-4 leading-relaxed">
                متجر مجوهرات فاخرة متخصص في أرقى التصاميم العالمية منذ 1985.
              </p>
              <div className="flex gap-2">
                {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#c9a96a] flex items-center justify-center transition-colors"
                    aria-label="social"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="font-bold text-[#c9a96a] mb-4">روابط سريعة</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><Link href="/" className="hover:text-[#c9a96a]">الرئيسية</Link></li>
                <li><a href="#categories" className="hover:text-[#c9a96a]">الفئات</a></li>
                <li><a href="#products" className="hover:text-[#c9a96a]">المنتجات</a></li>
                <li><a href="#bestsellers" className="hover:text-[#c9a96a]">الأكثر مبيعاً</a></li>
                <li><a href="#about" className="hover:text-[#c9a96a]">من نحن</a></li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="font-bold text-[#c9a96a] mb-4">الفئات</h4>
              <ul className="space-y-2 text-sm text-white/70">
                {CATEGORIES.map((cat) => (
                  <li key={cat.id}>
                    <a
                      href="#products"
                      onClick={() => setActiveCategory(cat.id)}
                      className="hover:text-[#c9a96a]"
                    >
                      {cat.icon} {cat.nameAr}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-[#c9a96a] mb-4">تواصل معنا</h4>
              <ul className="space-y-3 text-sm text-white/70">
                <li className="flex items-center gap-2">
                  <Phone size={16} className="text-[#c9a96a]" />
                  <span dir="ltr">0575015019</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} className="text-[#c9a96a]" />
                  <span>info@jewelry.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin size={16} className="text-[#c9a96a]" />
                  <span>جدة، المملكة العربية السعودية</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-6 border-t border-white/10 text-center text-xs text-white/50">
            <p>© 2026 مجوهرات فاخرة. جميع الحقوق محفوظة.</p>
            <p className="mt-2 text-[#c9a96a]">
              ✦ صُمّم بكل ❤ حب بواسطة{" "}
              <a
                href="https://khalid-cyber-security.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline hover:text-white"
              >
                خالد محمد
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Product detail modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid sm:grid-cols-2 gap-0">
              <div className="relative aspect-square">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.nameAr}
                  className="w-full h-full object-cover rounded-r-3xl"
                />
                {selectedProduct.discount && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    خصم {selectedProduct.discount}%
                  </div>
                )}
              </div>
              <div className="p-6">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 left-4 w-8 h-8 rounded-full bg-white/80 hover:bg-white flex items-center justify-center"
                >
                  <X size={18} />
                </button>
                <h3 className="text-xl font-extrabold text-[#1a1410] mb-2">{selectedProduct.nameAr}</h3>
                <p className="text-xs text-[#8a7448] mb-3">{selectedProduct.nameEn}</p>

                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        size={14}
                        className={s <= Math.round(selectedProduct.rating) ? "text-[#c9a96a] fill-current" : "text-gray-300"}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-[#8a7448]">
                    {selectedProduct.rating} ({selectedProduct.reviews} تقييم)
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-extrabold text-[#c9a96a]">
                    {formatPrice(selectedProduct.price, selectedProduct.currency)}
                  </span>
                  {selectedProduct.oldPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      {formatPrice(selectedProduct.oldPrice, selectedProduct.currency)}
                    </span>
                  )}
                </div>

                <p className="text-sm text-[#1a1410]/70 mb-4 leading-relaxed">
                  {selectedProduct.descriptionAr}
                </p>

                <div className="bg-[#faf8f5] rounded-xl p-3 mb-4 space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-[#8a7448]">الخامة:</span>
                    <span className="font-medium text-[#1a1410]">{selectedProduct.material}</span>
                  </div>
                  {selectedProduct.weight && (
                    <div className="flex justify-between">
                      <span className="text-[#8a7448]">الوزن:</span>
                      <span className="font-medium text-[#1a1410]">{selectedProduct.weight}</span>
                    </div>
                  )}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      addToCart(selectedProduct.id);
                      setSelectedProduct(null);
                    }}
                    className="flex-1 bg-[#c9a96a] hover:bg-[#8a7448] text-white font-bold py-3 rounded-xl transition-colors"
                  >
                    أضف إلى السلة
                  </button>
                  <button
                    onClick={() => toggleWishlist(selectedProduct.id)}
                    className="w-12 h-12 rounded-xl border-2 border-[#c9a96a]/30 hover:border-[#c9a96a] flex items-center justify-center transition-colors"
                  >
                    <Heart
                      size={20}
                      className={wishlist.includes(selectedProduct.id) ? "text-red-500 fill-current" : "text-[#c9a96a]"}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ProductCard({
  product,
  onAddToCart,
  onWishlist,
  isWishlisted,
  onClick,
}: {
  product: Product;
  onAddToCart: () => void;
  onWishlist: () => void;
  isWishlisted: boolean;
  onClick: () => void;
}) {
  return (
    <div className="card-lift bg-white rounded-2xl overflow-hidden border border-[#c9a96a]/20 group">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden cursor-pointer shine-effect" onClick={onClick}>
        <img
          src={product.image}
          alt={product.nameAr}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Badges */}
        <div className="absolute top-2 right-2 flex flex-col gap-1">
          {product.isNew && (
            <span className="bg-[#2d5f4e] text-white text-[10px] font-bold px-2 py-1 rounded-full">جديد</span>
          )}
          {product.isBestseller && (
            <span className="bg-[#c9a96a] text-white text-[10px] font-bold px-2 py-1 rounded-full">الأكثر مبيعاً</span>
          )}
          {product.discount && (
            <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full">-{product.discount}%</span>
          )}
        </div>
        {/* Wishlist button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onWishlist();
          }}
          className="absolute top-2 left-2 w-8 h-8 rounded-full bg-white/80 hover:bg-white flex items-center justify-center transition-colors"
          aria-label="wishlist"
        >
          <Heart
            size={16}
            className={isWishlisted ? "text-red-500 fill-current" : "text-[#c9a96a]"}
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-3 sm:p-4">
        <div className="flex items-center gap-1 mb-1">
          <Star size={12} className="text-[#c9a96a] fill-current" />
          <span className="text-xs text-[#8a7448]">{product.rating}</span>
          <span className="text-xs text-gray-400">({product.reviews})</span>
        </div>
        <h3 className="font-bold text-sm text-[#1a1410] mb-2 line-clamp-1 cursor-pointer hover:text-[#c9a96a]" onClick={onClick}>
          {product.nameAr}
        </h3>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-base font-extrabold text-[#c9a96a]">
            {formatPrice(product.price, product.currency)}
          </span>
          {product.oldPrice && (
            <span className="text-xs text-gray-400 line-through">
              {formatPrice(product.oldPrice, product.currency)}
            </span>
          )}
        </div>
        <button
          onClick={onAddToCart}
          className="w-full bg-[#1a1410] hover:bg-[#c9a96a] text-white text-xs font-bold py-2.5 rounded-xl transition-colors flex items-center justify-center gap-1.5"
        >
          <ShoppingCart size={14} />
          أضف إلى السلة
        </button>
      </div>
    </div>
  );
}
