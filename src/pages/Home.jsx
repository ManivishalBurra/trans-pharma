import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom"


function Home({match}) {
  let {roomId} = useParams();
  var socket = new WebSocket(`ws://localhost:8080/socket/${roomId}`);
  const [status, setStatus] = useState(roomId);
  socket.onopen = function () {
    console.log("Connect")
  };

  socket.onmessage = function (e) {
    console.log(e, "ramvinay")
    setStatus(e.data)
  };

  function send() {
    socket.send("ram vinay");
    
  }

  return (
    <div>
      <h1>{status}</h1>
    </div>
  );
}

export default Home;
