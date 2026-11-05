"use client";
import { useRouter } from "next/navigation";
import { blogs } from "@/data/blogs";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function BlogPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-surface text-ink">
      <Header />
      <main className="mx-auto max-w-[1200px] px-5 py-12 md:px-8">
        <div className="">
          <button
            onClick={() => router.back()}
            className="rounded-lg border border-line bg-white px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-surface cursor-pointer"
          >
            ← Back
          </button>
        </div>

        <div className="">
          <div className="flex justify-center my-5 lg:py-8">
            <div className="flex items-center">
              <h1 className="font-display text-3xl font-bold text-ink md:text-4xl">Notes & articles</h1>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 xl:gap-10">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="overflow-hidden rounded-2xl border border-line bg-white transition-shadow duration-300 hover:shadow-lg"
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
                    {blog.href && (
                      <a
                        href={blog.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 font-medium hover:underline"
                      >
                        Read More →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
