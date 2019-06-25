import React from "react";
import "./index.scss";
import topImg from "@/assets/imgs/topImg.jpg";
export default class Header extends React.Component {
  render() {
    return (
      <div className="exhibition">
        <img className="ex-img" src={topImg} alt="" />
      </div>
    );
  }
}
