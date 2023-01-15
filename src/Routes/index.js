import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "../components/dashboardContent/dashboardLayout";
import AddBaby from "../components/dashboardContent/addBaby";
import About from "../views/about";
import Home from "../views/home";
import AddHospital from "../components/dashboardContent/addHospital";
import AddParent from "../components/dashboardContent/AddParent";
import AddBlog from "../components/dashboardContent/addBlog";
import BabyView from "../components/dashboardContent/babyView";
import BlogView from "../components/dashboardContent/blogView";
import BmiResult from "../components/bmiResult";
import Comments from "../components/dashboardContent/comments";
import Hospitals from "../views/hospitals";
import Mathers from "../components/dashboardContent/mathers";
import Services from "../views/services";
import Blogs from "../views/blogs";
import RegisteredUsers from "../components/dashboardContent/users";

function Index() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/dashboard" element={<DashboardLayout />} />
      <Route path="/addbaby" element={<AddBaby />} />
      <Route path="/registeredbabies" element={<BabyView />} />
      <Route path="/addparent" element={<AddParent />} />
      <Route path="/parents" element={<Mathers />} />
      <Route path="/addhospital" element={<AddHospital />} />
      <Route path="/addblog" element={<AddBlog />} />
      <Route path="/allblogs" element={<BlogView />} />
      <Route path="/bmiresults" element={<BmiResult />} />
      <Route path="/comments" element={<Comments />} />
      <Route path="/hospitals" element={<Hospitals />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/users" element={<RegisteredUsers />} />
      <Route path="/blogs/:category" element={<Blogs />} />
    </Routes>
  );
}

export default Index;
