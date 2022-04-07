import React, { Component } from "react";

import axios from "axios";
import { connect } from "dva";
import styles from "./IndexPage.css";

/* function IndexPage() {
  
  return (
    <div className={styles.normal}>
      <button>aa</button>
    </div>
  );
} */

class IndexPage extends Component {
  handleClick = () => {
    // console.log(111);
    axios
      .post(
        "https://www.fastmock.site/mock/700c3de794c8cdec7b3c3ff37d4d3383/test/student"
      )
      .then((res) => {
        console.log(res.data);
      });
  };
  render() {
    return (
      <div className={styles.normal}>
        <button onClick={this.handleClick}>aa</button>
      </div>
    );
  }
}

export default connect()(IndexPage);
