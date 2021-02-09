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
      // this style object will be assigned to the UserScore component
      scoreStyle: { color: "black" },
    };

    // bind our methods to this object
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.capitalizeEachWord = this.capitalizeEachWord.bind(this);
    this.updateQuestionIndex = this.updateQuestionIndex.bind(this);
    this.resetUserScore = this.resetUserScore.bind(this);
  }

  // updates the state once a category button is selected
  updateQuestionIndex = (index) => {
    this.setState({ currentQuestionIndex: index });
    console.log("index state updated!");
  };

  // resets score state object to 0; will be called upon in UserScore component
  resetUserScore() {
    if (this.state.currentQuestionIndex !== null) {
      alert('cannot reset score during a question');
      return;
    }
    this.setState({ score: 0 });
    console.log('user score reset to 0!');
  }

  // gets 3 random questions from the API and add it to the data array in state
  getNewQuestions() {
    return this.client.getQuestions().then((result) => {
      console.log('current question set: ')
      console.log(result.data);
      this.setState({
        data: result.data,
        currentQuestionIndex: null,
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
    // we will assign an animation to the scoreStyle object depending on if the user answers correctly or incorrectly
    let animation = "";
    if (
      this.checkAnswer(
        this.state.answerText,
        this.state.data[this.state.currentQuestionIndex].answer
      )
    ) {
      newScore =
        this.state.score +
        this.state.data[this.state.currentQuestionIndex].value;
      animation = "correct";
      console.log('correct answer!')
    } else {
      newScore =
        this.state.score -
        this.state.data[this.state.currentQuestionIndex].value;
      animation = "incorrect";
      console.log('incorrect answer!');
    }

    this.setState({
      score: newScore,
      answerText: "",
      currentQuestionIndex: null,
      scoreStyle: { animation: animation, animationDuration: "3s" },
    });

    this.getNewQuestions();
    console.log('retrieving new questions');
    // reset the animation properties on the scoreStyle object
    setTimeout(() => {
      this.setState({ scoreStyle: { animation: "", animationDuration: "" } });
    }, 1000);
  }

  // reassigns the state value of answerText whenever a user types in the input field
  handleChange(e) {
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
        resetUserScore={this.resetUserScore}
        value={this.state.data.value}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        answerText={this.state.answerText}
        answer={this.state.data.answer}
        data={this.state.data}
        capitalizeEachWord={this.capitalizeEachWord}
        currentQuestionIndex={this.state.currentQuestionIndex}
        updateQuestionIndex={this.updateQuestionIndex}
        scoreStyle={this.state.scoreStyle}
      />
    );
  }
}

export default Jeopardy;
