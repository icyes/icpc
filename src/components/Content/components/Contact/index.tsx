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
          <TipTitle name="Contact" />
        </div>
        <div className={style.content}>
          For any inquiries, please contact us via email:
          <br />
          <span className={style.green}>XXXX@XXXXX</span>
        </div>
      </div>
    );
  }
}
