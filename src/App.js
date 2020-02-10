import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Lady",
      animal: "Dog",
      breed: "Terrier Cross"
    }),
    React.createElement(Pet, {
      name: "Sharon",
      animal: "Rodent",
      breed: "Gerbil"
    }),
    React.createElement(Pet, {
      name: "Tracey",
      animal: "Rodent",
      breed: "Gerbil"
    })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
