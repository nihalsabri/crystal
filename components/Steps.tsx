
// // "use client";

// // const steps = [
// //   {
// //     num: "1",
// //     title: "تواصل واتساب",
// //     desc: "ابدأ المحادثة فوراً",
// //     iconColor: "#86efac", // green-300
// //     iconBg: "#dcfce7", // green-50
// //     svgIcon: (
// //       <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// //         <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
// //       </svg>
// //     ),
// //   },
// //   {
// //     num: "2",
// //     title: "حدد المبلغ",
// //     desc: "من 200 إلى 30,000 ر.س",
// //     iconColor: "#93c5fd", // blue-300
// //     iconBg: "#eff6ff", // blue-50
// //     svgIcon: (
// //       <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// //         <circle cx="12" cy="12" r="10"></circle>
// //         <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
// //         <path d="M12 18V6"></path>
// //       </svg>
// //     ),
// //   },
// //   {
// //     num: "3",
// //     title: "موافقة فورية",
// //     desc: "موافقة خلال دقائق",
// //     iconColor: "#fde047", // yellow-300
// //     iconBg: "#fefce8", // yellow-50
// //     svgIcon: (
// //       <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ca8a04" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// //         <circle cx="12" cy="12" r="10"></circle>
// //         <polyline points="12 6 12 12 16 14"></polyline>
// //       </svg>
// //     ),
// //   },
// //   {
// //     num: "4",
// //     title: "استلم فوراً",
// //     desc: "تحويل سريع لحسابك",
// //     iconColor: "#d8b4fe", // purple-300
// //     iconBg: "#faf5ff", // purple-50
// //     svgIcon: (
// //       <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// //         <rect x="2" y="6" width="20" height="12" rx="2"></rect>
// //         <circle cx="12" cy="12" r="2"></circle>
// //         <path d="M6 12h.01M18 12h.01"></path>
// //       </svg>
// //     ),
// //   },
// // ];

// // export default function Steps() {
// //   return (
// //     <section
// //       id="how"
// //       style={{
// //         padding: "4rem 1.5rem",
// //         background: "#f8fafc",
// //       }}
// //     >
// //       <div style={{ maxWidth: 1200, margin: "0 auto" }}>
// //         {/* Badge */}
// //         <div style={{ textAlign: "center", marginBottom: "0.75rem" }}>
// //           <span
// //             style={{
// //               display: "inline-block",
// //               fontFamily: "Tajawal, sans-serif",
// //               fontSize: 14,
// //               color: "#1e293b",
// //               fontWeight: 600,
// //               background: "#e0f2fe",
// //               padding: "6px 16px",
// //               borderRadius: 20,
// //             }}
// //           >
// //             بثلاث خطوات فقط
// //           </span>
// //         </div>

// //         {/* Title */}
// //         <h2
// //           style={{
// //             textAlign: "center",
// //             fontFamily: "Cairo, sans-serif",
// //             fontWeight: 800,
// //             fontSize: "clamp(1.4rem, 3vw, 2rem)",
// //             color: "#0f172a",
// //             marginBottom: "3rem",
// //           }}
// //         >
// //           خطوات الطلب
// //         </h2>

// //         {/* Steps Timeline */}
// //         <div
// //           style={{
// //             display: "flex",
// //             justifyContent: "space-between",
// //             alignItems: "flex-start",
// //             position: "relative",
// //             marginBottom: "3rem",
// //             direction: "rtl",
// //           }}
// //         >
// //           {/* Connecting Line */}
// //           <div
// //             style={{
// //               position: "absolute",
// //               top: 32,
// //               left: "10%",
// //               right: "10%",
// //               height: 2,
// //               background: "repeating-linear-gradient(90deg, #cbd5e1 0, #cbd5e1 6px, transparent 6px, transparent 12px)",
// //               zIndex: 0,
// //             }}
// //           />

