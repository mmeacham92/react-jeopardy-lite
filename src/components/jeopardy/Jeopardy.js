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
      // data is an array here as we will fetch 3 questions
      data: [],
      score: 0,
      answerText: "",
      // this will be assigned once a user clicks a category button
      currentQuestionIndex: null,
    };

    // bind our methods to this object
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.capitalizeEachWord = this.capitalizeEachWord.bind(this);
    this.updateQuestionIndex = this.updateQuestionIndex.bind(this);
  }

  // updates the state once a category button is selected
  updateQuestionIndex = (index) => {
    this.setState({ currentQuestionIndex: index });
    console.log("index state updated!");
  };

  //gets 3 random questions from the API and add it to the data array in state
  getNewQuestions() {
    return this.client.getQuestions().then((result) => {
      console.log(result.data);
      this.setState({
        data: result.data,
      });
    });
  }

  //when the component mounts, get a the first 3 questions
  componentDidMount() {
    this.getNewQuestions();
  }

  // compares the state value of answerText to the question object's answer value
  checkAnswer(string, answer) {
    return string.toLowerCase().trim() === answer.toLowerCase();
  }

  // checkAnswer runs here, score values are settled, and state is reset to default values
  handleSubmit(e) {
    e.preventDefault();
    if (this.state.currentQuestionIndex === null) return;
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

  // reassigns the state value of answerText whenever a user types in the input field
  handleChange(e) {
    console.log(e.target.value);
    console.log(this.state.selectedCategory);
    this.setState({ answerText: e.target.value });
  }

  // formats a string so that the first letter of each word is capitalized -- will use this for categories
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
