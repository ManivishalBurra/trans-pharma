import React from 'react';
import Home from "./pages/Home"
import {Route, BrowserRouter as Router,Routes} from 'react-router-dom';
import CreateOrder from './pages/CreateOrder';
import Notification from './pages/Notification';
import MyOrder from './pages/MyOrder';
import Error from './pages/Error';

function Render() {

  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/createorder/:from/:to/:pick_date/:drop_date" element={<CreateOrder/>} />
      <Route exact path="/notification" element={<Notification/>} />
      <Route exact path="/myorder" element={<MyOrder/>} />
      <Route exact path="*" element={<Error/>} />
      </Routes> 
    </Router>
  );
}

export default Render;
