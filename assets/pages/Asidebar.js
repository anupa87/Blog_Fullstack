import React from "react";
import { Link } from "react-router-dom";

const Asidebar = () => {
  return (
    <div className="sidebar-container w-70 pt-2 ">
      <aside className="sidebar">
        <ul>
          <li className="grid-box widget widget-about list-group">
            <div className="author-image pb-1">
              <img
                src="https://www.kindpng.com/picc/m/110-1104699_woman-clipart-images-png-cartoon-business-woman-transparent.png"
                className="img-thumbnail"
                alt="About Me"
                scale="0"
              ></img>
            </div>
            <h5 className="widget-title pt-3">Anupa Thapa</h5>
            <div className="subtitle pb-3">
              Health Reacher/Developer/Mom-Blogger
            </div>
            <div className="about-text text-align mb-2">
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat."
              </p>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat."
              </p>
            </div>

            <div className="read-more ">
              <Link to="/#" className="more" title="Read More">
                Read more
              </Link>
            </div>

            <div className="social-icons pt-4 pb-5">
              <a
                href="#"
                className="social-link"
                data-original-title=""
                title=""
              >
                <i className="icon icon-facebook-b"></i>
                <span className="visuallyhidden">Facebook</span>
              </a>
              <a
                href="#"
                className="social-link"
                data-original-title=""
                title=""
              >
                <i className="icon icon-twitter-b"></i>
                <span className="visuallyhidden">Twitter</span>
              </a>
              <a
                href="#"
                className="social-link"
                data-original-title=""
                title=""
              >
                <i className="icon icon-instagram-b"></i>
                <span className="visuallyhidden">Instagram</span>
              </a>
            </div>
          </li>

          <li
            id="categories-2"
            className=" widget widget_categories py-5 list-group-item"
          >
            <h5 className="widget-title">Categories</h5>
            <ul className="list-group list-group-light border-0">
              <li className=" list-group">
                <Link
                  to="/#"
                  className="list-group-item list-group-item-action border-0"
                >
                  Culture
                  <span className="badge bg-primary rounded-pill">14</span>
                </Link>
              </li>
              <li className="list-group ">
                <a
                  className="list-group-item list-group-item-action border-0"
                  href="#"
                >
                  Fashion
                  <span className="badge bg-primary rounded-pill">22</span>
                </a>
              </li>
              <li className="list-group ">
                <a
                  className="list-group-item list-group-item-action border-0"
                  href="#"
                >
                  Lifestyle
                  <span className="badge bg-primary rounded-pill">114</span>
                </a>
              </li>
              <li className="list-group">
                <a
                  className="list-group-item list-group-item-action border-0"
                  href="#"
                >
                  Shopping
                  <span className="badge bg-primary rounded-pill">55</span>
                </a>
              </li>
              <li className="list-group">
                <a
                  className="list-group-item list-group-item-action border-0"
                  href="#"
                >
                  Travel
                  <span className="badge bg-primary rounded-pill">554</span>
                </a>
              </li>
            </ul>
          </li>

          <li
            id="bunyad-widget-quote-2"
            className=" bg-grey widget widget-quote py-5 list-group"
          >
            <h5 className="widget-title bg-grey text-center pt-5">
              Quote of the day
              <a href="#" className="more-link">
                <i className="icon icon-arrow-next"></i>
              </a>
            </h5>
            <div className="content ">
              <div className="quote-text text-center text-justify p-2">
                <p>
                  "There are no strangers here, only friends that have not yet
                  met."
                </p>
              </div>
              <p className="byline p-3 text-end">Theme Doe</p>
            </div>
          </li>
          <li
            id="bunyad-widget-quote-2"
            className=" widget widget-quote py-5 list-group"
          ></li>
        </ul>
      </aside>
    </div>
  );
};

export default Asidebar;
