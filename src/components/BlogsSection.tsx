import React from "react";
import { blogs } from "../data/blogs";

export function BlogsSection() {
  return (
    <div className="relative box-border z-50 border-slate-800 my-12 border-t border-solid md:my-24">
      <div className="absolute bg-violet-100 box-border blur-3xl h-[100px] opacity-20 translate-x-[50.0%] w-[100px] rounded-full left-[42%] top-6"></div>
      <div className="box-border flex justify-center -translate-y-px">
        <div className="box-border w-9/12">
          <div className="bg-[linear-gradient(to_right,rgba(0,0,0,0),rgb(139,92,246),rgba(0,0,0,0))] box-border h-px w-full"></div>
        </div>
      </div>
      <div className="box-border flex justify-center my-5 py-0 md:py-8">
        <div className="items-center box-border flex">
          <span className="bg-indigo-950 box-border block h-0.5 w-24"></span>
          <span className="text-xl bg-indigo-950 box-border block leading-7 w-fit px-5 py-2 rounded-md">
            Blogs
          </span>
          <span className="bg-indigo-950 box-border block h-0.5 w-24"></span>
        </div>
      </div>
      <div className="box-border gap-x-3 grid grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-3 md:gap-x-10 md:grid-cols-[repeat(3,minmax(0px,1fr))] md:gap-y-10">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="relative bg-slate-800 box-border border border-slate-800 rounded-lg border-solid"
          >
            <div className="box-border h-44 overflow-hidden rounded-t-lg md:h-52">
              <img
                alt=""
                src={blog.imageSrc}
                className="text-transparent aspect-[auto_1920_/_1080] box-border h-full max-w-full w-full"
              />
            </div>
            <div className="box-border flex flex-col p-2 md:p-3">
              <div className="text-teal-400 text-sm items-center box-border flex justify-between leading-5">
                <p className="box-border">{blog.timeAgo}</p>
                <div className="items-center box-border gap-x-3 flex gap-y-3">
                  <p className="items-center box-border gap-x-1 flex gap-y-1">
                    <img
                      src="https://c.animaapp.com/mek409lvoDLlSz/assets/icon-11.svg"
                      alt="Icon"
                      className="box-border h-3.5 w-3.5"
                    />
                    <span className="box-border block">{blog.likes}</span>
                  </p>
                  {blog.comments && (
                    <p className="items-center box-border gap-x-1 flex gap-y-1">
                      <img
                        src="https://c.animaapp.com/mek409lvoDLlSz/assets/icon-12.svg"
                        alt="Icon"
                        className="box-border h-3.5 w-3.5"
                      />
                      <span className="box-border block">{blog.comments}</span>
                    </p>
                  )}
                </div>
              </div>
              <a href={blog.href} className="box-border block">
                <p className="text-lg font-medium box-border leading-7 my-2 md:text-xl md:my-3">
                  {blog.title}
                </p>
              </a>
              <p className="text-teal-400 text-sm box-border leading-5 mb-2">
                {blog.readTime}
              </p>
              <p className="text-slate-300 text-sm box-border flow-root leading-5 overflow-hidden pb-3 md:text-base md:leading-6 md:pb-6">
                {blog.excerpt}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="box-border flex justify-center mt-5 md:mt-12">
        <a
          role="button"
          href="/blog"
          className="text-xs font-medium items-center bg-[linear-gradient(to_right,rgb(236,72,153),rgb(124,58,237))] box-border gap-x-1 flex tracking-[0.6px] leading-4 gap-y-1 text-center uppercase p-3 rounded-full md:text-sm md:font-semibold md:tracking-[0.7px] md:leading-5 md:px-8 md:py-4"
        >
          <span className="text-xs font-medium box-border block tracking-[0.6px] leading-4 md:text-sm md:font-semibold md:tracking-[0.7px] md:leading-5">
            View More
          </span>
          <img
            src="https://c.animaapp.com/mek409lvoDLlSz/assets/icon-13.svg"
            alt="Icon"
            className="text-xs font-medium box-border h-4 tracking-[0.6px] leading-4 w-4 md:text-sm md:font-semibold md:tracking-[0.7px] md:leading-5"
          />
        </a>
      </div>
    </div>
  );
}
