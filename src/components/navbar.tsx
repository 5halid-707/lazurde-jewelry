"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Search, Heart, ShoppingCart, User } from "lucide-react";
import { useCart } from "@/lib/cart-context";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { count } = useCart();

  return (
    <>
      {/* Top announcement bar */}
      <div className="bg-[#1a1410] text-[#c9a96a] text-center py-2 text-xs sm:text-sm overflow-hidden">
        <div className="animate-marquee inline-block whitespace-nowrap">
          ✦ شحن مجاني للطلبات فوق 500 ر.س ✦ خصم 25% على الألماس هذا الأسبوع ✦ ضمان استرجاع 30 يوم ✦ تواصل معنا: 0575015019 ✦
        </div>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white shadow-md border-b border-[#c9a96a]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-4">
          <button
            className="lg:hidden p-2 text-[#1a1410]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#c9a96a] to-[#8a7448] flex items-center justify-center text-white font-extrabold text-xl shadow-lg group-hover:scale-110 transition-transform">
              م
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-lg sm:text-xl font-extrabold text-gold-gradient">مجوهرات</span>
              <span className="text-[10px] text-[#8a7448] tracking-widest hidden sm:block">LUXURY JEWELRY</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            <Link href="/" className="text-sm font-semibold text-[#1a1410] hover:text-[#c9a96a] transition-colors">الرئيسية</Link>
            <Link href="/products" className="text-sm font-semibold text-[#1a1410] hover:text-[#c9a96a] transition-colors">المنتجات</Link>
            <Link href="/products?category=rings" className="text-sm font-semibold text-[#1a1410] hover:text-[#c9a96a] transition-colors">خواتم</Link>
            <Link href="/products?category=necklaces" className="text-sm font-semibold text-[#1a1410] hover:text-[#c9a96a] transition-colors">قلائد</Link>
            <Link href="/about" className="text-sm font-semibold text-[#1a1410] hover:text-[#c9a96a] transition-colors">من نحن</Link>
            <Link href="/contact" className="text-sm font-semibold text-[#1a1410] hover:text-[#c9a96a] transition-colors">تواصل</Link>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button className="p-2 text-[#1a1410] hover:text-[#c9a96a] transition-colors" aria-label="Search">
              <Search size={20} />
            </button>
            <Link href="/wishlist" className="p-2 text-[#1a1410] hover:text-[#c9a96a] transition-colors relative" aria-label="Wishlist">
              <Heart size={20} />
            </Link>
            <Link href="/cart" className="p-2 text-[#1a1410] hover:text-[#c9a96a] transition-colors relative" aria-label="Cart">
              <ShoppingCart size={20} />
              {count > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-[#c9a96a] text-white text-[10px] rounded-full flex items-center justify-center">
                  {count}
                </span>
              )}
            </Link>
            <button className="hidden sm:block p-2 text-[#1a1410] hover:text-[#c9a96a] transition-colors" aria-label="Account">
              <User size={20} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-[#c9a96a]/20 py-4">
            <nav className="flex flex-col px-4 gap-2">
              <Link href="/" onClick={() => setMenuOpen(false)} className="py-2 text-sm font-semibold text-[#1a1410] hover:text-[#c9a96a]">الرئيسية</Link>
              <Link href="/products" onClick={() => setMenuOpen(false)} className="py-2 text-sm font-semibold text-[#1a1410] hover:text-[#c9a96a]">المنتجات</Link>
              <Link href="/about" onClick={() => setMenuOpen(false)} className="py-2 text-sm font-semibold text-[#1a1410] hover:text-[#c9a96a]">من نحن</Link>
              <Link href="/contact" onClick={() => setMenuOpen(false)} className="py-2 text-sm font-semibold text-[#1a1410] hover:text-[#c9a96a]">تواصل</Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
