import React from "react";
import style from "./index.module.scss";
import arrowRight from "@/assets/imgs/arrow_right.png";

import emitter from "../../utils/events";

export default class Header extends React.Component {
  handleClick = (message: any) => {
    emitter.emit("onRegEvent", message);
  };

  render() {
    return (
      <div className={`flex between ${style.content}`}>
        <div className="flex column">
          <div className={style.title}>LOCATION & DATES</div>
          <div className={style.cont}>
            Ningbo University, Ningbo, Zhejiang, China
          </div>
          <div className={style.cont}>May 31 - June 4, 2020</div>
        </div>
        <div className={`flex column ${style.deadline}`}>
          <div className={style.title}>DEADLINES</div>
          <div className={style.cont}>Registration - 31 May 2020</div>
          <div className={style.cont}>Abstract - 28 February 2020</div>
        </div>
        <div>
          <div
            onClick={this.handleClick.bind(this, "reg")}
            className={`${style.regBtn} flex center`}
          >
            REGISTER NOW{" "}
            <img className={style.iconRight} src={arrowRight} alt="" />
          </div>
        </div>
      </div>
    );
  }
}
