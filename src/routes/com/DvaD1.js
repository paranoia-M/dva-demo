import React, { Component } from "react";
import { connect } from "dva";

@connect(({ dva1 }) => ({
  name: dva1.name,
  count: dva1.count,
}))
class DvaD1 extends Component {
  constructor(props) {
    super(props);
  }
  handleClick = () => {
    console.log(this.props);
    this.props.dispatch({
      type: "dva1/changeName",
      data: {
        name: "张志升",
      },
    });
  };
  handleAdd = () => {
    this.props.dispatch({
      type: "dva1/addNum",
      num: 0,
    });
  };
  render() {
    return (
      <div>
        <h1>{this.props.count}</h1>
        <button onClick={this.handleAdd}>add</button>
        <h1>{this.props.name}</h1>
        <button onClick={this.handleClick}>change</button>
      </div>
    );
  }
}

export default DvaD1;
