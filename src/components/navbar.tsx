"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Truck, Shield, RefreshCw, Headphones, ChevronDown, Menu, X, Search,
  Heart, ShoppingCart, User, Globe, Star, Sparkles, ArrowLeft,
} from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { CATEGORIES } from "@/lib/data";

const NAV_LINKS = [
  {
    label: "خواتم",
    href: "/products?category=rings",
    submenu: [
      { label: "خواتم خطوبة", href: "/products?category=rings" },
      { label: "خواتم ألماس", href: "/products?category=rings" },
      { label: "خواتم ذهب أبيض", href: "/products?category=rings" },
      { label: "خواتم ذهب وردي", href: "/products?category=rings" },
      { label: "خواتم ذهب أصفر", href: "/products?category=rings" },
      { label: "خواتم أحجار ملونة", href: "/products?category=rings" },
    ],
  },
  {
    label: "أقراط",
    href: "/products?category=earrings",
    submenu: [
      { label: "أقراط ألماس", href: "/products?category=earrings" },
      { label: "أقراط ذهب أبيض", href: "/products?category=earrings" },
      { label: "أقراط دائرية", href: "/products?category=earrings" },
      { label: "أقراط معلّقة", href: "/products?category=earrings" },
      { label: "أقراط حلقية صغيرة", href: "/products?category=earrings" },
      { label: "أقراط لؤلؤ", href: "/products?category=earrings" },
    ],
  },
  {
    label: "قلائد",
    href: "/products?category=necklaces",
    submenu: [
      { label: "قلائد ألماس", href: "/products?category=necklaces" },
      { label: "قلائد ذهب أبيض", href: "/products?category=necklaces" },
      { label: "قلائد لؤلؤ", href: "/products?category=necklaces" },
      { label: "سلاسل ذهبية", href: "/products?category=necklaces" },
      { label: "قلائد أحجار ملونة", href: "/products?category=necklaces" },
      { label: "قلائد للأطفال", href: "/products?category=necklaces" },
    ],
  },
  {
    label: "أساور",
    href: "/products?category=bracelets",
    submenu: [
      { label: "أساور ألماس", href: "/products?category=bracelets" },
      { label: "أساور ذهب أبيض", href: "/products?category=bracelets" },
      { label: "أساور اللؤلؤ", href: "/products?category=bracelets" },
      { label: "أساور أحجار ملونة", href: "/products?category=bracelets" },
      { label: "أساور للتنسيق", href: "/products?category=bracelets" },
      { label: "خلاخل", href: "/products?category=bracelets" },
    ],
  },
  { label: "ساعات", href: "/products?category=watches" },
  { label: "أطقم", href: "/products?category=sets" },
  { label: "ألماس", href: "/products?category=rings" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const { count } = useCart();

  return (
    <>
      {/* Top utility bar */}
      <div className="bg-[#1a1410] text-[#c9a96a] text-center py-2 text-xs">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-6 flex-wrap">
          <span className="hidden sm:inline">✦ شحن مجاني للطلبات فوق 500 ر.س</span>
          <span>✦ ضمان استرجاع 30 يوم</span>
          <span className="hidden sm:inline">✦ تواصل: 0575015019</span>
          <span className="hidden md:inline">✦ خصم 25% على الألماس</span>
        </div>
      </div>

      {/* Main navbar */}
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
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#c9a96a] to-[#8a7448] flex items-center justify-center text-white font-extrabold text-xl shadow-lg group-hover:scale-110 transition-transform">
              م
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-lg sm:text-xl font-extrabold text-gold-gradient">مجوهرات</span>
              <span className="text-[10px] text-[#8a7448] tracking-widest hidden sm:block">LUXURY JEWELRY</span>
            </div>
          </Link>

          {/* Desktop nav with mega menu */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.submenu && setActiveSubmenu(link.label)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-[#1a1410] hover:text-[#c9a96a] transition-colors rounded-lg hover:bg-[#c9a96a]/5"
                >
                  {link.label}
                  {link.submenu && <ChevronDown size={14} />}
                </Link>

                {/* Mega menu dropdown */}
                {link.submenu && activeSubmenu === link.label && (
                  <div className="absolute top-full right-0 mt-1 w-56 bg-white rounded-2xl shadow-2xl border border-[#c9a96a]/20 overflow-hidden">
                    <div className="py-2">
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className="block px-4 py-2.5 text-sm text-[#1a1410] hover:bg-[#c9a96a]/10 hover:text-[#c9a96a] transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            <button className="p-2 text-[#1a1410] hover:text-[#c9a96a] transition-colors" aria-label="Search">
              <Search size={20} />
            </button>
            <Link href="/wishlist" className="p-2 text-[#1a1410] hover:text-[#c9a96a] transition-colors" aria-label="Wishlist">
              <Heart size={20} />
            </Link>
            <Link href="/cart" className="p-2 text-[#1a1410] hover:text-[#c9a96a] transition-colors relative" aria-label="Cart">
              <ShoppingCart size={20} />
              {count > 0 && (
                <span className="absolute top-0 right-0 w-5 h-5 bg-[#c9a96a] text-white text-[10px] rounded-full flex items-center justify-center font-bold">
                  {count}
                </span>
              )}
            </Link>
            <button className="hidden sm:block p-2 text-[#1a1410] hover:text-[#c9a96a] transition-colors" aria-label="Account">
              <User size={20} />
            </button>
            <button className="hidden sm:block p-2 text-[#1a1410] hover:text-[#c9a96a] transition-colors" aria-label="Language">
              <Globe size={20} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-[#c9a96a]/20 py-4 max-h-[80vh] overflow-y-auto">
            <nav className="flex flex-col px-4 gap-1">
              {NAV_LINKS.map((link) => (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-2.5 text-sm font-semibold text-[#1a1410] hover:text-[#c9a96a]"
                  >
                    {link.label}
                  </Link>
                  {link.submenu && (
                    <div className="pr-4 border-r-2 border-[#c9a96a]/20 mr-2 mb-2">
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          onClick={() => setMenuOpen(false)}
                          className="block py-1.5 text-xs text-[#8a7448] hover:text-[#c9a96a]"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="border-t border-[#c9a96a]/20 mt-2 pt-3">
                <Link href="/about" onClick={() => setMenuOpen(false)} className="block py-2 text-sm font-semibold text-[#1a1410]">من نحن</Link>
                <Link href="/contact" onClick={() => setMenuOpen(false)} className="block py-2 text-sm font-semibold text-[#1a1410]">تواصل معنا</Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
