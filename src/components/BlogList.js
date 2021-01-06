import { Link } from "react-router-dom";

const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.slug.current}>
          <Link to={`/blogs/${blog.slug.current}`}>
            <h2>{blog.title}</h2>
            <p>Escrito por {blog.name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
