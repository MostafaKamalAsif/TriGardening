import { Poppins } from "next/font/google";
import "/src/app/globals.css";

import Container from "../(Components)/Container";
import Flex from "../(Components)/Flex";
import BlogHeader from "./(Components)/BlogHeader";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function BlogLayout({ children }) {
  return (
    <main className="min-h-screen antialiased bg-[#F3F3F3] pt-[97px] pb-[120px]">
      <Container>
        <Flex className="items-start gap-x-[87px]">
          <div className="flex-1 ">{children}</div>
          <div className="w-[409px] shrink-0">
            <BlogHeader />
          </div>
        </Flex>
      </Container>
    </main>
  );
}
