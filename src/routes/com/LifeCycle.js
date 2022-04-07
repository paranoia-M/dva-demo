import React, { Component } from "react";

class LifeCycle extends Component {
  // 挂载
  constructor(props) {
    super(props);
    this.state = {
      name: "zzs",
      message: "hello",
    };
    console.log("挂载-constructor");
  }
  componentWillMount() {
    console.log("挂载-componentWillMount");
  }

  componentDidMount() {
    console.log("挂载-componentDidMount");
  }

  // 更新
  // componentWillReceiveProps() {
  //   console.log("更新-componentWillReceiveProps");
  // }
  shouldComponentUpdate(nextState) {
    if (nextState.message !== this.state.message) {
      return true;
    }
    return false;
  }
  handleClick = () => {
    this.setState((prevState, props) => {
      return (prevState.name = "zss");
    });
    // this.setState({ name: "zwb" });
  };
  //卸载
  componentWillUnmount() {
    console.log("卸载-componentWillUnmount");
  }

  render() {
    console.log("父组件渲染");
    const { name, message } = this.state;
    return (
      <div>
        <h1>Father</h1>
        <button onClick={this.handleClick}>change</button>
        <h2>
          {name}
          {message}
        </h2>
        <Children1 name={name} message={message}></Children1>
      </div>
    );
  }
}

class Children1 extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.message !== this.props.message) {
      return true;
    }
    return false;
  }
  render() {
    console.log("子组件渲染");
    return (
      <div>
        <h1>Children1</h1>
        <p>
          子组件state，从父组件传过来的
          <h2>
            {this.props.name}
            {this.props.message}
          </h2>
        </p>
      </div>
    );
  }
}
export default LifeCycle;