// //           {/* Steps */}
// //           {steps.map((step, index) => (
// //             <div
// //               key={step.num}
// //               style={{
// //                 display: "flex",
// //                 flexDirection: "column",
// //                 alignItems: "center",
// //                 textAlign: "center",
// //                 position: "relative",
// //                 zIndex: 1,
// //                 flex: 1,
// //               }}
// //             >
// //               {/* Icon Circle */}
// //               <div
// //                 style={{
// //                   width: 64,
// //                   height: 64,
// //                   borderRadius: "50%",
// //                   background: step.iconBg,
// //                   display: "flex",
// //                   alignItems: "center",
// //                   justifyContent: "center",
// //                   marginBottom: "1rem",
// //                   position: "relative",
// //                   boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
// //                 }}
// //               >
// //                 {/* Number Badge */}
// //                 <div
// //                   style={{
// //                     position: "absolute",
// //                     top: -4,
// //                     right: -4,
// //                     width: 24,
// //                     height: 24,
// //                     borderRadius: "50%",
// //                     background: "#fff",
// //                     border: "2px solid " + step.iconBg,
// //                     display: "flex",
// //                     alignItems: "center",
// //                     justifyContent: "center",
// //                     fontFamily: "Cairo, sans-serif",
// //                     fontWeight: 700,
// //                     fontSize: 12,
// //                     color: "#475569",
// //                     boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
// //                   }}
// //                 >
// //                   {step.num}
// //                 </div>

// //                 {/* Icon */}
// //                 {step.svgIcon}
// //               </div>

// //               {/* Title */}
// //               <h3
// //                 style={{
// //                   fontFamily: "Cairo, sans-serif",
// //                   fontWeight: 700,
// //                   fontSize: 15,
// //                   color: "#0f172a",
// //                   marginBottom: "0.25rem",
// //                 }}
// //               >
// //                 {step.title}
// //               </h3>

// //               {/* Description */}
// //               <p
// //                 style={{
// //                   fontFamily: "Tajawal, sans-serif",
// //                   fontSize: 13,
// //                   color: "#64748b",
// //                   margin: 0,
// //                 }}
// //               >
// //                 {step.desc}
// //               </p>
// //             </div>
// //           ))}
// //         </div>

// //         {/* CTA Card */}
// //         <div
// //           style={{
// //             background: "#fff",
// //             borderRadius: 24,
// //             padding: "2.5rem 2rem",
// //             textAlign: "center",
// //             boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
// //             border: "1px solid #e2e8f0",
// //             maxWidth: 700,
// //             margin: "0 auto",
// //           }}
// //         >
// //           <h3
// //             style={{
// //               fontFamily: "Cairo, sans-serif",
// //               fontWeight: 800,
// //               fontSize: "clamp(1.3rem, 3vw, 1.75rem)",
// //               color: "#0f172a",
// //               marginBottom: "0.5rem",
// //             }}
// //           >
// //             جاهز لطلب سلفتك؟
// //           </h3>
// //           <p
// //             style={{
// //               fontFamily: "Tajawal, sans-serif",
// //               fontSize: 14,
// //               color: "#64748b",
// //               marginBottom: "1.5rem",
// //             }}
// //           >
// //             تواصل معنا الان واستلم المبلغ خلال دقائق
// //           </p>

// //           {/* WhatsApp Button */}
// //           <a
// //             href="https://wa.me/966530162235"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             style={{
// //               display: "inline-flex",
// //               alignItems: "center",
// //               gap: 8,
// //               background: "#16a34a",
// //               color: "#fff",
// //               padding: "12px 28px",
// //               borderRadius: 50,
// //               fontFamily: "Tajawal, sans-serif",
// //               fontWeight: 700,
// //               fontSize: 15,
// //               textDecoration: "none",
// //               boxShadow: "0 4px 12px rgba(22, 163, 74, 0.3)",
// //               transition: "all 0.2s ease",
// //             }}
// //             onMouseEnter={(e) => {
// //               (e.currentTarget as HTMLElement).style.background = "#15803d";
// //               (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
// //             }}
// //             onMouseLeave={(e) => {
// //               (e.currentTarget as HTMLElement).style.background = "#16a34a";
// //               (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
// //             }}
// //           >
// //             <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
// //               <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
// //             </svg>
// //             تواصل عبر الواتساب
// //           </a>
// //         </div>
// //       </div>

