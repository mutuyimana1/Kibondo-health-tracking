import React from "react";
import "./blog.css";
import { Carousel } from "antd";

const Singleblogs = ({ data }) => {
  return (
    <div className="blog-container">
      <div className="blog_content">
        <Carousel autoplay>
          <img
            className="blog-img"
            src={data.blogImage}
            alt="blog Image here"
          />
          <img
            className="blog-img"
            src={data.blogImageTwo}
            alt="blog Image here"
          />
        </Carousel>

        <div className="right">
          <h1>{data.blogName}</h1>
          <p className="m-0">{data.blogDescription}</p>
        </div>
      </div>
      <div className="btn-blogs">
        <a href="./" className="previous">
          Previous
        </a>
      </div>
    </div>
  );
};
export default Singleblogs;
