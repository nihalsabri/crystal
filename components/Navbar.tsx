"use client";
import { usePathname } from "next/dist/client/components/navigation";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

 const [activeLink, setActiveLink] = useState("/");
const [isHovered, setIsHovered] = useState(false);
const pathname = usePathname();

  return (
    <nav
      style={{
        background: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(226,234,245,0.6)",
        position: "sticky",
        top: 0,
        zIndex: 100,
        width: "100%",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 72,
        }}
      >
 {/* Logo */}

        <a className="flex items-center gap-3 shrink-0 active" href="/" data-status="active" aria-current="page">
          <img alt="كريستال" width="107.2" height="44" className="h-8 w-auto object-contain sm:h-9 md:h-11" src="/crystal-logo-CyiVii2I.webp" />
        </a>
     



<div style={{ 
  display: "flex", 
  alignItems: "center", 
  gap: "2rem",
  fontFamily: "Tajawal, sans-serif"
}}>
  {[
    { label: "الرئيسية", href: "/" },
    { label: "المميزات", href: "/#features" },
    { label: "من نحن", href: "/about" },
    { label: "الحاسبة", href: "/calculator" },
    { label: "كيف أطلب؟", href: "/#how" },
  ].map((item) => {
    const isActive = pathname === item.href;
    
    return (
      <Link
        key={item.href}
        href={item.href}
        style={{
          fontSize: "15px",
          fontWeight: isActive ? "600" : "500",
          color: isActive ? "#1a2e5a" : "#6b7280",
          textDecoration: "none",
          transition: "color 0.2s",
          cursor: "pointer"
        }}
        onMouseEnter={(e) => {
          if (!isActive) {
            (e.target as HTMLElement).style.color = "#1a2e5a";
          }
        }}
        onMouseLeave={(e) => {
          if (!isActive) {
            (e.target as HTMLElement).style.color = "#6b7280";
          }
        }}
      >
        {item.label}
      </Link>
    );
  })}
</div>
 
{/* WhatsApp Button */}
<a
      href="https://wa.me/966530162235"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        borderRadius: "9999px",
        padding: "10px 22px",
        fontSize: "14px",
        fontWeight: "500",
        color: "#ffffff",
        textDecoration: "none",
        fontFamily: "Tajawal, sans-serif",
        transition: "all 0.3s ease",
        background: isHovered 
          ? "linear-gradient(135deg, #0b267d, #071b61)" 
          : "linear-gradient(135deg, #0b267d, #071b61)",
        boxShadow: isHovered 
          ? "0 8px 20px rgba(11, 38, 125, 0.6)" 
          : "0 4px 15px rgba(11, 38, 125, 0.4)",
        // transform: isHovered ? "translateY(-3px)" : "translateY(0)",
      }}
    >
      <svg 
        width="16" 
        height="16" 
        viewBox="0 0 24 24" 
        fill="#ffffff" 
        style={{ flexShrink: 0 }}
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      تواصل واتساب
    </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-btn"
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#1a2e5a",
          }}
          aria-label="القائمة"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            background: "#fff",
            borderTop: "1px solid #e2eaf5",
            padding: "1rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
          className="mobile-menu"
        >
          {[
            { label: "الرئيسية", href: "/" },
            { label: "المميزات", href: "/#features" },
            { label: "من نحن", href: "/about" },
            { label: "الحاسبة", href: "/calculator" },
            { label: "كيف أطلب؟", href: "/#how" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "#1a2e5a",
                textDecoration: "none",
                fontFamily: "Tajawal, sans-serif",
                fontWeight: 600,
                fontSize: 16,
                padding: "0.5rem 0",
                borderBottom: "1px solid #f0f7ff",
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

