import React from "react";
import { Link } from "react-router-dom";
const PopularBlog = () => {
  return (
    <div className="popular-blogs text-center py-5">
      <h4 className="mb-5">
        <strong>Popular Posts</strong>
      </h4>

      <div className="row">
        <div className="col-lg-4 col-md-12 mb-4">
          <div className="card">
            <div
              className="bg-image hover-overlay ripple"
              data-mdb-ripple-color="light"
            >
              <img
                src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                className="img-fluid"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="/blog/{id}" className="btn btn-outline-info">
                KEEP READING
              </Link>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card">
            <div
              className="bg-image hover-overlay ripple"
              data-mdb-ripple-color="light"
            >
              <img
                src="https://mdbootstrap.com/img/new/standard/nature/023.jpg"
                className="img-fluid"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="/blog/{id}" className="btn btn-outline-info">
                KEEP READING
              </Link>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card">
            <div
              className="bg-image hover-overlay ripple"
              data-mdb-ripple-color="light"
            >
              <img
                src="https://mdbootstrap.com/img/new/standard/nature/111.jpg"
                className="img-fluid"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="/blog/{id}" className="btn btn-outline-info">
                KEEP READING
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularBlog;
