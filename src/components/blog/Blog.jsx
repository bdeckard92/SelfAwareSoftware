import { useState } from "react";
import "./Blog.css";
import blogList from "../../utils/blogs.jsx";

const Blog = () => {
  const [blogToShow, setBlogToShow] = useState(null);
  const showBlogBody = (id) => {
    setBlogToShow((prev) => (prev === id ? null : id));
  };

  const showBlogTitle = blogList.map((blog) => (
    <div key={blog.episode}>
      {" "}
      <button type="button" onClick={() => showBlogBody(blog.episode)}>
        {blog.title}
      </button>{" "}
      {blogToShow === blog.episode && blog.body}
    </div>
  ));
  return (
    <>
      <h1>Blog Posts</h1>
      {showBlogTitle}
    </>
  );
};

export default Blog;
