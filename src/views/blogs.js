import React, { useState, useEffect } from "react";
import Header from "../components/header";
import axios from "axios";
import "./blog.css";
import Singleblogs from "./singleBlogs";
import { Modal } from "@mui/material";
import Box from "@mui/material/Box";
import { Drawer } from "antd";
import { useParams } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1200,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
};

function Blogs({ data }) {
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
  const handleClose = () => setModalVisible(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [singleData, setSingleData] = useState({});
  return (
    <>
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
                          className="img-fluid w-100 blog-img"
                          src={bro.blogImage}
                          alt="blog Image here"
                        />
                        <div className="p-4">
                          <a className="h3 d-block mb-3" href>
                            {bro.blogName}
                          </a>
                          <p className="m-0">{bro.blogContent}</p>
                          <p>{blogs.publishedDate}</p>
                        </div>
                      </div>
                      <div className="col-12 text-center">
                        <button
                          className="btn btn-primary py-3 px-5"
                          onClick={() => {
                            setSingleData(bro);
                            setModalVisible(true);
                          }}
                        >
                          Read More
                        </button>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
        <Drawer
          placement="left"
          width="100%"
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
        >
          <Box sx={style}>
            <Singleblogs data={singleData} />
          </Box>
        </Drawer>
      </div>
    </>
  );
}

export default Blogs;
