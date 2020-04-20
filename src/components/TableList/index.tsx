import React from "react";
import style from "./index.module.scss";
interface someProps {
  list: any;
  headColor: string;
  title: Array<{ text: String; width: Number }>;
}
interface someState {}
export default class Header extends React.Component<someProps> {
  constructor(props: Readonly<someProps>) {
    super(props);
  }
  render() {
    let { list, headColor, title } = this.props;
    // let tableBox = [];
    // for (let i in list) {
    //   tableBox.push(
    //     <div className={`flex align-center ${style.cell}`} key={i}>
    //       return(
    //         list[i].map(
    //           (item.index)=>{
    //           <div style={{'width':10%}}>{list[i].text}</div>
    //           })
    //     </div>
    //   );
    // }

    let titleBox = [];
    for (let i in title) {
      titleBox.push(
        <div style={{ width: title[i].width + "%" }} key={i}>
          {title[i].text}
        </div>
      );
    }
    return (
      <div className={`flex  column ${style.tableBox}`}>
        <div
          className={`flex align-center ${style.title}`}
          style={{ background: headColor }}
        >
          {titleBox}
        </div>
        {/* <div className={style.tbody}>
          {list.map((item: any, index: any) => {
            return (
              <div className={`flex align-center ${style.cell}`} key={index}>
                {item.map((im: any, i: any) => {
                  return (
                    <div
                      className={style.line}
                      style={{ width: im.width + "%" }}
                      key={i}
                    >
                      {im.text}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div> */}
      </div>
    );
  }
}
