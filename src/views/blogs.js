import React, { useState, useEffect } from "react";
import Header from "../components/header";
import axios from "axios";
import { useParams } from "react-router-dom";

function Blogs() {
  const { category } = useParams();
  const urlParam = category && category !== "" ? category : "all";
  const [blogs, setBlogs] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const fetchBlogs = () => {
    setIsFetching(true);
    axios
      .get("http://localhost:4040/blog/" + urlParam)
      .then((res) => {
        setBlogs(res.data.data);
        setIsFetching(false);
      })
      .catch((error) => {
        console.log(error);
        setIsFetching(false);
      });
  };
  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <div>
      <Header />
      <div className="container-fluid py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: 500 }}>
            <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">
              Blog Post
            </h5>
            <h1 className="display-4">Our Latest Blog Posts</h1>
          </div>
          <div className="row g-5">
            {isFetching ? (
              <center>Retrieving blogs ...</center>
            ) : (
              <>
                {blogs.map((bro, index) => (
                  <div className="col-xl-4 col-lg-6">
                    <div className="bg-light rounded overflow-hidden">
                      <img
                        className="img-fluid w-100"
                        src={bro.blogImage}
                        alt="blog Image here"
                      />
                      <div className="p-4">
                        <a className="h3 d-block mb-3" href>
                          {bro.blogTitle}
                        </a>
                        <p className="m-0">{bro.blogContent}</p>
                      </div>
                      {/* <div className="d-flex justify-content-between border-top p-4">
                          <div className="d-flex align-items-center">
                            <img
                              className="rounded-circle me-2"
                              src="img/user.jpg"
                              width={25}
                              height={25}
                              alt
                            />
                            <small>N. Eugene</small>
                          </div>
                          <div className="d-flex align-items-center">
                            <small className="ms-3">
                              <i className="far fa-eye text-primary me-1" />
                              12345
                            </small>
                            <small className="ms-3">
                              <i className="far fa-comment text-primary me-1" />
                              123
                            </small>
                          </div>
                        </div> */}
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
          <div className="col-12 text-center">
            <button className="btn btn-primary py-3 px-5">Load More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
