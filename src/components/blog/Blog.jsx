import { useState } from "react";
import "./Blog.css";
import blogList from "../../utils/blogs.jsx";
import { filterByKeywords } from "../../utils/filterByKeywords";
import { sortByDate, SORT_ORDER } from "../../utils/sortByDate";
import KeywordSearch from "../search/KeywordSearch";
import SortToggle from "../sort/SortToggle";

const Blog = () => {
  const [blogToShow, setBlogToShow] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState(SORT_ORDER.NEWEST);

  const showBlogBody = (id) => {
    setBlogToShow((prev) => (prev === id ? null : id));
  };

  const formatPublishDate = (dateCreated) => {
    if (!dateCreated) {
      return "Publish date unavailable";
    }

    return new Date(dateCreated).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const getBlogSubtitle = (body) => {
    const articleChildren = body?.props?.children;
    const childrenArray = Array.isArray(articleChildren)
      ? articleChildren
      : [articleChildren];
    const headerElement = childrenArray.find((child) => child?.type === "header");

    if (!headerElement) {
      return "";
    }

    const headerChildren = headerElement.props?.children;
    const headerArray = Array.isArray(headerChildren) ? headerChildren : [headerChildren];
    const h1Element = headerArray.find((child) => child?.type === "h1");

    return typeof h1Element?.props?.children === "string"
      ? h1Element.props.children
      : "";
  };

  const filteredBlogs = filterByKeywords(blogList, searchTerm, [
    "title",
    "body",
    "dateCreated",
    "episode",
  ]);

  const sortedBlogs = sortByDate(filteredBlogs, "dateCreated", sortOrder);

  const showBlogCards = [...sortedBlogs]
    .map((blog) => (
    <section className="blog-card" key={blog.episode}>
      <h2 className="blog-card-title">{blog.title}</h2>
      <p className="blog-card-subtitle">{getBlogSubtitle(blog.body)}</p>
      <p className="blog-card-date">Published {formatPublishDate(blog.dateCreated)}</p>
      <button
        className="blog-card-toggle"
        type="button"
        onClick={() => showBlogBody(blog.episode)}
      >
        {blogToShow === blog.episode ? "Hide Post" : "Read Post"}
      </button>
    </section>
  ));

  const activeBlog = blogList.find((blog) => blog.episode === blogToShow);

  return (
    <>
      <h1>Blog Posts</h1>
      <KeywordSearch
        value={searchTerm}
        onChange={setSearchTerm}
        ariaLabel="Search blog posts"
        placeholder="Search blog posts"
      />
      <SortToggle value={sortOrder} onChange={setSortOrder} />
      <div className="blog-list">{showBlogCards}</div>
      {activeBlog && <section className="blog-reader">{activeBlog.body}</section>}
    </>
  );
};

export default Blog;
