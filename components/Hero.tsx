"use client";

import { useState } from "react";

export default function Hero() {
  const [amount, setAmount] = useState(30000);
  const [isCtaHovered, setIsCtaHovered] = useState(false);

  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <section className="hero-section">
      {/* Decorative Blur Background behind the card */}
      <div className="bg-glow-blur" />
  <div className="hero-glow-top" />
  <div className="hero-glow-bottom" />
      <div className="hero-container">
        
        {/* Right Side: Content Text */}
        <div className="content-side">
          {/* Badge */}
          <div className="badge-container">
            <span className="info-badge">
             <span >⚡</span> موافقة فورية وسريعة 
            </span>
          </div>

          {/* Headline */}
          <h1 className="main-headline">
            نوفر لك سيولة مالية
            <br />
            <span className="gradient-text">تصل إلى {formatNumber(amount)} ريال</span>
          </h1>

          {/* Subheading */}
          <p className="sub-headline">
            عبر تابي وتمارا — حول مشترياتك الى كاش
          </p>

          {/* Description */}
          <p className="description-text">
            نشتري لك جوال عبر تابي أو تمارا، ومن ثم نقوم ببيعه لك ونحوّل المبلغ مباشرة إلى حسابك البنكي.
          </p>

          {/* CTA Buttons - Aligned 100% to the right on desktop */}
          <div className="cta-group">
            <a
              href="https://wa.me/966530162235"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-navy"
              style={{
                transform: isCtaHovered ? "translateY(-3px) scale(1.02)" : "translateY(0) scale(1)",
                boxShadow: isCtaHovered ? "0 10px 25px rgba(26, 46, 90, 0.25)" : "none"
              }}
              onMouseEnter={() => setIsCtaHovered(true)}
              onMouseLeave={() => setIsCtaHovered(false)}
            >
              <WhatsAppIcon />
              قدّم طلبك الآن
            </a>

            <a href="#calculator" className="btn-secondary-cyan">
              <CalculatorIcon />
              احسب سيولتك
            </a>

            <a href="#steps" className="btn-tertiary-steps">
              خطوات الطلب
            </a>
          </div>

          {/* Partner Logos */}
          <div className="partners-badge">
            <span >شركاؤنا</span>
            <div className="logos-wrapper">
              <span className="partner-logo tamara">
                <img src="/tamara-logo-CWSUBiWK.webp" alt="Tamara Logo" style={{ height: '1rem', width: 'auto' }} />
              </span>
              <span className="divider-line"></span>
              <span >
                <img src="/tabby-logo.webp" alt="Tabby Logo" style={{ height: '1rem', width: 'auto' }} />
              </span>
            </div>
          </div>
        </div>

    {/* Left Side: Interactive Credit Card */}
<div className="card-side">
  {/* Background Glow Behind Card */}
  <div className="card-glow" />
  
  {/* Card Container */}
  <div className="soft-card-wrapper">
    <div className="brand-gradient-card">
        <div className="right-overlay" /> 
      {/* Card Background Circles Decor */}
      <div className="circle-decor-top" />
      <div className="circle-decor-bottom" />

      {/* Card Header Row */}
      <div className="card-header-row">
        <span className="card-title">الحد المتاح</span>
        <span className="wallet-icon-box">
          <WalletIcon />
        </span>
      </div>

      {/* Amount Display */}
      <div className="amount-display-box">
        <span className="amount-value">{formatNumber(amount)}</span>
        <span className="currency-label">ر.س</span>
      </div>

      {/* Slider Component */}
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
          aria-label="اختر مبلغ التمويل"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="real-range-input"
        />
      </div>

      {/* Slider Limits Text */}
      <div className="slider-limits-labels">
        <span>الحد الأعلى: 30,000</span>
        <span>الحد الأدنى: 200</span>
      </div>
    </div>
  </div>
</div>
</div>
      {/* Scoped CSS Styles For Global Theme Consistency & Full Responsiveness */}
      <style>{`
        .hero-section {
          position: relative;
          width: 100%;
          padding: 6rem 1.5rem 4rem;
          overflow: hidden;
          direction: rtl;
          background: linear-gradient(180deg, #f3f8fc 0%, #ffffff 100%); 
        }
.hero-glow-top {
  pointer-events: none;
  position: absolute;
  top: 0;
  right: 0;
  height: 600px;
  width: 600px;
  border-radius: 50%;
  background-color: rgba(207, 250, 254, 0.5); /* cyan-100/50 */
  filter: blur(110px);
  transform: translate(25%, -25%);
  z-index: 0;
}

.hero-glow-bottom {
  pointer-events: none;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 500px;
  width: 500px;
  border-radius: 50%;
  background-color: rgba(219, 234, 254, 0.6); /* navy-100/60 */
  filter: blur(100px);
  transform: translate(-25%, 25%);
  z-index: 0;
}
        .hero-container {
          position: relative;
          z-index: 10;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          max-width: 1280px;
          align-items: center;
          gap: 3rem;
        }

        /* Responsive Grid Breakdown */
        @media (min-width: 1024px) {
          .hero-container {
            grid-template-columns: repeat(12, minmax(0, 1fr));
            gap: 2rem;
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

        /* Text Side Elements */
        .content-side {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1.5rem;
        }

        .badge-container {
          display: inline-block;
        }

        .info-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
       border: 2px solid #cffafe; /* cyan-100 border */
 border-radius: 999px;

          background-color: #ecfeff;
          padding: 0.4rem 1rem;
          font-family: "Tajawal", sans-serif;
          font-weight: 500;
          font-size: 0.85rem;
          color: #334e68;
        }

        .lightning-icon {
          font-size: 14px;
          background: #fff3c4;
          padding: 2px 5px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .main-headline {
          font-family: "Cairo", sans-serif;
          font-weight: 800;
          font-size: clamp(2.2rem, 5vw, 3.5rem);
          line-height: 1.3;
          color: #0f172a;
          margin: 0;
        }

        .gradient-text {
          background: linear-gradient(to left, #0b267d, #14abc7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .sub-headline {
          font-family: "Tajawal", sans-serif;
          font-weight: 700;
          font-size: clamp(1.1rem, 2.5vw, 1.35rem);
          color: #0b267d;
          margin: 0;
        }

        .description-text {
          max-width: 52ch;
          font-family: "Tajawal", sans-serif;
          font-size: clamp(0.95rem, 2vw, 1.05rem);
          line-height: 1.8;
          color: #64748b;
          margin: 0;
        }

        .cta-group {
          display: flex;
          flex-direction: column;
          width: 100%;
          gap: 0.75rem;
          margin-top: 0.5rem;
        }

        @media (min-width: 640px) {
          .cta-group {
            flex-direction: row;
            width: auto;
            align-items: center;
            justify-content: flex-start;
          }
        }

        .btn-primary-navy, .btn-secondary-cyan, .btn-tertiary-steps {
          border-radius: 0.75rem !important; 
          font-family: "Cairo", sans-serif;
          font-weight: 700;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.25s ease;
        }

        .btn-primary-navy {
          gap: 0.75rem;
          background-color: #16244f;
          color: #ffffff;
          padding: 0.95rem 2rem;
          font-size: 1rem;
        }
        .btn-primary-navy:hover {
          background-color: #0b1536;
        }

        .btn-secondary-cyan {
          gap: 0.5rem;
          background-color: #ecfeff;
          color: #14abc7;
          padding: 0.95rem 1.75rem;
          font-size: 1rem;
        }
        .btn-secondary-cyan:hover {
          background-color: #d1fae5;
        }

        .btn-tertiary-steps {
          border: 1px solid #e2e8f0;
          background-color: #ffffff;
          color: #334155;
          padding: 0.95rem 1.5rem;
          font-size: 0.95rem;
        }
        .btn-tertiary-steps:hover {
          background-color: #f8fafc;
        }

        /* Partners Section */
        .partners-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          border-radius: 9999px;
          border: 1px solid #f1f5f9;
          background-color: #ffffff;
          padding: 0.4rem 1rem 0.4rem 0.4rem;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
          margin-top: 0.5rem;
          align-self: flex-start;
        }

        .partners-title {
          font-family: "Tajawal", sans-serif;
          font-size: 0.75rem;
          font-weight: 700;
          color: #64748b;
          background-color: #f1f5f9;
          padding: 0.25rem 0.6rem;
          border-radius: 9999px;
        }

        .logos-wrapper {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0 0.5rem;
        }

        .partner-logo {
          font-family: "Arial", sans-serif;
          font-size: 0.95rem;
          user-select: none;
        }
        .partner-logo.tamara {
          font-weight: 800;
          color: #e91e8c;
        }
        .partner-logo.tabby {
          font-weight: 900;
          color: #1a1a1a;
        }

        .divider-line {
          width: 1px;
          height: 14px;
          background-color: #cbd5e1;
        }

        /* Left Side Card Elements */
.card-side {
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: -1rem; /* -mt-4 */
}

@media (min-width: 1024px) {
  .card-side {
    margin-top: -2rem; /* lg:-mt-8 */
    justify-content: flex-end; /* lg:justify-end */
  }
}

/* Background Glow Behind Card */
.card-glow {
  pointer-events: none;
  position: absolute;
  top: 50%;
  left: 50%;
  height: 75%;
  width: 75%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background-color: rgba(165, 243, 252, 0.3); /* cyan-200/30 */
  filter: blur(80px); /* blur-3xl */
  z-index: 0;
}

.soft-card-wrapper {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 24rem;
  border-radius: 2rem;
  border: 1px solid #e2e8f0;
  background-color: #ffffff;
  padding: 1.5rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.05);
  animation: floatY 3.5s ease-in-out infinite;  
}
  @keyframes floatY {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-10px); }
}

@media (min-width: 640px) {
  .soft-card-wrapper { padding: 2rem; }
}

// .right-overlay {
//   pointer-events: none;
//   position: absolute;
//   top: 0; right: 0; bottom: 0;
//   width: 60%;
//   background: linear-gradient(to left, rgba(37,99,210,0.6) 0%, rgba(37,99,210,0.25) 50%, transparent 100%);
//   z-index: 0;
// } 

.circle-decor-top,
.circle-decor-bottom,
.card-header-row,
.amount-display-box,
.slider-container,
.slider-limits-labels {
  position: relative;
  z-index: 1;
}

.wallet-icon-box svg {
  width: 1.25rem;
  height: 1.25rem;
  animation: tiltWallet 3.5s ease-in-out infinite;
}

@keyframes tiltWallet {
  0%, 100% { transform: rotate(0deg); }
  25%       { transform: rotate(6deg); }
  75%       { transform: rotate(-6deg); }
}



.brand-gradient-card {
  position: relative;
    overflow: hidden;
      border-radius: 1rem; /* rounded-2xl */

          background: linear-gradient(135deg, #0b267d 0%, #1a3a7a 25%, #2043a3 50%, #0758a3 62.5%, #1a5f8a 75%, #008d9a 100%);

            /* background: linear-gradient(135deg, #0f1d42 0%, #1e40af 50%, #0891b2 100%); */
              padding: 1.5rem; /* p-6 */
                color: #ffffff;
                }

                @media (min-width: 640px) {
                  .brand-gradient-card {
                      padding: 1.5rem; /* sm:p-6 */
                        }
                        }

                        // .circle-decor-top {
                        //   pointer-events: none;
                        //   position: absolute;
                        //   top: 0;
                        //   right: 0;
                        //   height: 8rem; /* h-32 = 128px */
                        //   width: 8rem; /* w-32 = 128px */
                        //   transform: translate(33.33%, -33.33%); /* translate-x-1/3 -translate-y-1/3 */
                        //   border-radius: 50%;
                        //   background-color: #ecfeff rgba(103, 232, 249, 0.15); /* bg-white/15 */
                        //   filter: blur(20px); /* blur-2xl */
                        // }

                        // .circle-decor-bottom {
                        //   pointer-events: none;
                        //   position: absolute;
                        //   bottom: 0;
                        //   left: 0;
                        //   height: 6rem; /* h-24 = 96px */
                        //   width: 6rem; /* w-24 = 96px */
                        //   transform: translate(-25%, 25%); /* -translate-x-1/4 translate-y-1/4 */
                        //   border-radius: 50%;
                        //   background-color: rgba(103, 232, 249, 0.3); /* bg-cyan-300/30 */
                        //   filter: blur(20px); /* blur-2xl */
                        // }

                        .card-header-row {
                          display: flex;
                            align-items: center;
                              justify-content: space-between;
                                margin-bottom: 0.75rem; /* mb-3 */
                                }

                                .card-title {
                                  display: block;
                                    font-family: "Tajawal", sans-serif;
                                      font-size: 0.875rem; /* text-sm */
                                        color: rgba(255, 255, 255, 0.8); /* text-white/80 */
                                          font-weight: 400;
                                          }

                                          .wallet-icon-box {
                                            display: inline-flex;
                                              width: 2.25rem; /* size-9 = 36px */
                                                height: 2.25rem;
                                                  align-items: center;
                                                    justify-content: center;
                                                      border-radius: 0.75rem; /* rounded-xl */
                                                        background-color: rgba(255, 255, 255, 0.15); /* bg-white/15 */
                                                          backdrop-filter: blur(4px); /* backdrop-blur-sm */
                                                            box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.2); /* ring-1 ring-white/20 */
                                                            }

                                                            .wallet-icon-box svg {
                                                              width: 1.25rem; /* size-5 = 20px */
                                                                height: 1.25rem;
                                                                }

                                                                .amount-display-box {
                                                                  display: flex;
                                                                    align-items: baseline;
                                                                      gap: 0.5rem; /* gap-2 */
                                                                        margin-bottom: 0.25rem; /* mb-1 */
                                                                          font-variant-numeric: tabular-nums;
                                                                            letter-spacing: -0.025em; /* tracking-tight */
                                                                            }

                                                                            .amount-value {
                                                                              font-family: "Cairo", sans-serif;
                                                                                font-size: 2.25rem; /* text-4xl */
                                                                                  font-weight: 700; /* font-bold */
                                                                                    color: #ffffff;
                                                                                    }

                                                                                    .currency-label {
                                                                                      font-family: "Tajawal", sans-serif;
                                                                                        font-size: 1.125rem; /* text-lg */
                                                                                          font-weight: 400; /* font-normal */
                                                                                            color: rgba(255, 255, 255, 0.7); /* text-white/70 */
                                                                                            }

                                                                                            .slider-container {
                                                                                              position: relative;
                                                                                                margin-top: 1.25rem; /* mt-5 */
                                                                                                }

                                                                                                .slider-track-bg {
                                                                                                  pointer-events: none;
                                                                                                    height: 0.375rem; /* h-1.5 = 6px */
                                                                                                      width: 100%;
                                                                                                        overflow: hidden;
                                                                                                          border-radius: 9999px;
                                                                                                            background-color: rgba(255, 255, 255, 0.2); /* bg-white/20 */
                                                                                                            }

                                                                                                            .slider-track-fill {
                                                                                                              height: 100%;
                                                                                                                border-radius: 9999px;
                                                                                                                  background-color: #67e8f9; /* bg-cyan-300 */
                                                                                                                    transition: width 0.15s ease; /* transition-[width] duration-150 */
                                                                                                                    }

.slider-thumb-custom {
  pointer-events: none;
  position: absolute;
  top: 50%;
  width: 1rem; /* size-4 = 16px */
  height: 1rem;
  transform: translate(-50%, -50%); /* -translate-x-1/2 -translate-y-1/2 */
  border-radius: 50%;
  border: 2px solid #67e8f9; /* border-2 border-cyan-300 */
  background-color: #ffffff;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); /* shadow-md */
  transition: left 0.15s ease-out; /* transition-[left] duration-150 ease-out */
}

.real-range-input {
  position: absolute;
  inset: 0; /* inset-x-0 */
  top: 50%;
  height: 1.5rem; /* h-6 = 24px */
  width: 100%;
  transform: translateY(-50%); /* -translate-y-1/2 */
  cursor: pointer;
  appearance: none;
  background: transparent;
  opacity: 0;
}

.slider-limits-labels {
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem; /* mt-2 */
  font-family: "Tajawal", sans-serif;
  font-size: 0.75rem; /* text-xs */
  color: rgba(255, 255, 255, 0.7); /* text-white/70 */
}



      
      `}</style>
    </section>
  );
}

// ================== Crisp SVG Icons Component Elements ==================

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function CalculatorIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
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
  );
}

function WalletIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#ffffff' }}>
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
    </svg>
  );
}
