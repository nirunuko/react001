import { StrictMode } from "react";
import ReactDom from "react-dom";

import App from "./App";

ReactDom.render(
  <StrictMode>
    <app />
  </StrictMode>,
  document.getElementById("root")
);
