import React from "react";

import BlogCard from "../../common/BlogCard";
import { Blogs } from "../../utils";

const BlogPosts = () => (
  <section id="#blogs" className="px-5 py-20">
    <div className="max-w-md md:max-w-6xl mx-auto h-full">
      <div className="max-w-xl m-auto text-center mb-20">
        <h2 className="text-4xl font-semibold mb-3">Blog Posts</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            title={blog.title}
            url={blog.url}
            name={blog.name}
            date={blog.date}
            content={blog.content}
            blogType={blog.blogType}
          />
        ))}
      </div>
    </div>
  </section>
);

export default BlogPosts;
