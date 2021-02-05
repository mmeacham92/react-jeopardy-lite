import React, { Component } from "react";

class Display extends Component {
  render() {
    const styleNegative = { color: "red" };
    const styleRegular = {color: 'black'};
    return (
      <div className="jeopardy__container">
        <div className="score__div">
          <h4 className="current__score">
            Score:{" "}
            <span style={this.props.score < 0 ? styleNegative : styleRegular}>
              {this.props.score}
            </span>
          </h4>
          <h4>Question Value: {this.props.value}</h4>
        </div>
        <div className="question__div">
          <h3 className="category">Category: <em>{this.props.category}</em></h3>
          <h1 className="question">{this.props.question}</h1>
        </div>

        <form onSubmit={this.props.handleSubmit}>
          <input
            onChange={this.props.handleChange}
            value={this.props.answerText}
          ></input>
          <button className="answer__button" type="submit">
            Submit Answer
          </button>
        </form>
        {/* {JSON.stringify(this.state.data)} */}
        <h5><em>Answer: {this.props.answer}</em></h5>
      </div>
    );
  }
}

export default Display;
