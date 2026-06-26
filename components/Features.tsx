"use client";

const features = [
  {
    icon: <HandCoinsIcon />,
    title: "مبالغ مرنة",
    desc: "من 200 إلى 30,000 ريال",
  },
  {
    icon: "⚡",
    title: "تحويل فوري",
    desc: "استلام المبلغ خلال دقائق",
  },
  {
    icon: "🔒",
    title: "آمن 100٪",
    desc: "معاملات موثوقة وسرية",
  },
  {
    icon: "📅",
    title: "تقسيط مريح",
    desc: "حتى 24 دفعة مع تابي وتمارا",
  },
];

export default function Features() {
  return (
    <>
      {/* CTA Banner */}
      <section
        style={{
          padding: "3rem 1.5rem",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            background: "linear-gradient(135deg, #1a2e5a 0%, #2a4080 100%)",
            borderRadius: 24,
            padding: "clamp(2rem, 4vw, 3rem) clamp(1.5rem, 4vw, 3rem)",
            textAlign: "center",
            color: "#fff",
            boxShadow: "0 8px 40px rgba(26, 46, 90, 0.3)",
          }}
        >
          <h2
            style={{
              fontFamily: "Cairo, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              marginBottom: "0.75rem",
            }}
          >
            جاهز لطلب سلفتك؟
          </h2>
          <p
            style={{
              fontFamily: "Tajawal, sans-serif",
              fontSize: 16,
              opacity: 0.8,
              marginBottom: "2rem",
            }}
          >
            تواصل معنا الآن واستلم المبلغ خلال دقائق
          </p>
          <a
            href="https://wa.me/966530162235"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "#25D366",
              color: "#fff",
              padding: "14px 32px",
              borderRadius: 14,
              fontFamily: "Cairo, sans-serif",
              fontWeight: 800,
              fontSize: 17,
              textDecoration: "none",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#1da851";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#25D366";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            تواصل عبر الواتساب
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        style={{
          padding: "3rem 1.5rem 5rem",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontFamily: "Cairo, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(1.4rem, 3vw, 2rem)",
            color: "#1a2e5a",
            marginBottom: "0.5rem",
          }}
        >
          لماذا تختارنا؟
        </h2>
        <p
          style={{
            textAlign: "center",
            fontFamily: "Tajawal, sans-serif",
            fontSize: 15,
            color: "#6b7a99",
            marginBottom: "2.5rem",
          }}
        >
          مميزات تجعل تجربتك أسهل وأسرع
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1.25rem",
          }}
          className="features-grid"
        >
          {features.map((f) => (
            <div
              key={f.title}
              className="card-hover"
              style={{
                background: "#fff",
                borderRadius: 18,
                padding: "2rem 1.5rem",
                textAlign: "center",
                border: "1.5px solid #e2eaf5",
                boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
              }}
            >
              <div style={{ fontSize: 36, marginBottom: "1rem" }}>{f.icon}</div>
              <h3
                style={{
                  fontFamily: "Cairo, sans-serif",
                  fontWeight: 800,
                  fontSize: 17,
                  color: "#1a2e5a",
                  marginBottom: "0.5rem",
                }}
              >
                {f.title}
              </h3>
              <p
                style={{
                  fontFamily: "Tajawal, sans-serif",
                  fontSize: 14,
                  color: "#6b7a99",
                }}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        <style>{`
          @media (max-width: 900px) {
            .features-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          @media (max-width: 480px) {
            .features-grid {
              grid-template-columns: 1fr 1fr !important;
            }
          }
        `}</style>
      </section>
    </>
  );
}
function HandCoinsIcon() {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className="size-6 text-emerald-600"
    >
      <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
      <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
      <path d="m2 16 6 6" />
      <circle cx="16" cy="9" r="2.9" />
      <circle cx="6" cy="5" r="3" />
    </svg>
  );
}