import React from "react";

class UserScore extends React.Component {
  render() {
    // create two style objects, one for positive and another for negative scores
    const styleNegative = { color: "red" };
    const styleRegular = { color: "black" };
    return (
      <div className="score__div">
        <h4 className="current__score">
          Your Score:{" "}
          <span style={this.props.score < 0 ? styleNegative : styleRegular}>
            {this.props.score}
          </span>
        </h4>
      </div>
    );
  }
}

export default UserScore;
