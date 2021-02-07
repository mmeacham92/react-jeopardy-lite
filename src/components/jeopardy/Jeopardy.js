import React, { Component } from "react";

import Display from "./Display";
//import our service
import JeopardyService from "../../services/jeopardyServices";
class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props) {
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: [],
      score: 0,
      answerText: "",
      currentQuestionIndex: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.capitalizeEachWord = this.capitalizeEachWord.bind(this);
    this.updateQuestionIndex = this.updateQuestionIndex.bind(this);
  }

  updateQuestionIndex = (index) => {
    this.setState({ currentQuestionIndex: index });
    console.log("index state updated!");
  };

  //get a new random question from the API and add it to the data object in state
  getNewQuestions() {
    return this.client.getQuestion().then((result) => {
      console.log(result.data);
      this.setState({
        data: result.data,
      });
    });
  }
  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestions();
  }

  checkAnswer(string, answer) {
    return string.toLowerCase().trim() === answer.toLowerCase();
  }

  handleSubmit(e) {
    e.preventDefault();
    let newScore = 0;
    if (
      this.checkAnswer(
        this.state.answerText,
        this.state.data[this.state.currentQuestionIndex].answer
      )
    )
      newScore =
        this.state.score +
        this.state.data[this.state.currentQuestionIndex].value;
    else
      newScore =
        this.state.score -
        this.state.data[this.state.currentQuestionIndex].value;

    this.setState({
      score: newScore,
      answerText: "",
      currentQuestionIndex: null,
    });

    this.getNewQuestions();
  }

  handleChange(e) {
    console.log(e.target.value);
    console.log(this.state.selectedCategory);
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
    return (
      <Display
        score={this.state.score}
        value={this.state.data.value}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        answerText={this.state.answerText}
        answer={this.state.data.answer}
        data={this.state.data}
        capitalizeEachWord={this.capitalizeEachWord}
        currentQuestionIndex={this.state.currentQuestionIndex}
        updateQuestionIndex={this.updateQuestionIndex}
      />
    );
  }
}

export default Jeopardy;
