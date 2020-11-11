import React, {useState, useEffect} from "../web_modules/react.js";
import logo2 from "./logo.svg.proxy.js";
import "./App.css.proxy.js";
import Quote from "./quote.js";
function App2() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1e3);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  return /* @__PURE__ */ React.createElement("div", {
    className: "App"
  }, /* @__PURE__ */ React.createElement(Quote, null));
}
export default App2;
