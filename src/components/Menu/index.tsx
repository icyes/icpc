import React from "react";
import style from "./index.module.scss";
import emitter from "../../utils/events";
interface SomeProps {
  current: any;
  changeCurrent: any;
}
interface SomeState {
  menus: any;
}
export default class Header extends React.Component<SomeProps, SomeState> {
  eventEmitter: import("events").EventEmitter | undefined;
  constructor(props: Readonly<{ current: any; changeCurrent: any }>) {
    super(props);
    this.state = {
      menus: [
        "Home",
        "Speakers and Organisers",
        "Programme",
        "Registration and Abstract Submission",
        "Accommodation and Shuttles",
        "Sponsors",
        "Financial Assistance",
        "Visa Information",
        "Social Program",
        "Contact"
      ]
    };
  }

  componentDidMount() {
    // 组件装载完成以后声明一个自定义事件
    this.eventEmitter = emitter.addListener("onRegEvent", message => {
      console.log(message);
      this.props.changeCurrent(3);
    });
  }
  componentWillUnmount() {
    emitter.removeListener("onRegEvent", () => {});
  }

  pickMenu(_i: any, e: { preventDefault: () => void }) {
    e.preventDefault();
    this.props.changeCurrent(_i);
  }

  render() {
    let { menus } = this.state;
    let { current } = this.props;

    let lis = [];
    for (let i in menus) {
      lis.push(
        <li
          className={`${style.mli} ${current == i ? style.active : ""}`}
          onClick={this.pickMenu.bind(this, i)}
          key={i}
        >
          {menus[i]}
        </li>
      );
    }
    return (
      <div className={style.menus}>
        <ul>{lis}</ul>
      </div>
    );
  }
}
