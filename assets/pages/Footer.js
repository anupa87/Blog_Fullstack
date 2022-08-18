import React from "react";
import BlogCreate from "./BlogCreate";
import Contact from "./Contact";

const Footer = () => {
  return (
    <footer>
      <div
        className="d-flex flex-row justify-content-around"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        <div className="px-5 w-70">
          <Contact />
        </div>

        <div className="text-center py-3 align-items-center px-5 flex-shrink-1 ">
          <p>Follow us on social media</p>
          <a
            href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA"
            className="btn btn-primary m-1"
            role="button"
            rel="nofollow"
            target="_blank"
          >
            <i className="fab fa-youtube"></i>
          </a>
          <a
            href="https://www.facebook.com/mdbootstrap"
            className="btn btn-primary m-1"
            role="button"
            rel="nofollow"
            target="_blank"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://twitter.com/MDBootstrap"
            className="btn btn-primary m-1"
            role="button"
            rel="nofollow"
            target="_blank"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://github.com/mdbootstrap/mdb-ui-kit"
            className="btn btn-primary m-1"
            role="button"
            rel="nofollow"
            target="_blank"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
      <div className="text-center p-3 bg-dark text-white">
        © 2020 Copyright: Sa-Sha Blog
      </div>
    </footer>
  );
};

export default Footer;
