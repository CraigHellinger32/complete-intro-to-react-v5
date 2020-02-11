import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt me!</h1>
      <Pet name="Lady" animal="Dog" breed="Terrier Cross" />
      <Pet name="Sharon" animal="Rodent" breed="Gerbil" />
      <Pet name="Tracey" animal="Rodent" breed="Gerbil" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
