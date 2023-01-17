import axios from "axios";
import React, { useState } from "react";
import Sidebar from "./sidebar";

function AddBlog() {
  const [blogName, setBlogName] = useState("");
  const [blogTitle, setBlogTitle] = useState("");
  const [blogImage, setBlogImage] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleBlogs = (e) => {
    e.preventDefault();
    console.log(blogName, blogTitle, blogImage, blogContent, searchKeyword);

    axios
      .post("http://localhost:4040/blog/create", {
        blogName,
        blogImage,
        blogContent,
        searchKeyword,
      })
      .then((e) => {
        setBlogName("");
        setBlogImage("");
        setBlogContent("");
        setSearchKeyword("");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Sidebar />
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h4 className="page-title">Add Blog</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <form>
                <div className="form-group">
                  <label>Blog Name</label>
                  <input
                    className="form-control"
                    type="text"
                    value={blogName}
                    onChange={(e) => setBlogName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Blog Images</label>
                  <div>
                    <input
                      className="form-control"
                      type="link"
                      value={blogImage}
                      onChange={(e) => setBlogImage(e.target.value)}
                    />
                    <small className="form-text text-muted">
                      Max. file size: 50 MB. Allowed images: jpg, gif, png.
                      Maximum 10 images only.
                    </small>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Blog Category</label>
                      <select
                        className="select"
                        name={searchKeyword}
                        onChange={(e) => setSearchKeyword(e.target.value)}
                      >
                        <option>overWeight</option>
                        <option>underWeight</option>
                        <option>good health</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>Blog Description</label>
                  <textarea
                    cols={30}
                    rows={6}
                    className="form-control"
                    defaultValue={""}
                    value={blogContent}
                    onChange={(e) => setBlogContent(e.target.value)}
                  />
                </div>

                <div className="m-t-20 text-center">
                  <button
                    className="btn btn-primary submit-btn"
                    onClick={handleBlogs}
                  >
                    Publish Blog
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBlog;
