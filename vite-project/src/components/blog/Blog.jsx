import { useState } from "react";
import "./Blog.css";
import blogList from "../../utils/blogs.js";

const Blog = () => {
  const [blogToShow, setBlogToShow] = useState(null);
  const showBlogBody = (id) => {
    setBlogToShow((prev) => (prev === id ? null : id));
  };

  const showBlogTitle = blogList.map((blog) => (
    <div key={blog.episode}>
      {" "}
      <button type= 'button' onClick={() => showBlogBody(blog.episode)}>{blog.title}</button>{" "}
      {/* Using dangerouslySetInnerHTML here as it is static coming from internal and not user injection. TODO: sanitize prior to allowing guest bloggers to enter */}
      {blogToShow === blog.episode && (<div dangerouslySetInnerHTML={{__html:blog.body}}></div>)}
    
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
