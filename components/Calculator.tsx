
"use client";
import { useState, useRef, useEffect } from "react";

const INSTALLMENTS = [4, 6, 9, 12, 24];
const MIN = 200;
const MAX = 30000;

const PURCHASE_FACTOR: Record<number, number> = {
  4: 1.5974545,
  6: 1.72,
  9: 1.85,
  12: 1.98,
  24: 2.4,
};

// نسبة رسوم المرابحة لكل عدد دفعات
const MURABAHA_RATE: Record<number, number> = {
  6: 0.047,
  9: 0.075,
  12: 0.10,
  24: 0.18,
};

function fmt(n: number) {
  return n.toLocaleString("en-US");
}

function fmtDecimal(n: number) {
  return n.toLocaleString("en-US", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
}

function calcResults(amount: number, installments: number) {
  const factor = PURCHASE_FACTOR[installments] ?? 1.5974545;
  const purchasePrice = Math.round(amount * factor);
  const salePrice = Math.round(amount * 0.9999 * 10) / 10;
  const murabahaFee = installments > 4
    ? -Math.round(salePrice * (MURABAHA_RATE[installments] ?? 0.047))
    : 0;
  const firstPayment = Math.ceil(purchasePrice / installments);
  const monthlyInstallment =
    installments === 1
      ? 0
      : Math.floor((purchasePrice - firstPayment) / (installments - 1));
  const remainingInstallments = installments - 1;

  const transferAlaina = Math.round(salePrice - firstPayment);
  const transferAlayk = amount;

  return {
    purchasePrice,
    salePrice,
    murabahaFee,
    firstPayment,
    monthlyInstallment,
    remainingInstallments,
    transferAlaina,
    transferAlayk,
  };
}

export default function Calculator() {
  const [amount, setAmount] = useState(5500);
  const [selectedInstallments, setSelectedInstallments] = useState(4);
  const [activeTab, setActiveTab] = useState<"alayk" | "alaina">("alayk");
  const sliderRef = useRef<HTMLInputElement>(null);

  const results = calcResults(amount, selectedInstallments);
  const percent = ((amount - MIN) / (MAX - MIN)) * 100;
  const murabahaRatePct = selectedInstallments > 4
    ? ((MURABAHA_RATE[selectedInstallments] ?? 0.047) * 100).toFixed(1)
    : null;

  const transferAmount =
    activeTab === "alayk" ? results.transferAlayk : results.transferAlaina;

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.background = `linear-gradient(to right, #00bcd4 ${percent}%, #e2eaf5 ${percent}%)`;
    }
  }, [percent]);

  // صفوف الـ results grid — تتغير حسب عدد الدفعات
  const resultRows = selectedInstallments > 4
    ? [
        { label: "مبلغ الشراء",   value: `${fmt(results.purchasePrice)} ر.س` },
        { label: "مبلغ البيع",    value: `${fmtDecimal(results.salePrice)} ر.س` },
        {
          label: `رسوم مرابحة تمارا (${murabahaRatePct}%)`,
          sublabel: "(قد تختلف بناء على سجلك الائتماني)",
          value: `${fmt(results.murabahaFee)} ر.س`,
        },
        { label: "الدفعة الأولى", value: `${fmt(results.firstPayment)} ر.س` },
      ]
    : [
        { label: "مبلغ الشراء",   value: `${fmt(results.purchasePrice)} ر.س` },
        { label: "مبلغ البيع",    value: `${fmtDecimal(results.salePrice)} ر.س` },
        { label: "الدفعة الأولى", value: `${fmt(results.firstPayment)} ر.س` },
      ];

  return (
    <>
      <style>{`
        #calculator-section {
          background: #f9fcff;
          padding: 4rem 1rem;
        }
        .crystal-slider {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 6px;
          border-radius: 3px;
          outline: none;
          cursor: pointer;
          direction: ltr;
        }
        .crystal-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #00bcd4;
          border: 3px solid #fff;
          box-shadow: 0 2px 6px rgba(0,188,212,0.35);
          cursor: pointer;
        }
        .crystal-slider::-moz-range-thumb {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #00bcd4;
          border: 3px solid #fff;
          box-shadow: 0 2px 6px rgba(0,188,212,0.35);
          cursor: pointer;
          border: none;
        }
        .tab-btn {
          flex: 1;
          padding: 0.25rem 1rem;
          border: none;
          font-family: Cairo, sans-serif;
          font-weight: 700;
          font-size: 15px;
          cursor: pointer;
          transition: background 0.2s, color 0.2s, box-shadow 0.2s;
        }
        .tab-btn.active {
          background: #fff;
          color: #1a2e5a;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          border-radius: 20px;
        }
        .tab-btn.inactive {
          background: transparent;
          color: #6b7a99;
        }
        // .installments-row {
        //   display: flex;
        //   gap: 0.5rem;
        //   flex-wrap: wrap;
        // }
        // .installment-btn {
        //   flex: 1 1 auto;
        //   min-width: 0;
        //   height: 42px;
        //   border-radius: 20px;
        //   font-family: Cairo, sans-serif;
        //   font-weight: 700;
        //   font-size: 16px;
        //   cursor: pointer;
        //   transition: all 0.18s ease;
        //   white-space: nowrap;
        // }
        // @media (max-width: 480px) {
        //   .installment-btn { font-size: 14px; height: 38px; }
        // }
//         .installments-row {
//   display: flex;
//   gap: 0.6rem;
//   flex-wrap: wrap;
//   direction: rtl;
//   justify-content: flex-start;
// }

.installment-btn {
          // flex: 1 1 auto;
          // min-width: 0;
            width: min(94px, calc(20% - 0.4rem));

  width: 94px;
  height: 42px;
  border-radius: 20px;
  font-family: Cairo, sans-serif;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.18s ease;
  flex-shrink: 0;
}

@media (max-width: 480px ) {
  .installment-btn {
    width: calc(20% - 0.5rem);
    font-size: 14px;
    height: 38px;
  }


}
    @media ( max-width: 800px) {
  .installment-btn {
    width: calc(20% - 0.5rem);
    font-size: 14px;
    height: 38px;
  }
      }

.installments-row {
  display: flex;
  gap: 0.5rem;
  flex-wrap: nowrap;
  direction: rtl;
  justify-content: flex-start;
}


  .cta-btn { transition: background 0.2s, transform 0.1s; }
        .cta-btn:hover { background: #0f1f3d !important; transform: translateY(-1px); }
      `}</style>

      <section id="calculator-section">
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          
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
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0891b2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect width="16" height="20" x="4" y="2" rx="2"></rect>
                <line x1="8" x2="16" y1="6" y2="6"></line>
                <line x1="16" x2="16" y1="14" y2="18"></line>
                <path d="M16 10h.01"></path>
                <path d="M12 10h.01"></path>
                <path d="M8 10h.01"></path>
                <path d="M12 14h.01"></path>
                <path d="M8 14h.01"></path>
                <path d="M12 18h.01"></path>
                <path d="M8 18h.01"></path>
              </svg>
              حاسبة السيولة
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

          <div
            style={{
              background: "#fff",
              borderRadius: 20,
              padding: "clamp(1.5rem, 4vw, 2.5rem)",
              boxShadow: "0 4px 32px rgba(0,0,0,0.08)",
              border: "1px solid #e2eaf5",
            }}
          >
            <div style={{ marginBottom: "2rem" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
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
                    width: "100%",
                    textAlign: "right"
                  }}
                >
                  اختر المبلغ المطلوب
                </div>
              </div>

              {/* الرقم بالإنجليزية وتنسيق RTL مع ر.س قبل الرقم */}
              <div
                style={{
                  textAlign: "center",
                  fontFamily: "Cairo, sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(2rem, 5vw, 2.8rem)",
                  color: "#1a2e5a",
                  marginBottom: "1.5rem",
                  direction: "rtl",
                }}
              >
                {fmt(amount)}
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
                  className="crystal-slider"
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
                  <span>30,000 ر.س</span>
                  <span>200 ر.س</span>
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
                  direction: "ltr",
                }}
              >
                عدد الدفعات
              </div>

              <div className="installments-row">
                {INSTALLMENTS.map((n) => (
                  <button
                    key={n}
                    onClick={() => setSelectedInstallments(n)}
                    className="installment-btn"
                    style={{
                      border: selectedInstallments === n ? "none" : "1.5px solid #e2eaf5",
                      background: selectedInstallments === n ? "#00297C" : "#fff",
                      color: selectedInstallments === n ? "#fff" : "#1a2e5a",
                    }}
                    aria-pressed={selectedInstallments === n}
                  >
                    {n}
                  </button>
                ))}
              </div>

              {selectedInstallments > 4 && (
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
                direction: "rtl",
              }}
            >
              <span style={{ color: "#6b7a99", fontSize: 14 }}>الدفعة الأولى</span>
              <span style={{ color: "#1a2e5a", fontWeight: 700, fontSize: 15 }}>
                ({fmt(results.firstPayment)} ر.س)
              </span>
            </div>

            {/* تابات علينا / عليك التفاعلية المحدثة والمثبتة */}
            <div style={{
              display: "flex",
              background: "#f1f5f9",
              borderRadius: "20px",
              padding: "4px",
              marginBottom: "1.25rem",
              direction: "rtl",
              gap: "2px",
            }}>
              <button
                type="button"
                className={`tab-btn ${activeTab === "alayk" ? "active" : "inactive"}`}
                onClick={() => setActiveTab("alayk")}
              >
                عليك
              </button>
              <button
                type="button"
                className={`tab-btn ${activeTab === "alaina" ? "active" : "inactive"}`}
                onClick={() => setActiveTab("alaina")}
              >
                علينا
              </button>
            </div>

            {/* Results Grid — يتغير حسب عدد الدفعات */}
            <div style={{ display: "grid", gap: "0.25rem", marginBottom: "1.5rem" }}>
              {resultRows.map((item, i) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    padding: "0.35rem 0",
                    borderBottom: i < resultRows.length - 1 ? "1px solid #f0f7ff" : "none",
                    fontFamily: "Tajawal, sans-serif",
                    direction: "rtl",
                  }}
                >
                  <div style={{ textAlign: "right" }}>
                    <span style={{ color: "#6b7a99", fontSize: 14 }}>{item.label}</span>
                    {"sublabel" in item && item.sublabel && (
                      <div style={{ fontSize: 11, color: "#9ca3af", marginTop: 2 }}>{item.sublabel}</div>
                    )}
                  </div>
                  <span style={{ color: "#1a2e5a", fontWeight: 600, fontSize: 14, whiteSpace: "nowrap", marginRight: 8 }}>{item.value}</span>
                </div>
              ))}
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #0b267d 0%, #1a3a7a 25%, #2043a3 50%, #0758a3 62.5%, #1a5f8a 75%, #008d9a 100%)',
              borderRadius: 20,
              padding: "1.25rem 1.5rem",
              marginBottom: "1.25rem",
              direction: "rtl",
            }}>
              <div style={{
                fontFamily: "Tajawal, sans-serif", fontWeight: 500,
                fontSize: 14, color: "rgba(255,255,255,0.85)",
                marginBottom: "0.5rem", textAlign: "right",
              }}>
                المبلغ المحول إلى حسابك
              </div>
              <div style={{
                fontFamily: "Cairo, sans-serif", fontWeight: 800,
                fontSize: "clamp(2rem, 6vw, 2.5rem)", color: "#fff",
                textAlign: "right", lineHeight: 1.1,
              }}>
                {fmt(transferAmount)}
                <span style={{ fontSize: "0.4em", fontWeight: 600, marginRight: 6, opacity: 0.9 }}>ر.س</span>
              </div>
            </div>

            <div style={{
              border: "1px solid #e2eaf5", 
              borderRadius: 16,
              overflow: "hidden", 
              marginBottom: "1.5rem",
            }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "0.7rem 1rem",
                  fontFamily: "Tajawal, sans-serif",
                  direction: "rtl",
                  borderBottom: "1px solid #f0f7ff",
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
                  alignItems: "center",
                  padding: "0.7rem 1rem",
                  fontFamily: "Tajawal, sans-serif",
                  direction: "rtl",
                }}
              >
                <span style={{ color: "#6b7a99", fontSize: 14 }}>القسط الشهري</span>
                <span style={{ color: "#1a2e5a", fontWeight: 700, fontSize: 14 }}>
                  {fmt(results.monthlyInstallment)} ر.س
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="https://wa.me/966530162235"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: 56,
                background: "#1a2e5a",
                color: "#fff",
                padding: "16px 24px",
                borderRadius: 20,
                fontFamily: "Cairo, sans-serif",
                fontWeight: 800,
                fontSize: 16,
                textDecoration: "none",
                boxSizing: "border-box",
              }}
            >
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
              <img src="/tamara-logo-CWSUBiWK.webp" alt="Tamara" style={{ width: 56, height: 20 }} />
              <img src="/tabby-logo.webp" alt="Tabby" style={{ width: 56, height: 20 }} />
            </div>

            <p
              style={{
                textAlign: "center",
                fontFamily: "Tajawal, sans-serif",
                fontSize: 12,
                color: "#6b7a99",
                marginTop: "0.75rem",
                marginBottom: 0,
              }}
            >
              الأرقام تقريبية وقد تختلف حسب سعر المنتج في المتاجر
            </p>
          </div>
        </div>
      </section>
    </>
  );
}