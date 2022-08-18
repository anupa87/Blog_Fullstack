import React from "react";

const FeaturePost = () => {
  return (
    <div>
      <article
        id="post-1"
        className="post-content featured-blog pb-4"
        itemScope
        itemType="http://schema.org/Article"
        data-gallery
      >
        <header className="post-header p-2">
          <div className="featured">
            <a href="#" itemProp="image" className="image-link ">
              <img
                src="https://mdbootstrap.com/img/new/slides/031.jpg"
                className="img-fluid"
              ></img>
            </a>
          </div>
          <h2 className="post-title pt-2" itemProp="name headline">
            Summer is over... Now what?!
          </h2>
        </header>
        <div className="post-meta p-2">
          <span className="post-cat ps 1">
            <a href="post-1">Lifestyle</a>
          </span>
          <span className="meta-sep"></span>
          <time
            className="post-date"
            itemProp="datePublished"
            dateTime=""
          ></time>
        </div>
        <div
          className="post-content-description text-align p-2"
          itemProp="articleBody"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae
            aliquet nec ullamcorper sit. Quis enim lobortis scelerisque
            fermentum dui faucibus in. Ac turpis egestas maecenas pharetra
            convallis posuere morbi. Magna sit amet purus gravida quis blandit
            turpis cursus. Integer enim neque volutpat ac tincidunt. Rhoncus
            urna neque viverra justo nec. Commodo ullamcorper a lacus vestibulum
            sed arcu non. Elit ullamcorper dignissim cras tincidunt lobortis.
            Sagittis vitae et leo duis ut diam quam.
          </p>
          <p>
            Sed vulputate odio ut enim blandit volutpat maecenas volutpat. Nibh
            ipsum consequat nisl vel pretium lectus quam. Faucibus turpis in eu
            mi bibendum neque egestas congue quisque. Turpis massa sed elementum
            tempus egestas sed sed. Nec ultrices dui sapien eget. Ut tellus
            elementum sagittis vitae et. Amet consectetur adipiscing elit
            pellentesque habitant morbi. Ipsum suspendisse ultrices gravida
            dictum fusce ut placerat orci. Lacus luctus accumsan tortor posuere
            ac ut consequat semper. Viverra suspendisse potenti nullam ac tortor
            vitae purus faucibus. Nunc sed blandit libero volutpat sed cras.
          </p>
          <div className="read-more ">
            <a href="#" className="more" title="Read More">
              Read more
              <i className="icon icon-angle-right"></i>
            </a>
          </div>
        </div>
      </article>
    </div>
  );
};

export default FeaturePost;
