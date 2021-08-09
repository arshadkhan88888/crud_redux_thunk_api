import axios from "axios";
import {
  ADD_POST,
  DELETE_ALL,
  DELETE_DATA,
  GET_DATA,
  GET_SINGLE_POST,
  UPDATE_POST,
  VIEW_USER,
} from "../Store/Types";

export const loadData = () =>async(dispatch) => {
 const res = await axios.get("http://localhost:3004/users");
      dispatch({
        type: GET_DATA,
        payload: res.data,
      })
    
}

export const deleteUser = (id) => (dispatch) => {
  axios.delete(`http://localhost:3004/users/${id}`);
   
      dispatch({
        type: DELETE_DATA,
        payload: id,
      })
}

export const getsingledata = (id) => (dispatch) => {
  // console.log("id", id);
  axios
    .get(`http://localhost:3004/users/${id}`)
    .then((res) =>
      dispatch({
        type: GET_SINGLE_POST,
        payload: res.data,
      })
    )

    .catch((err) => {
      dispatch({
        type: GET_SINGLE_POST,
        data: {
          err,
          // data: false,
        },
      });
    });
};

export const updatePost = (user, id) => async(dispatch) => {
  await axios.put(`http://localhost:3004/users/${id}`, user).then((res) =>
    dispatch({
      type: UPDATE_POST,
      payload: res.data,
    })
  );
};
export const addPost = (user) => async(dispatch) => {
  await axios.post(`http://localhost:3004/users`, user).then((res) =>
    dispatch({
      type: ADD_POST,
      payload: res.data,
    })
  );
};
export const viewUser = (id) => async(dispatch) => {
  await axios.get(`http://localhost:3004/users/${id}`).then((res) =>
    dispatch({
      type: VIEW_USER,
      payload: res.data,
    })
  );
};
