import React from 'react';
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
import Search from "./components/Search";
import Save from "./components/Save";

function App() {
  return (
    <div className="App">
    <Navbar />
    <div className = "container">
      <Switch>
      <Route path="/search" exact component={Search} /> 
      <Route path= "/save" exact component = {Save} />
      </Switch>
    </div>
    </div>
  );
}

export default App;
