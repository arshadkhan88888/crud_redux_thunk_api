import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { viewUser } from '../Redux/Action/ActionFunctions';

const View = () => {
    debugger
    // const [data1, setData1] = useState({});
    const dispatch = useDispatch();
    const {id}=useParams()
    const user = useSelector(state => state.users.user)
    useEffect(() => {
        debugger;
        dispatch(viewUser(id));
        debugger
    //      
    }, [])
   
    debugger
    return (
      <div>
        <h1>{user.id}</h1>
        <h1>{user.name}</h1>
        <h1>{user.username}</h1>
        <h1>{user.email}</h1>
      </div>
    );
};

export default View;