import React from "react";
import style from "./index.module.scss";
export default class Header extends React.Component<{ name: String }> {
  constructor(props: Readonly<{ name: String }>) {
    super(props);
  }
  render() {
    let { name } = this.props;
    return (
      <div className="flex align-center">
        <div className={style.adorn} />
        <div className={style.name}>{name}</div>
      </div>
    );
  }
}