// //       {/* Responsive Styles */}
// //       <style>{`
// //         @media (max-width: 768px) {
// //           .steps-timeline {
// //             flex-direction: column !important;
// //             gap: 2rem !important;
// //           }
// //           .connecting-line {
// //             display: none !important;
// //           }
// //         }
// //       `}</style>
// //     </section>
// //   );
// // }
// "use client";

// const steps = [
//   {
//     num: "1",
//     title: "تواصل واتساب",
//     desc: "ابدأ المحادثة فوراً",
//     bgColor: "#dcfce7", // green-100
//     borderColor: "#86efac", // green-300
//     iconColor: "#16a34a", // green-600
//     svgIcon: (
//       <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
//       </svg>
//     ),
//   },
//   {
//     num: "2",
//     title: "حدد المبلغ",
//     desc: "من 200 إلى 30,000 ر.س",
//     bgColor: "#dbeafe", // blue-100
//     borderColor: "#93c5fd", // blue-300
//     iconColor: "#2563eb", // blue-600
//     svgIcon: (
//       <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <line x1="12" y1="1" x2="12" y2="23"></line>
//         <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
//       </svg>
//     ),
//   },
//   {
//     num: "3",
//     title: "موافقة فورية",
//     desc: "موافقة خلال دقائق",
//     bgColor: "#fef3c7", // amber-100
//     borderColor: "#fcd34d", // amber-300
//     iconColor: "#d97706", // amber-600
//     svgIcon: (
//       <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
//         <polyline points="22 4 12 14.01 9 11.01"></polyline>
//       </svg>
//     ),
//   },
//   {
//     num: "4",
//     title: "استلم فوراً",
//     desc: "تحويل سريع لحسابك",
//     bgColor: "#f3e8ff", // purple-100
//     borderColor: "#d8b4fe", // purple-300
//     iconColor: "#9333ea", // purple-600
//     svgIcon: (
//       <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
//         <line x1="1" y1="10" x2="23" y2="10"></line>
//       </svg>
//     ),
//   },
// ];

// export default function Steps() {
//   return (
//     <section
//       id="how"
//       style={{
//         padding: "4rem 1.5rem",
//         background: "#f8fafc",
//       }}
//     >
//       <div style={{ maxWidth: 1200, margin: "0 auto" }}>
//         {/* Badge */}
//         <div style={{ textAlign: "center", marginBottom: "0.75rem" }}>
//           <span
//             style={{
//               display: "inline-block",
//               fontFamily: "Tajawal, sans-serif",
//               fontSize: 14,
//               color: "#1e293b",
//               fontWeight: 600,
//               background: "#e0f2fe",
//               padding: "6px 16px",
//               borderRadius: 20,
//             }}
//           >
//             بثلاث خطوات فقط
//           </span>
//         </div>

//         {/* Title */}
//         <h2
//           style={{
//             textAlign: "center",
//             fontFamily: "Cairo, sans-serif",
//             fontWeight: 800,
//             fontSize: "clamp(1.4rem, 3vw, 2rem)",
//             color: "#0f172a",
//             marginBottom: "3rem",
//           }}
//         >
//           خطوات الطلب
//         </h2>

