import React from "react";
import Image from "next/image";
import Container from "../../(Components)/Container";
import { blogPosts } from "../../data/blogData";
import { notFound } from "next/navigation";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import Flex from "@/app/(Components)/Flex";
import Button from "@/app/(Components)/Button";
import Commenter from '/public/Comment.svg'
import { CheckCircle } from "lucide-react";
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

const BlogPostPage = async ({ params }) => {
  
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
              
  


<div
        className="text-[#000000] text-[22px] leading-[42px]"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />

            </div>
         

         
        </div>

        <div className=" drop-shadow-[0_4px_7.7px_rgba(0,0,0,0.11)] bg-[#FFFFFF] rounded-[20px] mt-[65px] pt-[71px] pb-[157px] px-14">
               <h3 className="text-[24px] font-semibold text-[#000000]">Comments</h3>
               <div className="w-[1076px] h-[152px] rounded-[9px] border border-[#B7B7B7] pr-[13px] pb-[13px] mt-2">
                <input type="text"  placeholder="Write your comment" className="placeholder:text-[#B7B7B7] outline-none overflow-x-hidden overflow-y-scroll text-[18px] text-black  pl-[21px] w-full h-[70%]"/>
                <Button className={'px-11.5 py-2 bg-[#2D5016] w-[158px] ms-auto rounded-[10px] '}>Submit</Button>
               </div>


               <div className="flex items-start gap-x-3 pt-[63px]">
        {/* Profile image */}
        <Image
          src={Commenter}
          alt="User"
          width={48}
          height={48}
          className="rounded-full object-cover"
        />

        {/* User info */}
        <div>
          <h3 className="text-[#1E1E1E] font-semibold text-[16px] leading-[22px]">
            Ismita Chowdhury
          </h3>

          <div className="flex items-center gap-x-5.5 text-[14px] text-[#7A9B57] mt-2.5">
            <span className="flex items-center gap-1 text-[#2D5016] font-medium w-[169px] bg-[#E8F5E9] rounded-[16.5px] ">
              <CheckCircle size={14} strokeWidth={2} className="  "/> Verified Purchase
            </span>
            
            
            <span>4 Days ago (12 September, 2025)</span>
          </div>
        </div>
      </div>

      {/* Comment box */}
      <div className="mt-4 bg-[#FFFFFF] border border-[#B7B7B7] w-[1076px] rounded-lg  pt-6.5 pl-7.5  pb-[11px]">
        <p className="text-[#2D5016] text-[18px] ">
          এই গাছটা একেবারেই দারুণ! একদম ভালো অবস্থায় পেয়েছি এবং আমার
          বাগানে দারুণভাবে বেড়ে উঠছে। এর মান আমার প্রত্যাশার থেকেও ভালো এবং
          ইতিমধ্যেই নতুন কুঁড়ি গজাচ্ছে। নতুন কিংবা অভিজ্ঞ উভয় ধরনের মালীদের
          জন্যই আমি এটিকে অত্যন্ত সুপারিশ করব।
        </p>
      </div>

      {/* Feedback buttons */}
      <div className="flex items-center gap-5 mt-3 text-[14px] text-[#4B4B4B]">
        <button className="flex items-center gap-1 hover:text-[#15803D] transition">
          👍 Helpful (12)
        </button>
        <button className="flex items-center gap-1 hover:text-[#DC2626] transition">
          👎 Not Helpful (0)
        </button>
      </div>
        </div>



      </Container>
    </div>
  );
};

export default BlogPostPage;