import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {
  getsingledata, updatePost,
} from "../Redux/Action/ActionFunctions";

const Update_data = () => {
  const [data1, setData1] = useState({
    name: "",
    username: "",
    email: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setData1({ ...data1, [name]: value });
  };

  const { name, username, email } = data1;

  let history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user);

  const { id } = useParams();

  //------------------------------------------------------
  //geting data for Update
  useEffect(() => {
    dispatch(getsingledata(id));
  }, []);

  useEffect(() => {
    if (user) {
      setData1({ ...user });
    }
  }, [user]);
  //----------------------------------------------------------

  //-----------update data----------------------------------
  const handleUpdate = (e) => {
    e.preventDefault()
    // const Update = Object.assign(user,{
    //   name:name,
    //   username:username,
    //   email:email,
    // })
    debugger
    dispatch(updatePost(data1, id));
    debugger;
    history.push("/");
  };
  //----------------------------------------------------------

  return (
    <div>
      <h3>Update User</h3>
      <div className="mb-3" style={{ width: "30%", display: "inline-table" }}>
        <label className="form-label">Name</label>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <br />

      <div className="mb-3" style={{ width: "30%", display: "inline-table" }}>
        <label className="form-label">UserName</label>
        <input
          type="text"
          placeholder="UserName"
          name="username"
          value={username}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <br />

      <div className="mb-3" style={{ width: "30%", display: "inline-table" }}>
        <label className="form-label">Email</label>
        <input
          value={email}
          name="email"
          onChange={handleChange}
          className="form-control"
          placeholder="Email"
        />
      </div>
      <br />

      <br />

      <button className="btn btn-success mt-3" onClick={handleUpdate}>
        Update
      </button>
    </div>
  );
};

export default Update_data;
