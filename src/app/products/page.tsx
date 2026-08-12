"use client";

import { useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";
import { CATEGORIES, PRODUCTS } from "@/lib/data";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ProductCard from "@/components/product-card";

function ProductsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState("default");

  let filteredProducts = activeCategory === "all"
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  if (sortBy === "price-asc") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-desc") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <Navbar />

      <section className="bg-[#1a1410] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-sm font-semibold text-[#c9a96a] uppercase tracking-widest">تشكيلتنا</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-2">كل المنتجات</h1>
          <div className="w-20 h-1 bg-[#c9a96a] mx-auto mt-4 rounded-full"></div>
        </div>
      </section>

      <section className="py-8 bg-white border-b border-[#c9a96a]/20 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
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
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 rounded-full text-sm font-medium border border-[#c9a96a]/30 bg-white text-[#1a1410] focus:outline-none focus:border-[#c9a96a]"
          >
            <option value="default">ترتيب افتراضي</option>
            <option value="price-asc">السعر: من الأقل للأعلى</option>
            <option value="price-desc">السعر: من الأعلى للأقل</option>
            <option value="rating">الأعلى تقييماً</option>
          </select>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-sm text-[#8a7448] mb-6">
            عرض {filteredProducts.length} منتج
          </p>
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-[#8a7448]">لا توجد منتجات في هذه الفئة</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {filteredProducts.map((product) => (
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

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-[#c9a96a]"></div></div>}>
      <ProductsContent />
    </Suspense>
  );
}
