import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Add_User from './Component/Add_User';
import GetData from './Component/GetData';
import Update_data from './Component/Update_data';
import View from './Component/View';

const App = () => {
  return (
    <div style={{ textAlignLast: "center", textDecoration: "underline" }}>
      <h1>Crud Operation Through React-Redux</h1>
      <Switch>
        <Route exact path="/" component={GetData} />
        <Route path="/add_user" component={Add_User} />
        <Route path="/updatePost/:id" component={Update_data} />
        <Route path="/view/:id" component={View} />
      </Switch>
    </div>
  );
};

export default App;