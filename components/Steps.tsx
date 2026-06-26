"use client";

const steps = [
  {
    num: "1",
    title: "تواصل واتساب",
    desc: "ابدأ المحادثة فوراً",
    icon: "💬",
    isLink: false,
    // href: "https://wa.me/966530162235",
  },
  {
    num: "2",
    title: "حدد المبلغ",
    desc: "من 200 إلى 30,000 ر.س",
    icon: "💰",
    isLink: false,
  },
  {
    num: "3",
    title: "موافقة فورية",
    desc: "موافقة خلال دقائق",
    icon: "✅",
    isLink: false,
  },
  {
    num: "4",
    title: "استلم فوراً",
    desc: "تحويل سريع لحسابك",
    icon: "🏦",
    isLink: false,
  },
];

export default function Steps() {
  return (
    <section
      id="how"
      style={{
        padding: "4rem 1.5rem",
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "0.75rem" }}>
        <span
          style={{
            fontFamily: "Tajawal, sans-serif",
            fontSize: 14,
            color: "#6b7a99",
            fontWeight: 600,
          }}
        >
          بثلاث خطوات فقط
        </span>
      </div>
      <h2
        style={{
          textAlign: "center",
          fontFamily: "Cairo, sans-serif",
          fontWeight: 800,
          fontSize: "clamp(1.4rem, 3vw, 2rem)",
          color: "#1a2e5a",
          marginBottom: "3rem",
        }}
      >
        خطوات الطلب
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1.5rem",
        }}
        className="steps-grid"
      >
        {steps.map((step) => (
          <StepCard key={step.num} step={step} />
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .steps-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .steps-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

function StepCard({ step }: { step: typeof steps[0] }) {
  const inner = (
    <div
      className="card-hover"
      style={{
        background: "#fff",
        borderRadius: 18,
        padding: "1.5rem",
        textAlign: "center",
        border: "1.5px solid #e2eaf5",
        boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
        height: "100%",
        cursor: step.isLink ? "pointer" : "default",
      }}
    >
      {/* Number badge */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: 36,
          height: 36,
          background: "#1a2e5a",
          color: "#fff",
          borderRadius: "50%",
          fontFamily: "Cairo, sans-serif",
          fontWeight: 800,
          fontSize: 15,
          marginBottom: "1rem",
        }}
      >
        {step.num}
      </div>

      {/* Icon */}
      <div style={{ fontSize: 32, marginBottom: "0.75rem" }}>{step.icon}</div>

      <h3
        style={{
          fontFamily: "Cairo, sans-serif",
          fontWeight: 800,
          fontSize: 17,
          color: "#1a2e5a",
          marginBottom: "0.4rem",
        }}
      >
        {step.title}
      </h3>
      <p
        style={{
          fontFamily: "Tajawal, sans-serif",
          fontSize: 14,
          color: "#6b7a99",
        }}
      >
        {step.desc}
      </p>

      {step.isLink && (
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            marginTop: "1rem",
            background: "#25D366",
            color: "#fff",
            padding: "8px 16px",
            borderRadius: 8,
            fontFamily: "Tajawal, sans-serif",
            fontWeight: 700,
            fontSize: 13,
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          ابدأ المحادثة
        </div>
      )}
    </div>
  );

  // if (step.isLink) {
  //   return (
  //     <a
  //       href={step.href}
  //       target="_blank"
  //       rel="noopener noreferrer"
  //       style={{ textDecoration: "none" }}
  //     >
  //       {inner}
  //     </a>
  //   );
  // }

  return inner;
}
