export default function Footer() {
  return (
    <footer
      style={{
        background: "#f9fcff",
        borderTop: "1px solid #e2eaf5",
        padding: "2rem 1.5rem",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        {/* Logo */}
        <div className="logo-container" style={{ marginBottom: "1rem" ,  display: "flex", justifyContent: "space-between", alignItems: "center",
}}>
      
          <img src="/crystal-logo-CyiVii2I.webp" alt="Crystal Logo" style={{ width: 120, height: "auto" }} />
          <p
          style={{
            fontFamily: "Tajawal, sans-serif",
            fontSize: 14,
            color: "#6b7a99",
          }}
        >
          © 2026 كريستال. جميع الحقوق محفوظة.
        </p>
        </div>

        

        {/* Hidden SEO text */}
        <div
          style={{
            marginTop: "1.5rem",
            padding: "1rem",
            background: "#f8fbff",
            borderRadius: 12,
          }}
        >
          <h2
            style={{
              fontFamily: "Cairo, sans-serif",
              fontWeight: 800,
              fontSize: 13,
              color: "#1a2e5a",
              marginBottom: "0.5rem",
            }}
          >
            كريستال - اسرع منصة تمويل وتقسيط في السعودية
          </h2>
          <p
            style={{
              fontFamily: "Tajawal, sans-serif",
              fontSize: 12,
              color: "#9aa3b5",
              lineHeight: 1.8,
            }}
          >
            سلفة سريعة | تمويل شخصي | قرض فوري | تقسيط بدون فوائد | تمويل بدون كفيل | سلفة 200 ريال |
            سلفة 1000 ريال | سلفة 5000 ريال | سلفة 10000 ريال | سلفة 30000 ريال | تقسيط تابي | تقسيط تمارا |
            سلفة بدون تحويل راتب | تمويل المقيمين | قرض شخصي السعودية | تمويل سريع اون لاين | سلفة فورية |
            تقسيط 4 دفعات | تمويل بدون ضامن | سلفة الراتب | قرض بدون فوائد | تمويل إسلامي | سلفة موظفين |
            تمويل متقاعدين | سلفة طوارئ | كريستال للتمويل
          </p>
        </div>


      </div>
 {/* Responsive Styles */}
        <style>{`

          @media (max-width: 640px) {
            .logo-container { display: flex; flex-direction: column; align-items: center; }
           
          }
        `}</style>

    </footer>
  );
}
