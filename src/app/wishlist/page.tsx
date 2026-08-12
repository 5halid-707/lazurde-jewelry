"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ProductCard from "@/components/product-card";
import { PRODUCTS } from "@/lib/data";

export default function WishlistPage() {
  // Simulate wishlist - first 4 products
  const wishlistItems = PRODUCTS.slice(0, 4);

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <Navbar />

      <section className="bg-[#1a1410] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">قائمة الرغبات</h1>
          <p className="text-[#c9a96a] text-sm mt-2">{wishlistItems.length} منتج</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {wishlistItems.length === 0 ? (
            <div className="text-center py-20">
              <Heart size={80} className="mx-auto text-[#c9a96a]/30 mb-6" />
              <h2 className="text-2xl font-extrabold text-[#1a1410] mb-3">قائمة الرغبات فارغة</h2>
              <p className="text-[#8a7448] mb-8">اضغط على ♡ في أي منتج لإضافته هنا</p>
              <Link
                href="/products"
                className="inline-block bg-[#c9a96a] hover:bg-[#8a7448] text-white font-bold px-8 py-3 rounded-full"
              >
                تصفّح المنتجات
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {wishlistItems.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
