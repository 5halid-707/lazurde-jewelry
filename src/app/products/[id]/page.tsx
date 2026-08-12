"use client";

import { useState, use } from "react";
import { useRouter } from "next/navigation";
import { Star, Heart, ShoppingCart, Minus, Plus, ChevronLeft, Truck, Shield, RefreshCw } from "lucide-react";
import { PRODUCTS, formatPrice } from "@/lib/data";
import { useCart } from "@/lib/cart-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ProductCard from "@/components/product-card";

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const product = PRODUCTS.find((p) => p.id === id);
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [wishlisted, setWishlisted] = useState(false);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-2xl text-[#8a7448] mb-4">المنتج غير موجود</p>
          <button onClick={() => router.push("/products")} className="text-[#c9a96a] underline">
            العودة للمنتجات
          </button>
        </div>
      </div>
    );
  }

  const relatedProducts = PRODUCTS
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      nameAr: product.nameAr,
      price: product.price,
      currency: product.currency,
      image: product.image,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const buyNow = () => {
    addItem({
      id: product.id,
      nameAr: product.nameAr,
      price: product.price,
      currency: product.currency,
      image: product.image,
    });
    router.push("/checkout");
  };

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-[#c9a96a]/20 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center gap-2 text-sm text-[#8a7448]">
          <button onClick={() => router.push("/")} className="hover:text-[#c9a96a]">الرئيسية</button>
          <span>/</span>
          <button onClick={() => router.push("/products")} className="hover:text-[#c9a96a]">المنتجات</button>
          <span>/</span>
          <span className="text-[#1a1410] font-medium">{product.nameAr}</span>
        </div>
      </div>

      {/* Product detail */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12">
          {/* Images */}
          <div>
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl mb-4">
              <img
                src={product.images[selectedImage] || product.image}
                alt={product.nameAr}
                className="w-full h-full object-cover"
              />
              {product.discount && (
                <div className="absolute top-4 right-4 bg-red-500 text-white text-sm font-bold px-3 py-1.5 rounded-full">
                  خصم {product.discount}%
                </div>
              )}
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-2">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                      selectedImage === i ? "border-[#c9a96a]" : "border-transparent opacity-60"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              {product.isNew && (
                <span className="bg-[#2d5f4e] text-white text-xs font-bold px-3 py-1 rounded-full">جديد</span>
              )}
              {product.isBestseller && (
                <span className="bg-[#c9a96a] text-white text-xs font-bold px-3 py-1 rounded-full">الأكثر مبيعاً</span>
              )}
            </div>
            <h1 className="text-3xl font-extrabold text-[#1a1410] mb-1">{product.nameAr}</h1>
            <p className="text-sm text-[#8a7448] mb-4">{product.nameEn}</p>

            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    size={18}
                    className={s <= Math.round(product.rating) ? "text-[#c9a96a] fill-current" : "text-gray-300"}
                  />
                ))}
              </div>
              <span className="text-sm text-[#8a7448]">
                {product.rating} ({product.reviews} تقييم)
              </span>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl font-extrabold text-[#c9a96a]">
                {formatPrice(product.price, product.currency)}
              </span>
              {product.oldPrice && (
                <span className="text-xl text-gray-400 line-through">
                  {formatPrice(product.oldPrice, product.currency)}
                </span>
              )}
            </div>

            {/* Tabby banner */}
            <div className="bg-[#2d5f4e]/10 border border-[#2d5f4e]/30 rounded-xl p-4 mb-6 flex items-center gap-3">
              <div className="bg-[#2d5f4e] text-white text-sm font-bold px-3 py-1.5 rounded-lg">tabby</div>
              <div className="text-sm text-[#1a1410]">
                4 دفعات بدون فوائد بقيمة{" "}
                <span className="font-bold text-[#2d5f4e]">
                  {formatPrice(Math.round(product.price / 4), product.currency)}
                </span>
              </div>
            </div>

            {/* Tamara banner */}
            <div className="bg-[#1a3a5c]/10 border border-[#1a3a5c]/30 rounded-xl p-4 mb-6 flex items-center gap-3">
              <div className="bg-[#1a3a5c] text-white text-sm font-bold px-3 py-1.5 rounded-lg">tamara</div>
              <div className="text-sm text-[#1a1410]">
                3 دفعات بدون فوائد بقيمة{" "}
                <span className="font-bold text-[#1a3a5c]">
                  {formatPrice(Math.round(product.price / 3), product.currency)}
                </span>
              </div>
            </div>

            <p className="text-[#1a1410]/70 text-base leading-relaxed mb-6">
              {product.descriptionAr}
            </p>

            {/* Specs */}
            <div className="bg-white rounded-xl p-4 border border-[#c9a96a]/20 mb-6 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-[#8a7448]">الخامة:</span>
                <span className="font-medium text-[#1a1410]">{product.material}</span>
              </div>
              {product.weight && (
                <div className="flex justify-between text-sm">
                  <span className="text-[#8a7448]">الوزن:</span>
                  <span className="font-medium text-[#1a1410]">{product.weight}</span>
                </div>
              )}
              <div className="flex justify-between text-sm">
                <span className="text-[#8a7448]">الفئة:</span>
                <span className="font-medium text-[#1a1410]">
                  {product.category === "rings" ? "خواتم" :
                   product.category === "earrings" ? "أقراط" :
                   product.category === "necklaces" ? "قلائد" :
                   product.category === "bracelets" ? "أساور" :
                   product.category === "watches" ? "ساعات" : "أطقم"}
                </span>
              </div>
            </div>

            {/* Quantity + actions */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border-2 border-[#c9a96a]/30 rounded-xl">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center hover:bg-[#c9a96a]/10"
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center font-bold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center hover:bg-[#c9a96a]/10"
                >
                  <Plus size={16} />
                </button>
              </div>
              <button
                onClick={() => setWishlisted(!wishlisted)}
                className="w-12 h-12 rounded-xl border-2 border-[#c9a96a]/30 hover:border-[#c9a96a] flex items-center justify-center transition-colors"
              >
                <Heart size={20} className={wishlisted ? "text-red-500 fill-current" : "text-[#c9a96a]"} />
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleAddToCart}
                className={`flex-1 ${added ? "bg-[#2d5f4e]" : "bg-[#1a1410] hover:bg-[#c9a96a]"} text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2`}
              >
                {added ? (
                  <>✓ تمت الإضافة للسلة</>
                ) : (
                  <>
                    <ShoppingCart size={18} />
                    أضف إلى السلة
                  </>
                )}
              </button>
              <button
                onClick={buyNow}
                className="flex-1 bg-[#c9a96a] hover:bg-[#8a7448] text-white font-bold py-4 rounded-xl transition-colors"
              >
                اشترِ الآن
              </button>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-[#c9a96a]/20">
              <div className="text-center">
                <Truck className="mx-auto text-[#c9a96a] mb-2" size={24} />
                <p className="text-xs text-[#8a7448]">شحن مجاني</p>
              </div>
              <div className="text-center">
                <Shield className="mx-auto text-[#c9a96a] mb-2" size={24} />
                <p className="text-xs text-[#8a7448]">ضمان أصلي</p>
              </div>
              <div className="text-center">
                <RefreshCw className="mx-auto text-[#c9a96a] mb-2" size={24} />
                <p className="text-xs text-[#8a7448]">استرجاع 30 يوم</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-[#c9a96a] uppercase tracking-widest">منتجات مشابهة</span>
              <h2 className="text-3xl font-extrabold text-[#1a1410] mt-2">قد يعجبك أيضاً</h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
