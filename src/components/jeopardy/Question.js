import React from "react";

class Question extends React.Component {
  render() {
    // find the object in our state.data array that matches the currentQuestionIndex state property that is set by the user clicking a category button
    const question = this.props.data.find(
      (item, i) => i === this.props.currentQuestionIndex
    );
    console.log("current question: ");
    console.log(question);

    // capitalize the category.title property of our found question object. At first, there is no question, so we need a fallback value, i.e. 'waiting...'
    const category = this.props.capitalizeEachWord(
      question?.category?.title || "waiting..."
    );

    // render an empty div if a category hasn't been selected
    if (this.props.currentQuestionIndex === null) return <div></div>;

    return (
      <div className="question__background">
        <div className="question__div">
          <h4 className="question__value">Question Value: {question?.value}</h4>
          <h2 className="category">
            <em>{category}</em>
          </h2>
          <h1 className="question">{question?.question}</h1>

          <form onSubmit={this.props.handleSubmit}>
            <input
              onChange={this.props.handleChange}
              value={this.props.answerText}
              className="user__answer"
            ></input>
            <button className="answer__button" type="submit">
              Submit Answer
            </button>
          </form>

          <h5>
            <em>Answer: {question?.answer}</em>
          </h5>
        </div>
      </div>
    );
  }
}

export default Question;
