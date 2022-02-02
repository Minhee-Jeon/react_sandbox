import React, { Component } from "react";

export default class ScrollBox extends Component {
  /*
    자바스크립트로 스크롤바를 내릴 때에는 DOM 노드가 가진 다음 값들을 사용한다.
    - scrollTop: 세로 스크롤바 위치 (0~350)
    - scrollHeight: 스크롤이 있는 박스 안의 div 높이(650)
    - clientHeight: 스크롤이 있는 박스의 높이 (300)
    */
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    // 비구조화 할당 문법. 다음과 동일한 의미이다.
    // const scrollHeight = this.box.scrollHeight;
    // const clientHeight = this.box.clientHeight;
    this.box.scrollTop = scrollHeight - clientHeight;
  };
  render() {
    const style = {
      border: "1px solid black",
      height: "300px",
      width: "300px",
      overflow: "auto",
      position: "relative",
    };

    const innerStyle = {
      width: "100%",
      height: "650px",
      background: "linear-gradient(white, black)",
    };
    return (
      <div
        style={style}
        ref={(ref) => {
          this.box = ref;
        }}
      >
        <div style={innerStyle} />
      </div>
    );
  }
}
