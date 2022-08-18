import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog, handleDelete }) => {
  return (
    <div>
      <li className="blog-item list-group " key={blog.id}>
        <div className="mb-4">
          <div className="card">
            <div
              className="bg-image hover-overlay ripple"
              data-mdb-ripple-color="light"
            >
              <img className="img-fluid" src={blog.image} />
            </div>
            <div className="card-body">
              <h4 className="card-title text-center">{blog.title}</h4>
              <p className="display-content card-text text-align">
                {blog.content}
              </p>
            </div>
            <div className="d-flex flex-row justify-content-between">
              <Link to={`/show/${blog.id}`} className="link-info px-3">
                KEEP READING
              </Link>
              <button
                onClick={() => handleDelete(blog.id)}
                className="btn link-danger border px-3 mb-3 me-3"
              >
                DELETE
              </button>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
};

export default BlogCard;
