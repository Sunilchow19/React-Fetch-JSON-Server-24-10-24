import { Component } from "react";

class Post extends Component {
  constructor() {
    super();
    this.state = {
      a: "",
    };

    console.log("Constructor");
  }

  inc = () => {
    this.value = prompt("Enter a value");

    this.setState({
      a: this.value,
    });

    fetch("http://localhost:3000/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: this.value,
      }),
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log("Method");
  };

  componentWillUnmount() {
    console.log("Unmounted in POST");
  }

  render() {
    return (
      <>
        {console.log("Render")}

        <button onClick={this.inc}>Click me</button>
      </>
    );
  }
}

export default Post;
