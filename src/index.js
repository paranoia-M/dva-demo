import dva from "dva";
import "./index.css";

// 1. 创dva实例

const app = dva({
  initialState: {
    products: [
      { name: "dva", id: 1 },
      { name: "antd", id: 2 },
    ],
  },
});

// 2. 装载插件
// app.use({require('dva-loading')()});

// 3. 注册Model
app.model(require("./models/products").default);
app.model(require("./models/demo").default);
app.model(require("./models/dvaDemo").default);
app.model(require("./models/dva1").default);

// 4. 配置路由
app.router(require("./router").default);

// 5. 启动应用
app.start("#root");
