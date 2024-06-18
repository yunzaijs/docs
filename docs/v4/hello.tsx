import React from "react";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
// 相对路径
const url = require("./resources/example.png");
// 样式内引入
const styles = {
  background: `url(${url})`,
  backgroundSize: "100% 100%",
};
export default function App() {
  return (
    <>
      <div style={styles}></div>
      <img src={url} />
    </>
  );
}