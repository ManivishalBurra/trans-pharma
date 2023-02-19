import React from 'react';
import Home from "./pages/Home"
import {Route, BrowserRouter as Router,Routes} from 'react-router-dom';

function Render() {

  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Home/>} />
      {/* <Route  path="*" component={Error} /> */}
      </Routes>
    </Router>
  );
}

export default Render;
