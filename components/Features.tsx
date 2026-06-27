
"use client";

const features = [
  {
    title: "مبالغ مرنة",
    desc: "من 200 إلى 30,000 ريال",
    bgColor: "#dcfce7", // emerald-100
    iconColor: "#059669", // emerald-600
    svgIcon: (
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
      >
        <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"></path>
        <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"></path>
        <path d="m2 16 6 6"></path>
        <circle cx="16" cy="9" r="2.9"></circle>
        <circle cx="6" cy="5" r="3"></circle>
      </svg>
    ),
  },
  {
    title: "تحويل فوري",
    desc: "استلام المبلغ خلال دقائق",
    bgColor: "#dbeafe", // sky-100
    iconColor: "#0284c7", // sky-600
    svgIcon: (
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
      >
        <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
      </svg>
    ),
  },
  {
    title: "آمن 100٪",
    desc: "معاملات موثوقة وسرية",
    bgColor: "#fef3c7", // amber-100
    iconColor: "#d97706", // amber-600
    svgIcon: (
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
      >
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
        <path d="m9 12 2 2 4-4"></path>
      </svg>
    ),
  },
  {
    title: "تقسيط مريح",
    desc: "حتى 24 دفعة مع تابي وتمارا",
    bgColor: "#f3e8ff", // violet-100
    iconColor: "#9333ea", // violet-600
    svgIcon: (
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
      >
        <path d="M8 2v4"></path>
        <path d="M16 2v4"></path>
        <path d="M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"></path>
        <path d="M3 10h18"></path>
        <path d="m16 20 2 2 4-4"></path>
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <>
      {/* Features Section */}
      <section
        id="features"
        style={{
          padding: "2rem 1.5rem",
          background: "#f9fcff",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <h2
              style={{
                fontFamily: "Cairo, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                color: "#0f172a",
                marginBottom: "0.5rem",
              }}
            >
              لماذا تختارنا؟
            </h2>
            <p
              style={{
                fontFamily: "Tajawal, sans-serif",
                fontSize: 16,
                color: "#64748b",
                marginTop: "0.5rem",
              }}
            >
              مميزات تجعل تجربتك أسهل وأسرع
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "1rem",
            }}
            className="features-grid"
          >
            {features.map((feature) => (
              <div
                key={feature.title}
                className="feature-card group"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "1rem",
                  background: "#fff",
                  borderRadius: 16,
                  border: "1.5px solid #e2eaf5",
                  padding: "1.5rem",
                  textAlign: "center",
                  transition: "all 0.2s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#22d3ee";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#e2eaf5";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                {/* Icon Circle */}
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: feature.bgColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: feature.iconColor,
                    transition: "transform 0.2s ease",
                  }}
                >
                  {feature.svgIcon}
                </div>

                {/* Content */}
                <div style={{ minWidth: 0 }}>
                  <h3
                    style={{
                      fontFamily: "Cairo, sans-serif",
                      fontWeight: 700,
                      fontSize: 18,
                      color: "#1e293b",
                      marginBottom: "0.375rem",
                      lineHeight: 1.4,
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "Tajawal, sans-serif",
                      fontSize: 16,
                      color: "#64748b",
                      margin: 0,
                      lineHeight: 1.5,
                    }}
                  >
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Responsive Styles */}
        <style>{`
          @media (max-width: 1024px) {
            .features-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          @media (max-width: 640px) {
            .features-grid {
              grid-template-columns: 1fr  !important;
              gap: 0.75rem !important;
            }
            .feature-card {
              padding: 1.25rem 1rem !important;
            }
          }
        `}</style>
      </section>
    </>
  );
}