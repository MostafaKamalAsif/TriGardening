import { Poppins } from "next/font/google";
import "/src/app/globals.css";
import ProductHeader from "./Components/ProductHeader";




const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function ProductLayout({ children }) {
  return (
 
    <>
      <ProductHeader />
    
      <main className="min-h-screen antialiased bg-gray-50">
        {children}
      </main>
    </>
  );
}