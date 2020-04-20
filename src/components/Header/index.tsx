import React from "react";
import style from "./index.module.scss";
import { OSSURL } from "../../service/config.js";
import headLeft from "@/assets/imgs/headLeft.png";
import headRight from "@/assets/imgs/headRight.png";
export default class Header extends React.Component {
  render() {
    return (
      <div className={`flex align-center between ${style.header}`}>
        <img
          className={`fleft ${style.left}`}
          src={OSSURL + "headLeft.png"}
          alt=""
        />

        <img
          className={`fright ${style.right}`}
          src={OSSURL + "headRight.png"}
          alt=""
        />
      </div>
    );
  }
}
