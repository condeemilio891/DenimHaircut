import React from "react";
import NavBar from "./Components/NavBar"
import Home from "./pages/bandPage/bandPage";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"





function App() {
  return (

    <Router>
      <Switch>
          <Route path="/" component={Home} exact/>
          
      </Switch>
    </Router>
    
  );
}

export default App;
