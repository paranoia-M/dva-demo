import React, { Component, useState } from "react";
import { antd, Card, Row, Col, Table, Button } from "antd";

const ToDo = () => {
  const [val, setVal] = useState();
  const [arr, setArr] = useState([]);
  const handleChange = (e) => {
    setVal(e.target.value);
  };
  const handleAdd = (e) => {
    e.preventDefault();
    setArr([...arr, { id: Math.random(), text: val, isEnd: false }]);
  };
  const handleDel = (index) => {
    console.log(arr);
    let delItem = arr.filter((_, i) => i !== index);
    setArr(delItem);
    setVal(" ");
  };
  return (
    <Card>
      <label htmlFor="todo">Todo</label>
      <input type="text" id="todo" onChange={handleChange} value={val} />
      <Button onClick={handleAdd}>Add</Button>
      <Card>
        <ul>
          {arr.map((item, index) => {
            return (
              <li key={index}>
                <h1>{item.text}</h1>
                <Button onClick={() => handleDel(index)}>Del</Button>
              </li>
            );
          })}
        </ul>
      </Card>
    </Card>
  );
};
export default ToDo;
