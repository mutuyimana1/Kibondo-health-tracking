import React from "react";

function Sidebar() {
  return (
    <div>
      <div className="header">
        <div className="header-left">
          <a href="index-2.html" className="logo">
            <span>IKIBONDO</span>
          </a>
        </div>
        <a id="toggle_btn" href="javascript:void(0);">
          <i className="fa fa-bars" />
        </a>
        <a id="mobile_btn" className="mobile_btn float-left" href="#sidebar">
          <i className="fa fa-bars" />
        </a>
        <ul className="nav user-menu float-right">
          <li className="nav-item dropdown d-none d-sm-block"></li>
        </ul>
      </div>
      <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              <li className="menu-title">Main</li>
              <li className="active">
                <a href="index-2.html">
                  <i className="fa fa-dashboard" /> <span>Dashboard</span>
                </a>
              </li>
              <li>
                <a href="Users.html">
                  <i className="fa fa-users" /> <span>System Users</span>
                </a>
              </li>
              {/* <li>
                <a href="babies.html">
                 
                  <i className="fa fa-child" /> <span>Babies</span>
                </a>
              </li> */}
              <li className="submenu">
                <a href="#">
                  <i className="fa fa-child" /> <span> Babies</span>
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="/registeredbabies">Babie View</a>
                  </li>
                  <li>
                    <a href="/addbaby">Add Baby</a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="fa fa-female" /> <span> Parents</span>
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="/parents">Parents View</a>
                  </li>
                  <li>
                    <a href="/addparent">Add Parent</a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="fa fa-hospital-o" /> <span> Hospitals</span>
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="/hospitals">Hospitals View</a>
                  </li>
                  <li>
                    <a href="/addhospital">Add Hospital</a>
                  </li>
                </ul>
              </li>
              {/* <li>
                <a href="mothers.html">
                  <i className="fa fa-female" />
                  <span>Expectant Mothers</span>
                </a>
              </li> */}
              {/* <li>
                <a href="hospitals.html">
                  <i className="fa fa-hospital-o" />
                  <span>Hospitals</span>
                </a>
              </li> */}
              <li>
                <a href="#">
                  <i className="fa fa-medkit" />
                  <span>Vaccicines</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-envelope" />
                  <span>Message</span>
                </a>
              </li>
              {/* WEBSITE'S ELEMENTS*/}
              <li className="menu-title">Website's Elements</li>
              <li className="submenu">
                <a href="#">
                  <i className="fa fa-commenting-o" /> <span> Blog</span>
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="bloge.html">Blog</a>
                  </li>
                  <li>
                    <a href="/allblogs">Blog View</a>
                  </li>
                  <li>
                    <a href="addblog">Add Blog</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/comments">
                  <i className="fa fa-comments" />
                  <span>Comments</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
