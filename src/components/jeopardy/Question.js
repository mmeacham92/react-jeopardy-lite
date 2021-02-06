import React from "react";

class Question extends React.Component {
  render() {
      const question = this.props.data.filter(item => item.category.title === this.props.selectedCategory.title)
    return (
      <div className="question__div">
        <h4 className="question__value">Question Value: {question.value}</h4>
        <h3 className="category">
          Category: <em>{this.props.category}</em>
        </h3>
        <h1 className="question">{this.props.question}</h1>

        <form onSubmit={this.props.handleSubmit}>
          <input
            onChange={this.props.handleChange}
            value={this.props.answerText}
          ></input>
          <button className="answer__button" type="submit">
            Submit Answer
          </button>
        </form>
        <h5><em>Answer: {this.props.answer}</em></h5>
      </div>
    );
  }
}

export default Question
