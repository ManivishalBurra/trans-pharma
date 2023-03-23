import React from 'react';
import Home from "./pages/Home"
import {Route, BrowserRouter as Router,Routes} from 'react-router-dom';
import CreateOrder from './pages/CreateOrder';

function Render() {

  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/createorder/:from/:to/:pick_date/:drop_date" element={<CreateOrder/>} />
      {/* <Route  path="*" component={Error} /> */}
      </Routes> 
    </Router>
  );
}

export default Render;
