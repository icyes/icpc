import React from "react";
import style from "./index.module.scss";
interface someProps {
  name: String;
  country: String;
}
export default class Header extends React.Component<someProps> {
  constructor(props: Readonly<{ name: String; country: String }>) {
    super(props);
  }
  render() {
    let { name, country } = this.props;
    return (
      <div className="flex column">
        <div className={style.name}>{name}</div>
        <div className={style.country}>{country}</div>
      </div>
    );
  }
}
