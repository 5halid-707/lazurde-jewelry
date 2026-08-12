import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "مجوهرات فاخرة | Luxury Jewelry Store",
  description: "متجر مجوهرات فاخرة — خواتم، أقراط، أساور، قلائد، ساعات بتصميم عالمي راقي",
  keywords: ["مجوهرات", "خواتم", "أقراط", "أساور", "قلائد", "ساعات", "ذهب", "ألماس", "فضة"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${cairo.variable} antialiased`}>{children}</body>
    </html>
  );
}
