"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send, Check } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <Navbar />

      <section className="bg-[#1a1410] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-sm font-semibold text-[#c9a96a] uppercase tracking-widest">نحن هنا لمساعدتك</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-2">تواصل معنا</h1>
          <div className="w-20 h-1 bg-[#c9a96a] mx-auto mt-4 rounded-full"></div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <h2 className="text-2xl font-extrabold text-[#1a1410] mb-6">معلومات التواصل</h2>
            <p className="text-[#1a1410]/70 mb-8 leading-relaxed">
              يسعدنا تواصلك معنا لأي استفسار. فريقنا جاهز لمساعدتك في اختيار القطعة المثالية أو الإجابة على أي سؤال.
            </p>

            <div className="space-y-4">
              {[
                { icon: Phone, label: "الهاتف", value: "0575015019", color: "#c9a96a" },
                { icon: Mail, label: "البريد الإلكتروني", value: "info@jewelry.com", color: "#2d5f4e" },
                { icon: MapPin, label: "العنوان", value: "جدة، المملكة العربية السعودية", color: "#1a3a5c" },
              ].map((c, i) => (
                <div key={i} className="bg-white rounded-2xl p-4 border border-[#c9a96a]/20 flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white shrink-0"
                    style={{ backgroundColor: c.color }}
                  >
                    <c.icon size={22} />
                  </div>
                  <div>
                    <p className="text-xs text-[#8a7448]">{c.label}</p>
                    <p className="font-bold text-[#1a1410]" dir={c.label === "العنوان" ? "rtl" : "ltr"}>{c.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Working hours */}
            <div className="bg-[#1a1410] rounded-2xl p-6 mt-6 text-white">
              <h3 className="font-bold text-[#c9a96a] mb-4">ساعات العمل</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/70">السبت - الخميس</span>
                  <span className="font-mono">10:00 ص - 10:00 م</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">الجمعة</span>
                  <span className="font-mono">4:00 م - 10:00 م</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#c9a96a]/20">
            <h2 className="text-2xl font-extrabold text-[#1a1410] mb-6">أرسل لنا رسالة</h2>
            {sent ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 mx-auto bg-[#2d5f4e] rounded-full flex items-center justify-center mb-4">
                  <Check size={40} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1a1410] mb-2">تم إرسال رسالتك!</h3>
                <p className="text-[#8a7448]">سنرد عليك في أقرب وقت</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-[#1a1410] block mb-1">الاسم *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#c9a96a]/30 focus:border-[#c9a96a] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#1a1410] block mb-1">الجوال</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#c9a96a]/30 focus:border-[#c9a96a] focus:outline-none"
                      dir="ltr"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-[#1a1410] block mb-1">البريد *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#c9a96a]/30 focus:border-[#c9a96a] focus:outline-none"
                    dir="ltr"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-[#1a1410] block mb-1">الموضوع *</label>
                  <input
                    type="text"
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#c9a96a]/30 focus:border-[#c9a96a] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-[#1a1410] block mb-1">الرسالة *</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#c9a96a]/30 focus:border-[#c9a96a] focus:outline-none resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#c9a96a] hover:bg-[#8a7448] text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  إرسال الرسالة
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
