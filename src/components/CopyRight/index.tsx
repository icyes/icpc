import React from "react";
import style from "./index.module.scss";
export default class Header extends React.Component {
  render() {
    return (
      <div className={`${style.copyRight} flex center `}>
        Copyright© International Conference on Politics, Economics and
        Management. All rights reserve
      </div>
    );
  }
}
