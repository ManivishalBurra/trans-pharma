import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
var socket = new WebSocket("ws://localhost:8080/socket");

function Home() {
  
  socket.onopen = function () {
    console.log("Connect")
  };

  socket.onmessage = function (e) {
    console.log(e, "ramvinay")
  };

  // function send() {
  //   socket.send(input.value);
  //   input.value = "";
  // }

  useEffect(()=>{
    socket.send("hello burra")
  },[])
  

  return (
    <div>
      <h1>hello world</h1>
    </div>
  );
}

export default Home;
