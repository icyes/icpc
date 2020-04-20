import React from "react";
import "./index.scss";
import Home from "./components/Home";
import Speakers from "./components/Speakers";
import Programme from "./components/Programme";
import Registration from "./components/Registration";
import Accommodation from "./components/Accommodation";
import Sponsors from "./components/Sponsors";
import Financial from "./components/Financial";
import Visa from "./components/Visa";
import Social from "./components/Social";
import Contact from "./components/Contact";
import request from "../../utils/request";

export default class Header extends React.Component<
  { current: any },
  { content: any }
> {
  constructor(props: Readonly<{ current: any }>) {
    super(props);
    this.state = {
      content: ""
    };
  }
  componentWillMount() {
    this.getContent();
  }
  componentDidUpdate(prevProps: { current: any }) {
    if (this.props.current !== prevProps.current) {
      this.getContent();
    }
  }
  getContent() {
    const _this = this;
    let { current } = this.props;
    request(
      "get",
      `articleByKey?tag=${Number(current) + 1}`,
      {},
      function(res: any) {
        let content = "";
        if (res && res.data) {
          content = res.data.content;
        }
        _this.setState({
          content
        });
      },
      function(error: any) {
        console.log(error);
      }
    );
    // request(`articleByKey?tag=${Number(current) + 1}`).then(res => {
    //   // try {
    //   // let {
    //   //   data: { content }
    //   // } = res;
    //   let content = "";
    //   if (res && res.data) {
    //     content = res.data.content;
    //   }
    //   this.setState({
    //     content
    //   });
    //   // } catch (error) {
    //   //   this.setState({
    //   //     content: ""
    //   //   });
    //   //   console.log(error);
    //   // }
    // });
  }
  render() {
    let { content } = this.state;
    let { current } = this.props;
    let cont;
    switch (Number(current)) {
      case 0:
        cont = <Home content={content} />;
        break;
      case 1:
        cont = <Speakers content={content} />;
        break;
      case 2:
        cont = <Programme content={content} />;
        break;
      case 3:
        cont = <Registration content={content} />;
        break;
      case 4:
        cont = <Accommodation content={content} />;
        break;
      case 5:
        cont = <Sponsors content={content} />;
        break;
      case 6:
        cont = <Financial content={content} />;
        break;
      case 7:
        cont = <Visa content={content} />;
        break;
      case 8:
        cont = <Social content={content} />;
        break;
      case 9:
        cont = <Contact content={content} />;
        break;
      default:
        cont = "watting ...";
        break;
    }
    return <div className="flex b-content">{cont}</div>;
  }
}
