import React, { Component } from "react";
import { connect } from "dva";

// @connect((dvaDemo) => {
//   dvaDemo;
// })
class DvaDemo extends Component {
  handleChange = () => {
    this.props.dispatch({
      type: "dvaDemo/setName",
      data: {
        name: "zwb",
      },
    });
  };
  handleAdd = () => {
    this.props.dispatch({
      type: "dvaDemo/addNum",
    });
  };
  handleRed = () => {
    this.props.dispatch({
      type: "dvaDemo/RedNum",
    });
  };
  handleFetch = () => {
    this.props.dispatch({
      type: "dvaDemo/fetchState",
    });
  };
  render() {
    const context = this.props.fData;
    console.log(context);
    return (
      <div>
        <h1>msg: {this.props.msg}</h1>
        <h1>name: {this.props.name}</h1>
        <button onClick={this.handleChange}>改变名字</button>
        <h1>计数器: {this.props.num}</h1>
        <button onClick={this.handleAdd}>加一</button>
        <button onClick={this.handleRed}>减一</button>
        <h1>请求数据</h1>
        <button onClick={this.handleFetch}>fetch请求</button>
        <h1>段子内容</h1>
        {context.map((item, index) => {
          return (
            <div key={index}>
              <span>{index}</span>
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state.dvaDemo.fetchData);
  let fData = state.dvaDemo.fetchData;
  return {
    msg: "msg信息",
    name: state.dvaDemo.name,
    num: state.dvaDemo.num,
    fData,
  };
};
export default connect(mapStateToProps)(DvaDemo);

// export default DvaDemo;
