import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Popup from "./Popup";

const BlogShow = () => {
  const id = useParams().id;
  const [blog, setBlog] = useState({});
  const [isPopup, setIsPopup] = useState(false);

  useEffect(() => {
    axios
      .get(`/api/blog/${id}`)
      .then((response) => setBlog(response.data))
      .catch((error) => console.log(error));
  });

  return (
    <div className="allBlogs-wrapper">
      <h2>
        <Link to="/blog" className="link-wrapper">
          All Blogs
        </Link>
      </h2>
      <div className="row">
        <div className="col-lg-4 col-md-12 mb-4">
          <div className="card">
            <div
              className="bg-image hover-overlay ripple"
              data-mdb-ripple-color="light"
            >
              <img src={blog.image} className="img-fluid" />
            </div>
            <div className="card-body">
              <h5 className="card-title">{blog.title}</h5>
              <p className="card-content">{blog.content}</p>
              <p className="card-author">{blog.author}</p>

              <button
                onClick={() => setIsPopup(true)}
                className="btn btn-primary btn-showup"
              >
                Edit
              </button>

              <button className="btn btn-primary btn-show">
                <Link to={`/edit/${id}`} style={{ color: white }}>
                  Edit
                </Link>
              </button>
              {isPopup && <Popup setIsPopup={setIsPopup} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogShow;
