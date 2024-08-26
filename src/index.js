import ReactDOM from 'react-dom/client';
import React from 'react';
import Main from './Main';

const root = ReactDOM.createRoot(document.getElementById('root'));

const flowers = ["Rose", "Dahlia", "Magnolia", "Tulip", "Daisy"];
const message = "Programming with Harsh";

// Without JSX 
const element = React.createElement("h1", {}, "Programming with Harsh");
const element2 = React.createElement(
  "ul",
  null,
  flowers.map((item, index) => React.createElement("li", { key: index }, item))
)

// With JSX 
const element3 = <h1>Programming with Harsh - 2 + 2 is {2 + 2}</h1>;
const element4 = <ul>
  {
    flowers.map((item, index) => (
      <li key={index}>{item}</li>
    ))
  }
</ul>
root.render(
  <Main />
);
