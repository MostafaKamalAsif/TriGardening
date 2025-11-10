import { Poppins } from "next/font/google";
import "/src/app/globals.css";
import Container from "../(Components)/Container";
import BlogHeader from "./(Components)/BlogHeader";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function BlogLayout({ children }) {
  return (
    <main className="min-h-screen antialiased bg-[#F3F3F3] pt-[97px] pb-[120px] overflow-x-hidden">
      <Container className="overflow-x-hidden">
        <div className="flex items-start gap-x-8 lg:gap-x-[87px] w-full">
         
          <div className="flex-1 min-w-0 w-full lg:w-auto">{children}</div>
          
         
          <aside className="hidden lg:block w-full lg:w-[409px] flex-shrink-0">
            <BlogHeader />
          </aside>
        </div>
      </Container>
    </main>
  );
}