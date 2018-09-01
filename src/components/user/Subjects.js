import React from "react";

import Subject from "./subjects/Subject";
export default class Subjects extends React.Component {
  getSubjects() {
    return [
      {
        id: 1,
        name: "ЦиМПЦУ",
        desciption:
          "Lorem ipsum dolor sit amet,no sea takimata sanctus est Lorem ipsum dolor sit amet.  consetetur sadipscing elitr,  At vero eos et accusam et justo duo dolores et ea rebum.  А"
      },
      {
        id: 2,
        name: "КТСТК",
        desciption:
          "Lorem ipsum dolor sit amet,no sea takimata sanctus est Lorem ipsum dolor sit amet.  consetetur sadipscing elitr,  At vero eos et accusam et justo duo dolores et ea rebum.  А"
      }
    ];
  }

  renderSubjects() {
    return this.getSubjects().map((item, index) => {
      return (
        <Subject
          mediumScr={3}
          smallScr={12}
          name={item.name}
          description={item.desciption}
          key={index}
          id={item.id}
        />
      );
    });
  }

  render() {
    return <div style={{ display: "flex" }}> {this.renderSubjects()}</div>;
  }
}
