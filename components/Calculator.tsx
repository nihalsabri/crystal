"use client";
import { useState, useRef, useEffect } from "react";

const INSTALLMENTS = [4, 6, 9, 12, 24];
const MIN = 200;
const MAX = 30000;

// Murabaha rate for installments > 4
const MURABAHA_RATE: Record<number, number> = {
  4: 0,
  6: 0.06,
  9: 0.12,
  12: 0.18,
  24: 0.36,
};

function calcResults(amount: number, installments: number) {
  const rate = MURABAHA_RATE[installments] ?? 0;
  const totalPurchase = amount / (1 - 0.375 - rate * 0.1);
  const purchasePrice = Math.round(totalPurchase * 100) / 100;
  const salePrice = Math.round(amount * 0.9999 * 100) / 100;
  const firstPayment = Math.round((purchasePrice / installments) * 100) / 100;
  const monthlyPayment = Math.round((purchasePrice / installments) * 100) / 100;
  const remaining = installments - 1;

  // Simpler calculation based on site's actual numbers
  // For 5500 at 4 installments: purchase=8786, first=2197, transfer=5500
  const purchaseFactor = installments === 4 ? 1.598 :
    installments === 6 ? 1.72 :
    installments === 9 ? 1.85 :
    installments === 12 ? 1.98 :
    2.4;

  const purchase = Math.round(amount * purchaseFactor);
  const installmentAmt = Math.round(purchase / installments);
  const transferAmt = amount;

  return {
    purchasePrice: purchase,
    salePrice: Math.round(amount * 0.9999),
    firstPayment: installmentAmt,
    monthlyInstallment: installmentAmt,
    transferAmount: transferAmt,
    remainingInstallments: installments - 1,
  };
}