//         {/* Steps Timeline */}
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "flex-start",
//             position: "relative",
//             marginBottom: "3rem",
//             direction: "rtl",
//           }}
//           className="steps-timeline"
//         >
//           {/* Connecting Line - Dashed */}
//           <div
//             className="connecting-line"
//             style={{
//               position: "absolute",
//               top: "40px",
//               left: "8%",
//               right: "8%",
//               height: 2,
//               background: "transparent",
//               borderTop: "2px dashed #cbd5e1",
//               zIndex: 0,
//             }}
//           />

//           {/* Steps */}
//           {steps.map((step, index) => (
//             <div
//               key={step.num}
//               style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 textAlign: "center",
//                 position: "relative",
//                 zIndex: 1,
//                 flex: 1,
//               }}
//             >
//               {/* Icon Circle */}
//               <div
//                 style={{
//                   width: 80,
//                   height: 80,
//                   borderRadius: "50%",
//                   background: step.bgColor,
//                   border: "4px solid #ffffff",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   marginBottom: "1rem",
//                   position: "relative",
//                   boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
//                   color: step.iconColor,
//                 }}
//               >
//                 {/* Number Badge */}
//                 <div
//                   style={{
//                     position: "absolute",
//                     top: 2,
//                     right: 2,
//                     width: 24,
//                     height: 24,
//                     borderRadius: "50%",
//                     background: "#fff",
//                     border: `2px solid ${step.borderColor}`,
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     fontFamily: "Cairo, sans-serif",
//                     fontWeight: 700,
//                     fontSize: 12,
//                     color: step.iconColor,
//                     boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
//                   }}
//                 >
//                   {step.num}
//                 </div>

//                 {/* Icon */}
//                 {step.svgIcon}
//               </div>

//               {/* Title */}
//               <h3
//                 style={{
//                   fontFamily: "Cairo, sans-serif",
//                   fontWeight: 700,
//                   fontSize: 15,
//                   color: "#0f172a",
//                   marginBottom: "0.25rem",
//                 }}
//               >
//                 {step.title}
//               </h3>

//               {/* Description */}
//               <p
//                 style={{
//                   fontFamily: "Tajawal, sans-serif",
//                   fontSize: 13,
//                   color: "#64748b",
//                   margin: 0,
//                 }}
//               >
//                 {step.desc}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* CTA Card */}
//         <div
//           style={{
//             background: "#fff",
//             borderRadius: 24,
//             padding: "2.5rem 2rem",
//             textAlign: "center",
//             boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
//             border: "1px solid #e2e8f0",
//             maxWidth: 700,
//             margin: "0 auto",
//           }}
//         >
//           <h3
//             style={{
//               fontFamily: "Cairo, sans-serif",
//               fontWeight: 800,
//               fontSize: "clamp(1.3rem, 3vw, 1.75rem)",
//               color: "#0f172a",
//               marginBottom: "0.5rem",
//             }}
//           >
//             جاهز لطلب سلفتك؟
//           </h3>
//           <p
//             style={{
//               fontFamily: "Tajawal, sans-serif",
//               fontSize: 14,
//               color: "#64748b",
//               marginBottom: "1.5rem",
//             }}
//           >
//             تواصل معنا الآن واستلم المبلغ خلال دقائق
//           </p>

//           {/* WhatsApp Button */}
//           <a
//             href="https://wa.me/966530162235"
//             target="_blank"
//             rel="noopener noreferrer"
//             style={{
//               display: "inline-flex",
//               alignItems: "center",
//               gap: 8,
//               background: "#16a34a",
//               color: "#fff",
//               padding: "12px 28px",
//               borderRadius: 50,
//               fontFamily: "Tajawal, sans-serif",
//               fontWeight: 700,
//               fontSize: 15,
//               textDecoration: "none",
//               boxShadow: "0 4px 12px rgba(22, 163, 74, 0.3)",
//               transition: "all 0.2s ease",
//             }}
//             onMouseEnter={(e) => {
//               (e.currentTarget as HTMLElement).style.background = "#15803d";
//               (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
//             }}
//             onMouseLeave={(e) => {
//               (e.currentTarget as HTMLElement).style.background = "#16a34a";
//               (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
//             }}
//           >
//             <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
//               <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
//             </svg>
//             تواصل عبر الواتساب
//           </a>
//         </div>
//       </div>

