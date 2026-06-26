import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Calculator from "@/components/Calculator";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "حاسبة السيولة - كريستال",
  description: "احسب سيولتك الفورية مع كريستال. اختر المبلغ وعدد الدفعات واعرف المبلغ المحول لحسابك فوراً.",
};

export default function CalculatorPage() {
  return (
    <>
      <Navbar />
      <main>
        <Calculator />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
