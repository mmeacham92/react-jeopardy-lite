import React from "react";

class Question extends React.Component {
  render() {
    // find the object in our state.data array that matches the currentQuestionIndex state property that is set by the user clicking a category button
    const question = this.props.data.find(
      (item, i) => i === this.props.currentQuestionIndex
    );
    console.log(question);

    // capitalize the category.title property of our found question object. At first, there is no question, so we need a fallback value, i.e. 'waiting...'
    const category = this.props.capitalizeEachWord(
      question?.category?.title || "waiting..."
    );
    return (
      <div className="question__div">
        <h4 className="question__value">Question Value: {question?.value}</h4>
        <h3 className="category">
          Category: <em>{category}</em>
        </h3>
        <h1 className="question">{question?.question}</h1>

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
          <em>Answer: {question?.answer}</em>
        </h5>
      </div>
    );
  }
}

export default Question;
