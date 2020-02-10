const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
