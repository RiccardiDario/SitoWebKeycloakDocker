import React from "react";
import './App.css';
import Chat from "../../components/Chat/Chat";
import SideBar from "../../components/SideBar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <div className="app__navbar">
      <Navbar /> 
      </div>
      <div className="app__body">
        <SideBar/>
        <Chat/>
      </div>
      <div className="app__footer">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
