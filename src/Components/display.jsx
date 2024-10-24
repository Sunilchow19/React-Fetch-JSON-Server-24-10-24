import Post from "./post";
import Get from "./get";
import { Component } from "react";

class Dis extends Component {
  constructor() {
    super();
    this.state = {
      a: true,
    };
  }

  change = () => {
    this.setState({
      a: !this.state.a,
    });
  };

  render() {
    return (
      <>
        <h3 style={{ color: "red" }}>Please click on "Switch"</h3>

        <h1 onClick={this.change} style={{ cursor: "pointer" }}>
          Switch
        </h1>

        {this.state.a ? <Post /> : <Get />}
      </>
    );
  }
}

export default Dis;
