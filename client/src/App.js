//utils import
import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { getToken } from './utils/api'

//components import
import Login from "./components/Login - Logout/Login";
import Logout from './components/Login - Logout/Logout'
import PrivateRoute from './components/Navigation/PrivateRoute'
import BubblePage from './components/Bubbles Components/BubblePage';

//styles import
import "./styles.scss";

function App() {

  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />

        <PrivateRoute exact path="/bubble-page" component={BubblePage} />
        <PrivateRoute exact path="/logout" component={Logout} />


        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
      </div>
    </Router>
  );
}

export default App;
