import React from "react";
import "./styles.css";
class MyComponent extends React.Component {
  state = {
    name: "Joseph Rance",
    value: ""
  };
  onChange = e => {
    console.log(e);
    this.setState({
      value: e.target.value
    });
  };
  click() {
    alert("Joe Rance likes using python with tensorflow");
  }
  render() {
    return (
      <div>
        <h1>Hello world!</h1>
        {this.props.color}
        {this.state.name}
      </div>
    );
  }
}
class ScoreComponent extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.student}</h2>
        <h1>{this.props.score}</h1>
      </div>
    );
  }
}
class ParentComponent extends React.Component {
  state = {
    what: "Pratyaksh",
    js: "",
    value: "",
    examScores: [
      {
        student: "Joe",
        score: "0%"
      },
      {
        student: "Pratyaksh",
        score: "100%"
      },
      {
        student: "Hesara",
        score: "20000%"
      }
    ],
    style: {},
    styleAttr: "",
    styleValue: ""
  };
  click = () => {
    this.setState({
      color: this.state.value
    });
  };
  onChange = name => e => {
    this.setState({
      [name]: e.target.value
    });
  };
  addStyle = () => {
    this.setState(state => ({
      style: {
        ...state.style,
        [this.state.styleAttr]: this.state.styleValue
      },
      styleAttr: "",
      styleValue: ""
    }));
  };
  render() {
    return (
      <div style={this.state.style}>
        <input value={this.state.value} onChange={this.onChange} />
        <button onClick={this.click}>Click</button>
        <MyComponent color={this.state.what} />
        {this.state.examScores.map(scoreObject => (
          <ScoreComponent
            score={scoreObject.score}
            student={scoreObject.student}
          />
        ))}
        <input
          value={this.state.styleAttr}
          onChange={this.onChange("styleAttr")}
        />
        <input
          value={this.state.styleValue}
          onChange={this.onChange("styleValue")}
        />
        <button onClick={this.addStyle}>Add style</button>
      </div>
    );
  }
}
export default ParentComponent;
