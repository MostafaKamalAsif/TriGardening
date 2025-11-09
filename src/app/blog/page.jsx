import React from "react";
import Container from "../(Components)/Container";
import Image from "next/image";
import BlogBanner from "/public/BlogPost.svg";
import Button from "../(Components)/Button";
import BlogCard from "./(Components)/BlogCard";
import Flex from "../(Components)/Flex";
import { blogPosts } from "../data/blogData";

const Blog = () => {
  return (
    <>
      <div className="pb-[527px] bg-[#F3F3F3]">
        <Container>
          <div className="text-[#404040] w-[1191px]">
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
            <Flex className={"flex-wrap justify-between gap-y-[31px]"}>
              {blogPosts.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </Flex>
            <Button
              className={
                "text-[#FFFFFF] text-[22px] font-semibold bg-[#7A9B57] rounded-[10px] px-12 py-4.5 w-fit mx-auto mt-[91px] cursor-pointer"
              }
            >
              Load More Articles
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Blog;