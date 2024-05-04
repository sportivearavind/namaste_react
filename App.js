import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement(JS object) => HTMLElement(render)


const root = ReactDOM.createRoot(document.getElementById("root"));

// JSX code is transpiled before it reaches the JS engine
// JSX => React.createElement => ReactElement(JS object) => HTMLElement(render)
const jsxHeading = 
  (<h1 id="head" className="header" tabIndex="1">
    Heading using JSX
  </h1>)
;

const school =  <h1>Vivekananda</h1>;

const ReactComponent = () => (
  <div id="container">
    <h1>This is React Functional Component</h1>
  </div>
);

const student = (
  <div>
    {ReactComponent}
  </div>
);

root.render(student);



