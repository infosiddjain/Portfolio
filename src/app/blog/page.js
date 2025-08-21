"use client";
import { useRouter } from "next/navigation";
import { blogs } from "@/data/blogs";

export default function BlogPage() {
  const router = useRouter();

  return (
    <div className="text-black text-base not-italic normal-nums font-normal accent-auto bg-gray-900 box-border block tracking-[normal] leading-6 list-outside list-disc text-start indent-[0px] normal-case visible border-separate font-inter">
      <main className="relative text-white box-border max-w-none min-h-[1000px] mx-auto px-6 md:max-w-[1216px] md:px-12">
        <div className="py-4">
          <button
            onClick={() => router.back()}
            className="bg-[#1a1443] text-white px-4 py-2 rounded-md hover:bg-[#2a1f63] transition-colors duration-300"
          >
            ← Back
          </button>
        </div>

        <div className="py-8">
          <div className="flex justify-center my-5 lg:py-8">
            <div className="flex items-center">
              <span className="w-24 h-[2px] bg-[#1a1443]"></span>
              <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md">
                All Blog
              </span>
              <span className="w-24 h-[2px] bg-[#1a1443]"></span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 xl:gap-10">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {blog.imageSrc && (
                  <div className="h-48 overflow-hidden">
                    <img
                      src={blog.imageSrc}
                      alt={blog.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                {/* Blog Content */}
                <div className="p-4 flex flex-col h-full">
                  <p className="text-sm text-gray-500 flex justify-between items-center">
                    <span>{blog.timeAgo}</span>
                    <span>{blog.readTime}</span>
                  </p>

                  <h2 className="text-lg font-semibold text-gray-800 mt-2 line-clamp-2">
                    {blog.title}
                  </h2>

                  <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                    {blog.excerpt}
                  </p>

                  {/* Footer - Likes & Comments */}
                  <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <img
                        src="https://c.animaapp.com/mek409lvoDLlSz/assets/icon-11.svg"
                        alt="Likes"
                        className="h-4 w-4"
                      />
                      <span>{blog.likes}</span>
                      {blog.comments !== undefined && (
                        <>
                          <img
                            src="https://c.animaapp.com/mek409lvoDLlSz/assets/icon-12.svg"
                            alt="Comments"
                            className="h-4 w-4 ml-3"
                          />
                          <span>{blog.comments}</span>
                        </>
                      )}
                    </div>

                    {/* Read More Button */}
                    <a
                      href={blog.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 font-medium hover:underline"
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
