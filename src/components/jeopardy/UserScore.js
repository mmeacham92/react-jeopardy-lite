import React from "react";

class UserScore extends React.Component {
  render() {
    // create two style objects, one for positive and another for negative scores
    // const styleNegative = { color: "red" };
    // const styleRegular = { color: "black" };

    return (
      <div className="score__div">
        <h4 className="current__score">
          Your Score:{" "}
          <span
            // style={this.props.score >= 0 ? styleRegular : styleNegative}
            style={this.props.scoreStyle}
            className="user__score"
          >
            {this.props.score}
          </span>
        </h4>
        <button
          onClick={this.props.resetUserScore}
          className={this.props.currentQuestionIndex === null ? "" : "hide"}
        >
          Reset Score
        </button>
      </div>
    );
  }
}

export default UserScore;
