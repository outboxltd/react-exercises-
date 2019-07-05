import React from 'react';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import Header from "../header/Header"
import Lists from "../lists/Lists"
import Footer from "../footer/Footer"
// import Taskbbar from "../taskbbar/Taskbbar"

// import './App.css';

function Container() {
  return (
    <div>

      
      
      
      <Header name="here are your tasks" />
      <Lists/>
      <Footer/>
    


    </div>
  );
}



export default Container;
