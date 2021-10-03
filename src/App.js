import React from "react";
import NavBar from "./Components/NavBar"
import Home from "./pages/bandPage/bandPage";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import storePage from "./pages/storePage/storePage";
import ProductPage from "./pages/productPage/productPage"





function App() {
  return (

    <Router>
      <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/store" component={storePage} exact/>
          <Route path="/test" component={ProductPage} exact/>
      </Switch>
    </Router>
    
  );
}

export default App;
