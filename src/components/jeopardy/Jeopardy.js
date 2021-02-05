import React, { Component } from "react";
//import our service
import JeopardyService from "../../jeopardyService";
class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props) {
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: {},
      score: 0,
      answerText: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then((result) => {
      this.setState({
        data: result.data[0],
      });
    });
  }
  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }

  checkAnswer(string, answer) {
    return string.toLowerCase().trim() === answer.toLowerCase();
  }

  handleSubmit(e) {
    e.preventDefault();
    let newScore = 0;
    if (this.checkAnswer(this.state.answerText, this.state.data.answer))
      newScore = this.state.score + this.state.data.value;
    else newScore = this.state.score - this.state.data.value;

    this.setState({ score: newScore, answerText: "" });
    this.getNewQuestion();
  }

  handleChange(e) {
    this.setState({ answerText: e.target.value });
  }

  //display the results on the screen
  render() {
    return (
      <div>
        <h4>Score: {this.state.score}</h4>
        <h4>Question Value: {this.state.data.value}</h4>
        <h3>{this.state.data.question}</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={this.state.answerText}
          ></input>
          <button type="submit">Submit Answer</button>
        </form>
        {JSON.stringify(this.state.data)}
      </div>
    );
  }
}
export default Jeopardy;
