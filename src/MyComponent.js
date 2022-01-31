import React, { Component } from "react";
import PropTypes from "prop-types";

const MyComponent = ({ name, requiredNumber, children }) => {
  //비구조화 할당: 객체에서 값 추출
  return (
    <div>
      안녕하세요, 제 이름은 {name}입니다. <br />
      children 값은 {children}입니다. <br />제 필수고유번호는 {requiredNumber}
      예요.
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본 이름", //name이 정해지지 않았을 때 정해지는 값
};

MyComponent.propTypes = {
  name: PropTypes.string,
  requiredNumber: PropTypes.number.isRequired,
};

export default MyComponent;