//       {/* Responsive Styles */}
//       <style>{`
//         @media (max-width: 768px) {
//           .steps-timeline {
//             flex-direction: column !important;
//             gap: 2.5rem !important;
//           }
//           .connecting-line {
//             display: none !important;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }
"use client";

const steps = [
  {
    num: "1",
    title: "تواصل واتساب",
    desc: "ابدأ المحادثة فوراً",
    bgColor: "#dcfce7", // emerald-100
    ringColor: "#86efac", // emerald-300
    iconColor: "#059669", // emerald-600
    svgIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
        <path d="M7 11h10"></path>
        <path d="M7 15h6"></path>
        <path d="M7 7h8"></path>
      </svg>
    ),
  },
  {
    num: "2",
    title: "حدد المبلغ",
    desc: "من 200 إلى 30,000 ر.س",
    bgColor: "#dbeafe", // sky-100
    ringColor: "#7dd3fc", // sky-300
    iconColor: "#0284c7", // sky-600
    svgIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
        <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
        <path d="M12 18V6"></path>
      </svg>
    ),
  },
  {
    num: "3",
    title: "موافقة فورية",
    desc: "موافقة خلال دقائق",
    bgColor: "#fef3c7", // amber-100
    ringColor: "#fcd34d", // amber-300
    iconColor: "#d97706", // amber-600
    svgIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="m9 12 2 2 4-4"></path>
      </svg>
    ),
  },
  {
    num: "4",
    title: "استلم فوراً",
    desc: "تحويل سريع لحسابك",
    bgColor: "#f3e8ff", // violet-100
    ringColor: "#d8b4fe", // violet-300
    iconColor: "#9333ea", // violet-600
    svgIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="12" x="2" y="6" rx="2"></rect>
        <circle cx="12" cy="12" r="2"></circle>
        <path d="M6 12h.01M18 12h.01"></path>
      </svg>
    ),
  },
];

