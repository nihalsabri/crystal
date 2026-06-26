import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "كريستال - اسرع منصة تمويل وتقسيط في السعودية",
  description: "احصل على سلفة تصل الى 30,000 ريال وقسطها على 4 دفعات مريحة عبر تابي وتمارا. موافقة فورية وسريعة.",
  keywords: "سلفة سريعة, تمويل شخصي, قرض فوري, تقسيط بدون فوائد, تمويل بدون كفيل, سلفة 30000 ريال, تقسيط تابي, تقسيط تمارا, سلفة بدون تحويل راتب",
  openGraph: {
    title: "كريستال - اسرع منصة تمويل وتقسيط في السعودية",
    description: "احصل على سلفة تصل الى 30,000 ريال وقسطها على 4 دفعات مريحة عبر تابي وتمارا. موافقة فورية وسريعة.",
    type: "website",
    locale: "ar_SA",
    url: "https://crystal-sa.net",
  },
  twitter: {
    card: "summary_large_image",
    title: "كريستال",
    description: "احصل على سلفة تصل الى 30,000 ريال وقسطها على 4 دفعات مريحة عبر تابي وتمارا.",
  },
  alternates: {
    canonical: "https://crystal-sa.net",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800;900&family=Cairo:wght@400;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#1a2e5a" />
      </head>
      <body>{children}</body>
    </html>
  );
}
