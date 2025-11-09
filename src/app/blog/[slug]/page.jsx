import React from "react";
import Image from "next/image";
import Container from "../../(Components)/Container";
import { blogPosts } from "../../data/blogData";
import { notFound } from "next/navigation";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import Flex from "@/app/(Components)/Flex";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

const BlogPostPage = async ({ params }) => {
  // Await params in Next.js 15+
  const { slug } = await params;
  
  const blog = blogPosts.find((post) => post.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="bg-[#F3F3F3] w-[1191px] ">
      <Container>
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-[#42C847] hover:text-[#2D5016] transition-colors mb-8 text-lg font-medium"
        >
          <IoArrowBack className="w-6 h-6" />
          Back to Blog
        </Link>

        <div className=" mx-auto bg-white rounded-[42px]  drop-shadow-[0_4px_7.7px_rgba(0,0,0,0.11)]  pb-[175px] ">
          {/* Blog Post Header */}
      
           <Image
              src={blog.image}
              alt={blog.title}
              width={1200}
              height={600}
              quality={100}
              className="  object-cover "
            />

            <div className="pt-9 pl-14 pr-12">
              {/* Category Badge */}
              
              <Flex className={'justify-between pb-[60px]'}>
                <p className="  text-[#42C847]   text-[22px] font-medium ">
                {blog.category}
              </p>
<div className="flex  gap-x-[61px] text-[#898989] text-lg   ">
   <p>{blog.readTime}</p>
                <p>{blog.date}</p>
              </div>
            
              </Flex>
              
              {/* Title */}
              <h2 className="text-[32px] font-bold text-[#000000] pb-[46px]">
                {blog.title}
              </h2>

              {/* Meta Info */}
              

              {/* Blog Content */}
              
              <p
  className="text-[#000000] text-[22px] leading-[42px]"
  dangerouslySetInnerHTML={{ __html: blog.content }}
/>
            </div>
         

         
        </div>

        <div className=" drop-shadow-[0_4px_7.7px_rgba(0,0,0,0.11)] bg-[#FFFFFF] rounded-[20px] mt-[65px] pt-[71px] pb-[157px] px-14">

        </div>
      </Container>
    </div>
  );
};

export default BlogPostPage;