import React from 'react';

class StateExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loagin: true,
      formData: 'no data',
    };

    this.handleData = this.handleData.bind(this);

    setTimeout(this.handleData, 4000);
  }

  handleData() {
    const data = 'new data';
    const { formData } = this.state;

    this.setState({
      loading: false,
      formData: data + formData,
    });
  }
  render() {
    return (
      <div>
        {}
        <span>로등중: {String(this.state.loading)}</span>
        <span>결과: {this.state.formData}</span>
      </div>
    );
  }
}

export default StateExample;
