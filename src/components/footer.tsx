"use client";

import Link from "next/link";
import { Instagram, Twitter, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { CATEGORIES } from "@/lib/data";

export default function Footer() {
  return (
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

          <div>
            <h4 className="font-bold text-[#c9a96a] mb-4">روابط سريعة</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="/" className="hover:text-[#c9a96a]">الرئيسية</Link></li>
              <li><Link href="/products" className="hover:text-[#c9a96a]">المنتجات</Link></li>
              <li><Link href="/about" className="hover:text-[#c9a96a]">من نحن</Link></li>
              <li><Link href="/contact" className="hover:text-[#c9a96a]">تواصل معنا</Link></li>
              <li><Link href="/cart" className="hover:text-[#c9a96a]">سلة التسوّق</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#c9a96a] mb-4">الفئات</h4>
            <ul className="space-y-2 text-sm text-white/70">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/products?category=${cat.id}`}
                    className="hover:text-[#c9a96a]"
                  >
                    {cat.icon} {cat.nameAr}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

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
            {/* Tabby + Tamara badges */}
            <div className="mt-4">
              <p className="text-xs text-white/50 mb-2">طرق دفع مرنة:</p>
              <div className="flex gap-2">
                <div className="px-3 py-1.5 rounded-md bg-[#2d5f4e] text-white text-xs font-bold">tabby</div>
                <div className="px-3 py-1.5 rounded-md bg-[#1a3a5c] text-white text-xs font-bold">tamara</div>
              </div>
            </div>
          </div>
        </div>

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
  );
}
