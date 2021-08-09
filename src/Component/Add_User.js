import axios from "axios";
import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { useHistory} from "react-router-dom";
import { addPost } from "../Redux/Action/ActionFunctions";
// import { getsingledata, updatePost } from "../Redux/Action/ActionFunctions";

const Add_User = () => {
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


  
  //----------------------------------------------------------

  //-----------update data----------------------------------
  const handleUpdate = (e) => {
    e.preventDefault();
    const Update = {
      name:name,
      username:username,
      email:email,
    }
    debugger;
    dispatch(addPost(Update));
    debugger;
    history.push("/");
  };
  //----------------------------------------------------------

  return (
    <div>
      <h3>Add User</h3>
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
        Add USer
      </button>
    </div>
  );
};

export default Add_User;
