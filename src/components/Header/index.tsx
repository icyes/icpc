import React from "react";
import style from "./index.module.scss";
import headLeft from "@/assets/imgs/headLeft.png";
import headRight from "@/assets/imgs/headRight.png";
export default class Header extends React.Component {
  render() {
    return (
      <div className={`flex between ${style.header}`}>
        <div className="flex">
          <img className={style.left} src={headLeft} alt="" />
          {/* <div className="t-icpc">ICPC</div>
          <div className="t-nbo">Ningbo，2020</div> */}
        </div>
        <div className="flex justify-end">
          <img className={style.right} src={headRight} alt="" />
          {/* <div className="t-title">
            2020 International Conference on Phosphorus Chemistry
          </div>
          <div className="t-date">Ningbo,China/May 31-June 4, 2020</div> */}
        </div>
      </div>
    );
  }
}
