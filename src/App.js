import React from "react";
import "./styles.css";
import axios from "axios";
import city from "./images/city.jpg";

class App extends React.Component {
  state = {
    advice: ""
  };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { advice } = this.state;

    return (
      <div className="app" style={{ backgroundImage: `url(${city})` }}>
        <div className="card">
          <h1 className="heading">{advice}</h1>
          <button className="button" onClick={this.fetchAdvice}>
            <span> GIVE ME ADVICE</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
