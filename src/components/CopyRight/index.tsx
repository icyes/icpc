import React from "react";
import style from "./index.module.scss";
export default class Header extends React.Component {
  render() {
    return (
      <div className={`${style.copyRight} flex center `}>
        Copyright© Institute of Drug Discovery Technology, Ningbo University
      </div>
    );
  }
}
