import React, { Component } from "react";

import UserScore from "./UserScore";
import Categories from "./Categories";
import Question from "./Question";

// our stateless display component :)
class Display extends Component {
  render() {
    return (
      <div className="jeopardy__container">
        <UserScore
          score={this.props.score}
          resetUserScore={this.props.resetUserScore}
          scoreStyle={this.props.scoreStyle}
          currentQuestionIndex={this.props.currentQuestionIndex}
        />
        <Categories
          data={this.props.data}
          capitalizeEachWord={this.props.capitalizeEachWord}
          updateQuestionIndex={this.props.updateQuestionIndex}
          currentQuestionIndex={this.props.currentQuestionIndex}
          changeScoreColor={this.props.changeScoreColor}
        />

        <Question
          data={this.props.data}
          currentQuestionIndex={this.props.currentQuestionIndex}
          handleSubmit={this.props.handleSubmit}
          handleChange={this.props.handleChange}
          answerText={this.props.answerText}
          capitalizeEachWord={this.props.capitalizeEachWord}
        />
      </div>
    );
  }
}

export default Display;
