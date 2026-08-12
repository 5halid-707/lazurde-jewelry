"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { type Product, formatPrice } from "@/lib/data";
import { useCart } from "@/lib/cart-context";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [wishlisted, setWishlisted] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.id,
      nameAr: product.nameAr,
      price: product.price,
      currency: product.currency,
      image: product.image,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Link href={`/products/${product.id}`} className="card-lift bg-white rounded-2xl overflow-hidden border border-[#c9a96a]/20 group block">
      <div className="relative aspect-square overflow-hidden shine-effect">
        <img
          src={product.image}
          alt={product.nameAr}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
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
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setWishlisted(!wishlisted);
          }}
          className="absolute top-2 left-2 w-8 h-8 rounded-full bg-white/80 hover:bg-white flex items-center justify-center transition-colors"
          aria-label="wishlist"
        >
          <Heart size={16} className={wishlisted ? "text-red-500 fill-current" : "text-[#c9a96a]"} />
        </button>
      </div>

      <div className="p-3 sm:p-4">
        <div className="flex items-center gap-1 mb-1">
          <Star size={12} className="text-[#c9a96a] fill-current" />
          <span className="text-xs text-[#8a7448]">{product.rating}</span>
          <span className="text-xs text-gray-400">({product.reviews})</span>
        </div>
        <h3 className="font-bold text-sm text-[#1a1410] mb-2 line-clamp-1 group-hover:text-[#c9a96a] transition-colors">
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
          onClick={handleAddToCart}
          className={`w-full text-white text-xs font-bold py-2.5 rounded-xl transition-colors flex items-center justify-center gap-1.5 ${
            added ? "bg-[#2d5f4e]" : "bg-[#1a1410] hover:bg-[#c9a96a]"
          }`}
        >
          {added ? (
            <>✓ تمت الإضافة</>
          ) : (
            <>
              <ShoppingCart size={14} />
              أضف إلى السلة
            </>
          )}
        </button>

        {/* Tabby badge */}
        <div className="mt-2 flex items-center gap-1">
          <span className="text-[10px] text-[#8a7448]">أو 4 دفعات بقيمة</span>
          <span className="text-[10px] font-bold text-[#2d5f4e]">
            {formatPrice(Math.round(product.price / 4), product.currency)}
          </span>
          <span className="px-1.5 py-0.5 rounded bg-[#2d5f4e] text-white text-[9px] font-bold">tabby</span>
        </div>
      </div>
    </Link>
  );
}