export default function Steps() {
  return (
    <section
      id="steps"
      style={{
        padding: "2rem 1.5rem",
        background: "#f8fafc",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Badge */}
        <div style={{ textAlign: "center", marginBottom: "0.75rem" }}>
          <span
            style={{
              display: "inline-block",
              fontFamily: "Tajawal, sans-serif",
              fontSize: 15,
              fontWeight: 500,
              color: "#1e293b",
              background: "#ecfeff",
              border: "1px solid #a5f3fc",
              padding: "6px 16px",
              borderRadius: 9999,
            }}
          >
            بثلاث خطوات فقط
          </span>
        </div>

        {/* Title */}
        <h2
          style={{
            textAlign: "center",
            fontFamily: "Cairo, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            color: "#0f172a",
            marginBottom: "3rem",
          }}
        >
          خطوات الطلب
        </h2>

        {/* Steps Timeline - Desktop */}
        <div
          style={{
            display: "none",
          }}
          className="md:block"
        >
          <div style={{ position: "relative" }}>
            {/* Connecting Line - Dashed */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                top: 40,
                right: "14%",
                left: "14%",
                borderTop: "2px dashed",
                borderColor: "rgba(103, 232, 249, 0.6)", // cyan-300/60
                zIndex: 0,
              }}
            />

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "1.5rem",
                position: "relative",
              }}
            >
              {steps.map((step) => (
                <div
                  key={step.num}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    padding: "0.5rem",
                  }}
                >
                  {/* Icon Circle */}
                  <div
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: "50%",
                      background: step.bgColor,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      zIndex: 10,
                      boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                      color: step.iconColor,
                      // White ring
                      outline: "4px solid #ffffff",
                      outlineOffset: 0,
                    }}
                  >
                    {/* Number Badge */}
                    <div
                      style={{
                        position: "absolute",
                        top: -4,
                        right: -4,
                        width: 24,
                        height: 24,
                        borderRadius: "50%",
                        background: "#fff",
                        border: `2px solid ${step.ringColor}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "Cairo, sans-serif",
                        fontWeight: 700,
                        fontSize: 11,
                        color: "#1e293b",
                      }}
                    >
                      {step.num}
                    </div>

                    {/* Icon */}
                    {step.svgIcon}
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: "Cairo, sans-serif",
                      fontWeight: 700,
                      fontSize: 18,
                      color: "#1e293b",
                      marginTop: "1.25rem",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontFamily: "Tajawal, sans-serif",
                      fontSize: 14,
                      color: "#64748b",
                      margin: 0,
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div
          style={{
            display: "block",
          }}
          className="md:hidden"
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {steps.map((step, index) => (
              <div
                key={step.num}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "0.5rem",
                  position: "relative",
                }}
              >
                {/* Icon Circle */}
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    background: step.bgColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    flexShrink: 0,
                    boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                    color: step.iconColor,
                    outline: "4px solid #ffffff",
                  }}
                >
                  {/* Number Badge */}
                  <div
                    style={{
                      position: "absolute",
                      top: -4,
                      right: -4,
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      background: "#fff",
                      border: `2px solid ${step.ringColor}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "Cairo, sans-serif",
                      fontWeight: 700,
                      fontSize: 11,
                      color: "#1e293b",
                    }}
                  >
                    {step.num}
                  </div>

                  {/* Icon */}
                  {step.svgIcon}
                </div>

                {/* Text */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3
                    style={{
                      fontFamily: "Cairo, sans-serif",
                      fontWeight: 700,
                      fontSize: 18,
                      color: "#1e293b",
                      margin: 0,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "Tajawal, sans-serif",
                      fontSize: 16,
                      color: "#64748b",
                      margin: "0.25rem 0 0 0",
                    }}
                  >
                    {step.desc}
                  </p>
                </div>

                {/* Chevron for non-last items */}
                {index < steps.length - 1 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#22d3ee"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      position: "absolute",
                      bottom: -20,
                      right: 28,
                    }}
                  >
                    <path d="m15 18-6-6 6-6"></path>
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style>{`
        @media (min-width: 768px) {
          .md\\:block {
            display: block !important;
          }
          .md\\:hidden {
            display: none !important;
          }
        }
        @media (max-width: 767px) {
          .md\\:block {
            display: none !important;
          }
          .md\\:hidden {
            display: block !important;
          }
        }
      `}</style>

           {/* CTA Card */}
              <div
          style={{
            background: "#fff",
            borderRadius: 24,
            padding: "2rem 2rem",
            marginTop: "3rem",
            textAlign: "center",
            boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
            border: "1px solid #e2e8f0",
            maxWidth: 700,
            margin: "0 auto",
          }}
        >
          <h3
            style={{
              fontFamily: "Cairo, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.3rem, 3vw, 1.75rem)",
              color: "#0f172a",
              marginBottom: "0.5rem",
            }}
          >
            جاهز لطلب سلفتك؟
          </h3>
          <p
            style={{
              fontFamily: "Tajawal, sans-serif",
              fontSize: 14,
              color: "#64748b",
              marginBottom: "1.5rem",
            }}
          >
            تواصل معنا الآن واستلم المبلغ خلال دقائق
          </p>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/966530162235"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#16a34a",
              color: "#fff",
              padding: "12px 28px",
              borderRadius: 50,
              fontFamily: "Tajawal, sans-serif",
              fontWeight: 700,
              fontSize: 15,
              textDecoration: "none",
              boxShadow: "0 4px 12px rgba(22, 163, 74, 0.3)",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#15803d";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#16a34a";
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
  );
}