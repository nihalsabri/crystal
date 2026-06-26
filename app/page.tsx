import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Calculator from "@/components/Calculator";
import Steps from "@/components/Steps";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* <Calculator />
        <Steps />
        <Features /> */}
      </main>
      {/* <Footer /> */}
      <WhatsAppFloat />
    </>
  );
}
