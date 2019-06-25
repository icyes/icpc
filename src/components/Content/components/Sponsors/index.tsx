import React from "react";
import style from "./index.module.scss";
import DateHead from "../../../DateHead";
import TipTitle from "../../../TipTitle";
import announcedImg from "@/assets/imgs/announced.png";

interface someProps {
  content: any;
}
export default class Header extends React.Component<someProps> {
  constructor(props: Readonly<someProps>) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <DateHead />
        <div className={style.Sponsors}>
          <TipTitle name="Sponsors" />
        </div>
        <div className="flex center column">
          <img className={style.announcedImg} src={announcedImg} alt="" />
          <div className={style.announced}>To be announced！</div>
        </div>
      </div>
    );
  }
}
