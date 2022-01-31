import React, { Component } from "react";
import PropTypes from "prop-types";

class MyComponent extends Component {
  static defaultProps = {
    name: "기본 이름",
  };

  static propTypes = {
    name: PropTypes.string,
    requiredNumber: PropTypes.number.isRequired,
  };

  render() {
    const { name, requiredNumber, children } = this.props; //비구조화 할당
    return (
      <div>
        안녕하세요, 제 이름은 {name}입니다. <br />
        children 값은 {children}입니다. <br />제 필수고유번호는 {requiredNumber}
        예요.
      </div>
    );
  }
}

export default MyComponent;
