import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "من نحن - كريستال",
  description: "تعرف على كريستال - منصة التمويل السريع والتقسيط في المملكة العربية السعودية.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main style={{ padding: "4rem 1.5rem", maxWidth: 800, margin: "0 auto", minHeight: "60vh" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "#fff", border: "1.5px solid #e2eaf5", borderRadius: 50,
            padding: "8px 20px", fontFamily: "Tajawal, sans-serif", fontWeight: 700,
            fontSize: 15, color: "#1a2e5a", boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
          }}>
            من نحن
          </span>
        </div>
        <h1 style={{
          fontFamily: "Cairo, sans-serif", fontWeight: 900,
          fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "#1a2e5a",
          textAlign: "center", marginBottom: "2rem",
        }}>
          كريستال - منصة التمويل السريع
        </h1>
        <div style={{
          background: "#fff", borderRadius: 20, padding: "2.5rem",
          border: "1.5px solid #e2eaf5", boxShadow: "0 4px 32px rgba(0,0,0,0.08)",
        }}>
          <p style={{
            fontFamily: "Tajawal, sans-serif", fontSize: 16, color: "#6b7a99",
            lineHeight: 2, textAlign: "right",
          }}>
            كريستال هي منصة متخصصة في تقديم خدمات السيولة المالية الفورية للأفراد في المملكة العربية السعودية.
            نعمل عبر شركائنا الموثوقين تابي وتمارا لتوفير تمويل سريع وآمن يصل إلى 30,000 ريال سعودي.
          </p>
          <br />
          <p style={{
            fontFamily: "Tajawal, sans-serif", fontSize: 16, color: "#6b7a99",
            lineHeight: 2, textAlign: "right",
          }}>
            آلية العمل بسيطة: نشتري لك جوالاً أو منتجاً إلكترونياً عبر تابي أو تمارا، ثم نقوم ببيعه لك
            ونحوّل المبلغ مباشرة إلى حسابك البنكي. كل ذلك بموافقة فورية خلال دقائق.
          </p>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
