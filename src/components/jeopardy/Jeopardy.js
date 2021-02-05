import React, { Component } from "react";

import Display from "./Display";
//import our service
import JeopardyService from "../../jeopardyServices";
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
    this.capitalizeEachWord = this.capitalizeEachWord.bind(this);
  }
  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then((result) => {
      console.log(result);
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

    setTimeout(() => {
      this.setState({ score: newScore, answerText: "" });
    }, 250);
    
    this.getNewQuestion();
  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState({ answerText: e.target.value });
  }

  capitalizeEachWord(str) {
    const array = str.split(" ");
    return array
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  }

  //display the results on the screen
  render() {
    let category = this.state.data.category && this.state.data.category.title;
    if (category) category = this.capitalizeEachWord(category);
    return (
      <Display
        category={category}
        score={this.state.score}
        value={this.state.data.value}
        question={this.state.data.question}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        answerText={this.state.answerText}
        answer={this.state.data.answer}
      />
    );
  }
}

export default Jeopardy;
