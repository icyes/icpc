import React from "react";
import "./index.scss";
import Menu from "../Menu";
import Content from "../Content";
interface SomeProps {}
interface SomeState {
  current: any;
}
export default class Header extends React.Component<SomeProps, SomeState> {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      current: 0
    };
    this.changeCurrent = this.changeCurrent.bind(this);
  }
  changeCurrent(current: any) {
    console.log("cur", current);
    this.setState({
      current
    });
  }
  render() {
    let { current } = this.state;
    return (
      <div className="flex main-body">
        <Menu changeCurrent={this.changeCurrent} current={current} />
        <Content current={current} />
      </div>
    );
  }
}
