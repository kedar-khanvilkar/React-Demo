import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.value,
    flag: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  handleIncrement = product => {
    console.log(product);
    // this.sttateate.count++;
    // this.setState({ count: this.state.count });
    this.setState((prevState, prevProps) => ({
      ...prevState,
      count: prevState.count + 1
    }));
  };

  //   doHandleIncrement = () => {
  //     this.handleIncrement({ id: 1 });
  //   };

  render() {
    console.log("props", this.props);
    return (
      <div>
        <span className="badge">{this.state.count}</span>
        <button onClick={() => this.handleIncrement({ id: 1 })} className="btn">
          Click
        </button>
      </div>
    );
  }
}

export default Counter;
