import axios from "axios";
import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Sidebar from "./sidebar";
function Comments() {
  const [comments, setComments] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [notification, setNotification] = useState([]);
  const [isNotificationFetching, setIsNotificationFetching] = useState(false);

  const fetchNotifications = () => {
    setIsNotificationFetching(true);
    axios
      .get("http://localhost:4040/notification/all")
      .then((res) => {
        setNotification(res.data.data);
        setIsNotificationFetching(false);
      })
      .catch((error) => {
        console.log(error);
        setIsNotificationFetching(false);
      });
  };
  const fetchComments = () => {
    setIsFetching(true);
    axios
      .get("http://localhost:4040/comment/all")
      .then((res) => {
        setComments(res.data.data);
        setIsFetching(false);
      })
      .catch((error) => {
        console.log(error);
        setIsFetching(false);
      });
  };
  useEffect(() => {
    fetchComments();
    fetchNotifications();
  }, []);

  return (
    <div>
      <Sidebar />
      <div>
        <div className="page-wrapper">
          <div className="content">
            <div className="row">
              <div className="col-sm-4 col-3">
                <h4 className="page-title">Comments from the Website</h4>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="table-responsive">
                  <table className="table table-border table-striped custom-table mb-0">
                    <thead>
                      <tr>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Comment</th>
                        <th className="text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {isFetching ? (
                        <center
                          style={{ paddingTop: "80px", paddingLeft: "60px" }}
                        >
                          <CircularProgress />
                        </center>
                      ) : (
                        <>
                          {comments.map((comm, index) => (
                            <tr>
                              <td>
                                <img
                                  width={28}
                                  height={28}
                                  src="assets/img/user.jpg"
                                  className="rounded-circle m-r-5"
                                  alt
                                />{" "}
                                {comm.fullName}
                              </td>
                              <td>{comm.email}</td>
                              <td>{comm.comment}</td>
                              <td className="text-right">
                                <div className="dropdown dropdown-action">
                                  <a
                                    href="#"
                                    className="action-icon dropdown-toggle"
                                    data-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="fa fa-ellipsis-v" />
                                  </a>
                                  <div className="dropdown-menu dropdown-menu-right">
                                    <a
                                      className="dropdown-item"
                                      href="#"
                                      data-toggle="modal"
                                      data-target="#delete_schedule"
                                    >
                                      <i className="fa fa-trash-o m-r-5" />{" "}
                                      Delete
                                    </a>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="notifications">
              <h2>This is Agent </h2>
              <div className="row">
                <div className="col-md-12">
                  <div className="table-responsive">
                    <table className="table table-border table-striped custom-table mb-0">
                      <thead>
                        <tr>
                          <th>notifiaction Id</th>
                          <th>status</th>
                          <th>Notification content</th>
                          <th>to</th>
                          <th className="text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {isNotificationFetching ? (
                          <center style={{ paddingTop: "50px" }}>
                            <CircularProgress />
                          </center>
                        ) : (
                          <>
                            {notification.map((notify, index) => (
                              <tr>
                                <td>
                                  <img
                                    width={28}
                                    height={28}
                                    src="assets/img/user.jpg"
                                    className="rounded-circle m-r-5"
                                    alt
                                  />{" "}
                                  <p>{index + 1}</p>
                                </td>
                                <td>{notify.status}</td>
                                <td>{notify.notificationContent}</td>
                                <td>{notify.to}</td>
                                <td className="text-right">
                                  <div className="dropdown dropdown-action">
                                    <a
                                      href="#"
                                      className="action-icon dropdown-toggle"
                                      data-toggle="dropdown"
                                      aria-expanded="false"
                                    >
                                      <i className="fa fa-ellipsis-v" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                      <a
                                        className="dropdown-item"
                                        href="#"
                                        data-toggle="modal"
                                        data-target="#delete_schedule"
                                      >
                                        <i className="fa fa-trash-o m-r-5" />{" "}
                                        Delete
                                      </a>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="notification-box">
            <div className="msg-sidebar notifications msg-noti">
              <div className="topnav-dropdown-header">
                <span>Messages</span>
              </div>
              <div className="drop-scroll msg-list-scroll" id="msg_list">
                <ul className="list-box">
                  <li>
                    <a href="chat.html">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">R</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">Richard Miles </span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="chat.html">
                      <div className="list-item new-message">
                        <div className="list-left">
                          <span className="avatar">J</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">John Doe</span>
                          <span className="message-time">1 Aug</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="chat.html">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">T</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">
                            {" "}
                            Tarah Shropshire{" "}
                          </span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="chat.html">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">M</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">Mike Litorus</span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="chat.html">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">C</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">
                            {" "}
                            Catherine Manseau{" "}
                          </span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="chat.html">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">D</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">
                            {" "}
                            Domenic Houston{" "}
                          </span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="chat.html">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">B</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">
                            {" "}
                            Buster Wigton{" "}
                          </span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="chat.html">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">R</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">
                            {" "}
                            Rolland Webber{" "}
                          </span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="chat.html">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">C</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author"> Claire Mapes </span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="chat.html">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">M</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">Melita Faucher</span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="chat.html">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">J</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">Jeffery Lalor</span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="chat.html">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">L</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">Loren Gatlin</span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="chat.html">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">T</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">
                            Tarah Shropshire
                          </span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="topnav-dropdown-footer">
                <a href="chat.html">See all messages</a>
              </div>
            </div>
          </div>
        </div>
        <div
          id="delete_schedule"
          className="modal fade delete-modal"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body text-center">
                <img src="assets/img/sent.png" alt width={50} height={46} />
                <h3>Are you sure want to delete this Comment?</h3>
                <div className="m-t-20">
                  {" "}
                  <a href="#" className="btn btn-white" data-dismiss="modal">
                    Close
                  </a>
                  <button type="submit" className="btn btn-danger">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comments;
