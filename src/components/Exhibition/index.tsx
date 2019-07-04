import React from "react";
import "./index.scss";
import { OSSURL } from "../../service/config.js";
import topImg from "@/assets/imgs/topImg.png";
export default class Header extends React.Component {
  render() {
    return (
      <div className="exhibition">
        <img className="ex-img" src={OSSURL + "topImg.png"} alt="" />
      </div>
    );
  }
}
