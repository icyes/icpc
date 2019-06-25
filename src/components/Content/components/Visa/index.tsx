import React from "react";
import style from "./index.module.scss";
import DateHead from "../../../DateHead";
import TipTitle from "../../../TipTitle";

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
          <TipTitle name="Visa Information" />
        </div>
        <div className={style.text}>
          Please plan enough time for your visa application to ensure a timely
          process of your visa, and if you need a Letter of Invitation <br />
          to apply for visa, please contact the conference secretary at
          <span className={style.green}> XXXX@xxxxx.</span>
        </div>
      </div>
    );
  }
}
