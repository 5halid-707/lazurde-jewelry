import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const CATEGORIES = [
  { id: "rings", nameAr: "خواتم", nameEn: "Rings", icon: "💍", count: 48 },
  { id: "earrings", nameAr: "أقراط", nameEn: "Earrings", icon: "✨", count: 36 },
  { id: "necklaces", nameAr: "قلائد", nameEn: "Necklaces", icon: "📿", count: 42 },
  { id: "bracelets", nameAr: "أساور", nameEn: "Bracelets", icon: "⌚", count: 28 },
  { id: "watches", nameAr: "ساعات", nameEn: "Watches", icon: "🕐", count: 24 },
  { id: "sets", nameAr: "أطقم", nameEn: "Sets", icon: "💎", count: 18 },
] as const;

export interface Product {
  id: string;
  nameAr: string;
  nameEn: string;
  category: string;
  price: number;
  oldPrice?: number;
  currency: string;
  image: string;
  images: string[];
  rating: number;
  reviews: number;
  isNew?: boolean;
  isBestseller?: boolean;
  discount?: number;
  descriptionAr: string;
  descriptionEn: string;
  material: string;
  weight?: string;
}

// Real jewelry photos from Unsplash (royalty-free, commercial use OK)
export const PRODUCTS: Product[] = [
  {
    id: "p1",
    nameAr: "خاتم ألماس فاخر",
    nameEn: "Luxury Diamond Ring",
    category: "rings",
    price: 4599,
    oldPrice: 5999,
    currency: "ر.س",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600&q=80&auto=format&fit=crop",
    ],
    rating: 4.9,
    reviews: 124,
    isBestseller: true,
    discount: 23,
    descriptionAr: "خاتم ألماس فاخر من الذهب الأبيض عيار 18 مرصّع بألماسة رئيسية بحجم 0.5 قيراط محاطة بألماسات صغيرة. تصميم كلاسيكي خالد يناسب الخطوبة والمناسبات الخاصة.",
    descriptionEn: "Luxury diamond ring in 18k white gold featuring a 0.5-carat center stone surrounded by smaller diamonds. Classic timeless design perfect for engagements and special occasions.",
    material: "ذهب أبيض عيار 18",
    weight: "4.2 جرام",
  },
  {
    id: "p2",
    nameAr: "قرط ذهبي أنيق",
    nameEn: "Elegant Gold Earrings",
    category: "earrings",
    price: 1299,
    currency: "ر.س",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80&auto=format&fit=crop"],
    rating: 4.8,
    reviews: 89,
    isNew: true,
    descriptionAr: "أقراط ذهبية أنيقة بتصميم عصري مبتكر. مصنوعة من الذهب عيار 21 بلمسة فاخرة تناسب الإطلالات اليومية والمسائية.",
    descriptionEn: "Elegant gold earrings with modern innovative design. Made of 21k gold with a luxurious touch suitable for both day and evening looks.",
    material: "ذهب عيار 21",
    weight: "3.5 جرام",
  },
  {
    id: "p3",
    nameAr: "قلادة لؤلؤ كلاسيكية",
    nameEn: "Classic Pearl Necklace",
    category: "necklaces",
    price: 2899,
    oldPrice: 3499,
    currency: "ر.س",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80&auto=format&fit=crop"],
    rating: 4.9,
    reviews: 156,
    isBestseller: true,
    discount: 17,
    descriptionAr: "قلادة لؤلؤ كلاسيكية من اللؤلؤ الطبيعي مع إكليل ذهبي. رمز الأناقة والرقي عبر العصور، مثالية للمناسبات الرسمية.",
    descriptionEn: "Classic pearl necklace with natural pearls and gold clasp. A timeless symbol of elegance and sophistication, perfect for formal occasions.",
    material: "لؤلؤ طبيعي + ذهب",
    weight: "12 جرام",
  },
  {
    id: "p4",
    nameAr: "سوار ذهبي مرصّع",
    nameEn: "Gold Diamond Bracelet",
    category: "bracelets",
    price: 3450,
    currency: "ر.س",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80&auto=format&fit=crop"],
    rating: 4.7,
    reviews: 78,
    isNew: true,
    descriptionAr: "سوار ذهبي مرصّع بألماسات صغيرة بتصميم معاصر. أناقة استثنائية تضيف لمسة من الفخامة لمعصمك.",
    descriptionEn: "Gold bracelet studded with small diamonds in a contemporary design. Exceptional elegance that adds a touch of luxury to your wrist.",
    material: "ذهب عيار 18 + ألماس",
    weight: "8.5 جرام",
  },
  {
    id: "p5",
    nameAr: "خاتم خطوبة ياقوتي",
    nameEn: "Ruby Engagement Ring",
    category: "rings",
    price: 5299,
    oldPrice: 6499,
    currency: "ر.س",
    image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&q=80&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&q=80&auto=format&fit=crop"],
    rating: 5.0,
    reviews: 92,
    isBestseller: true,
    discount: 18,
    descriptionAr: "خاتم خطوبة ياقوتي فاخر بحجر ياقوت أحمر طبيعي محاط بألماسات على قاعدة من الذهب الأبيض. قطعة فنية لا تُنسى.",
    descriptionEn: "Luxury ruby engagement ring with natural red ruby surrounded by diamonds on white gold base. An unforgettable artistic piece.",
    material: "ذهب أبيض + ياقوت + ألماس",
    weight: "5.1 جرام",
  },
  {
    id: "p6",
    nameAr: "ساعة فاخرة نسائية",
    nameEn: "Luxury Women's Watch",
    category: "watches",
    price: 6799,
    currency: "ر.س",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80&auto=format&fit=crop"],
    rating: 4.8,
    reviews: 67,
    isNew: true,
    descriptionAr: "ساعة فاخرة نسائية بسوار ذهبي ومينا مرصّعة بالألماس. تصميم راقٍ يجمع بين الأناقة والدقة السويسرية.",
    descriptionEn: "Luxury women's watch with gold bracelet and diamond-set dial. Elegant design combining sophistication with Swiss precision.",
    material: "ذهب + ألماس + حركة سويسرية",
    weight: "45 جرام",
  },
  {
    id: "p7",
    nameAr: "طقم مجوهرات ملكي",
    nameEn: "Royal Jewelry Set",
    category: "sets",
    price: 8999,
    oldPrice: 11999,
    currency: "ر.س",
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&q=80&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&q=80&auto=format&fit=crop"],
    rating: 5.0,
    reviews: 43,
    isBestseller: true,
    discount: 25,
    descriptionAr: "طقم مجوهرات ملكي متكامل (قلادة + قرط + خاتم + سوار) من الذهب الأبيض مرصّع بالألماس والياقوت. تحفة فنية للعرائس والمناسبات الكبرى.",
    descriptionEn: "Complete royal jewelry set (necklace + earrings + ring + bracelet) in white gold studded with diamonds and rubies. An artistic masterpiece for brides and grand occasions.",
    material: "ذهب أبيض + ألماس + ياقوت",
    weight: "32 جرام",
  },
  {
    id: "p8",
    nameAr: "قرط حلق معلّق",
    nameEn: "Drop Earrings",
    category: "earrings",
    price: 1899,
    currency: "ر.س",
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&q=80&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&q=80&auto=format&fit=crop"],
    rating: 4.6,
    reviews: 54,
    descriptionAr: "أقراط معلّقة بتصميم متدرّج من الأحجار الكريمة. حركة أنيقة مع كل إدارة للرأس.",
    descriptionEn: "Drop earrings with a cascading gemstone design. Elegant movement with every turn of the head.",
    material: "ذهب + أحجار كريمة",
    weight: "6 جرام",
  },
  {
    id: "p9",
    nameAr: "قلادة ذهبية عصرية",
    nameEn: "Modern Gold Necklace",
    category: "necklaces",
    price: 2199,
    currency: "ر.س",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80&auto=format&fit=crop"],
    rating: 4.7,
    reviews: 102,
    descriptionAr: "قلادة ذهبية عصرية بتصميم مينيمال راقٍ. مناسبة للاستخدام اليومي والإطلالات العصرية.",
    descriptionEn: "Modern gold necklace with elegant minimalist design. Suitable for daily wear and contemporary looks.",
    material: "ذهب عيار 21",
    weight: "7.5 جرام",
  },
  {
    id: "p10",
    nameAr: "سوار فضة مطعّم",
    nameEn: "Silver Inlaid Bracelet",
    category: "bracelets",
    price: 899,
    oldPrice: 1199,
    currency: "ر.س",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&q=80&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&q=80&auto=format&fit=crop"],
    rating: 4.5,
    reviews: 87,
    discount: 25,
    descriptionAr: "سوار من الفضة الخالصة مطعّم بأحجار الزركون. أناقة بأسعار معقولة مع جودة عالية.",
    descriptionEn: "Pure silver bracelet inlaid with zircon stones. Elegance at reasonable prices with high quality.",
    material: "فضة عيار 925 + زركون",
    weight: "15 جرام",
  },
  {
    id: "p11",
    nameAr: "خاتم زمرد فاخر",
    nameEn: "Emerald Luxury Ring",
    category: "rings",
    price: 4899,
    currency: "ر.س",
    image: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=600&q=80&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=600&q=80&auto=format&fit=crop"],
    rating: 4.9,
    reviews: 61,
    isNew: true,
    descriptionAr: "خاتم زمرد فاخر بحجر زمرد طبيعي أخضر محاط بألماسات على قاعدة ذهبية صفراء. رمز الفخامة والتميّز.",
    descriptionEn: "Luxury emerald ring with natural green emerald surrounded by diamonds on yellow gold base. A symbol of luxury and distinction.",
    material: "ذهب أصفر + زمرد + ألماس",
    weight: "5.8 جرام",
  },
  {
    id: "p12",
    nameAr: "ساعة رجالية كلاسيكية",
    nameEn: "Classic Men's Watch",
    category: "watches",
    price: 7499,
    oldPrice: 8999,
    currency: "ر.س",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&q=80&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&q=80&auto=format&fit=crop"],
    rating: 4.8,
    reviews: 73,
    discount: 17,
    descriptionAr: "ساعة رجالية كلاسيكية بسوار جلدي فاخر ومينا ذهبي. حركة سويسرية دقيقة تضمن الأناقة والموثوقية.",
    descriptionEn: "Classic men's watch with luxury leather strap and gold dial. Swiss movement ensuring elegance and reliability.",
    material: "جلد + ذهب + حركة سويسرية",
    weight: "85 جرام",
  },
];

export function formatPrice(price: number, currency: string = "ر.س") {
  return `${price.toLocaleString("en-US")} ${currency}`;
}
