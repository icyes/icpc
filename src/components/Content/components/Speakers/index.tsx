import React from "react";
import style from "./index.module.scss";
import DateHead from "../../../DateHead";
import TipTitle from "../../../TipTitle";
import DoubLine from "../../../DoubLine";
import TableList from "../../../TableList";
const List1 = [
  [
    { text: "Yufen Zhao", width: 20 },
    { text: "Professor", width: 15 },
    { text: "Ningbo University, Xiamen University " }
  ],
  [
    { text: "Yan-Mei Li", width: 20 },
    { text: "Professor", width: 15 },
    { text: "Tsinghua University " }
  ],
  [
    { text: "Quiling Ding", width: 20 },
    { text: "Professor", width: 15 },
    {
      text:
        "Shanghai Institute of Organic Chemistry, Chinese Academy of Sciences"
    }
  ],
  [
    { text: "周其林", width: 20 },
    { text: "Professor", width: 15 },
    {
      text: "南开大学"
    }
  ],
  [
    { text: "周翔", width: 20 },
    { text: "Professor", width: 15 },
    {
      text: "南开大学"
    }
  ],
  [
    { text: "常俊标", width: 20 },
    { text: "Professor", width: 15 },
    {
      text: "河南师范大学"
    }
  ],
  [
    { text: "席真", width: 20 },
    { text: "Professor", width: 15 },
    {
      text: "南开大学"
    }
  ],
  [
    { text: "张文雄", width: 20 },
    { text: "Professor", width: 15 },
    {
      text: "北京大学"
    }
  ],
  [
    { text: "任雪玲", width: 20 },
    { text: "Professor", width: 15 },
    {
      text: "郑州大学"
    }
  ],
  [
    { text: "贺红武", width: 20 },
    { text: "Professor", width: 15 },
    {
      text: "华中师范大学"
    }
  ],
  [
    { text: "尹应武", width: 20 },
    { text: "Professor", width: 15 },
    {
      text: "厦门大学"
    }
  ],
  [
    { text: "陈拥军", width: 20 },
    { text: "Professor", width: 15 },
    {
      text: "基金委化学部"
    }
  ],
  [
    { text: "张艳", width: 20 },
    { text: "Professor", width: 15 },
    {
      text: "基金委化学生物学部"
    }
  ]
];

const List2 = [
  [
    { text: "赵玉芬", width: 20 },
    { text: "院士/教授", width: 15 },
    { text: "厦门大学/宁波大学" }
  ],
  [
    { text: "李艳梅", width: 20 },
    { text: "杰青/教授", width: 15 },
    { text: "清华大学" }
  ],
  [
    { text: "倪锋", width: 20 },
    { text: "教授", width: 15 },
    { text: "宁波大学" }
  ],
  [{ text: "宁大科技处", width: 20 }],
  [{ text: "宁大国际处", width: 20 }],
  [{ text: "宁波市科协", width: 20 }],
  [{ text: "材化学院", width: 20 }],
  [{ text: "食药学院", width: 20 }],

  [{ text: "海洋学院", width: 20 }],
  [{ text: "工业界代表", width: 20 }],
  [{ text: "新药院全体老师", width: 20 }]
];

