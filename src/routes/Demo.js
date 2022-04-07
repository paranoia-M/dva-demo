import React, { Component } from "react";
import { connect } from "dva";
import { Card, Row, Col } from "antd";

import styles from "./IndexPage.css";

class Demo extends Component {
  handleClick = () => {
    console.log(this.props);
    this.props.dispatch({
      type: "demo/setName",
      data: {
        name: "zzzzz",
      },
    });
  };
  componentDidMount() {
    // fetch("https://api.apiopen.top/getJoke")
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));
  }
  handleClickAsync = () => {
    this.props.dispatch({
      type: "demo/setNameAsync",
    });
  };
  handleFetch = () => {
    this.props.dispatch({
      type: "demo/getFetch",
      data: {},
    });
    console.log("a");
  };
  render() {
    return (
      <div>
        <h1>{this.props.msg}</h1>
        <h1>{this.props.name}</h1>
        <button onClick={this.handleClick}>获取</button>
        <button onClick={this.handleClickAsync}>异步获取</button>
        <button onClick={this.handleFetch}>调用接口</button>
        <div>
          <Card title="还款凭证">
            <Card
              title="河北建投小额贷款股份有限公司还款凭证"
              headStyle={{ textAlign: "center" }}
            >
              <Row>
                <Col>
                  <Row className={styles.aaa}>
                    <Col span={4}>借款日期:</Col>
                    <Col span={4}>借款日期内容</Col>
                    <Col span={4}>还款人:</Col>
                    <Col span={4}>还款人内容</Col>
                    <Col span={4}>贷款余额:</Col>
                    <Col span={4}>贷款余额内容</Col>
                  </Row>
                  <Row>
                    <Col span={4}>计息起止日期:</Col>
                    <Col span={4}>2022年11月12日至2022年12月12日</Col>
                    <Col span={4}>还款人:</Col>
                    <Col span={4}>还款人内容</Col>
                    <Col span={4}>贷款余额:</Col>
                    <Col span={4}>贷款余额内容</Col>
                  </Row>
                  <Row>
                    <Col span={4}>还款类型:</Col>
                    <Col span={4}>还款类型内容</Col>
                    <Col span={4}>还款本金:</Col>
                    <Col span={4}>还款本金内容</Col>
                    <Col span={4}>还款利息:</Col>
                    <Col span={4}>还款利息内容</Col>
                  </Row>
                  <Row>
                    <Col span={4}>实际还款金额:</Col>
                    <Col span={20}>实际还款金额内容</Col>
                  </Row>
                  <Row>
                    <Col span={4}>审批记录:</Col>
                    <Col span={20}>
                      <Row>
                        <Col span={10}>提前还款申请:</Col>
                        <Col span={14}>详情</Col>
                      </Row>
                      <Row>
                        <Col span={10}>提前还款申请:</Col>
                        <Col span={14}>详情</Col>
                      </Row>
                      <Row>
                        <Col span={10}>提前还款申请:</Col>
                        <Col span={14}>详情</Col>
                      </Row>
                      <Row>
                        <Col span={10}>提前还款申请:</Col>
                        <Col span={14}>详情</Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card>
          </Card>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    msg: "hello",
    name: state.demo.name,
    cnodeData: state.demo.cnodeData,
  };
};
export default connect(mapStateToProps)(Demo);
