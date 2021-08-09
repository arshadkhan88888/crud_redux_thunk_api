import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BootstrapTable from "react-bootstrap-table-next"
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
const Searc = () => {
  const [search, setSerch] = useState("");
  const [data1, setData1] = useState([]);

  const pagination = paginationFactory({
    page: 1,
    sizePerPage: 5,
    lastPageText: ">>",
    firstPageText: "<<",
    nextPageText: ">",
    prePageText: "<",
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    }
  })

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setData1(res.data));
    
  }, []);

  const columns = [
    { dataField: "id", text: "ID" },
    { dataField: "name", text: "Name",sort:true},
    { dataField: "username", text: "UserName" },
    { dataField: "email", text: "Email" },
  ];


  const searchHandle = (e) => {
    setSerch(e.target.value);
  };

  return (
    <div >
      <h1>Searching</h1>
      <input type="text" value={search} onChange={searchHandle} />
      <BootstrapTable
        bootstrap4
        keyField="id"
        columns={columns}
        data={data1.filter((res)=>res.name.toLowerCase().includes(search.toLowerCase()))}
        pagination={pagination}
      //  filter={filterFactory()}
        
        />
    </div>
  );
};;

export default Searc;