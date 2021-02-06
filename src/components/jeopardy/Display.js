import React, { Component } from "react";

import UserScore from "./UserScore";
import Categories from "./Categories";
import Question from "./Question";

class Display extends Component {
  render() {
    // const styleNegative = { color: "red" };
    // const styleRegular = { color: "black" };
    return (
      <div className="jeopardy__container">
        <UserScore score={this.props.score} />
        <Categories
          data={this.props.data}
          capitalizeEachWord={this.props.capitalizeEachWord}
          updateSelectedCategory={this.props.updateSelectedCategory}
        />
        <Question
          data={this.props.data}
          selectedCategory={this.props.selectedCategory}
          handleSubmit={this.props.handleSubmit}
          handleChange={this.props.handleChange}
        />

        {/* <div className="question__div">
          <h4 className="question__value">
            Question Value: {this.props.value}
          </h4>
          <h3 className="category">
            Category: <em>{this.props.category}</em>
          </h3>
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
        <h5>
          <em>Answer: {this.props.answer}</em>
        </h5> */}

      </div>
    );
  }
}

export default Display;
