import React, { useEffect, useState } from "react";
import Sidebar from "./sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getAllBabiesAction } from "../../redux/baby/actions";
import { Link } from "react-router-dom";
import { Dialog ,DialogContent} from "@mui/material";
import { useForm } from "react-hook-form";
import axios from "axios";




function BabyView() {
  const dispatch = useDispatch();
  const { babies, isFetching } = useSelector((state) => state?.baby);
  const [selectedBaby,setSelectedBaby]=useState({});
  const [vaccinations,setVaccinations] = useState([]);
  const [addVaccine,setAddVaccine] = useState(false);


  const getSelectedBaby = async(id)=>{
    setSelectedBaby(babies.data.find(bb=>bb._id===id));
    setOpen(true);
    const res = await axios.get(`http://localhost:4040/baby/vaccine/${id}`);
    setVaccinations(res.data.data);
  }
  useEffect(() => {
    getAllBabiesAction()(dispatch);
  }, []);
  const [open,setOpen] = useState(false);

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const submit = async(data)=>{
      const res = await axios.post(`http://localhost:4040/baby/vaccine/${selectedBaby._id}`,data);
      setVaccinations([...vaccinations,res.data.data])
  }

  const toggleForm = ()=>{
    setAddVaccine(!addVaccine);
  }

  return (
    <div>
      <Sidebar />

      <Dialog open={open} onClose={()=>setOpen(false)}>
        <DialogContent>
          <h3>Vacccination for {selectedBaby.firstName} {selectedBaby.secondName}</h3>

          {!addVaccine && (
            <table border={1} className='table table-bordered'>
            <thead>
              <tr>
              <th>Vaccine</th>
              <th>date</th>
              <th>details</th>
              </tr>
            </thead>
            <tbody>
              {
                vaccinations.map((vaccine)=>(
                  <tr key={vaccine._id}>
                    <td>{vaccine.name}</td>
                    <td>{vaccine.date}</td>
                    <td>{vaccine.details}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
          )}

          <button  onClick={toggleForm} className="btn btn-outline-success">
            {!addVaccine ? 'Add new vaccine record':'Show vaccination'}
          </button>

           {addVaccine && (<div className="mt-1">
           <form onSubmit={handleSubmit(submit)}>
            <input type="text" className="form-control" {...register("name", { required: true })} placeholder="vaccination" />
            <input type="date" className="form-control" {...register("date", { required: true })} placeholder="date" />
            <textarea className="form-control" {...register("details", { required: true })} placeholder="details"></textarea>
            <button className="btn btn-primary mt-1">Save</button>
          </form>
           </div>)}
        </DialogContent>
      </Dialog>
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
                            <span className="dropdown-item" onClick={()=>getSelectedBaby(b._id)}>
                            <i className="fa fa-th-o m-r-5" /> Vaccine
                            </span>
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