// let Users = [
//   { name: "Frank H. Ebetino", country: "USA, Chairman" },
//   { name: "Koop Lammertsma", country: "The Netherlands" },
//   { name: "Remi Chauvin", country: "France" },
//   { name: "Charles E. McKenna", country: "USA, Co-Chairman" },
//   { name: "Alexander Gabibov", country: "Russia" },
//   { name: "Christian Müller", country: "Germany" },
//   { name: "Declan Gilheany", country: "Ireland" },
//   { name: "Oleg Sinyashin", country: "Russia" },
//   { name: "Hansjörg Grützmacher", country: "Switzerland" },
//   { name: "Chris Slootweg", country: "The Netherlands" },
//   { name: "Evamarie Hey-Hawkins", country: "Germany" },
//   { name: "Chris Stevens", country: "Belgium" },
//   { name: "Muriel Hissler", country: "France" },
//   { name: "Chris Spilling", country: "USA" },
//   { name: "Pawel Kafarski", country: "Poland" },
//   { name: "David Wiemer", country: "USA" },
//   { name: "Vitalii Kalchenko", country: "Ukraine" },
//   { name: "Gary Woodward", country: "USA" },
//   { name: "Takayuki Kawashima", country: "Japan" },
//   { name: "Anton Vidal", country: "Spain" },
//   { name: "György Keglevich", country: "Hungary" },
//   { name: "Masaaki Yoshifuji", country: "Japan" },
//   { name: "Yufen Zhao", country: "China" },
//   //
//   { name: "Andrei Karasik", country: "Russia" },
//   { name: "Yan-Mei Li", country: "China" },
//   { name: "Jozef Drabowicz", country: "Poland" },
//   { name: "Maria Caporali", country: "Italy" }
// ];
interface someProps {
  content: any;
}
export default class Header extends React.Component<someProps> {
  constructor(props: Readonly<someProps>) {
    super(props);
    this.state = {};
  }
  render() {
    let lineBox = [];
    let Users = [
      { name: "Frank H. Ebetino", country: "USA, Chairman" },
      { name: "Koop Lammertsma", country: "The Netherlands" },
      { name: "Remi Chauvin", country: "France" },
      { name: "Charles E. McKenna", country: "USA, Co-Chairman" },
      { name: "Alexander Gabibov", country: "Russia" },
      { name: "Christian Müller", country: "Germany" },
      { name: "Declan Gilheany", country: "Ireland" },
      { name: "Oleg Sinyashin", country: "Russia" },
      { name: "Hansjörg Grützmacher", country: "Switzerland" },
      { name: "Chris Slootweg", country: "The Netherlands" },
      { name: "Evamarie Hey-Hawkins", country: "Germany" },
      { name: "Chris Stevens", country: "Belgium" },
      { name: "Muriel Hissler", country: "France" },
      { name: "Chris Spilling", country: "USA" },
      { name: "Pawel Kafarski", country: "Poland" },
      { name: "David Wiemer", country: "USA" },
      { name: "Vitalii Kalchenko", country: "Ukraine" },
      { name: "Gary Woodward", country: "USA" },
      { name: "Takayuki Kawashima", country: "Japan" },
      { name: "Anton Vidal", country: "Spain" },
      { name: "György Keglevich", country: "Hungary" },
      { name: "Masaaki Yoshifuji", country: "Japan" },
      { name: "Yufen Zhao", country: "China" },
      //
      { name: "Andrei Karasik", country: "Russia" },
      { name: "Yan-Mei Li", country: "China" },
      { name: "Jozef Drabowicz", country: "Poland" },
      { name: "Maria Caporali", country: "Italy" }
    ];
    let users = Users.sort((a: any, b: any) => {
      var x = a.name;
      var y = b.name;
      return x < y ? -1 : x > y ? 1 : 0;
    });
    for (let i = 0; i < users.length; i++) {
      lineBox.push(
        <div className={style.boxSet} key={i}>
          <DoubLine name={users[i].name} country={users[i].country} />
        </div>
      );
    }

    let { content } = this.props;
    return (
      <div>
        <DateHead />
        <div
          className="richText"
          dangerouslySetInnerHTML={{
            __html: content
          }}
        />
        {/* <div className={style.Organisers}>
          <TipTitle name="Speakers" />
        </div>
        <div className={style.Speakers}>
          <div
            dangerouslySetInnerHTML={{
              __html: "To be announced."
            }}
          />
        </div>
        <div className={style.Organisers}>
          <TipTitle name="Organisers" />
        </div>
        <div className={style.Committee}>Steering Committee</div>
        <div className="flex wrap">{lineBox}</div>
        <div className={style.Scientific}>
          <TableList
            list={List1}
            headColor="#40444F"
            title={[{ text: "Scientific Advisory Committee", width: 100 }]}
          />
        </div>

        <div className={style.Local}>
          <TableList
            list={List2}
            headColor="#6A942E"
            title={[{ text: "Local Organizing Committee", width: 100 }]}
          />
        </div> */}
      </div>
    );
  }
}
