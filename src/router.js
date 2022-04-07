import React from "react";
import { Router, Route, Switch } from "dva/router";
import IndexPage from "./routes/IndexPage";
import Products from "./routes/Products";
import Demo from "./routes/Demo";
import DvaDemo from "./routes/DvaDemo";
import ImgDemo from "./routes/ImgDemo";
import ReactView from "./routes/ReactView";
import UseR from "./routes/UseR";
import UseC from "./routes/UseC";
import Eff from "./routes/Eff";
import Ctx from "./routes/Ctx";
import ToDo from "./routes/ToDo";
import DvaD1 from "./routes/com/DvaD1";
import todo from "./routes/todo/index.js";
import UseRequest from "./routes/ahooks/UseRequest.js";
import LifeCycle from "./routes/com/LifeCycle";
import Closure from "./routes/com/Closure";
import PraHooks from "./routes/myhooks/PraHooks";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/products" exact component={Products} />
        <Route path="/demo" exact component={Demo} />
        <Route path="/dva" exact component={DvaDemo} />
        <Route path="/img" exact component={ImgDemo} />
        <Route path="/view" exact component={ReactView} />
        <Route path="/reducer" exact component={UseR} />
        <Route path="/cal" exact component={UseC} />
        <Route path="/eff" exact component={Eff} />
        <Route path="/ctx" exact component={Ctx} />
        <Route path="/todo" exact component={ToDo} />
        <Route path="/dva1" exact component={DvaD1} />
        <Route path="/todo1" exact component={todo} />
        <Route path="/request" exact component={UseRequest} />
        <Route path="/life" exact component={LifeCycle} />
        <Route path="/closure" exact component={Closure} />
        <Route path="/hook1" exact component={PraHooks} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
