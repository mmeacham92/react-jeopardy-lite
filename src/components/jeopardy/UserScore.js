import React from "react";

class UserScore extends React.Component {
  render() {
    const styleNegative = { color: "red" };
    const styleRegular = {color: 'black'};
    return (
      <div className="score__div">
        <h4 className="current__score">
          Score:{" "}
          <span style={this.props.score < 0 ? styleNegative : styleRegular}>
            {this.props.score}
          </span>
        </h4>
      </div>
    );
  }
}

export default UserScore;
