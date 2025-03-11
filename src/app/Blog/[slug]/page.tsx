import React from "react";
import Image from "next/image";
import fs from "fs/promises";
import path from "path";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Share2, BookmarkPlus, ChevronRight } from "lucide-react";

export interface Specification {
    title: string;
    value: string;
  }
  
export interface Blog {
    slug: string;
    name: string;
    bgImage: string;
    description: string;
    image: string;
    overview: string;
    specifications: Specification[];
    images: string[];
    totalUsers: number;
  }

async function getBlogData(slug: string) {
  try {
    const filePath = path.join(process.cwd(), "public", "blogs.json");
    const jsonData = await fs.readFile(filePath, "utf-8"); 
    const blogs = JSON.parse(jsonData); 
    console.log('blogs', blogs)
    return blogs.find((blog: Blog) => blog.slug === slug) || null;
  } catch (error) {
    console.error("Error reading Blog.json:", error);
    return null;
  }
}

async function getRelatedPosts(currentSlug: string) {
  try {
    const filePath = path.join(process.cwd(), "public", "blogs.json");
    const jsonData = await fs.readFile(filePath, "utf-8"); 
    const blogs = JSON.parse(jsonData);
    
    // Filter out current blog and return 3 random blogs
    const otherBlogs = blogs.filter((blog: Blog) => blog.slug !== currentSlug);
    const shuffled = [...otherBlogs].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  } catch (error) {
    console.error("Error getting related posts:", error);
    return [];
  }
}

type tParams = Promise<{ slug: string }>;
export default async function BlogDetail({ params }: { params: tParams }) {
  const { slug } = await params;
  const blog = await getBlogData(slug);
  const relatedPosts = await getRelatedPosts(slug);
    console.log('blog', blog)
  if (!blog) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-red-500">Blog Not Found</h1>
      </main>
    );
  }

  const publishDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const wordCount = blog.overview?.split(/\s+/).length || 0;
  const readTime = Math.max(1, Math.ceil(wordCount / 200));

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <div className="relative w-full h-96">
        <Image
          src={blog.bgImage || "/api/placeholder/1200/800"}
          alt={blog.name}
          layout="fill"
          objectFit="cover"
          className="brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 flex items-end">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Link href="/blog" className="inline-flex items-center text-white/90 hover:text-white mb-4 transition-colors">
              <ArrowLeft size={16} className="mr-2" />
              Back to all articles
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl">
              {blog.name}
            </h1>
            <div className="flex items-center mt-6 text-white/80">
              <div className="flex items-center mr-6">
                <Calendar size={16} className="mr-2" />
                <span>{publishDate}</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-2" />
                <span>{readTime} min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center text-sm text-gray-500">
            <Link href="/" className="hover:text-[#FF7069]">Home</Link>
            <ChevronRight size={16} className="mx-2" />
            <Link href="/blog" className="hover:text-[#FF7069]">Blog</Link>
            <ChevronRight size={16} className="mx-2" />
            <span className="text-gray-900 font-medium truncate">{blog.name}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:flex lg:gap-12">
          {/* Article Content */}
          <div className="lg:w-2/3">
            {/* Description/Summary */}
            <div className="mb-8 text-lg md:text-xl text-gray-700 font-medium italic">
              {blog.description}
            </div>

            {/* Social Sharing */}
            <div className="flex items-center mb-8 pb-8 border-b border-gray-100">
              <div className="flex items-center mr-6">
                <button className="flex items-center text-gray-500 hover:text-[#FF7069] transition-colors">
                  <Share2 size={18} className="mr-2" />
                  <span>Share</span>
                </button>
              </div>
              <div className="flex items-center">
                <button className="flex items-center text-gray-500 hover:text-[#FF7069] transition-colors">
                  <BookmarkPlus size={18} className="mr-2" />
                  <span>Save</span>
                </button>
              </div>
            </div>

            {/* Main Image */}
            <div className="relative w-full h-96 md:h-[500px] mb-8 rounded-xl overflow-hidden">
              <Image
                src={blog.image || "/api/placeholder/1200/800"}
                alt={blog.name}
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Overview</h2>
              <div className="whitespace-pre-line text-gray-700">
                {blog.overview}
              </div>

              {/* Specifications Section */}
              {blog.specifications && blog.specifications.length > 0 && (
                <>
                  <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-gray-900">Specifications</h2>
                  <div className="bg-gray-50 rounded-xl p-6 mb-8">
                    <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                      {blog.specifications.map((spec: Specification, index: number) => (
                        <div key={index} className="border-b border-gray-200 pb-3 last:border-b-0 md:last:border-b md:even:border-b-0">
                          <dt className="text-sm font-medium text-gray-500">{spec.title}</dt>
                          <dd className="mt-1 text-base font-medium text-gray-900">{spec.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </>
              )}

              {/* Image Gallery */}
              {blog.images && blog.images.length > 0 && (
                <>
                  <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-gray-900">Gallery</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                    {blog.images.map((image: string, index: number) => (
                      <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
                        <Image
                          src={image || "/api/placeholder/600/400"}
                          alt={`${blog.name} - Image ${index + 1}`}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-lg hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 lg:pl-8 mt-12 lg:mt-0">
            <div className="sticky top-24">
              {/* Author Card */}
              <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm mb-8">
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="/api/placeholder/128/128"
                      alt="Author"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Sarah Johnson</h3>
                    <p className="text-sm text-gray-500">Content Writer</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Sarah specializes in technology writing with over 5 years of experience covering web development and design.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-[#FF7069] hover:text-[#ff5c54] font-medium text-sm">
                    View profile
                  </a>
                </div>
              </div>

              {/* Related Posts */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-4">Related Articles</h3>
                <div className="space-y-6">
                  {relatedPosts.map((post: Blog, index: number) => (
                    <div key={index} className="flex items-start">
                      <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={post.image || "/api/placeholder/200/200"}
                          alt={post.name}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-lg"
                        />
                      </div>
                      <div className="ml-4">
                        <Link 
                          href={`/blog/${post.slug}`} 
                          className="font-medium text-gray-900 hover:text-[#FF7069] text-sm line-clamp-2"
                        >
                          {post.name}
                        </Link>
                        <p className="text-gray-500 text-xs mt-1">{readTime} min read</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <Link href="/blog" className="text-[#FF7069] hover:text-[#ff5c54] font-medium text-sm flex items-center">
                    View all articles
                    <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Subscribe to our newsletter</h2>
            <p className="text-gray-300 mb-8">
              Get the latest articles and insights delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#FF7069]"
              />
              <button className="px-6 py-3 bg-[#FF7069] hover:bg-[#ff5c54] text-white rounded-lg transition-colors text-base font-medium whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
            Insight<span className="text-[#FF7069]">.</span>
          </div>
          <p className="text-gray-600 mb-6">
            Insights on web development, design, and technology.
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-gray-400 hover:text-[#FF7069]" aria-label="Twitter">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-[#FF7069]" aria-label="GitHub">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-[#FF7069]" aria-label="LinkedIn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" clipRule="evenodd"></path>
              </svg>
            </a>
          </div>
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Insight Blog. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
