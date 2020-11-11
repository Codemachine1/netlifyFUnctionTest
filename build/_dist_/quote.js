import React, {useState, useEffect} from "../web_modules/react.js";
import logo2 from "./logo.svg.proxy.js";
import "./App.css.proxy.js";
export default function Quote() {
  var [quote, setQuote] = useState("");
  useEffect(() => {
    async function getQuote() {
      const response = await fetch("/.netlify/functions/getPositiveQuotes");
      const result = await response.json();
      setQuote(result.quote);
    }
    getQuote();
  });
  return /* @__PURE__ */ React.createElement("p", null, quote);
}
