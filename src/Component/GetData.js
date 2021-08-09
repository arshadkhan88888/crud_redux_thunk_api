import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { deleteUser, loadData } from "../Redux/Action/ActionFunctions";

const GetData = () => {
  const [search, setSearch] = useState("");
  let history = useHistory();
  const dispatch = useDispatch();
  const dataa = useSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(loadData());
  }, []);

  return (
    <div>
      <div
        style={{
          textAlignLast: "end",
          marginLeft: "20px",
          marginBottom: "20px",
          textAlignLast: "start",
          justifyContent: "space-around",
        }}
      >
        <input
          placeholder="Search Data"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Link to="/add_user" className="btn btn-primary">
          Add User
        </Link>
      </div>
      <table className="table table-bordered table-dark">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Delete</th>
            <th>Edit</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {dataa &&
            dataa
              .filter((itemm) => {
                if (search === "") {
                  return itemm;
                } else if (
                  itemm.name.toLowerCase().includes(search.toLowerCase())
                ) {
                  return itemm;
                }
              })
              .map((item, index) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => dispatch(deleteUser(item.id))}
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    {/* <button className="btn btn-warning" onClick={() => {
                    handleShow()
                    handleEdit(index)
                    setId(index)
                  }}>
                    Edit
                  </button> */}
                    <Link
                      to={`/updatePost/${item.id}`}
                      className="btn btn-primary"
                    >
                      Edit
                    </Link>
                  </td>
                  <td>
                    <Link to={`/view/${item.id}`} className="btn btn-secondary">
                      View
                    </Link>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetData;
