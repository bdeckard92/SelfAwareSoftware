import { useState } from "react";
import "./Blog.css";
import blogList from "../../utils/blogs.js";

const Blog = () => {
  const [blogToShow, setBlogToShow] = useState(null);
  const showBlogBody = (id) => {
    setBlogToShow((prev) => (prev === id ? null : id));
  };
  console.log(blogToShow);
  const showBlogTitle = blogList.map((blog) => (
    <div key={blog.episode}>
      {" "}
      <h3 onClick={() => showBlogBody(blog.episode)}>{blog.title}</h3>{" "}
      {showBlogBody == blog.episode && (<div dangerouslySetInnerHTML={{__html: blog.body}}></div>)}
     
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
