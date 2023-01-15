import React, { useEffect } from "react";
import Sidebar from "./sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getAllBabiesAction } from "../../redux/baby/actions";

function BabyView() {
  const dispatch = useDispatch();
  const { babies, isFetching } = useSelector((state) => state?.baby);
  useEffect(() => {
    getAllBabiesAction()(dispatch);
  }, []);
  console.log(babies);
  return (
    <div>
      <Sidebar />
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-sm-4 col-3">
              <h4 className="page-title">Babies</h4>
            </div>
            <div className="col-sm-8 col-9 text-right m-b-20">
              <a
                href="/addbaby"
                className="btn btn btn-primary btn-rounded float-right"
              >
                <i className="fa fa-plus" /> Add Baby
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <table className="table table-border table-striped custom-table datatable mb-0">
                  <thead>
                    <tr>
                      <th>Full Name</th>
                      <th>Date of Birth</th>
                      <th>Gender</th>
                      <th>father's Name</th>
                      <th>Mother's Name</th>
                      <th>Province</th>
                      <th>District</th>
                      <th>Sector</th>
                      <th>Cell</th>
                      <th>Prent's contact</th>
                      <th className="text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {babies.data?.map((b, index) => (
                      <tr key={index}>
                        <td>{`${b.firstName} ${b.secondName}`}</td>
                        <td>{b.dateOfBirth}</td>
                        <td>{`Null`}</td>
                        <td>{b.fatherName}</td>
                        <td>{b.motherName}</td>
                        <td>{b.province}</td>
                        <td>{b.district}</td>
                        <td>{b.sector}</td>
                        <td>{b.cell}</td>
                        <td>{b.telephone}</td>
                        <td>{b?.vaccine}</td>
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
                              <a className="dropdown-item" href="#">
                                <i className="fa fa-pencil m-r-5" /> Edit
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-toggle="modal"
                                data-target="#delete_patient"
                              >
                                <i className="fa fa-trash-o m-r-5" /> Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BabyView;
