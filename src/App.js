import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    continents: [
      "America",
      "Europe",
      "Oceania",
      "Africa",
      "Asia"
    ]
  }

  render() {
    return (
      <React.Fragment>
        <nav>
          <ul>
            <li>Continent buttons go here (replace this li with a loop)</li>
          </ul>
        </nav>
        <section>
          Weather widgets go here
        </section>
      </React.Fragment>
    )
  }
}

export default App;
