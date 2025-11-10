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
    <main className=" bg-[#F3F3F3]  overflow-x-hidden">
     
        <Flex className=" ">
            
            <SideBar/>
         
          {children}
         
        </Flex>
      
    </main>
  );
}
