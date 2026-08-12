"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Check, CreditCard, MapPin, ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/data";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart();
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState<"card" | "tabby" | "tamara" | "cod">("card");
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
    cardNumber: "",
    cardName: "",
    cardExpiry: "",
    cardCvv: "",
  });

  const shippingCost = total > 500 ? 0 : 25;
  const finalTotal = total + shippingCost;

  if (items.length === 0 && step < 4) {
    return (
      <div className="min-h-screen bg-[#faf8f5]">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 text-center">
          <ShoppingBag size={80} className="mx-auto text-[#c9a96a]/30 mb-6" />
          <h1 className="text-3xl font-extrabold text-[#1a1410] mb-3">سلة فارغة</h1>
          <p className="text-[#8a7448] mb-8">أضف منتجات لإتمام الطلب</p>
          <Link
            href="/products"
            className="inline-block bg-[#c9a96a] hover:bg-[#8a7448] text-white font-bold px-8 py-3 rounded-full"
          >
            تصفّح المنتجات
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const setField = (k: string, v: string) => setForm({ ...form, [k]: v });

  const handleNext = () => {
    if (step === 1) {
      if (!form.fullName || !form.email || !form.phone) {
        alert("يرجى تعبئة البيانات الشخصية");
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (!form.address || !form.city) {
        alert("يرجى تعبئة عنوان التوصيل");
        return;
      }
      setStep(3);
    } else if (step === 3) {
      setStep(4);
      clearCart();
    }
  };

  const installmentAmount = paymentMethod === "tabby"
    ? Math.round(finalTotal / 4)
    : paymentMethod === "tamara"
    ? Math.round(finalTotal / 3)
    : 0;

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <Navbar />

      <section className="bg-[#1a1410] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">إتمام الشراء</h1>
        </div>
      </section>

      {/* Steps indicator */}
      <div className="bg-white border-b border-[#c9a96a]/20 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-center gap-4 sm:gap-8">
          {[
            { num: 1, label: "البيانات", icon: ShoppingBag },
            { num: 2, label: "العنوان", icon: MapPin },
            { num: 3, label: "الدفع", icon: CreditCard },
            { num: 4, label: "التأكيد", icon: Check },
          ].map((s, i) => (
            <div key={s.num} className="flex items-center gap-2">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                  step >= s.num
                    ? "bg-[#c9a96a] text-white"
                    : "bg-[#c9a96a]/10 text-[#8a7448]"
                }`}
              >
                {step > s.num ? <Check size={18} /> : s.num}
              </div>
              <span className={`text-xs sm:text-sm font-medium hidden sm:block ${
                step >= s.num ? "text-[#1a1410]" : "text-[#8a7448]"
              }`}>
                {s.label}
              </span>
              {i < 3 && <div className={`w-8 sm:w-16 h-0.5 ${step > s.num ? "bg-[#c9a96a]" : "bg-[#c9a96a]/20"}`} />}
            </div>
          ))}
        </div>
      </div>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Step 1: Personal info */}
          {step === 1 && (
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#c9a96a]/20">
              <h2 className="text-xl font-extrabold text-[#1a1410] mb-6">البيانات الشخصية</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-[#1a1410] block mb-1">الاسم الكامل *</label>
                  <input
                    type="text"
                    value={form.fullName}
                    onChange={(e) => setField("fullName", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#c9a96a]/30 focus:border-[#c9a96a] focus:outline-none"
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-[#1a1410] block mb-1">البريد الإلكتروني *</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setField("email", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#c9a96a]/30 focus:border-[#c9a96a] focus:outline-none"
                    placeholder="example@email.com"
                    dir="ltr"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium text-[#1a1410] block mb-1">رقم الجوال *</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setField("phone", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#c9a96a]/30 focus:border-[#c9a96a] focus:outline-none"
                    placeholder="05XXXXXXXX"
                    dir="ltr"
                  />
                </div>
              </div>
              <button
                onClick={handleNext}
                className="w-full mt-6 bg-[#c9a96a] hover:bg-[#8a7448] text-white font-bold py-4 rounded-xl transition-colors"
              >
                التالي ←
              </button>
            </div>
          )}

          {/* Step 2: Address */}
          {step === 2 && (
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#c9a96a]/20">
              <h2 className="text-xl font-extrabold text-[#1a1410] mb-6">عنوان التوصيل</h2>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-[#1a1410] block mb-1">العنوان التفصيلي *</label>
                  <input
                    type="text"
                    value={form.address}
                    onChange={(e) => setField("address", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#c9a96a]/30 focus:border-[#c9a96a] focus:outline-none"
                    placeholder="الحي، الشارع، رقم المنزل"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-[#1a1410] block mb-1">المدينة *</label>
                    <input
                      type="text"
                      value={form.city}
                      onChange={(e) => setField("city", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-[#c9a96a]/30 focus:border-[#c9a96a] focus:outline-none"
                      placeholder="جدة"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#1a1410] block mb-1">الرمز البريدي</label>
                    <input
                      type="text"
                      value={form.zip}
                      onChange={(e) => setField("zip", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-[#c9a96a]/30 focus:border-[#c9a96a] focus:outline-none"
                      placeholder="12345"
                      dir="ltr"
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setStep(1)}
                  className="px-6 py-4 rounded-xl border-2 border-[#c9a96a]/30 text-[#1a1410] font-bold hover:border-[#c9a96a] transition-colors"
                >
                  → السابق
                </button>
                <button
                  onClick={handleNext}
                  className="flex-1 bg-[#c9a96a] hover:bg-[#8a7448] text-white font-bold py-4 rounded-xl transition-colors"
                >
                  التالي ←
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Payment */}
          {step === 3 && (
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#c9a96a]/20">
              <h2 className="text-xl font-extrabold text-[#1a1410] mb-6">طريقة الدفع</h2>

              {/* Payment options */}
              <div className="space-y-3 mb-6">
                {/* Tabby */}
                <label
                  className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    paymentMethod === "tabby" ? "border-[#2d5f4e] bg-[#2d5f4e]/5" : "border-[#c9a96a]/20"
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "tabby"}
                    onChange={() => setPaymentMethod("tabby")}
                    className="w-5 h-5 accent-[#2d5f4e]"
                  />
                  <div className="bg-[#2d5f4e] text-white px-3 py-1.5 rounded-lg font-bold text-sm">tabby</div>
                  <div className="flex-1">
                    <p className="font-bold text-[#1a1410] text-sm">4 دفعات بدون فوائد</p>
                    <p className="text-xs text-[#8a7448]">
                      {formatPrice(Math.round(finalTotal / 4))} كل دفعة
                    </p>
                  </div>
                </label>

                {/* Tamara */}
                <label
                  className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    paymentMethod === "tamara" ? "border-[#1a3a5c] bg-[#1a3a5c]/5" : "border-[#c9a96a]/20"
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "tamara"}
                    onChange={() => setPaymentMethod("tamara")}
                    className="w-5 h-5 accent-[#1a3a5c]"
                  />
                  <div className="bg-[#1a3a5c] text-white px-3 py-1.5 rounded-lg font-bold text-sm">tamara</div>
                  <div className="flex-1">
                    <p className="font-bold text-[#1a1410] text-sm">3 دفعات بدون فوائد</p>
                    <p className="text-xs text-[#8a7448]">
                      {formatPrice(Math.round(finalTotal / 3))} كل دفعة
                    </p>
                  </div>
                </label>

                {/* Card */}
                <label
                  className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    paymentMethod === "card" ? "border-[#c9a96a] bg-[#c9a96a]/5" : "border-[#c9a96a]/20"
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "card"}
                    onChange={() => setPaymentMethod("card")}
                    className="w-5 h-5 accent-[#c9a96a]"
                  />
                  <CreditCard size={32} className="text-[#c9a96a]" />
                  <div className="flex-1">
                    <p className="font-bold text-[#1a1410] text-sm">بطاقة ائتمانية</p>
                    <p className="text-xs text-[#8a7448]">Visa / Mastercard / Mada</p>
                  </div>
                </label>

                {/* COD */}
                <label
                  className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    paymentMethod === "cod" ? "border-[#c9a96a] bg-[#c9a96a]/5" : "border-[#c9a96a]/20"
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                    className="w-5 h-5 accent-[#c9a96a]"
                  />
                  <span className="text-2xl">💵</span>
                  <div className="flex-1">
                    <p className="font-bold text-[#1a1410] text-sm">الدفع عند الاستلام</p>
                    <p className="text-xs text-[#8a7448]">ادفع نقداً عند وصول الطلب</p>
                  </div>
                </label>
              </div>

              {/* Card details (if card selected) */}
              {paymentMethod === "card" && (
                <div className="grid sm:grid-cols-2 gap-4 mb-6 p-4 bg-[#faf8f5] rounded-xl">
                  <div className="sm:col-span-2">
                    <label className="text-sm font-medium text-[#1a1410] block mb-1">رقم البطاقة</label>
                    <input
                      type="text"
                      value={form.cardNumber}
                      onChange={(e) => setField("cardNumber", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-[#c9a96a]/30 focus:border-[#c9a96a] focus:outline-none"
                      placeholder="0000 0000 0000 0000"
                      dir="ltr"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-sm font-medium text-[#1a1410] block mb-1">الاسم على البطاقة</label>
                    <input
                      type="text"
                      value={form.cardName}
                      onChange={(e) => setField("cardName", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-[#c9a96a]/30 focus:border-[#c9a96a] focus:outline-none"
                      placeholder="NAME ON CARD"
                      dir="ltr"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#1a1410] block mb-1">تاريخ الانتهاء</label>
                    <input
                      type="text"
                      value={form.cardExpiry}
                      onChange={(e) => setField("cardExpiry", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-[#c9a96a]/30 focus:border-[#c9a96a] focus:outline-none"
                      placeholder="MM/YY"
                      dir="ltr"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#1a1410] block mb-1">CVV</label>
                    <input
                      type="text"
                      value={form.cardCvv}
                      onChange={(e) => setField("cardCvv", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-[#c9a96a]/30 focus:border-[#c9a96a] focus:outline-none"
                      placeholder="123"
                      dir="ltr"
                    />
                  </div>
                </div>
              )}

              {/* Order summary */}
              <div className="bg-[#faf8f5] rounded-xl p-4 mb-6">
                <h3 className="font-bold text-[#1a1410] mb-3">ملخص الطلب</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#8a7448]">المجموع الفرعي</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#8a7448]">الشحن</span>
                    <span>{shippingCost === 0 ? "مجاني" : formatPrice(shippingCost)}</span>
                  </div>
                  <div className="flex justify-between font-extrabold text-base pt-2 border-t border-[#c9a96a]/20">
                    <span>الإجمالي</span>
                    <span className="text-[#c9a96a]">{formatPrice(finalTotal)}</span>
                  </div>
                  {installmentAmount > 0 && (
                    <div className="bg-[#2d5f4e]/10 rounded-lg p-2 mt-2 text-center">
                      <p className="text-xs text-[#2d5f4e]">
                        {paymentMethod === "tabby" ? "4" : "3"} دفعات بقيمة {formatPrice(installmentAmount)} لكل دفعة
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setStep(2)}
                  className="px-6 py-4 rounded-xl border-2 border-[#c9a96a]/30 text-[#1a1410] font-bold hover:border-[#c9a96a] transition-colors"
                >
                  → السابق
                </button>
                <button
                  onClick={handleNext}
                  className="flex-1 bg-[#c9a96a] hover:bg-[#8a7448] text-white font-bold py-4 rounded-xl transition-colors"
                >
                  تأكيد الطلب ←
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Confirmation */}
          {step === 4 && (
            <div className="bg-white rounded-2xl p-8 sm:p-12 border border-[#c9a96a]/20 text-center">
              <div className="w-24 h-24 mx-auto bg-[#2d5f4e] rounded-full flex items-center justify-center mb-6">
                <Check size={48} className="text-white" />
              </div>
              <h2 className="text-3xl font-extrabold text-[#1a1410] mb-3">تم تأكيد طلبك بنجاح! 🎉</h2>
              <p className="text-[#8a7448] mb-2">شكراً لك على ثقتك بنا</p>
              <p className="text-sm text-[#8a7448] mb-8">
                رقم الطلب: <span className="font-mono font-bold text-[#c9a96a]">
                  JEW-{Date.now().toString().slice(-8)}
                </span>
              </p>
              <div className="bg-[#faf8f5] rounded-xl p-4 mb-8 max-w-md mx-auto">
                <p className="text-sm text-[#1a1410]">
                  سيتم التواصل معك على الرقم <span dir="ltr">{form.phone || "المسجّل"}</span> خلال 24 ساعة لتأكيد التوصيل.
                </p>
              </div>
              <Link
                href="/"
                className="inline-block bg-[#c9a96a] hover:bg-[#8a7448] text-white font-bold px-8 py-3 rounded-full transition-colors"
              >
                العودة للرئيسية
              </Link>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
