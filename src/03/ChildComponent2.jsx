import React from 'react';
import Proptypes from 'prop-types';

class ChildComponent2 extends React.Component {
  render() {
    const { objValue, requiredStringValue } = this.props;

    return (
      <div>
        <div>객체값: {String(Object.entries(objValue))}</div>
        <div>필수값: {requiredStringValue}</div>
      </div>
    );
  }
}

ChildComponent2.propTypes = {
  //객체프로퍼티
  objValue: Proptypes.shape({
    name: Proptypes.string,
    age: Proptypes.number,
  }),

  //필수프로퍼티
  requiredStringValue: Proptypes.string.isRequired,
};

export default ChildComponent2;
