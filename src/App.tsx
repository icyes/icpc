import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import { Button, Icon } from "antd";
import Header from "./components/Header";
import Exhibition from "./components/Exhibition";
import Footer from "./components/Footer";
import MainBody from "./components/MainBody";
import CopyRight from "./components/CopyRight";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Exhibition />
        <MainBody />
        <Footer />
        <CopyRight />
      </div>
    </div>
  );
};

export default App;
