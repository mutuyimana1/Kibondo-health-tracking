import React from "react";
import "./blog.css";

const Singleblogs = ({ data }) => {
  return (
    <div className="blog-container">
      <div className="blog_content">
        <img className="blog-img" src={data.blogImage} alt="blog Image here" />

        <div className="right">
          <h1>{data.blogName}</h1>
          <p className="m-0">{data.blogContent}</p>
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
