import React from "react";
import Sidebar from "./sidebar";

function AddBlog() {
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
                  <input className="form-control" type="text" />
                </div>
                <div className="form-group">
                  <label>Blog Images</label>
                  <div>
                    <input className="form-control" type="file" />
                    <small className="form-text text-muted">
                      Max. file size: 50 MB. Allowed images: jpg, gif, png.
                      Maximum 10 images only.
                    </small>
                  </div>
                  <div className="row">
                    <div className="col-md-3 col-sm-3 col-4 col-lg-3 col-xl-2">
                      <div className="product-thumbnail">
                        <img
                          src="assets/img/blog/konsa.jpg"
                          className="img-thumbnail img-fluid"
                          alt
                        />
                        <span className="product-remove" title="remove">
                          <i className="fa fa-close" />
                        </span>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-4 col-lg-3 col-xl-2">
                      <div className="product-thumbnail">
                        <img
                          src="assets/img/placeholder-thumb.jpg"
                          className="img-thumbnail img-fluid"
                          alt
                        />
                        <span className="product-remove" title="remove">
                          <i className="fa fa-close" />
                        </span>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-4 col-lg-3 col-xl-2">
                      <div className="product-thumbnail">
                        <img
                          src="assets/img/placeholder-thumb.jpg"
                          className="img-thumbnail img-fluid"
                          alt
                        />
                        <span className="product-remove" title="remove">
                          <i className="fa fa-close" />
                        </span>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-4 col-lg-3 col-xl-2">
                      <div className="product-thumbnail">
                        <img
                          src="assets/img/placeholder-thumb.jpg"
                          className="img-thumbnail img-fluid"
                          alt
                        />
                        <span className="product-remove" title="remove">
                          <i className="fa fa-close" />
                        </span>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-4 col-lg-3 col-xl-2">
                      <div className="product-thumbnail">
                        <img
                          src="assets/img/placeholder-thumb.jpg"
                          className="img-thumbnail img-fluid"
                          alt
                        />
                        <span className="product-remove" title="remove">
                          <i className="fa fa-close" />
                        </span>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-4 col-lg-3 col-xl-2">
                      <div className="product-thumbnail">
                        <img
                          src="assets/img/placeholder-thumb.jpg"
                          className="img-thumbnail img-fluid"
                          alt
                        />
                        <span className="product-remove" title="remove">
                          <i className="fa fa-close" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Blog Category</label>
                      <select className="select">
                        <option>Health Care</option>
                        <option>Child</option>
                        <option>AHealth Care</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Blog Sub Category</label>
                      <select className="select">
                        <option>Health Care</option>
                        <option>Health Care</option>
                        <option>Health Care</option>
                        <option>Health Care</option>
                        <option>Health Care</option>
                        <option>Health Care</option>
                        <option>Health Care</option>
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
                  />
                </div>
                <div className="form-group">
                  <label>
                    Tags <small>(separated with a comma)</small>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your tags"
                    data-role="tagsinput"
                    className="form-control"
                  />
                </div>
                <div className="m-t-20 text-center">
                  <button className="btn btn-primary submit-btn">
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
