import React from "react";
import Image from "next/image";
import Container from "../../(Components)/Container";
import { blogPosts } from "../../data/blogData";
import { notFound } from "next/navigation";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";

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
    <div className="bg-[#F3F3F3] py-12">
      <Container>
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-[#42C847] hover:text-[#2D5016] transition-colors mb-8 text-lg font-medium"
        >
          <IoArrowBack className="w-6 h-6" />
          Back to Blog
        </Link>

        <div className="max-w-4xl mx-auto">
          {/* Blog Post Header */}
          <div className="bg-white rounded-[20px] drop-shadow-[0_4px_7.7px_rgba(0,0,0,0.11)] overflow-hidden">
            <Image
              src={blog.image}
              alt={blog.title}
              width={1200}
              height={600}
              quality={100}
              className="w-full h-[400px] object-cover"
            />

            <div className="p-12">
              {/* Category Badge */}
              <span className="inline-block px-6 py-2 bg-[#42C847] text-white rounded-full text-lg font-medium mb-6">
                {blog.category}
              </span>

              {/* Title */}
              <h1 className="text-[42px] font-bold text-[#000000] mb-6">
                {blog.title}
              </h1>

              {/* Meta Info */}
              <div className="flex items-center gap-8 text-[#898989] text-lg mb-8 pb-8 border-b border-gray-200">
                <span>{blog.date}</span>
                <span>•</span>
                <span>{blog.readTime}</span>
              </div>

              {/* Blog Content */}
              <div 
                className="prose prose-lg max-w-none text-[#404040] leading-relaxed"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </div>
          </div>

          {/* Related Posts Section (Optional) */}
          <div className="mt-16">
            <h2 className="text-[32px] font-bold text-[#000000] mb-8">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts
                .filter((post) => post.id !== blog.id && post.category === blog.category)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                    <div className="bg-white rounded-[20px] drop-shadow-[0_4px_7.7px_rgba(0,0,0,0.11)] overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        width={400}
                        height={200}
                        className="w-full h-[200px] object-cover"
                      />
                      <div className="p-6">
                        <h4 className="text-lg font-medium text-[#42C847] mb-2">
                          {relatedPost.category}
                        </h4>
                        <h3 className="text-xl font-medium text-[#000000] mb-3">
                          {relatedPost.title}
                        </h3>
                        <p className="text-[#898989] text-sm">{relatedPost.date}</p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlogPostPage;