import React from "react";
import NavBar from "./Components/NavBar"
import Home from "./pages/bandPage/bandPage";
import {BrowserRouter as Router} from "react-router-dom"





function App() {
  return (

    <Router>
      <Home/>
    </Router>
    
  );
}

export default App;
