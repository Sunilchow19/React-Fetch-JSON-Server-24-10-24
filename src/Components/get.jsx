import { Component } from "react";

class Get extends Component {
  constructor() {
    super();
    this.state = {
      val: "",
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/profile")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        this.setState({
          val: res.name,
        });
      });
  }

  componentWillUnmount() {
    console.log("Unmounted in GET");
  }

  render() {
    return (
      <>
        <h1>{this.state.val}</h1>
      </>
    );
  }
}

export default Get;
