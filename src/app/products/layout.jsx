import { Poppins } from "next/font/google";
import "/src/app/globals.css";
import ProductHeader from "../(Components)/Layout/ProductHeader";

// NOTE: Font imports should ideally be centralized in the ROOT /app/layout.jsx.
// Keeping it here, but removing the <html>/<body> tags to fix the error.

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function ProductLayout({ children }) {
  return (
    // FIX: Remove <html> and <body> tags. 
    // Nested layouts must only return content to be placed inside the parent <body>.
    // The font variable is now assumed to be applied in the Root Layout.
    <>
      <ProductHeader />
      {/* Applying the background class to the main content wrapper now, since 
          the <body> tag styling is usually handled by the Root Layout. 
          If you need a specific background for this segment, wrap it in a div.
      */}
      <main className="min-h-screen antialiased bg-gray-50">
        {children}
      </main>
    </>
  );
}