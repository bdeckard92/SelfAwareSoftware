import { Link, useParams } from 'react-router-dom';
import blogList from '../../utils/blogs.jsx';
import './BlogPost.css';

const formatPublishDate = (dateCreated) => {
  if (!dateCreated) {
    return 'Publish date unavailable';
  }

  return new Date(dateCreated).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};

const BlogPost = () => {
  const { episodeId } = useParams();
  const episode = Number(episodeId);
  const blog = blogList.find((entry) => entry.episode === episode);

  if (!blog) {
    return (
      <section className="blog-post-page">
        <h1>Blog Post Not Found</h1>
        <p>The post you are looking for does not exist.</p>
        <Link className="blog-back-btn" to="/blog" data-tooltip="Escape this void and return to the wild selection of all posts">
          Back to All Blogs
        </Link>
      </section>
    );
  }

  return (
    <section className="blog-post-page">
      <div className="blog-post-header">
        <Link className="blog-back-btn" to="/blog" data-tooltip="Escape this blog post and return to the wild selection of all posts">
          Back to All Blogs
        </Link>
        <p className="blog-post-date">Published {formatPublishDate(blog.dateCreated)}</p>
      </div>
      <section className="blog-post-content">{blog.body}</section>
    </section>
  );
};

export default BlogPost;
