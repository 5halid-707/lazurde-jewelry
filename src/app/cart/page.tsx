"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/data";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function CartPage() {
  const { items, removeItem, updateQuantity, total, count, clearCart } = useCart();
  const router = useRouter();

  const shippingCost = total > 500 ? 0 : 25;
  const finalTotal = total + shippingCost;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[#faf8f5]">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 text-center">
          <ShoppingBag size={80} className="mx-auto text-[#c9a96a]/30 mb-6" />
          <h1 className="text-3xl font-extrabold text-[#1a1410] mb-3">سلة التسوّق فارغة</h1>
          <p className="text-[#8a7448] mb-8">لم تقم بإضافة أي منتجات بعد</p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-[#c9a96a] hover:bg-[#8a7448] text-white font-bold px-8 py-3 rounded-full transition-colors"
          >
            <ArrowLeft size={18} />
            ابدأ التسوّق
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <Navbar />

      <section className="bg-[#1a1410] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">سلة التسوّق</h1>
          <p className="text-[#c9a96a] text-sm mt-2">{count} منتج</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-3 gap-8">
          {/* Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl p-4 border border-[#c9a96a]/20 flex gap-4">
                <Link href={`/products/${item.id}`} className="shrink-0">
                  <img
                    src={item.image}
                    alt={item.nameAr}
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl object-cover"
                  />
                </Link>
                <div className="flex-1 min-w-0">
                  <Link href={`/products/${item.id}`}>
                    <h3 className="font-bold text-[#1a1410] hover:text-[#c9a96a] transition-colors line-clamp-1">
                      {item.nameAr}
                    </h3>
                  </Link>
                  <p className="text-[#c9a96a] font-extrabold mt-1">
                    {formatPrice(item.price, item.currency)}
                  </p>
                  <div className="flex items-center gap-3 mt-3">
                    <div className="flex items-center border-2 border-[#c9a96a]/30 rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center hover:bg-[#c9a96a]/10"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-10 text-center text-sm font-bold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center hover:bg-[#c9a96a]/10"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700 p-2"
                      aria-label="remove"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
                <div className="text-end shrink-0">
                  <p className="text-xs text-[#8a7448]">الإجمالي</p>
                  <p className="font-extrabold text-[#1a1410]">
                    {formatPrice(item.price * item.quantity, item.currency)}
                  </p>
                </div>
              </div>
            ))}

            <button
              onClick={clearCart}
              className="text-sm text-red-500 hover:text-red-700 font-medium"
            >
              إفراغ السلة
            </button>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 border border-[#c9a96a]/20 sticky top-24">
              <h2 className="text-xl font-extrabold text-[#1a1410] mb-4">ملخص الطلب</h2>
              <div className="space-y-3 pb-4 border-b border-[#c9a96a]/20">
                <div className="flex justify-between text-sm">
                  <span className="text-[#8a7448]">المجموع الفرعي</span>
                  <span className="font-medium">{formatPrice(total)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#8a7448]">الشحن</span>
                  <span className="font-medium">
                    {shippingCost === 0 ? (
                      <span className="text-[#2d5f4e]">مجاني</span>
                    ) : (
                      formatPrice(shippingCost)
                    )}
                  </span>
                </div>
                {shippingCost === 0 && (
                  <p className="text-xs text-[#2d5f4e] bg-[#2d5f4e]/10 rounded-lg p-2">
                    ✓ حصلت على شحن مجاني!
                  </p>
                )}
              </div>
              <div className="flex justify-between items-center py-4 mb-4">
                <span className="font-extrabold text-[#1a1410]">الإجمالي</span>
                <span className="text-2xl font-extrabold text-[#c9a96a]">
                  {formatPrice(finalTotal)}
                </span>
              </div>

              {/* Tabby + Tamara */}
              <div className="space-y-2 mb-4">
                <div className="bg-[#2d5f4e]/10 border border-[#2d5f4e]/30 rounded-lg p-2 text-xs flex items-center gap-2">
                  <span className="bg-[#2d5f4e] text-white px-2 py-0.5 rounded font-bold">tabby</span>
                  <span>4 دفعات: {formatPrice(Math.round(finalTotal / 4))}</span>
                </div>
                <div className="bg-[#1a3a5c]/10 border border-[#1a3a5c]/30 rounded-lg p-2 text-xs flex items-center gap-2">
                  <span className="bg-[#1a3a5c] text-white px-2 py-0.5 rounded font-bold">tamara</span>
                  <span>3 دفعات: {formatPrice(Math.round(finalTotal / 3))}</span>
                </div>
              </div>

              <button
                onClick={() => router.push("/checkout")}
                className="w-full bg-[#c9a96a] hover:bg-[#8a7448] text-white font-bold py-4 rounded-xl transition-colors"
              >
                إتمام الشراء ←
              </button>
              <Link
                href="/products"
                className="block text-center mt-3 text-sm text-[#8a7448] hover:text-[#c9a96a]"
              >
                متابعة التسوّق
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
