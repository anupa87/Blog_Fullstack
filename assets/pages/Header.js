import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const Header = () => {
  const [inputField, setInputField] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const inputFormat = e.target.value.trim().replaceAll(" ", "-");
    setInputField(inputFormat);
  };
  return (
    <header className="bg-white">
      <div className="preview-header d-flex flex-row justify-content-between ">
        <div className="preview-logo bg-white">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYCZaCDzbXvPxsPo3v3cumSf_oPq7uv9qtmBhqijVG8UGyzUKyK0Z7BEF5vm3hZQj-M0M&usqp=CAU"
            className="img-fluid"
            alt="Sa-Sha-Blog"
          ></img>
        </div>
        <div className="preview-branding bg-white text-center">
          <img
            src="https://logodix.com/logo/1862738.png"
            className="img-fluid ratio ratio-21x9 w-75 p-4"
            alt="blog logo"
          ></img>
        </div>
      </div>
      <nav
        className="navbar-expand-lg navbar-dark bg-dark d-none d-lg-block  px-5"
        style={{ zIndex: "2000" }}
      >
        <div className="container-fluid d-flex flex-row justify-content-between">
          <div className="navbar ">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item active">
                <Link className="nav-link px-5" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link px-5"
                  to="/"
                  rel="nofollow"
                  target="_blank"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-5" to="/blogs" target="_blank">
                  Blogs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-5" to="/contact" target="_blank">
                  Collab
                </Link>
              </li>
            </ul>
          </div>
          <div className="search p-3">
            <form onSubmit={handleSubmit} className="search-form">
              <input
                type="search"
                onChange={handleChange}
                defaultValue={inputField}
                placeholder="Search..."
                className="search-input rounded"
              />
              <Link to={`/blog/${inputField}`} className="text-light p-3">
                <span className="screen-reader-text text-light pe-3 fa-sm">
                  <BsSearch />
                </span>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
