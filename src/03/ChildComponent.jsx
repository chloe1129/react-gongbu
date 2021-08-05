import React from 'react';
import Proptypes from 'prop-types';

class ChildComponent extends React.Component {
  render() {
    const {
      //객체 구조 분해 할당식을 사용해 프로퍼티에 전달된 값을들 render() 함수 내의 지역 변수로 재정의
      boolValue,
      numValue,
      arrayValue,
      objValue,
      nodeValue,
      funcValue,
    } = this.props;

    return (
      <div>
        <span>불리언값: {boolValue}</span>
        <span>숫자값: {numValue}</span>
        <span>배열값: {arrayValue} </span>
        <span>객체값: {String(objValue)}</span>
        <span>노드값: {nodeValue}</span>
        <span>함수값: {String(funcValue)}</span>
      </div>
    );
  }
}

ChildComponent.Proptypes = {
  //객체 형태로 프로퍼티 자료형 정의
  boolValue: Proptypes.bool,
  numValue: PropTypes.number,
  arrayValue: PropTypes.arrayOf(PropTypes.number),
  objValue: PropTypes.object,
  nodeValue: PropTypes.node,
  funcValue: PropTypes.func,
};

export default ChildComponent;