export default function Calculator() {
  const [amount, setAmount] = useState(5500);
  const [selectedInstallments, setSelectedInstallments] = useState(4);
  const sliderRef = useRef<HTMLInputElement>(null);

  const results = calcResults(amount, selectedInstallments);
  const percent = ((amount - MIN) / (MAX - MIN)) * 100;

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.background = `linear-gradient(to left, #e2eaf5 ${100 - percent}%, #00bcd4 ${100 - percent}%)`;
    }
  }, [percent]);

  return (
    <section
      id="calculator"
      style={{
        padding: "4rem 1.5rem",
        maxWidth: 760,
        margin: "0 auto",
      }}
    >
      {/* Header badge */}
      <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "#ecfeff",
            border: "1.5px solid #a5f3fc",
            borderRadius: 50,
            padding: "8px 20px",
            fontFamily: "Tajawal, sans-serif",
            fontWeight: 700,
            fontSize: 15,
            color: "#1a2e5a",
            boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0891b2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-calculator size-4 text-[#a5f3fc]" aria-hidden="true"><rect width="16" height="20" x="4" y="2" rx="2"></rect><line x1="8" x2="16" y1="6" y2="6"></line><line x1="16" x2="16" y1="14" y2="18"></line><path d="M16 10h.01"></path><path d="M12 10h.01"></path><path d="M8 10h.01"></path><path d="M12 14h.01"></path><path d="M8 14h.01"></path><path d="M12 18h.01"></path><path d="M8 18h.01"></path></svg>حاسبة السيولة
        </span>
      </div>

      <h2
        style={{
          textAlign: "center",
          fontFamily: "Cairo, sans-serif",
          fontWeight: 800,
          fontSize: "clamp(1rem, 3vw, 1.5rem)",
          color: "#1a2e5a",
          marginBottom: "0.75rem",
        }}
      >
        اختر المبلغ واختر عدد الدفعات لمعرفة سيولتك فوراً
      </h2>
      <p
        style={{
          textAlign: "center",
          fontFamily: "Tajawal, sans-serif",
          color: "#6b7a99",
          fontSize: 14,
          marginBottom: "2.5rem",
          lineHeight: 1.7,
        }}
      >
        الأرقام تقريبية بناء على سجلك الائتماني وسيتم تأكيدها لك عند<br/> قبول طلبك وقبل تنفيذ الطلب
      </p>

      {/* Calculator Card */}
      <div
        style={{
          background: "#fff",
          borderRadius: 20,
          padding: "clamp(1.5rem, 4vw, 2.5rem)",
          boxShadow: "0 4px 32px rgba(0,0,0,0.08)",
          border: "1px solid #e2eaf5",
        }}
      >
        {/* Amount Section */}
        <div style={{ marginBottom: "2rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "right",
              marginBottom: "1rem",
            }}
          >
           
            <div
              style={{
                fontFamily: "Cairo, sans-serif",
                fontWeight: 700,
                fontSize: 14,
                color: "#6b7a99",
                direction: "rtl",
                alignSelf: "flex-end",
              }}
            >
              اختر المبلغ المطلوب
            </div>
             <div></div>
          </div>

          <div
            style={{
              textAlign: "center",
              fontFamily: "Cairo, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 5vw, 2.8rem)",
              color: "#1a2e5a",
              marginBottom: "1.5rem",
              direction: "ltr",
            }}
          >
            {amount.toLocaleString("ar-SA")}
            <span style={{ fontSize: "0.5em", color: "#6b7a99", marginLeft: 8 }}>ر.س</span>

          </div>

          {/* Slider */}
          <div className="slider-container" style={{ position: "relative" }}>
            <input
              ref={sliderRef}
              type="range"
              min={MIN}
              max={MAX}
              step={100}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              style={{
                width: "100%",
                direction: "ltr",
              }}
              aria-label="اختر المبلغ"
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "0.5rem",
                fontFamily: "Tajawal, sans-serif",
                fontSize: 12,
                color: "#6b7a99",
              }}
            >
              <span>ر.س 30,000</span>
              <span>ر.س 200</span>
            </div>
            <p
              style={{
                textAlign: "center",
                fontFamily: "Tajawal, sans-serif",
                fontSize: 12,
                color: "#6b7a99",
                marginTop: "0.5rem",
              }}
            >
              مرّر السهم يمين ويسار لاختيار المبلغ
            </p>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "#f0f7ff", margin: "1.5rem 0" }} />

        {/* Installments Section */}
        <div style={{ marginBottom: "2rem" }}>
          <div
            style={{
              textAlign: "right",
              fontFamily: "Cairo, sans-serif",
              fontWeight: 700,
              fontSize: 14,
              color: "#6b7a99",
              marginBottom: "1rem",
              direction: "rtl",
            }}
          >
            عدد الدفعات
          </div>

          <div
            style={{
              display: "flex",
              gap: "0.75rem",
              justifyContent: "flex-start",
              flexWrap: "wrap",
            }}
          >
            {INSTALLMENTS.map((n) => (
              <button
                key={n}
                onClick={() => setSelectedInstallments(n)}
                style={{
                  width: 64,
                  height: 52,
                  borderRadius: 12,
                  border: selectedInstallments === n ? "none" : "1.5px solid #e2eaf5",
                  background: selectedInstallments === n ? "#00297C" : "#fff",
                  color: selectedInstallments === n ? "#fff" : "#1a2e5a",
                  fontFamily: "Cairo, sans-serif",
                  fontWeight: 700,
                  fontSize: 17,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  flex: "0 0 auto",
                }}
                aria-pressed={selectedInstallments === n}
                aria-label={`${n} دفعات`}
              >
                {n}
              </button>
            ))}
          </div>

          {selectedInstallments >= 4 && (
            <p
              style={{
                fontFamily: "Tajawal, sans-serif",
                fontSize: 12,
                color: "#5D4D25",
                marginTop: "0.75rem",
                textAlign: "right",
              }}
            >
              تفرض تابي وتمارا رسوم مرابحة على الدفعات اكثر من 4 دفعات
            </p>
          )}
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "#f0f7ff", margin: "1.5rem 0" }} />

        {/* First Payment Row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1rem",
            fontFamily: "Tajawal, sans-serif",
          }}
        >
          <span style={{ color: "#6b7a99", fontSize: 14 }}>الدفعة الأولى</span>

          <span style={{ color: "#1a2e5a", fontWeight: 700, fontSize: 15 }}>
            ({results.firstPayment.toLocaleString("ar-SA")} ر.س)
          </span>
        </div>

        {/* علينا / عليك Split */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            borderRadius: 12,
            overflow: "hidden",
            border: "1.5px solid #e2eaf5",
            marginBottom: "1.5rem",
          }}
        >
                    <div
            style={{
              background: "#fff",
              padding: "1rem",
              textAlign: "center",
              fontFamily: "Tajawal, sans-serif",
            }}
          >
            <div style={{ fontWeight: 600, fontSize: 13, color: "#1a2e5a", marginBottom: 4 }}>عليك</div>
            {/* empty - their side */}
          </div>
          <div
            style={{
              background: "#f8fbff",
              padding: "1rem",
              textAlign: "center",
              fontFamily: "Tajawal, sans-serif",
              borderLeft: "1.5px solid #e2eaf5",
            }}
          >
            <div style={{ fontWeight: 600,fontSize: 13, color: "#1a2e5a", marginBottom: 4 }}>علينا</div>
            {/* empty - their side */}
          </div>
         
        </div>

        {/* Results Grid */}
        <div
          style={{
            display: "grid",
            gap: "0.75rem",
            marginBottom: "1.5rem",
          }}
        >
          {[
            { label: "مبلغ الشراء", value: `${results.purchasePrice.toLocaleString("ar-SA")} ر.س` },
            { label: "مبلغ البيع", value: `${results.salePrice.toLocaleString("ar-SA")} ر.س` },
            { label: "الدفعة الأولى", value: `${results.firstPayment.toLocaleString("ar-SA")} ر.س` },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "0.1rem 0",
                fontFamily: "Tajawal, sans-serif",
              }}
            >
              <span style={{ color: "#6b7a99", fontSize: 14 }}>{item.label}</span>

              <span style={{ color: "#1a2e5a", fontWeight: 600, fontSize: 14 }}>{item.value}</span>
            </div>
          ))}
        </div>

        {/* Transfer Amount Highlight */}
        <div
          style={{
            background: "linear-gradient(135deg, #e8f4fd 0%, #f0f8ff 100%)",
            border: "1.5px solid #00bcd4",
            borderRadius: 14,
            padding: "1.25rem 1.5rem",
            marginBottom: "0.75rem",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "right",
              alignItems: "end",
              fontFamily: "Tajawal, sans-serif",
            }}
          >
            <span style={{ color: "#1a2e5a", fontWeight: 400, fontSize: 15 }}>
              المبلغ المحول إلى حسابك
            </span>
            <span
              style={{
                fontFamily: "Cairo, sans-serif",
                fontWeight: 600,
                fontSize: "clamp(1.4rem, 3vw, 1.4rem)",
                color: "#00bcd4",
              }}
            >

              {results.transferAmount.toLocaleString("ar-SA")} ر.س
            </span>

          </div>
        </div>

        {/* Remaining */}
        <div className="border 1x #" >

    
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0.25rem 0",
            marginBottom: "0.5rem",
            fontFamily: "Tajawal, sans-serif",
          }}
        >
                    <span style={{ color: "#6b7a99", fontSize: 14 }}>عدد الأقساط المتبقية</span>

          <span style={{ color: "#1a2e5a", fontWeight: 600, fontSize: 14 }}>
            {results.remainingInstallments}
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0.25rem 0",
            borderTop: "1px solid #f0f7ff",
            marginBottom: "0.5rem",
            fontFamily: "Tajawal, sans-serif",
          }}
        >
                    <span style={{ color: "#6b7a99", fontSize: 14 }}>القسط الشهري</span>

          <span style={{ color: "#1a2e5a", fontWeight: 700, fontSize: 14 }}>
            {results.monthlyInstallment.toLocaleString("ar-SA")} ر.س
          </span>
        </div>
    </div>
        {/* CTA Button */}
        <a
          href="https://wa.me/966530162235"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            width: "100%",
            background: "#1a2e5a",
            color: "#fff",
            padding: "16px 24px",
            borderRadius: 14,
            fontFamily: "Cairo, sans-serif",
            fontWeight: 800,
            fontSize: 17,
            textDecoration: "none",
            transition: "background 0.2s ease, transform 0.1s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = "#0f1f3d";
            (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = "#1a2e5a";
            (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
          }}
        >
          {/* <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg> */}
          اطلب السيولة الآن
        </a>

        {/* Partner logos */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            marginTop: "1.5rem",
            alignItems: "center",
          }}
        >
          <img src="/tamara-logo-CWSUBiWK.webp" alt="Tabby Logo" style={{ width: "100px", height: "auto" }} />
          <img src="/tabby-logo.webp" alt="Tamara Logo" style={{ width: "100px", height: "auto" }} />
        </div>

        <p
          style={{
            textAlign: "center",
            fontFamily: "Tajawal, sans-serif",
            fontSize: 12,
            color: "#6b7a99",
            marginTop: "0.75rem",
          }}
        >
          الأرقام تقريبية وقد تختلف حسب سعر المنتج في المتاجر
        </p>
      </div>
    </section>
  );
}


