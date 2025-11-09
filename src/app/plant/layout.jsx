import { Poppins } from "next/font/google";
import "/src/app/globals.css";
import Flex from "../(Components)/Flex";
import Container from "../(Components)/Container";
import SideBar from "./(Components)/SideBar";





const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function BlogLayout({ children }) {
  return (
    <main className="min-h-screen antialiased bg-[#F3F3F3] ">
     
        <Flex className="items-start ">
             <div className="w-[373px] shrink-0">
            <SideBar/>
          </div>
          <div className="flex-1 ">{children}</div>
         
        </Flex>
      
    </main>
  );
}
