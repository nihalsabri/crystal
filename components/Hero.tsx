
"use client";

import { useState } from "react";

export default function Hero() {
  const [amount, setAmount] = useState(30000);
  const [hoveredBtn, setHoveredBtn] = useState<string | null>(null);

  const formatNumber = (num: number) =>
    num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <section className="hero-section">
      <div className="hero-glow-top" />
      <div className="hero-glow-bottom" />

      <div className="hero-container">

        {/* ===== Content Side ===== */}
        <div className="content-side">

          {/* Badge */}
          <div style={{display: "inline-flex", alignItems: "center",
                gap: 8,
                background: "#ecfeff",
                border: "1.5px solid #a5f3fc",
                borderRadius: 50,
                padding: "8px 20px",
                fontFamily: "Tajawal, sans-serif",
                fontWeight: 700,
                fontSize: 15,
}}>
            <span className="info-badge-text">⚡ موافقة فورية وسريعة</span>
          </div>

          {/* Headline */}
          <h1 className="main-headline">
            نوفر لك سيولة مالية
            <br />
            <span className="gradient-text">تصل إلى {formatNumber(amount)} ريال</span>
          </h1>

          {/* Subheading */}
          <p className="sub-headline">عبر تابي وتمارا — حول مشترياتك الى كاش</p>

          {/* Description */}
          <p className="description-text">
            نشتري لك جوال عبر تابي أو تمارا، ومن ثم نقوم ببيعه لك ونحوّل المبلغ مباشرة إلى حسابك البنكي.
          </p>

          {/* CTA Buttons */}
          <div className="cta-group" style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>

            {/* Primary: btn-navy */}
            <a
              href="https://wa.me/966530162235"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-navy-primary"
              style={{
                transform: hoveredBtn === "primary"
                  ? "translateY(-3px) scale(1.02)"
                  : "translateY(0) scale(1)",
                boxShadow: hoveredBtn === "primary"
                  ? "0 12px 28px rgba(11,38,125,0.35)"
                  : "0 4px 15px rgba(11,38,125,0.2)",
              }}
              onMouseEnter={() => setHoveredBtn("primary")}
              onMouseLeave={() => setHoveredBtn(null)}
            >
              <WhatsAppIcon />
              قدّم طلبك الآن
            </a>

            {/* Secondary: cyan-50 bg */}
            <a
              href="#calculator"
              className="btn-cyan-secondary"
              style={{
                background: hoveredBtn === "secondary" ? "#cffafe" : "#ecfeff",
                boxShadow: hoveredBtn === "secondary" ? "0 4px 12px rgba(6,182,212,0.2)" : "none",
              }}
              onMouseEnter={() => setHoveredBtn("secondary")}
              onMouseLeave={() => setHoveredBtn(null)}
            >
              <CalculatorIcon />
              احسب سيولتك
            </a>

            {/* Tertiary: pill border */}
            <a
              href="#how"
              className="btn-ghost-tertiary"
              style={{
                borderColor: hoveredBtn === "tertiary" ? "#67e8f9" : "#e2e8f0",
                background: hoveredBtn === "tertiary" ? "rgba(236,254,255,0.4)" : "#ffffff",
              }}
              onMouseEnter={() => setHoveredBtn("tertiary")}
              onMouseLeave={() => setHoveredBtn(null)}
            >
              خطوات الطلب
            </a>
          </div>

          {/* Partners Badge */}
          <div className="partners-badge">
            <span className="partners-label">شركاؤنا</span>
            <div className="logos-wrapper">
              <img src="/tamara-logo-CWSUBiWK.webp" alt="tamara" style={{ height: 24, width: 64, objectFit: "contain" }} loading="lazy" />
              <span className="divider-line" />
              <img src="/tabby-logo.webp" alt="tabby" style={{ height: 24, width: 64, objectFit: "contain" }} loading="lazy" />
            </div>
          </div>
        </div>

        {/* ===== Card Side ===== */}
        <div className="card-side">
          <div className="card-glow" />
          <div className="soft-card-wrapper">
            <div className="brand-gradient-card">
              {/* <div className="circle-decor-top" />
              <div className="circle-decor-bottom" /> */}

              <div className="card-header-row">
                <span className="card-title">الحد المتاح</span>
                <span className="wallet-icon-box">
                  <WalletIcon />
                </span>
              </div>

              <div className="amount-display-box">
                <span className="amount-value">{formatNumber(amount)}</span>
                <span className="currency-label">ر.س</span>
              </div>

              <div className="slider-container" dir="ltr">
                <div className="slider-track-bg">
                  <div
                    className="slider-track-fill"
                    style={{ width: `${((amount - 200) / (30000 - 200)) * 100}%` }}
                  />
                </div>
                <div
                  className="slider-thumb-custom"
                  style={{ left: `${((amount - 200) / (30000 - 200)) * 100}%` }}
                  aria-hidden="true"
                />
                <input
                  type="range"
                  min="200"
                  max="30000"
                  step="50"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="real-range-input"
                  aria-label="اختر مبلغ التمويل"
                />
              </div>

              <div className="slider-limits-labels">
                <span>الحد الأعلى: 30,000</span>
                <span>الحد الأدنى: 200</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          width: 100%;
          padding: .5rem 1.25rem 4rem;
          overflow: hidden;
          direction: rtl;
          background: linear-gradient(180deg, #f0f9ff 0%, #ffffff 100%);
        }

        /* Glows */
        .hero-glow-top {
          pointer-events: none;
          position: absolute;
          top: 0; right: 0;
          height: 600px; width: 600px;
          border-radius: 50%;
          background: rgba(207,250,254,0.5);
          filter: blur(110px);
          transform: translate(25%, -25%);
          z-index: 0;
        }
        .hero-glow-bottom {
          pointer-events: none;
          position: absolute;
          bottom: 0; left: 0;
          height: 500px; width: 500px;
          border-radius: 50%;
          background: rgba(219,234,254,0.6);
          filter: blur(100px);
          transform: translate(-25%, 25%);
          z-index: 0;
        }

        /* Container */
        .hero-container {
          position: relative;
          z-index: 10;
          margin: 0 auto;
          max-width: 1280px;
          display: grid;
          grid-template-columns: 1fr;
          align-items: center;
          gap: 1.75rem;
          padding: 0 1.25rem;
        }
        @media (min-width: 640px) {
          .hero-container { gap: 3rem; padding: 0 1.5rem; }
        }
        @media (min-width: 1024px) {
          .hero-container {
            grid-template-columns: repeat(12, minmax(0, 1fr));
            gap: 2rem;
            padding: 0 3rem;
          }
          .content-side {
            grid-column: span 7 / span 7;
            align-items: flex-start !important;
            text-align: right !important;
          }
          .card-side {
            grid-column: span 5 / span 5;
            justify-content: flex-end !important;
            margin-top: 0 !important;
          }
        }

        /* Content side */
        .content-side {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1.25rem;
        }
        @media (min-width: 640px) {
          .content-side { gap: 1.5rem; }
        }

        .info-badge-text {
          font-size: 0.875rem;
          font-weight: 500;
          color: #1e3a5f;
          font-family: "Tajawal", sans-serif;
        }

        .main-headline {
          font-family: "Cairo", sans-serif;
          font-weight: 700;
          font-size: clamp(1.875rem, 5vw, 3.75rem);
          line-height: 1.2;
          color: #0f172a;
          margin: 0;
        }

        .gradient-text {
          background: linear-gradient(to left, #0b267d, #0ea5e9, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .sub-headline {
          font-family: "Tajawal", sans-serif;
          font-weight: 600;
          font-size: clamp(1.125rem, 2.5vw, 1.25rem);
          color: #0b267d;
          margin: 0;
        }

        .description-text {
          max-width: 50ch;
          font-family: "Tajawal", sans-serif;
          font-size: clamp(1rem, 2vw, 1.125rem);
          line-height: 1.75;
          color: #64748b;
          margin: 0;
        }

        /* CTA group */
        .cta-group {
          display: flex;
          flex-direction: column;
          align-items: stretch;
          width: 100%;
          gap: 0.75rem;
          margin-top: -0.25rem;
        }
        @media (min-width: 640px) {
          .cta-group {
            flex-direction: row;
            width: auto;
            align-items: center;
            margin-top: -0.5rem;
          }
        }
        @media (min-width: 1024px) {
          .cta-group { align-items: flex-start; }
        }

        /* btn-navy: الأصلي navy داكن */
        .btn-navy-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          border-radius: 1.5rem;
          padding: 0.25rem 1.5rem;
          font-size: 1rem;
          font-weight: 700;
          font-family: "Cairo", sans-serif;
          color: #ffffff;
          text-decoration: none;
          background: linear-gradient(135deg, #0b267d, #071b61);
          transition: all 0.25s ease;
        }
        @media (min-width: 640px) {
          .btn-navy-primary { padding: 1rem 2rem; font-size: 1.125rem; }
        }

        /* btn-cyan: سماوي فاتح */
        .btn-cyan-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          border-radius: 1.5rem;
          border: 1px solid #a5f3fc;
          background: #ecfeff;
          padding: 0.5rem 1.5rem;
          font-size: 1rem;
          font-weight: 700;
          font-family: "Cairo", sans-serif;
          color: #0e7490;
          text-decoration: none;
          transition: all 0.25s ease;
        }

        /* btn-tertiary: pill ghost */
        .btn-ghost-tertiary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          align-self: center;
          border-radius: 9999px;
          border: 1px solid #e2e8f0;
          background: #ffffff;
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
          font-weight: 500;
          font-family: "Tajawal", sans-serif;
          color: #334155;
          text-decoration: none;
          transition: all 0.25s ease;
        }
        @media (min-width: 1024px) {
          .btn-ghost-tertiary { align-self: flex-start; }
        }

        /* Partners */
        .partners-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          border-radius: 9999px;
          border: 1px solid #e2e8f0;
          background: rgba(255,255,255,0.8);
          padding: 0.375rem 0.75rem 0.375rem 0.375rem;
          box-shadow: 0 2px 10px rgba(0,0,0,0.04);
          backdrop-filter: blur(4px);
          margin-top: -0.5rem;
          align-self: flex-start;
        }
        @media (max-width: 1023px) {
          .partners-badge { align-self: center; }
        }
        .partners-label {
          background: #ffffff;
          padding: 0.25rem 0.5rem;
          font-size: 0.625rem;
          font-weight: 600;
          color: #1e3a5f;
          font-family: "Tajawal", sans-serif;
          border-radius: 9999px;
        }
        .logos-wrapper {
          display: flex;
          align-items: center;
          gap: 0.625rem;
        }
        .divider-line {
          display: inline-block;
          width: 1px;
          height: 16px;
          background: #e2e8f0;
        }

        /* Card side */
        .card-side {
          position: relative;
          display: flex;
          justify-content: center;
          margin-top: -1rem;
        }
        @media (min-width: 1024px) {
          .card-side { margin-top: -2rem; justify-content: flex-end; }
        }

        .card-glow {
          pointer-events: none;
          position: absolute;
          top: 50%; left: 50%;
          height: 75%; width: 75%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          background: rgba(165,243,252,0.3);
          filter: blur(64px);
          z-index: 0;
        }

        /* Outer white card */
        .soft-card-wrapper {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          width: 100%;
          max-width: 24rem;
          border-radius: 2rem;
          border: 1px solid #e2e8f0;
          background: #ffffff;
          padding: 1rem;
          box-shadow: 0 25px 50px -12px rgba(0,0,0,0.06);
          animation: floatY 3.5s ease-in-out infinite;
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        @media (min-width: 640px) {
          .soft-card-wrapper { padding: 2rem; }
        }

        /* Inner gradient — الأصلي navy */
        .brand-gradient-card {
          position: relative;
          overflow: hidden;
          border-radius: 1rem;
background: linear-gradient(135deg, #0b267d 0%, #1a3a7a 25%, #2043a3 50%, #0758a3 62.5%, #1a5f8a 75%, #008d9a 100%);
          padding: 1.5rem;
          color: #ffffff;
        }

        .circle-decor-top {
          pointer-events: none;
          position: absolute;
          top: 0; right: 0;
          height: 8rem; width: 8rem;
          transform: translate(33%, -33%);
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          filter: blur(20px);
        }
        .circle-decor-bottom {
          pointer-events: none;
          position: absolute;
          bottom: 0; left: 0;
          height: 6rem; width: 6rem;
          transform: translate(-25%, 25%);
          border-radius: 50%;
          background: rgba(103,232,249,0.3);
          filter: blur(20px);
        }

        .card-header-row {
          position: relative; z-index: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.20rem;
        }
        .card-title {
          display: block;
          font-family: "Tajawal", sans-serif;
          font-size: 0.875rem;
          color: rgba(255,255,255,0.8);
          font-weight: 400;
        }
        .wallet-icon-box {
          display: inline-flex;
          width: 2.25rem; height: 2.25rem;
          align-items: center;
          justify-content: center;
          border-radius: 0.75rem;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(4px);
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.2);
        }
        .wallet-icon-box svg {
          width: 1.25rem; height: 1.25rem;
          animation: tiltWallet 3.5s ease-in-out infinite;
        }
        @keyframes tiltWallet {
          0%, 100% { transform: rotate(0deg); }
          25%       { transform: rotate(6deg); }
          75%       { transform: rotate(-6deg); }
        }

        .amount-display-box {
          position: relative; z-index: 1;
          display: flex;
          align-items: baseline;
          gap: 0.5rem;
          margin-bottom: 0.25rem;
          font-variant-numeric: tabular-nums;
          letter-spacing: -0.025em;
          direction: rtl;
        }
        .amount-value {
          font-family: "Cairo", sans-serif;
          font-size: 2.25rem;
          font-weight: 700;
          color: #ffffff;
        }
        .currency-label {
          font-family: "Tajawal", sans-serif;
          font-size: 1.125rem;
          font-weight: 400;
          color: rgba(255,255,255,0.7);
        }

        .slider-container {
          position: relative; z-index: 1;
          margin-top: 0.40rem;
        }
        .slider-track-bg {
          pointer-events: none;
          height: 0.375rem; width: 100%;
          overflow: hidden; border-radius: 9999px;
          background: rgba(255,255,255,0.2);
        }
        .slider-track-fill {
          height: 100%; border-radius: 9999px;
          background: #67e8f9;
          transition: width 0.15s ease;
        }
        .slider-thumb-custom {
          pointer-events: none;
          position: absolute;
          top: 50%;
          width: 1rem; height: 1rem;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          border: 2px solid #67e8f9;
          background: #ffffff;
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
          transition: left 0.15s ease-out;
        }
        .real-range-input {
          position: absolute;
          inset: 0; top: 50%;
          height: 1.5rem; width: 100%;
          transform: translateY(-50%);
          cursor: pointer;
          appearance: none;
          background: transparent;
          opacity: 0;
        }
        .slider-limits-labels {
          position: relative; z-index: 1;
          display: flex;
          justify-content: space-between;
          margin-top: 0.5rem;
          font-family: "Tajawal", sans-serif;
          font-size: 0.75rem;
          color: rgba(255,255,255,0.7);
        }

        /* Mobile */
        @media (max-width: 639px) {
          .hero-section { padding: 4rem 1rem 3rem; }
        }
      `}</style>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function CalculatorIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <rect width="16" height="20" x="4" y="2" rx="2" />
      <line x1="8" x2="16" y1="6" y2="6" />
      <line x1="16" x2="16" y1="14" y2="18" />
      <path d="M16 10h.01M12 10h.01M8 10h.01M12 14h.01M8 14h.01M12 18h.01M8 18h.01" />
    </svg>
  );
}

function WalletIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
  );
}