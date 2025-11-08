import React from "react";
import Container from "../(Components)/Container";
import Flex from "../(Components)/Flex";
import { IoSearchSharp } from "react-icons/io5";
import Image from "next/image";
import BlogBanner from "/public/BlogPost.svg";
import BlogCard from "../(Components)/BlogCard";
import Blog_1 from "/public/FirstPost.svg";
import Blog_2 from "/public/Post_2.svg";
import Blog_3 from "/public/Post_3.svg";
import Blog_4 from "/public/Post_4.svg";
import Button from "../(Components)/Button";
import RecentPostsCard from "../(Components)/RecentPostsCard";
const Blog = () => {
  return (
    <>
      <div className="pt-[97px] pb-[527px] bg-[#F3F3F3]">
        <Container>
          <Flex className={"gap-x-[87px]"}>
            <div className="  text-[#404040] w-[1191px]">
              <h2 className="font-semibold text-[52px] text-center">
                The TriGardening Journal
              </h2>
              <p className="text-[32px] text-center pb-7">
                Your slogan goes here
              </p>
              <Image
                src={BlogBanner}
                alt="BlogBanner"
                className="w-full -ml-6"
              />
              <Flex className={"  flex-wrap justify-between  gap-y-[31px]"}>
                <BlogCard BlogImg={Blog_1} />
                <BlogCard BlogImg={Blog_2} />
                <BlogCard BlogImg={Blog_3} />
                <BlogCard BlogImg={Blog_4} />
              </Flex>
              <Button
                className={
                  "text-[#FFFFFF] text-[22px] font-semibold bg-[#7A9B57] rounded-[10px] px-12 py-4.5 w-fit mx-auto mt-[91px] cursor-pointer"
                }
              >
                Load More Articles
              </Button>
            </div>

            <div className="">
              <div className="bg-[#FFFFFF] drop-shadow-[0_4px_7.7px_rgba(0,0,0,0.11)] w-[409px] rounded-[20px] py-[27px] px-9 ">
                <h3 className="text-black text-[28px] font-medium pb-[27px]">
                  Search Blog
                </h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="pl-6.5 w-[336px] pt-[9px] pb-2 border  border-[#B7B7B7] rounded-[15px] placeholder:text-[22px] placeholder:text-[#B7B7B7]"
                  />
                  <IoSearchSharp className="absolute top-[50%] right-3 -translate-y-1/2 text-[#B7B7B7] w-[30px] h-[30px]" />
                </div>
              </div>

              {/* Blog Catogories  */}

              <div className="w-[409px] h-[398px] pt-9.5 pb-[49px] px-9 mt-12 bg-[#FFFFFF] rounded-[20px] drop-shadow-[0_4px_7.7px_rgba(0,0,0,0.11)]">
                <h3 className="text-black text-[28px] font-medium pb-[35px]">
                  Blog Categories
                </h3>
                <Flex className={"justify-between text-[22px] pb-4"}>
                  <p className=" text-[#404040]">Plant Care</p>
                  <h4 className="w-[34px] h-[34px] px-[7px] rounded-[10px] bg-[#F3F3F3]  text-black">
                    12
                  </h4>
                </Flex>

                <Flex className={"justify-between text-[22px] pb-4"}>
                  <p className=" text-[#404040]">Pest Control</p>
                  <h4 className="w-[34px] h-[34px] px-[7px] rounded-[10px] bg-[#F3F3F3]  text-black">
                    7
                  </h4>
                </Flex>

                <Flex className={"justify-between text-[22px] pb-4"}>
                  <p className=" text-[#404040]">DIY Gardening</p>
                  <h4 className="w-[34px] h-[34px] px-[7px] rounded-[10px] bg-[#F3F3F3]  text-black">
                    11
                  </h4>
                </Flex>

                <Flex className={"justify-between text-[22px] pb-4"}>
                  <p className=" text-[#404040]">Seasonal Tips</p>
                  <h4 className="w-[34px] h-[34px] px-[7px] rounded-[10px] bg-[#F3F3F3]  text-black">
                    20
                  </h4>
                </Flex>

                <Flex className={"justify-between text-[22px] "}>
                  <p className=" text-[#404040]">Sustainability</p>
                  <h4 className="w-[34px] h-[34px] px-[7px] rounded-[10px] bg-[#F3F3F3]  text-black">
                    4
                  </h4>
                </Flex>
              </div>

              {/* Recent Posts */}

              <div className=" bg-[#FFFFFF] w-[409px]  mb-[772px] rounded-[20px] drop-shadow-[0_4px_7.7px_rgba(0,0,0,0.11)] pt-[38px] pb-[54px] pl-9 pr-[21px] mt-[66px]">
                <h3 className="text-black text-[28px] font-medium pb-[21px]">
                  Recent Posts
                </h3>
                <div className="space-y-5">
                  <RecentPostsCard
                    Title={`Caring for sacculant abeginnerss guide`}
                    PostDate={"May 24, 2025"}
                  />
                  <RecentPostsCard
                    Title={`Growing perfect tomatoesfor this season`}
                    PostDate={"May 23, 2025"}
                  />
                  <RecentPostsCard
                    Title={`Compost Fertilizer preparing procedures`}
                    PostDate={"May 21, 2025"}
                  />
                  <RecentPostsCard
                    Title={`Natural Pest Control Methods That Actually....`}
                    PostDate={"May 21, 2025"}
                  />
                </div>
              </div>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Blog;
